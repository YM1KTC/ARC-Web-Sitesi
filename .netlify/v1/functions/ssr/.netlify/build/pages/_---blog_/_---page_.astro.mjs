import { e as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_BfDhyAjM.mjs';
import 'kleur/colors';
import { $ as $$PageLayout } from '../../chunks/PageLayout_CDwIBOQs.mjs';
import { $ as $$Headline, a as $$List, b as $$Pagination } from '../../chunks/Pagination_CSLw7mkX.mjs';
import { e as getStaticPathsBlogList, h as blogListRobots } from '../../chunks/blog_J6XM7OAu.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://www.radio.org.tr");
const prerender = true;
const getStaticPaths = async ({ paginate }) => {
  return await getStaticPathsBlogList({ paginate });
};
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { page } = Astro2.props;
  const currentPage = page.currentPage ?? 1;
  const metadata = {
    title: `\u{1F4FB} Blog${currentPage > 1 ? ` \u2014 Sayfa ${currentPage}` : ""}`,
    robots: {
      index: currentPage === 1,
      follow: blogListRobots?.follow
    },
    openGraph: {
      type: "blog"
    }
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="px-6 sm:px-6 py-12 sm:py-16 lg:py-20 mx-auto max-w-4xl"> ${renderComponent($$result2, "Headline", $$Headline, { "subtitle": "\u{1F4E1} Amat\xF6r radyo d\xFCnyas\u0131ndan haberler, e\u011Fitim i\xE7erikleri, teknik kaynaklar ve ilgin\xE7 makaleler - 73 de YM1KTC" }, { "default": async ($$result3) => renderTemplate`
📻 Blog
` })} ${renderComponent($$result2, "BlogList", $$List, { "posts": page.data })} ${renderComponent($$result2, "Pagination", $$Pagination, { "prevUrl": page.url.prev, "nextUrl": page.url.next })} <!--
      <PostTags tags={allCategories} class="mb-2" title="Search by Categories:" isCategory />
      <PostTags tags={allTags}  title="Search by Tags:" />
    --> </section> ` })}`;
}, "/Users/bugracanata/Developer/[Telsiz]/ARC-Web-Sitesi/src/pages/[...blog]/[...page].astro", void 0);

const $$file = "/Users/bugracanata/Developer/[Telsiz]/ARC-Web-Sitesi/src/pages/[...blog]/[...page].astro";
const $$url = "/[...blog]/[...page]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
