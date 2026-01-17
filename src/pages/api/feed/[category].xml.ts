import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

// Helper to slugify Turkish categories
function slugify(str: string): string {
  return str
    .toLowerCase()
    .replace(/ş/g, 's')
    .replace(/ı/g, 'i')
    .replace(/ğ/g, 'g')
    .replace(/ü/g, 'u')
    .replace(/ö/g, 'o')
    .replace(/ç/g, 'c')
    .replace(/[^a-z0-9]+/g, '-');
}

export async function getStaticPaths() {
  const posts = await getCollection('post');

  // Extract all unique categories and create slugified paths
  const categoryMap = new Map<string, string>();
  posts.forEach(post => {
    if (post.data.categories) {
      post.data.categories.forEach(cat => {
        if (!categoryMap.has(cat)) {
          categoryMap.set(cat, slugify(cat));
        }
      });
    }
    if (post.data.category) {
      if (!categoryMap.has(post.data.category)) {
        categoryMap.set(post.data.category, slugify(post.data.category));
      }
    }
  });

  // Return paths with both original category name and slug
  return Array.from(categoryMap.entries()).map(([category, slug]) => ({
    params: { category: slug },
    props: { originalCategory: category },
  }));
}

export async function GET(context) {
  const posts = await getCollection('post');

  // Get the original category name from props
  const originalCategory = context.props.originalCategory as string;

  // Filter posts by category
  const filteredPosts = posts
    .filter(post =>
      post.data.categories?.includes(originalCategory) || post.data.category === originalCategory
    )
    .filter(post => post.data.publishDate) // Only include posts with publishDate
    .sort((a, b) => {
      const aDate = a.data.publishDate || new Date(0);
      const bDate = b.data.publishDate || new Date(0);
      return bDate.valueOf() - aDate.valueOf();
    })
    .slice(0, 20); // Limit to 20 most recent posts

  return rss({
    title: `ARC - ${originalCategory} Blog Yazıları`,
    description: `Amatör Radyocular Derneği - ${originalCategory} kategorisindeki blog yazıları`,
    site: context.site?.toString() || 'https://radio.org.tr',
    items: filteredPosts.map(post => ({
      title: post.data.title,
      pubDate: post.data.publishDate!,
      description: post.data.excerpt || '',
      link: `/blog/${post.slug}/`,
    })),
  });
}
