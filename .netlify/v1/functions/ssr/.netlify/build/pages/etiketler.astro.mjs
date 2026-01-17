import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_BfDhyAjM.mjs';
import 'kleur/colors';
import { $ as $$PageLayout } from '../chunks/PageLayout_CDwIBOQs.mjs';
import { f as fetchPosts } from '../chunks/blog_J6XM7OAu.mjs';
import { T as TAG_BASE } from '../chunks/permalinks_BMxSf01e.mjs';
export { renderers } from '../renderers.mjs';

const prerender = true;
const $$Etiketler = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await fetchPosts();
  const tagsMap = /* @__PURE__ */ new Map();
  posts.forEach((post) => {
    if (post.tags && Array.isArray(post.tags)) {
      post.tags.forEach((tag) => {
        const tagSlug = tag.slug;
        if (tagsMap.has(tagSlug)) {
          tagsMap.get(tagSlug).count += 1;
        } else {
          tagsMap.set(tagSlug, {
            title: tag.title,
            slug: tagSlug,
            count: 1
          });
        }
      });
    }
  });
  const tags = Array.from(tagsMap.values()).sort((a, b) => {
    if (b.count !== a.count) {
      return b.count - a.count;
    }
    return a.title.localeCompare(b.title, "tr");
  });
  const metadata = {
    title: "\u{1F3F7}\uFE0F Etiketler",
    description: "Amat\xF6r radyo blog etiketlerini g\xF6r\xFCnt\xFCleyin - 73 de YM1KTC",
    robots: {
      index: true,
      follow: true
    }
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="px-4 md:px-6 py-12 sm:py-16 lg:py-20 mx-auto max-w-6xl"> <div class="mb-8 md:mb-16 text-center"> <h1 class="text-3xl md:text-4xl font-bold leading-tighter tracking-tighter mb-4 font-heading">
🏷️ Etiketler
</h1> <p class="text-muted text-lg">
📡 Amatör radyo blog yazılarımızı etiketlere göre keşfedin - QSL!
</p> </div> <div class="flex flex-wrap gap-3 justify-center"> ${tags.map((tag) => renderTemplate`<a${addAttribute(`/${TAG_BASE}/${tag.slug}`, "href")} class="inline-flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-800 dark:hover:text-primary-200 transition-colors duration-200 text-sm font-medium"> <span class="mr-2">${tag.title}</span> <span class="inline-flex items-center justify-center w-5 h-5 text-xs font-semibold text-white bg-primary-600 rounded-full"> ${tag.count} </span> </a>`)} </div> ${tags.length === 0 && renderTemplate`<div class="text-center py-12"> <p class="text-muted text-lg">🏷️ Henüz hiç etiket bulunmamaktadır. QRT!</p> </div>`} <!-- Popular Tags Section --> ${tags.length > 0 && renderTemplate`<div class="mt-16"> <h2 class="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">
📻 Popüler Etiketler
</h2> <div class="grid gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-3"> ${tags.slice(0, 6).map((tag) => renderTemplate`<div class="flex justify-between items-center p-4 bg-white dark:bg-slate-900 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-200"> <div> <h3 class="font-semibold text-gray-900 dark:text-white"> <a${addAttribute(`/${TAG_BASE}/${tag.slug}`, "href")} class="hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"> ${tag.title} </a> </h3> <p class="text-sm text-muted mt-1"> ${tag.count} ${tag.count === 1 ? "yaz\u0131" : "yaz\u0131"} </p> </div> <div class="flex items-center justify-center w-8 h-8 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 rounded-full text-sm font-semibold"> ${tag.count} </div> </div>`)} </div> </div>`} </section> ` })}`;
}, "/Users/bugracanata/Developer/[Telsiz]/ARC-Web-Sitesi/src/pages/etiketler.astro", void 0);

const $$file = "/Users/bugracanata/Developer/[Telsiz]/ARC-Web-Sitesi/src/pages/etiketler.astro";
const $$url = "/etiketler";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Etiketler,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
