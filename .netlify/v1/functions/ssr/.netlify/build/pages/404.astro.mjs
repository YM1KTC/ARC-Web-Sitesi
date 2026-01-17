import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_BfDhyAjM.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Icon } from '../chunks/Icon_C8ArtCuv.mjs';
import { g as getHomePermalink } from '../chunks/permalinks_BMxSf01e.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  const title = `Hata 404`;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "metadata": { title } }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="flex items-center h-full p-16"> <div class="container flex flex-col items-center justify-center px-5 mx-auto my-8"> <div class="max-w-lg text-center"> <!-- Radio Tower Icon --> <div class="mb-6"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:antenna", "class": "w-24 h-24 mx-auto text-primary opacity-80" })} </div> <h2 class="mb-4 font-bold text-9xl"> <span class="sr-only">Error</span> <span class="text-primary">404</span> </h2> <!-- Ham Radio themed message --> <div class="mb-6 p-4 bg-gray-100 dark:bg-slate-800 rounded-lg border-l-4 border-primary"> <p class="text-lg font-mono text-gray-700 dark:text-gray-300 mb-2"> <strong>CQ CQ CQ... Sinyal bulunamadı!</strong> </p> <p class="text-sm text-gray-600 dark:text-gray-400">Frekans: 404 MHz • Güç: 0 Watt • SWR: ∞</p> </div> <p class="text-2xl font-semibold md:text-3xl mb-4">📡 Sinyal menzil dışında!</p> <p class="mt-4 mb-8 text-lg text-muted dark:text-slate-400">
Aradığınız sayfa stratosferde kaybolmuş gibi görünüyor. <br>
Ana istasyona (sayfaya) geri dönün veya frekansı yeniden ayarlayın.
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center"> <a rel="noopener noreferrer"${addAttribute(getHomePermalink(), "href")} class="btn"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:home", "class": "w-5 h-5 mr-2" })}
Ana İstasyon (QTH)
</a> <a rel="noopener noreferrer" href="/blog" class="btn btn-outline"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:radio", "class": "w-5 h-5 mr-2" })}
Blog Yayınları
</a> </div> <!-- Fun Ham Radio callsign --> <div class="mt-8 text-sm text-gray-500 dark:text-gray-400"> <p>73 de YM1KTC - Amatör Radyocular Derneği</p> </div> </div> </div> </section> ` })}`;
}, "/Users/bugracanata/Developer/[Telsiz]/ARC-Web-Sitesi/src/pages/404.astro", void 0);

const $$file = "/Users/bugracanata/Developer/[Telsiz]/ARC-Web-Sitesi/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
