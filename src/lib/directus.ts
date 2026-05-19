import { createDirectus, rest, readItems, readItem } from '@directus/sdk';

export type DirectusPost = {
  id: number;
  title: string;
  slug: string;
  date: string;
  author: string;
  categories: string[];
  tags: string[];
  layout: string;
  image: string | { id: string } | null;
  excerpt: string | null;
  body: string;
  sort: number | null;
  status: 'published' | 'draft';
  // Related images via Posts Files junction
  posts_files?: Array<{
    directus_files_id: {
      id: string;
      filename_download: string;
      uploaded_on: string;
      filesize: number;
      type: string;
    };
  }>;
};

const DIRECTUS_URL = 'https://directus.radio.org.tr';

const directus = createDirectus(DIRECTUS_URL)
  .with(rest());

export const directusInstance = directus;

// Convert Directus image to asset URL
const getImageUrl = (image: string | { id: string } | null): string | null => {
  if (!image) return null;
  if (typeof image === 'string') {
    // If it's already a URL, return as is
    if (image.startsWith('http')) return image;
    // If it's a UUID, convert to asset URL
    return `${DIRECTUS_URL}/assets/${image}`;
  }
  // If it's an object with id, convert to asset URL
  if (image.id) {
    return `${DIRECTUS_URL}/assets/${image.id}`;
  }
  return null;
};

// Get full asset URL with options
const getAssetUrl = (fileId: string, options?: { width?: number; height?: number; quality?: number }): string => {
  const params = new URLSearchParams();
  if (options?.width) params.set('width', String(options.width));
  if (options?.height) params.set('height', String(options.height));
  if (options?.quality) params.set('quality', String(options.quality));
  const queryString = params.toString();
  return `${DIRECTUS_URL}/assets/${fileId}${queryString ? '?' + queryString : ''}`;
};

export const getPosts = async () => {
  const posts = await directus.request(
    readItems('posts', {
      fields: ['*', { posts_files: ['*', { directus_files_id: ['*'] }] }],
      filter: {
        status: { _eq: 'published' }
      },
      sort: ['-date']
    })
  );

  // Convert image UUIDs to URLs and process related images
  return posts.map((post: DirectusPost) => ({
    ...post,
    image: getImageUrl(post.image),
    gallery: post.posts_files?.map(pf => ({
      id: pf.directus_files_id.id,
      url: getAssetUrl(pf.directus_files_id.id),
      filename: pf.directus_files_id.filename_download,
      type: pf.directus_files_id.type
    })) || []
  })) as DirectusPost;
};

export const getPostBySlug = async (slug: string) => {
  const posts = await directus.request(
    readItems('posts', {
      fields: ['*', { posts_files: ['*', { directus_files_id: ['*'] }] }],
      filter: {
        slug: { _eq: slug },
        status: { _eq: 'published' }
      }
    })
  );

  if (!posts || posts.length === 0) return undefined;

  const post = posts[0] as DirectusPost;
  // Convert image UUID to URL and process gallery
  return {
    ...post,
    image: getImageUrl(post.image),
    gallery: post.posts_files?.map(pf => ({
      id: pf.directus_files_id.id,
      url: getAssetUrl(pf.directus_files_id.id),
      filename: pf.directus_files_id.filename_download,
      type: pf.directus_files_id.type
    })) || []
  } as DirectusPost;
};

export const getPostById = async (id: number) => {
  const post = await directus.request(
    readItem('posts', id, {
      fields: ['*']
    })
  );
  return post as DirectusPost;
};

export const getPostsByCategory = async (category: string) => {
  const posts = await directus.request(
    readItems('posts', {
      fields: ['*', { posts_files: ['*', { directus_files_id: ['*'] }] }],
      filter: {
        status: { _eq: 'published' },
        categories: { _contains: category }
      },
      sort: ['-date']
    })
  );

  // Convert image UUIDs to URLs and process gallery
  return posts.map((post: DirectusPost) => ({
    ...post,
    image: getImageUrl(post.image),
    gallery: post.posts_files?.map(pf => ({
      id: pf.directus_files_id.id,
      url: getAssetUrl(pf.directus_files_id.id),
      filename: pf.directus_files_id.filename_download,
      type: pf.directus_files_id.type
    })) || []
  })) as DirectusPost[];
};

export const getPostsByTag = async (tag: string) => {
  const posts = await directus.request(
    readItems('posts', {
      fields: ['*', { posts_files: ['*', { directus_files_id: ['*'] }] }],
      filter: {
        status: { _eq: 'published' },
        tags: { _contains: tag }
      },
      sort: ['-date']
    })
  );

  // Convert image UUIDs to URLs and process gallery
  return posts.map((post: DirectusPost) => ({
    ...post,
    image: getImageUrl(post.image),
    gallery: post.posts_files?.map(pf => ({
      id: pf.directus_files_id.id,
      url: getAssetUrl(pf.directus_files_id.id),
      filename: pf.directus_files_id.filename_download,
      type: pf.directus_files_id.type
    })) || []
  })) as DirectusPost[];
};
