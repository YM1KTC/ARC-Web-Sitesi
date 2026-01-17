import { e as createAstro, c as createComponent, m as maybeRenderHead, r as renderComponent, u as unescapeHTML, F as Fragment, a as renderTemplate, x as defineScriptVars } from '../chunks/astro/server_BfDhyAjM.mjs';
import 'kleur/colors';
import { $ as $$PageLayout } from '../chunks/PageLayout_CDwIBOQs.mjs';
import { $ as $$Hero } from '../chunks/Hero_BhRdE1X0.mjs';
import { a as $$Icon } from '../chunks/Icon_C8ArtCuv.mjs';
import { $ as $$Features } from '../chunks/Features_DJK3TJ_6.mjs';
import { $ as $$Content } from '../chunks/Content_C1F3b01L.mjs';
import { $ as $$BlogLatestPosts } from '../chunks/BlogLatestPosts_BSq_8-iD.mjs';
import { $ as $$FAQs } from '../chunks/FAQs_Vju24_pw.mjs';
import { $ as $$Stats } from '../chunks/Stats_DktezWhj.mjs';
import { $ as $$CallToAction } from '../chunks/CallToAction_Dok0D0et.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro("https://www.radio.org.tr");
const $$Note = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Note;
  const {
    icon = "tabler:info-square",
    title = await Astro2.slots.render("title"),
    description = await Astro2.slots.render("description")
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="bg-blue-50 dark:bg-slate-800 not-prose"> <div class="max-w-6xl mx-auto px-4 sm:px-6 py-4 text-md text-center font-medium"> ${renderComponent($$result, "Icon", $$Icon, { "name": icon, "class": "w-5 h-5 inline-block align-text-bottom font-bold" })} <span class="font-bold">${unescapeHTML(title)}</span> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result2) => renderTemplate`${unescapeHTML(description)}` })} </div> </section>`;
}, "/Users/bugracanata/Developer/[Telsiz]/ARC-Web-Sitesi/src/components/widgets/Note.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://www.radio.org.tr");
const $$FaqSchema = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FaqSchema;
  const { faqs } = Astro2.props;
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };
  return renderTemplate(_a || (_a = __template(['<script type="application/ld+json">(function(){', "\n  {JSON.stringify(schema, null, 2)}\n})();<\/script>"])), defineScriptVars({ schema }));
}, "/Users/bugracanata/Developer/[Telsiz]/ARC-Web-Sitesi/src/components/structured-data/FaqSchema.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const metadata = {
    title: "Amat\xF6r Radyocular Derne\u011Fi (ARC) - YM1KTC",
    ignoreTitleTemplate: true
  };
  const faqData = [
    {
      question: "E\u011Fitim programlar\u0131na kimler kat\u0131labilir?",
      answer: "E\u011Fitim programlar\u0131m\u0131za amat\xF6r telsiz lisans\u0131 olan veya lisans almaya haz\u0131rlanan herkesi davet ediyoruz."
    },
    {
      question: "Hangi frekans bantlar\u0131nda faaliyet g\xF6steriyorsunuz?",
      answer: "Derne\u011Fimiz VHF, UHF ve HF bantlar\u0131nda faaliyet g\xF6stermektedir. \xD6zellikle VHF/UHF r\xF6le sistemleri konusunda aktif \xE7al\u0131\u015Fmalar y\xFCr\xFCt\xFCyoruz."
    },
    {
      question: "E\u011Fitim programlar\u0131n\u0131za nas\u0131l kat\u0131labilirim?",
      answer: "E\u011Fitim programlar\u0131 hakk\u0131nda bilgi almak i\xE7in web sitemizi takip edebilir veya bizimle ileti\u015Fime ge\xE7ebilirsiniz. D\xFCzenli olarak temel ve ileri seviye kurslar d\xFCzenlenmektedir."
    },
    {
      question: "Teknik projelerde nas\u0131l yer alabilirim?",
      answer: "Teknik projelerimizde yer almak i\xE7in bizimle ileti\u015Fime ge\xE7in. E\u011Fitim programlar\u0131m\u0131za kat\u0131larak projelerimizde aktif rol alabilirsiniz."
    },
    {
      question: "Derne\u011Fin r\xF6le sistemleri nas\u0131l kullan\u0131l\u0131r?",
      answer: "R\xF6le sistemlerimizin kullan\u0131m\u0131 hakk\u0131nda bilgi almak i\xE7in teknik dok\xFCmantasyonumuzu inceleyebilir veya e\u011Fitim etkinliklerimize kat\u0131labilirsiniz."
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "actions": [
    {
      variant: "primary",
      text: "\u0130leti\u015Fim",
      href: "/iletisim",
      icon: "tabler:mail"
    },
    {
      text: "Telegram",
      href: "https://t.me/ym1ktc",
      icon: "tabler:brand-telegram",
      target: "_blank"
    },
    {
      text: "WhatsApp",
      href: "https://wa.me/905102205024",
      icon: "tabler:brand-whatsapp",
      target: "_blank"
    },
    { text: "Hakk\u0131m\u0131zda", href: "/hakkimizda" }
  ], "image": {
    src: "~/assets/images/2024/12/ARC_2024_bayrak_logo-Large-1-1024x1024.png",
    alt: "ARC Logo",
    width: 256,
    height: 256
  } }, { "subtitle": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "subtitle" }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<span class="hidden sm:inline"> <span class="font-semibold">YM1KTC</span> çağrı işaretiyle faaliyet gösteren derneğimiz, amatör telsizciliği yaygınlaştırmak,
        eğitim vermek ve teknik projelerde bulunmak amacıyla kurulmuştur.</span> <span class="block mb-1 sm:hidden font-bold text-blue-600">ARC: Amatör Radyocular Derneği.</span>
Kâr amacı gütmeyen derneğimiz, röle-beacon altyapıları işletmek ve teknik projeler yürütmek konularında çalışmaktadır.
` })}`, "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result4) => renderTemplate` <span class="text-accent dark:text-white">📡 Amatör Radyocular Derneği</span> <span class="hidden xl:inline"> (ARC)</span> <span class="block text-sm text-gray-600 dark:text-gray-300 mt-2">YM1KTC • 73 QRT</span> ` })}` })}  <div class="flex justify-center -mt-4 mb-4"> <div class="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-200 dark:bg-gray-800 dark:border-gray-700"> <span class="mr-2"> <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-radio w-5 h-5 text-blue-600 dark:text-blue-400" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M14 3l-9.371 3.749a1 1 0 0 0 -.629 .928v11.323a1 1 0 0 0 1 1h14a1 1 0 0 0 1 -1v-11a1 1 0 0 0 -1 -1h-14.5"></path> <path d="M4 12h16"></path> <path d="M7 12v-2"></path> <path d="M17 16v.01"></path> <path d="M13 16v.01"></path> </svg> </span> <span class="font-medium text-blue-800 dark:text-blue-300">DMR TG: <span class="font-bold">28690</span></span> </div> </div>  ${renderComponent($$result2, "Note", $$Note, { "title": "\u{1F4FB} CQ CQ CQ - Misyonumuz:", "description": "Amat\xF6r telsizcili\u011Fi yayg\u0131nla\u015Ft\u0131rmak, e\u011Fitim vermek ve teknik projeler geli\u015Ftirmek \u2022 73 de YM1KTC" })}  ${renderComponent($$result2, "Features", $$Features, { "id": "features", "tagline": "\u{1F4E1} Hizmetlerimiz", "title": "QSL - ARC ile Neler Yapabilirsiniz", "subtitle": "Amat\xF6r radyocular derne\u011Fi olarak sundu\u011Fumuz hizmetler ve faaliyet alanlar\u0131m\u0131z hakk\u0131nda bilgi edinebilirsiniz. 73!", "items": [
    {
      title: "\u{1F4DA} Amat\xF6r Telsiz E\u011Fitimi",
      description: "Amat\xF6r telsizcili\u011Fe yeni ba\u015Flayanlar i\xE7in temel e\u011Fitim programlar\u0131 ve ileri seviye teknik kurslar d\xFCzenliyoruz.",
      icon: "tabler:school"
    },
    {
      title: "\u{1F4CB} Lisans S\u0131nav\u0131 Haz\u0131rl\u0131\u011F\u0131",
      description: "Amat\xF6r telsiz lisans s\u0131navlar\u0131na haz\u0131rl\u0131k kurslar\u0131 ve deneme s\u0131navlar\u0131 ile \xFCyelerimizi destekliyoruz.",
      icon: "tabler:certificate",
      callToAction: {
        text: "S\u0131nav Sitesine Git",
        href: "https://sinav.radio.org.tr/",
        target: "_blank"
      }
    },
    {
      title: "\u{1F4E1} R\xF6le ve Beacon \u0130\u015Fletmecili\u011Fi",
      description: "VHF/UHF r\xF6le sistemi ve beacon altyap\u0131lar\u0131 kurarak amat\xF6r radyocular\u0131n haberle\u015Fmesini kolayla\u015Ft\u0131r\u0131yoruz.",
      icon: "tabler:antenna"
    },
    {
      title: "\u{1F310} Ak\u0131ll\u0131 \u0130leti\u015Fim",
      description: "Modern ve yenilik\xE7i ileti\u015Fim \xE7\xF6z\xFCmleri geli\u015Ftiriyoruz.",
      icon: "tabler:phone-call",
      callToAction: {
        text: "DMR Editor",
        href: "https://dmr.radio.org.tr/",
        target: "_blank"
      }
    },
    {
      title: "\u2699\uFE0F Teknik Projeler",
      description: "Amat\xF6r radyo teknolojileri \xFCzerine ara\u015Ft\u0131rma ve geli\u015Ftirme projeleri y\xFCr\xFCt\xFCyoruz.",
      icon: "tabler:settings"
    },
    {
      title: "\u{1F3C6} Etkinlik ve Yar\u0131\u015Fmalar",
      description: "Amat\xF6r radyocular aras\u0131 ba\u011Flar\u0131 g\xFC\xE7lendirmek i\xE7in yar\u0131\u015Fmalar ve sosyal etkinlikler d\xFCzenliyoruz.",
      icon: "tabler:trophy"
    }
  ] })}  ${renderComponent($$result2, "Content", $$Content, { "isReversed": true, "tagline": "\u{1F4FB} Hakk\u0131m\u0131zda", "title": "ARC'nin Temelleri: QSO Geli\u015Fim ve \u0130\u015Fbirli\u011Fi!", "items": [
    {
      title: "\u{1F4C5} 31 May\u0131s 2024 tarihinde kuruldu",
      description: "\u0130stanbul merkezli derne\u011Fimiz, amat\xF6r telsizcili\u011Fi yayg\u0131nla\u015Ft\u0131rmak amac\u0131yla modern bir yakla\u015F\u0131mla kurulmu\u015Ftur."
    },
    {
      title: "\u{1F4FB} YM1KTC \xE7a\u011Fr\u0131 i\u015Fareti",
      description: "Derne\u011Fimizin resmi \xE7a\u011Fr\u0131 i\u015Fareti ile t\xFCm amat\xF6r radyo faaliyetlerimizi s\xFCrd\xFCrmekteyiz."
    },
    {
      title: "\u{1F310} Geni\u015F \xFCyelik a\u011F\u0131",
      description: "T\xFCrkiye genelinde amat\xF6r radyocular\u0131m\u0131z\u0131 bir araya getirerek g\xFC\xE7l\xFC bir topluluk olu\u015Fturmaktay\u0131z."
    }
  ], "image": {
    src: "~/assets/images/2024/12/ARC_2024_bayrak_logo-Large-1-1024x1024.png",
    alt: "ARC Logo",
    width: 1024,
    height: 1024
  } }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate` <div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div> ` })}`, "content": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result4) => renderTemplate` <h3 class="text-2xl font-bold tracking-tight dark:text-white sm:text-3xl mb-2">
