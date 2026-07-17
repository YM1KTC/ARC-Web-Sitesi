import { getRssString } from '@astrojs/rss';
import type { APIRoute } from 'astro';

import { SITE, APP_BLOG } from 'astrowind:config';
import { fetchPosts } from '~/utils/blog';
import { getPermalink } from '~/utils/permalinks';

export const GET: APIRoute = async ({ params }) => {
  if (!APP_BLOG.isEnabled || !APP_BLOG.category.isEnabled) {
    return new Response(null, { status: 404, statusText: 'Not found' });
  }

  const categorySlug = params.category;
  const posts = await fetchPosts();
  const categoryPosts = posts.filter((post) => post.category?.slug === categorySlug);

  if (categoryPosts.length === 0) {
    return new Response(null, { status: 404, statusText: 'Not found' });
  }

  const categoryTitle = categoryPosts[0].category?.title ?? categorySlug;

  const rss = await getRssString({
    title: `${SITE.name} - ${categoryTitle}`,
    description: `${categoryTitle} kategorisindeki blog yazıları`,
    site: import.meta.env.SITE,

    items: categoryPosts.map((post) => ({
      link: getPermalink(post.permalink, 'post'),
      title: post.title,
      description: post.excerpt,
      pubDate: post.publishDate,
    })),

    trailingSlash: SITE.trailingSlash,
  });

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};
