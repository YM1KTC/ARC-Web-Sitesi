import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_BfDhyAjM.mjs';
import 'kleur/colors';
import { $ as $$PageLayout } from '../chunks/PageLayout_CDwIBOQs.mjs';
import { f as fetchPosts } from '../chunks/blog_J6XM7OAu.mjs';
import { C as CATEGORY_BASE } from '../chunks/permalinks_BMxSf01e.mjs';
export { renderers } from '../renderers.mjs';

const prerender = true;
const $$Kategoriler = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await fetchPosts();
  const categoriesMap = /* @__PURE__ */ new Map();
  posts.forEach((post) => {
    if (post.category) {
      const categorySlug = post.category.slug;
      if (categoriesMap.has(categorySlug)) {
        categoriesMap.get(categorySlug).count += 1;
      } else {
        categoriesMap.set(categorySlug, {
          title: post.category.title,
          slug: categorySlug,
          count: 1
        });
      }
    }
  });
  const categories = Array.from(categoriesMap.values()).sort((a, b) => {
    if (b.count !== a.count) {
      return b.count - a.count;
    }
    return a.title.localeCompare(b.title, "tr");
  });
  const metadata = {
    title: "\u{1F4FB} Kategoriler",
    description: "Amat\xF6r radyo blog kategorilerini g\xF6r\xFCnt\xFCleyin - 73 de YM1KTC",
    robots: {
      index: true,
      follow: true
    }
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="px-4 md:px-6 py-12 sm:py-16 lg:py-20 mx-auto max-w-4xl"> <div class="mb-8 md:mb-16 text-center"> <h1 class="text-3xl md:text-4xl font-bold leading-tighter tracking-tighter mb-4 font-heading">
📻 Kategoriler
</h1> <p class="text-muted text-lg">
📡 Amatör radyo blog yazılarımızı kategorilere göre keşfedin - QSL!
</p> </div> <div class="grid gap-6 md:gap-8"> ${categories.map((category) => renderTemplate`<div class="flex flex-col sm:flex-row sm:justify-between sm:items-center p-6 bg-white dark:bg-slate-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-200"> <div class="mb-4 sm:mb-0"> <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-2"> <a${addAttribute(`/${CATEGORY_BASE}/${category.slug}`, "href")} class="hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"> ${category.title} </a> </h2> <p class="text-muted text-sm"> ${category.count} ${category.count === 1 ? "yaz\u0131" : "yaz\u0131"} </p> </div> <div class="flex items-center"> <a${addAttribute(`/${CATEGORY_BASE}/${category.slug}`, "href")} class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-md hover:bg-primary-700 transition-colors duration-200">
📝 Yazıları Görüntüle
<svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </a> </div> </div>`)} </div> ${categories.length === 0 && renderTemplate`<div class="text-center py-12"> <p class="text-muted text-lg">📻 Henüz hiç kategori bulunmamaktadır. QRT!</p> </div>`} </section> ` })}`;
}, "/Users/bugracanata/Developer/[Telsiz]/ARC-Web-Sitesi/src/pages/kategoriler.astro", void 0);

const $$file = "/Users/bugracanata/Developer/[Telsiz]/ARC-Web-Sitesi/src/pages/kategoriler.astro";
const $$url = "/kategoriler";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Kategoriler,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
