#!/usr/bin/env node
/**
 * One-shot migration: src/data/post/*.md -> Sanity.
 *
 * Requires env: PUBLIC_SANITY_PROJECT_ID, PUBLIC_SANITY_DATASET, SANITY_API_TOKEN.
 * Idempotent: uses deterministic _id (`post.<slug>`) so re-runs upsert.
 */
import 'dotenv/config';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createClient } from '@sanity/client';
import { JSDOM } from 'jsdom';
import { htmlToBlocks } from '@sanity/block-tools';
import { Schema } from '@sanity/schema';
import matter from 'gray-matter';
import MarkdownIt from 'markdown-it';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const POSTS_DIR = path.join(ROOT, 'src', 'data', 'post');
const PUBLIC_DIR = path.join(ROOT, 'public');

const projectId = process.env.PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.PUBLIC_SANITY_DATASET ?? 'production';
const token = process.env.SANITY_API_TOKEN;

if (!projectId || !token) {
  console.error('Missing PUBLIC_SANITY_PROJECT_ID or SANITY_API_TOKEN');
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: '2024-01-01',
  token,
  useCdn: false,
});

const md = new MarkdownIt({ html: true, linkify: true, typographer: true });

// Minimal schema mirroring src/sanity/schemas/post.ts so htmlToBlocks knows valid types
const blockSchema = Schema.compile({
  name: 'migration',
  types: [
    {
      name: 'post',
      type: 'document',
      fields: [
        {
          name: 'body',
          type: 'array',
          of: [
            {
              type: 'block',
              styles: [
                { title: 'Normal', value: 'normal' },
                { title: 'H2', value: 'h2' },
                { title: 'H3', value: 'h3' },
                { title: 'H4', value: 'h4' },
                { title: 'Quote', value: 'blockquote' },
              ],
              lists: [
                { title: 'Bullet', value: 'bullet' },
                { title: 'Number', value: 'number' },
              ],
              marks: {
                decorators: [
                  { title: 'Strong', value: 'strong' },
                  { title: 'Emphasis', value: 'em' },
                  { title: 'Code', value: 'code' },
                ],
                annotations: [
                  {
                    name: 'link',
                    type: 'object',
                    fields: [{ name: 'href', type: 'url' }],
                  },
                ],
              },
            },
            { type: 'image' },
          ],
        },
      ],
    },
  ],
});

const blockType = blockSchema
  .get('post')
  .fields.find((f) => f.name === 'body')
  .type;

const imageCache = new Map(); // local path -> Sanity asset _id

const uploadImageFromLocal = async (relativePath) => {
  if (!relativePath) return null;
  if (imageCache.has(relativePath)) return imageCache.get(relativePath);

  const cleaned = relativePath.startsWith('/') ? relativePath.slice(1) : relativePath;
  const filePath = path.join(PUBLIC_DIR, cleaned);

  try {
    await fs.access(filePath);
  } catch {
    console.warn(`  ! image not found: ${relativePath}`);
    imageCache.set(relativePath, null);
    return null;
  }

  const buffer = await fs.readFile(filePath);
  const filename = path.basename(filePath);
  const asset = await client.assets.upload('image', buffer, { filename });
  imageCache.set(relativePath, asset._id);
  return asset._id;
};

const slugFromFilename = (filename) => filename.replace(/\.mdx?$/, '').replace(/\.mdoc$/, '');

const markdownToBlocks = async (markdown) => {
  const html = md.render(markdown);
  const blocks = htmlToBlocks(html, blockType, {
    parseHtml: (input) => new JSDOM(input).window.document,
    rules: [
      {
        deserialize(el, next, block) {
          if (el.tagName?.toLowerCase() !== 'img') return undefined;
          const src = el.getAttribute('src');
          if (!src) return undefined;
          // Defer to a placeholder; we'll resolve images after, before publishing
          return block({
            _type: 'image',
            _sanityAsset: src,
            alt: el.getAttribute('alt') ?? '',
          });
        },
      },
    ],
  });

  // Resolve _sanityAsset placeholders by uploading and rewriting
  for (const blk of blocks) {
    if (blk._type === 'image' && blk._sanityAsset) {
      const assetId = await uploadImageFromLocal(blk._sanityAsset);
      if (assetId) {
        blk.asset = { _type: 'reference', _ref: assetId };
      }
      delete blk._sanityAsset;
    }
  }

  return blocks;
};

const migrateOne = async (filename) => {
  const slug = slugFromFilename(filename);
  const raw = await fs.readFile(path.join(POSTS_DIR, filename), 'utf8');
  const { data, content } = matter(raw);

  console.log(`→ ${slug}`);

  let coverAssetId = null;
  if (data.image) {
    coverAssetId = await uploadImageFromLocal(data.image);
  }

  const body = await markdownToBlocks(content);

  const categories = Array.isArray(data.categories)
    ? data.categories
    : data.categories
      ? [data.categories]
      : [];

  const tags = Array.isArray(data.tags) ? data.tags : [];

  const doc = {
    _id: `post.${slug}`,
    _type: 'post',
    title: data.title,
    slug: { _type: 'slug', current: slug },
    date: data.date ? new Date(data.date).toISOString() : new Date().toISOString(),
    author: data.author ?? 'TA1SPH',
    excerpt: data.excerpt ?? null,
    categories,
    tags,
    body,
    status: 'published',
    ...(coverAssetId
      ? { image: { _type: 'image', asset: { _type: 'reference', _ref: coverAssetId } } }
      : {}),
  };

  await client.createOrReplace(doc);
};

const main = async () => {
  const files = (await fs.readdir(POSTS_DIR)).filter((f) => /\.(md|mdoc)$/.test(f));
  console.log(`Found ${files.length} posts to migrate.\n`);

  let ok = 0;
  let fail = 0;
  for (const file of files) {
    try {
      await migrateOne(file);
      ok++;
    } catch (err) {
      fail++;
      console.error(`  ✗ ${file}: ${err.message}`);
    }
  }
  console.log(`\nDone: ${ok} ok, ${fail} failed.`);
};

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
