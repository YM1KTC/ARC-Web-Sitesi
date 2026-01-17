import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_D0DB8br9.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/api/dmr-contacts.json.astro.mjs');
const _page3 = () => import('./pages/api/feed/_category_.xml.astro.mjs');
const _page4 = () => import('./pages/api/keystatic/_---params_.astro.mjs');
const _page5 = () => import('./pages/api/repeaters.json.astro.mjs');
const _page6 = () => import('./pages/dmr-liste-duzenleyici.astro.mjs');
const _page7 = () => import('./pages/etiketler.astro.mjs');
const _page8 = () => import('./pages/gizlilik.astro.mjs');
const _page9 = () => import('./pages/hakkimizda.astro.mjs');
const _page10 = () => import('./pages/homes/mobile-app.astro.mjs');
const _page11 = () => import('./pages/homes/personal.astro.mjs');
const _page12 = () => import('./pages/homes/saas.astro.mjs');
const _page13 = () => import('./pages/homes/startup.astro.mjs');
const _page14 = () => import('./pages/iletisim.astro.mjs');
const _page15 = () => import('./pages/kategoriler.astro.mjs');
const _page16 = () => import('./pages/keystatic/_---params_.astro.mjs');
const _page17 = () => import('./pages/kullanim-sartlari.astro.mjs');
const _page18 = () => import('./pages/landing/click-through.astro.mjs');
const _page19 = () => import('./pages/landing/lead-generation.astro.mjs');
const _page20 = () => import('./pages/landing/pre-launch.astro.mjs');
const _page21 = () => import('./pages/landing/product.astro.mjs');
const _page22 = () => import('./pages/landing/sales.astro.mjs');
const _page23 = () => import('./pages/landing/subscription.astro.mjs');
const _page24 = () => import('./pages/repeater-durumu.astro.mjs');
const _page25 = () => import('./pages/rss.xml.astro.mjs');
const _page26 = () => import('./pages/_---blog_/_category_/_---page_.astro.mjs');
const _page27 = () => import('./pages/_---blog_/_tag_/_---page_.astro.mjs');
const _page28 = () => import('./pages/_---blog_/_---page_.astro.mjs');
const _page29 = () => import('./pages/index.astro.mjs');
const _page30 = () => import('./pages/_---blog_.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/api/dmr-contacts.json.ts", _page2],
    ["src/pages/api/feed/[category].xml.ts", _page3],
    ["node_modules/@keystatic/astro/internal/keystatic-api.js", _page4],
    ["src/pages/api/repeaters.json.ts", _page5],
    ["src/pages/dmr-liste-duzenleyici.astro", _page6],
    ["src/pages/etiketler.astro", _page7],
    ["src/pages/gizlilik.md", _page8],
    ["src/pages/hakkimizda.astro", _page9],
    ["src/pages/homes/mobile-app.astro", _page10],
    ["src/pages/homes/personal.astro", _page11],
    ["src/pages/homes/saas.astro", _page12],
    ["src/pages/homes/startup.astro", _page13],
    ["src/pages/iletisim.astro", _page14],
    ["src/pages/kategoriler.astro", _page15],
    ["node_modules/@keystatic/astro/internal/keystatic-astro-page.astro", _page16],
    ["src/pages/kullanim-sartlari.md", _page17],
    ["src/pages/landing/click-through.astro", _page18],
    ["src/pages/landing/lead-generation.astro", _page19],
    ["src/pages/landing/pre-launch.astro", _page20],
    ["src/pages/landing/product.astro", _page21],
    ["src/pages/landing/sales.astro", _page22],
    ["src/pages/landing/subscription.astro", _page23],
    ["src/pages/repeater-durumu.astro", _page24],
    ["src/pages/rss.xml.ts", _page25],
    ["src/pages/[...blog]/[category]/[...page].astro", _page26],
    ["src/pages/[...blog]/[tag]/[...page].astro", _page27],
    ["src/pages/[...blog]/[...page].astro", _page28],
    ["src/pages/index.astro", _page29],
    ["src/pages/[...blog]/index.astro", _page30]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "561f5e46-e770-45eb-90f1-efb1d9015b36"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