📡 Modern temeller üzerine kurulan derneğimiz
</h3>
Amatör radyo dünyasında öncü bir yaklaşım benimsiyor, teknoloji ve geleneksel değerleri harmanlıyoruz.
` })}` })}  ${renderComponent($$result2, "BlogLatestPosts", $$BlogLatestPosts, { "title": "\u{1F4D6} Blog'umuzda Daha Fazla \u0130\xE7erik Ke\u015Ffedin", "information": `Blog'umuzda amat\xF6r telsizcili\u011Fe dair g\xFCncel bilgiler, teknik makaleler ve e\u011Fitim i\xE7erikleri bulabilirsiniz.
                        Her yeni makale, amat\xF6r radyo konusunda uzmanla\u015Fman\u0131z i\xE7in \xF6nemli bir ad\u0131m olacakt\u0131r.
                        Amat\xF6r radyo d\xFCnyas\u0131ndaki geli\u015Fmeleri takip etmek i\xE7in blog'umuzu ziyaret edin.
                ` })}  ${renderComponent($$result2, "FAQs", $$FAQs, { "title": "\u2753 S\u0131k\xE7a Sorulan Sorular", "subtitle": "ARC hakk\u0131nda merak ettikleriniz ve amat\xF6r telsizcili\u011Fi konusunda s\u0131k sorulan sorular ve cevaplar\u0131.", "tagline": "\u{1F50D} SSS", "classes": { container: "max-w-6xl" }, "items": [
    {
      title: "E\u011Fitim programlar\u0131na kimler kat\u0131labilir?",
      description: "E\u011Fitim programlar\u0131m\u0131za amat\xF6r telsiz lisans\u0131 olan veya lisans almaya haz\u0131rlanan herkesi davet ediyoruz."
    },
    {
      title: "Hangi frekans bantlar\u0131nda faaliyet g\xF6steriyorsunuz?",
      description: "Derne\u011Fimiz VHF, UHF ve HF bantlar\u0131nda faaliyet g\xF6stermektedir. \xD6zellikle VHF/UHF r\xF6le sistemleri konusunda aktif \xE7al\u0131\u015Fmalar y\xFCr\xFCt\xFCyoruz."
    },
    {
      title: "E\u011Fitim programlar\u0131n\u0131za nas\u0131l kat\u0131labilirim?",
      description: "E\u011Fitim programlar\u0131 hakk\u0131nda bilgi almak i\xE7in web sitemizi takip edebilir veya bizimle ileti\u015Fime ge\xE7ebilirsiniz. D\xFCzenli olarak temel ve ileri seviye kurslar d\xFCzenlenmektedir."
    },
    {
      title: "Teknik projelerde nas\u0131l yer alabilirim?",
      description: "Teknik projelerimizde yer almak i\xE7in bizimle ileti\u015Fime ge\xE7in. E\u011Fitim programlar\u0131m\u0131za kat\u0131larak projelerimizde aktif rol alabilirsiniz."
    },
    {
      title: "Derne\u011Fin r\xF6le sistemleri nas\u0131l kullan\u0131l\u0131r?",
      description: "R\xF6le sistemlerimizin kullan\u0131m\u0131 hakk\u0131nda bilgi almak i\xE7in teknik dok\xFCmantasyonumuzu inceleyebilir veya e\u011Fitim etkinliklerimize kat\u0131labilirsiniz."
    }
  ] })}  ${renderComponent($$result2, "Stats", $$Stats, { "stats": [
    { title: "Kurulu\u015F Y\u0131l\u0131", amount: "2024" },
    { title: "Aktif \xDCye", amount: "100+" },
    { title: "E\u011Fitim Program\u0131", amount: "25+" },
    { title: "Teknik Proje", amount: "10+" }
  ] })}  ${renderComponent($$result2, "CallToAction", $$CallToAction, { "actions": [
    {
      variant: "primary",
      text: "\u0130leti\u015Fim",
      href: "/iletisim",
      icon: "tabler:mail"
    }
  ] }, { "subtitle": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "subtitle" }, { "default": ($$result4) => renderTemplate`
Amatör radyo dünyasında yerinizi alın ve bizimle birlikte büyüyen toplulukta yer alın. <br class="hidden md:inline">
Bizimle iletişime geçin ve amatör radyo yolculuğunuza başlayın! 73 de YM1KTC
` })}`, "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result4) => renderTemplate`
📡 Amatör Radyocular<br class="block sm:hidden"><span class="sm:whitespace-nowrap"> Derneği</span> ` })}` })} ${renderComponent($$result2, "FaqSchema", $$FaqSchema, { "faqs": faqData })} ` })}`;
}, "/Users/bugracanata/Developer/[Telsiz]/ARC-Web-Sitesi/src/pages/index.astro", void 0);

const $$file = "/Users/bugracanata/Developer/[Telsiz]/ARC-Web-Sitesi/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
