import { c as createComponent, r as renderComponent, a as renderTemplate, F as Fragment, m as maybeRenderHead } from '../chunks/astro/server_BfDhyAjM.mjs';
import 'kleur/colors';
import { $ as $$Features2 } from '../chunks/Features2_D7nFOVdo.mjs';
import { $ as $$Features3 } from '../chunks/Features3_wayAUiIh.mjs';
import { $ as $$Hero } from '../chunks/Hero_BhRdE1X0.mjs';
import { $ as $$Stats } from '../chunks/Stats_DktezWhj.mjs';
import { $ as $$Steps2 } from '../chunks/Steps2_C6F2o1Pc.mjs';
import { $ as $$PageLayout } from '../chunks/PageLayout_CDwIBOQs.mjs';
export { renderers } from '../renderers.mjs';

const $$Hakkimizda = createComponent(($$result, $$props, $$slots) => {
  const metadata = {
    title: "\u{1F4FB} Hakk\u0131m\u0131zda - ARC YM1KTC"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "tagline": "\u{1F4E1} Hakk\u0131m\u0131zda", "image": {
    src: "~/assets/images/2024/12/ARC_2024_bayrak_logo-Large-1-1024x1024.png",
    alt: "ARC Logo",
    width: 256,
    height: 256
  } }, { "subtitle": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "subtitle" }, { "default": ($$result4) => renderTemplate`
Amatör Radyocular Derneği (ARC), YM1KTC çağrı işaretiyle faaliyet gösteren, İstanbul merkezli kâr amacı gütmeyen
      bir dernektir. 31 Mayıs 2024 tarihinde kurulmuş olan derneğimiz, amatör telsizciliği yaygınlaştırmak, eğitim
      vermek ve röle-beacon altyapıları işletmek amacıyla faaliyet göstermektedir.
` })}`, "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result4) => renderTemplate`
📻 Amatör radyo dünyasında ${maybeRenderHead()}<br> <span class="text-accent dark:text-white"> Güçlü bir topluluk</span> ` })}` })}  ${renderComponent($$result2, "Stats", $$Stats, { "title": "\u{1F4C8} Derne\u011Fimizle ilgili istatistikler - QSL", "stats": [
    { title: "Kurulu\u015F Y\u0131l\u0131", amount: "2024" },
    { title: "Aktif \xDCye", amount: "100+" },
    { title: "E\u011Fitim Program\u0131", amount: "25+" },
    { title: "Teknik Proje", amount: "10+" }
  ] })}  ${renderComponent($$result2, "Features3", $$Features3, { "title": "\u{1F4E1} Faaliyet Alanlar\u0131m\u0131z", "subtitle": "Amat\xF6r radyo d\xFCnyas\u0131nda geni\u015F bir yelpazede hizmet sunan derne\u011Fimiz, \xFCyelerimize kapsaml\u0131 destek sa\u011Flamaktad\u0131r.", "columns": 3, "isBeforeContent": true, "items": [
    {
      title: "\u{1F4DA} E\u011Fitim ve \xD6\u011Fretim",
      description: "Amat\xF6r telsiz lisans s\u0131navlar\u0131na haz\u0131rl\u0131k, teknik e\u011Fitim programlar\u0131 ve s\xFCrekli geli\u015Fim kurslar\u0131 d\xFCzenliyoruz.",
      icon: "tabler:school",
      callToAction: {
        text: "S\u0131nav Haz\u0131rl\u0131k Sitesi",
        href: "https://sinav.radio.org.tr/",
        target: "_blank"
      }
    },
    {
      title: "\u{1F4E1} Teknik Altyap\u0131",
      description: "VHF/UHF r\xF6le sistemleri, beacon istasyonlar\u0131 ve teknik altyap\u0131 projeleri geli\u015Ftirip i\u015Fletiyoruz.",
      icon: "tabler:antenna"
    },
    {
      title: "\u{1F6A8} Acil Haberle\u015Fme",
      description: "Acil durumlarda g\xFCvenilir haberle\u015Fme sistemleri geli\u015Ftirerek toplumsal sorumlulu\u011Fumuzu yerine getiriyoruz.",
      icon: "tabler:phone-call"
    }
  ] })}  ${renderComponent($$result2, "Features3", $$Features3, { "columns": 3, "isAfterContent": true, "items": [
    {
      title: "\u{1F52C} Ara\u015Ft\u0131rma ve Geli\u015Ftirme",
      description: "Amat\xF6r radyo teknolojileri \xFCzerine ara\u015Ft\u0131rma projeleri y\xFCr\xFCt\xFCyor ve yenilik\xE7i \xE7\xF6z\xFCmler geli\u015Ftiriyoruz.",
      icon: "tabler:microscope"
    },
    {
      title: "\u{1F389} Topluluk Etkinlikleri",
      description: "Yar\u0131\u015Fmalar, sergiler, seminerler ve sosyal etkinlikler d\xFCzenleyerek amat\xF6r radyocular\u0131 bir araya getiriyoruz.",
      icon: "tabler:users"
    },
    {
      title: "\u{1F30D} Uluslararas\u0131 \u0130\u015Fbirli\u011Fi",
      description: "D\xFCnya \xE7ap\u0131nda amat\xF6r radyo kurulu\u015Flar\u0131yla i\u015Fbirli\u011Fi yaparak T\xFCrkiye'yi temsil ediyoruz.",
      icon: "tabler:world"
    },
    {
      title: "\u{1F468}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F466} Gen\xE7 Radyocular",
      description: "Gen\xE7lerin amat\xF6r radyo d\xFCnyas\u0131na kat\u0131l\u0131m\u0131n\u0131 te\u015Fvik eden \xF6zel programlar ve etkinlikler d\xFCzenliyoruz.",
      icon: "tabler:user-plus"
    },
    {
      title: "\u2699\uFE0F Teknik Dan\u0131\u015Fmanl\u0131k",
      description: "Anten kurulumu, ekipman se\xE7imi ve teknik konularda \xFCyelerimize uzman dan\u0131\u015Fmanl\u0131k hizmeti sunuyoruz.",
      icon: "tabler:tool"
    },
    {
      title: "\u{1F4F6} Dijital Modlar",
      description: "DMR, APRS, FT8 gibi dijital mod teknolojileri konusunda e\u011Fitim ve uygulama deste\u011Fi sa\u011Fl\u0131yoruz.",
      icon: "tabler:device-laptop",
      callToAction: {
        text: "DMR Editor",
        href: "https://dmr.radio.org.tr/",
        target: "_blank"
      }
    }
  ] })}  ${renderComponent($$result2, "Steps2", $$Steps2, { "title": "\u2728 De\u011Ferlerimiz", "subtitle": "Derne\u011Fimizin temel de\u011Ferleri, t\xFCm faaliyetlerimizin ve \xFCyelerimizle ili\u015Fkilerimizin temelini olu\u015Fturmaktad\u0131r.", "items": [
    {
      title: "\u{1F3AF} \xDCye Odakl\u0131 Yakla\u015F\u0131m",
      description: "\xDCyelerimizin ihtiya\xE7lar\u0131n\u0131 \xF6nceleyerek, onlar\u0131n geli\u015Fimini desteklemek ve amat\xF6r radyo yolculuklar\u0131nda rehberlik etmek en \xF6nemli amac\u0131m\u0131zd\u0131r."
    },
    {
      title: "\u{1F4C8} S\xFCrekli Geli\u015Fim",
      description: "Teknolojideki geli\u015Fmeleri takip ederek, e\u011Fitim programlar\u0131m\u0131z\u0131 ve hizmetlerimizi s\xFCrekli g\xFCncelliyor ve geli\u015Ftiriyoruz."
    },
    {
      title: "\u{1F31F} Etik De\u011Ferler",
      description: "Amat\xF6r radyo eti\u011Fini benimser, \u015Feffafl\u0131k, d\xFCr\xFCstl\xFCk ve toplumsal sorumluluk bilinciyle hareket ederiz."
    }
  ] })}  ${renderComponent($$result2, "Steps2", $$Steps2, { "title": "\u{1F3C6} Ba\u015Far\u0131lar\u0131m\u0131z", "subtitle": "Kuruldu\u011Fumuz g\xFCnden bu yana elde etti\u011Fimiz ba\u015Far\u0131lar ve topluma katk\u0131lar\u0131m\u0131z.", "isReversed": true, "callToAction": {
    text: "Daha fazla bilgi",
    href: "/iletisim"
  }, "items": [
    {
      title: "\u{1F1F9}\u{1F1F7} T\xFCrkiye \xE7ap\u0131nda eri\u015Fim",
      description: "R\xF6le sistemlerimiz ve e\u011Fitim programlar\u0131m\u0131z ile T\xFCrkiye genelinde amat\xF6r radyoculara hizmet veriyoruz.",
      icon: "tabler:map-pin"
    },
    {
      title: "\u{1F60A} Pozitif \xFCye geri bildirimleri",
      description: "\xDCyelerimizden ald\u0131\u011F\u0131m\u0131z olumlu geri bildirimler ve y\xFCksek memnuniyet oranlar\u0131 bizi motive ediyor.",
      icon: "tabler:message-star"
    },
    {
      title: "\u{1F3C5} Sekt\xF6rel tan\u0131n\u0131rl\u0131k",
      description: "Amat\xF6r radyo camias\u0131nda sayg\u0131n bir konuma sahip olup, di\u011Fer kurulu\u015Flar taraf\u0131ndan referans al\u0131n\u0131yoruz.",
      icon: "tabler:award"
    }
  ] })}  ${renderComponent($$result2, "Features2", $$Features2, { "title": "\u{1F4BC} Y\xF6netim Kurulu", "tagline": "\u{1F451} Liderlik", "columns": 1, "items": [
    {
      title: "\u{1F4FB} Ba\u015Fkan",
      description: "C\xFCneyt \u015Eahna (TA1GP)"
    }
  ] })}  ${renderComponent($$result2, "Features2", $$Features2, { "title": "\u{1F6E0}\uFE0F Teknik Destek", "tagline": "\u{1F4E1} \u0130leti\u015Fim", "columns": 2, "items": [
    {
      title: "\u{1F4EE} E-posta ile ileti\u015Fim",
      description: "Teknik sorular\u0131n\u0131z, \xFCyelik ba\u015Fvurunuz veya genel bilgi almak i\xE7in e-posta g\xF6nderebilirsiniz.",
      icon: "tabler:mail"
    },
    {
      title: "\u{1F4DE} Telefon deste\u011Fi",
      description: "Acil durumlar ve \xF6nemli konular i\xE7in telefon hatt\u0131m\u0131zdan bize ula\u015Fabilirsiniz.",
      icon: "tabler:headset"
    }
  ] })} ` })}`;
}, "/Users/bugracanata/Developer/[Telsiz]/ARC-Web-Sitesi/src/pages/hakkimizda.astro", void 0);

const $$file = "/Users/bugracanata/Developer/[Telsiz]/ARC-Web-Sitesi/src/pages/hakkimizda.astro";
const $$url = "/hakkimizda";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Hakkimizda,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
