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

const portableTextComponents: Partial<PortableTextHtmlComponents> = {
  types: {
    image: ({ value }) => {
      if (!value?.asset) return '';
      const url = urlForImage(value).width(1200).fit('max').auto('format').url();
      const alt = value?.alt ?? '';
      return `<img src="${url}" alt="${alt}" loading="lazy" />`;
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
