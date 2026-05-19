import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { toHTML, type PortableTextHtmlComponents } from '@portabletext/to-html';
import type { PortableTextBlock } from '@portabletext/types';

const projectId =
  import.meta.env.PUBLIC_SANITY_PROJECT_ID ?? process.env.PUBLIC_SANITY_PROJECT_ID;
const dataset =
  import.meta.env.PUBLIC_SANITY_DATASET ?? process.env.PUBLIC_SANITY_DATASET ?? 'production';
const token = import.meta.env.SANITY_API_TOKEN ?? process.env.SANITY_API_TOKEN;

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion: '2024-01-01',
  useCdn: !token,
  token,
});

const builder = imageUrlBuilder(sanityClient);
export const urlForImage = (source: unknown) => builder.image(source as never);

export type SanityImageRef = {
  asset?: { _ref?: string; url?: string };
  alt?: string;
};

export type SanityPost = {
  _id: string;
  title: string;
  slug: { current: string };
  date: string;
  author?: string;
  categories?: string[];
  tags?: string[];
  excerpt?: string;
  image?: SanityImageRef | null;
  body?: PortableTextBlock[];
  status?: 'published' | 'draft';
};

const postProjection = `{
  _id,
  title,
  slug,
  date,
  author,
  categories,
  tags,
  excerpt,
  image,
  body,
  status
}`;

export const getPosts = async (): Promise<SanityPost[]> => {
  return sanityClient.fetch(
    `*[_type == "post" && status == "published"] | order(date desc) ${postProjection}`
  );
};

export const getPostBySlug = async (slug: string): Promise<SanityPost | null> => {
  return sanityClient.fetch(
    `*[_type == "post" && slug.current == $slug && status == "published"][0] ${postProjection}`,
    { slug }
  );
};

const escapeHtml = (s: string): string =>
  s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const youtubeIdFromUrl = (url: string): string | null => {
  if (!url) return null;
  try {
    const u = new URL(url);
    if (u.hostname === 'youtu.be') return u.pathname.slice(1) || null;
    if (u.hostname.includes('youtube.com')) {
      if (u.pathname === '/watch') return u.searchParams.get('v');
      const m = u.pathname.match(/^\/(embed|shorts)\/([^/]+)/);
      if (m) return m[2];
    }
  } catch {
    return null;
  }
  return null;
};

const renderImage = (
  value: { asset?: unknown; alt?: string; caption?: string; alignment?: string } | undefined
): string => {
  if (!value?.asset) return '';
  const url = urlForImage(value).width(1200).fit('max').auto('format').url();
  const alt = escapeHtml(value.alt ?? '');
  const caption = value.caption ? escapeHtml(value.caption) : '';
  const alignment = value.alignment ?? 'full';
  const img = `<img src="${url}" alt="${alt}" loading="lazy" />`;
  if (!caption && alignment === 'full') return img;
  return `<figure class="align-${alignment}">${img}${
    caption ? `<figcaption>${caption}</figcaption>` : ''
  }</figure>`;
};

const portableTextComponents: Partial<PortableTextHtmlComponents> = {
  types: {
    image: ({ value }) => renderImage(value),
    inlineImage: ({ value }) => renderImage(value),
    youtube: ({ value }) => {
      const id = youtubeIdFromUrl(value?.url ?? '');
      if (!id) return '';
      const src = `https://www.youtube-nocookie.com/embed/${id}`;
      return `<div class="aspect-video"><iframe src="${src}" title="YouTube video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy" frameborder="0" style="width:100%;height:100%"></iframe></div>`;
    },
    code: ({ value }) => {
      const code = escapeHtml(value?.code ?? '');
      const lang = value?.language ?? 'text';
      return `<pre><code class="language-${lang}">${code}</code></pre>`;
    },
  },
  marks: {
    link: ({ value, children }) => {
      const href = value?.href ?? '#';
      const isExternal = /^https?:/.test(href);
      const rel = isExternal ? ' rel="noopener noreferrer" target="_blank"' : '';
      return `<a href="${href}"${rel}>${children}</a>`;
    },
  },
};

export const portableTextToHtml = (blocks?: PortableTextBlock[]): string => {
  if (!blocks || blocks.length === 0) return '';
  return toHTML(blocks, { components: portableTextComponents });
};

export const imageUrlFromRef = (image: SanityImageRef | null | undefined): string | null => {
  if (!image?.asset) return null;
  return urlForImage(image).auto('format').url();
};
