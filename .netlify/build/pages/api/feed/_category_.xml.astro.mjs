import rss from '@astrojs/rss';
import { g as getCollection } from '../../../chunks/_astro_content_BsTdlqxn.mjs';
export { renderers } from '../../../renderers.mjs';

function slugify(str) {
  return str.toLowerCase().replace(/ş/g, "s").replace(/ı/g, "i").replace(/ğ/g, "g").replace(/ü/g, "u").replace(/ö/g, "o").replace(/ç/g, "c").replace(/[^a-z0-9]+/g, "-");
}
async function getStaticPaths() {
  const posts = await getCollection("post");
  const categoryMap = /* @__PURE__ */ new Map();
  posts.forEach((post) => {
    if (post.data.categories) {
      post.data.categories.forEach((cat) => {
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
  return Array.from(categoryMap.entries()).map(([category, slug]) => ({
    params: { category: slug },
    props: { originalCategory: category }
  }));
}
async function GET(context) {
  const posts = await getCollection("post");
  const originalCategory = context.props.originalCategory;
  const filteredPosts = posts.filter(
    (post) => post.data.categories?.includes(originalCategory) || post.data.category === originalCategory
  ).filter((post) => post.data.publishDate).sort((a, b) => {
    const aDate = a.data.publishDate || /* @__PURE__ */ new Date(0);
    const bDate = b.data.publishDate || /* @__PURE__ */ new Date(0);
    return bDate.valueOf() - aDate.valueOf();
  }).slice(0, 20);
  return rss({
    title: `ARC - ${originalCategory} Blog Yazıları`,
    description: `Amatör Radyocular Derneği - ${originalCategory} kategorisindeki blog yazıları`,
    site: context.site?.toString() || "https://radio.org.tr",
    items: filteredPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.publishDate,
      description: post.data.excerpt || "",
      link: `/blog/${post.slug}/`
    }))
  });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  getStaticPaths
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
