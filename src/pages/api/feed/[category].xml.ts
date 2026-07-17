import rss from '@astrojs/rss';

import { SITE } from 'astrowind:config';
import { fetchPosts } from '~/utils/blog';
import { getPermalink } from '~/utils/permalinks';

export const prerender = true;

export async function getStaticPaths() {
  const posts = await fetchPosts();

  const categoryMap = new Map<string, string>();
  posts.forEach((post) => {
    if (post.category) {
      categoryMap.set(post.category.slug, post.category.title);
    }
  });

  return Array.from(categoryMap.entries()).map(([slug, title]) => ({
    params: { category: slug },
    props: { categoryTitle: title, categorySlug: slug },
  }));
}

export async function GET(context) {
  const { categoryTitle, categorySlug } = context.props as { categoryTitle: string; categorySlug: string };

  const posts = await fetchPosts();
  const filteredPosts = posts.filter((post) => post.category?.slug === categorySlug).slice(0, 20);

  return rss({
    title: `ARC - ${categoryTitle} Blog Yazıları`,
    description: `Amatör Radyocular Derneği - ${categoryTitle} kategorisindeki blog yazıları`,
    site: import.meta.env.SITE,

    items: filteredPosts.map((post) => ({
      link: getPermalink(post.permalink, 'post'),
      title: post.title,
      description: post.excerpt,
      pubDate: post.publishDate,
    })),

    trailingSlash: SITE.trailingSlash,
  });
}
