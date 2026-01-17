import { e as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, a as renderTemplate, r as renderComponent } from '../chunks/astro/server_BfDhyAjM.mjs';
import 'kleur/colors';
import { b as $$Button, $ as $$PageLayout } from '../chunks/PageLayout_CDwIBOQs.mjs';
import { $ as $$HeroText } from '../chunks/HeroText_Cz9XBA4S.mjs';
import { $ as $$Headline } from '../chunks/Headline_ClseMP2_.mjs';
import { $ as $$WidgetWrapper } from '../chunks/WidgetWrapper_C6M78dTL.mjs';
import { $ as $$Features2 } from '../chunks/Features2_D7nFOVdo.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$2 = createAstro("https://www.radio.org.tr");
const $$Form = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Form;
  const { inputs, textarea, disclaimer, button = "\u0130leti\u015Fim", description = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<form method="POST" data-netlify="true" name="contact-form" action="/iletisim?success=true" netlify-honeypot="bot-field"> <!-- Hidden honeypot field for spam protection --> <div style="display: none;"> <label>
Don't fill this out if you're human:
<input name="bot-field"> </label> </div> ${inputs && inputs.map(
    ({ type = "text", name, label = "", autocomplete = "on", placeholder = "" }) => name && renderTemplate`<div class="mb-6"> ${label && renderTemplate`<label${addAttribute(name, "for")} class="block text-sm font-medium"> ${label} </label>`} <input${addAttribute(type, "type")}${addAttribute(name, "name")}${addAttribute(name, "id")}${addAttribute(autocomplete, "autocomplete")}${addAttribute(placeholder, "placeholder")} class="py-3 px-4 block w-full text-md rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900"> </div>`
  )} ${textarea && renderTemplate`<div> <label for="textarea" class="block text-sm font-medium"> ${textarea.label} </label> <textarea id="textarea"${addAttribute(textarea.name ? textarea.name : "message", "name")}${addAttribute(textarea.rows ? textarea.rows : 4, "rows")}${addAttribute(textarea.placeholder, "placeholder")} class="py-3 px-4 block w-full text-md rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900"></textarea> </div>`} ${disclaimer && renderTemplate`<div class="mt-3 flex items-start"> <div class="flex mt-0.5"> <input id="disclaimer" name="disclaimer" type="checkbox" class="cursor-pointer mt-1 py-3 px-4 block w-full text-md rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900"> </div> <div class="ml-3"> <label for="disclaimer" class="cursor-pointer select-none text-sm text-gray-600 dark:text-gray-400"> ${disclaimer.label} </label> </div> </div>`} ${button && renderTemplate`<div class="mt-10 grid"> ${renderComponent($$result, "Button", $$Button, { "variant": "primary", "type": "submit" }, { "default": ($$result2) => renderTemplate`${button}` })} </div>`} ${description && renderTemplate`<div class="mt-3 text-center"> <p class="text-sm text-gray-600 dark:text-gray-400">${description}</p> </div>`} </form>`;
}, "/Users/bugracanata/Developer/[Telsiz]/ARC-Web-Sitesi/src/components/ui/Form.astro", void 0);

const $$Astro$1 = createAstro("https://www.radio.org.tr");
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Contact;
  const {
    title = await Astro2.slots.render("title"),
    subtitle = await Astro2.slots.render("subtitle"),
    tagline = await Astro2.slots.render("tagline"),
    inputs,
    textarea,
    disclaimer,
    button,
    description,
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": `max-w-7xl mx-auto ${classes?.container ?? ""}`, "bg": bg }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Headline", $$Headline, { "title": title, "subtitle": subtitle, "tagline": tagline })} ${inputs && renderTemplate`${maybeRenderHead()}<div class="flex flex-col max-w-xl mx-auto rounded-lg backdrop-blur border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900 shadow p-4 sm:p-6 lg:p-8 w-full"> ${renderComponent($$result2, "FormContainer", $$Form, { "inputs": inputs, "textarea": textarea, "disclaimer": disclaimer, "button": button, "description": description })} </div>`}` })}`;
}, "/Users/bugracanata/Developer/[Telsiz]/ARC-Web-Sitesi/src/components/widgets/Contact.astro", void 0);

const $$Astro = createAstro("https://www.radio.org.tr");
const $$Iletisim = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Iletisim;
  const metadata = {
    title: "\u{1F4E1} \u0130leti\u015Fim - ARC YM1KTC"
  };
  const url = Astro2.url;
  const success = url.searchParams.get("success");
  const error = url.searchParams.get("error");
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate`  ${success && renderTemplate`${maybeRenderHead()}<div class="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg mb-6 mx-6 mt-6"> <div class="flex items-center"> <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <strong>Başarılı!</strong> Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız. 73!
</div> </div>`}${error && renderTemplate`<div class="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg mb-6 mx-6 mt-6"> <div class="flex items-center"> <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path> </svg> <strong>Hata!</strong> Mesaj gönderilirken bir sorun oluştu. Lütfen tekrar deneyin veya doğrudan e-posta gönderin.
</div> </div>`} ${renderComponent($$result2, "HeroText", $$HeroText, { "tagline": "\u{1F4E1} \u0130leti\u015Fim", "title": "\u{1F4FB} 73! Bizimle \u0130leti\u015Fime Ge\xE7in!" })} ${renderComponent($$result2, "ContactUs", $$Contact, { "id": "form", "title": "\u{1F4E8} CQ CQ CQ - Bug\xFCn bize mesaj g\xF6nderin!", "subtitle": "\u{1F4FB} H\u0131zl\u0131 yan\u0131tlar i\xE7in SSS b\xF6l\xFCm\xFCm\xFCze g\xF6z at\u0131n. Arad\u0131\u011F\u0131n\u0131z \xE7\xF6z\xFCm\xFC orada bulabilirsiniz! Bulamazsan\u0131z, destek ekibimiz size yard\u0131mc\u0131 olmaktan mutluluk duyar. 73!", "inputs": [
    {
      type: "text",
      name: "name",
      label: "\u{1F464} Ad Soyad"
    },
    {
      type: "email",
      name: "email",
      label: "\u{1F4EE} E-posta"
    },
    {
      type: "text",
      name: "callsign",
      label: "\u{1F4FB} \xC7a\u011Fr\u0131 \u0130\u015Fareti (\u0130ste\u011Fe ba\u011Fl\u0131)"
    }
  ], "textarea": {
    label: "\u{1F4DD} Mesaj"
  }, "disclaimer": {
    label: "Bu ileti\u015Fim formunu g\xF6ndererek, ki\u015Fisel bilgilerinizin toplanmas\u0131n\u0131 kabul etmi\u015F olursunuz."
  }, "description": "\u{1F680} Destek ekibimiz genellikle 24 i\u015F saati i\xE7inde yan\u0131t verir. QSL!" })}  ${renderComponent($$result2, "Features2", $$Features2, { "title": "\u{1F6E0}\uFE0F Size yard\u0131mc\u0131 olmak i\xE7in buraday\u0131z - 73!", "items": [
    {
      title: "\u{1F4DE} Genel Destek",
      description: `Dernek faaliyetleri, web sitesi navigasyonu, etkinlik bilgileri veya genel sorular\u0131n\u0131z i\xE7in bizimle ileti\u015Fime ge\xE7in.`
    },
    {
      title: "\u{1F4DA} E\u011Fitim Programlar\u0131",
      description: "Amat\xF6r telsiz e\u011Fitimi, lisans s\u0131nav haz\u0131rl\u0131\u011F\u0131 ve teknik kurslar hakk\u0131nda sorular\u0131n\u0131z i\xE7in bizimle ileti\u015Fime ge\xE7in.",
      callToAction: {
        text: "S\u0131nav Haz\u0131rl\u0131k",
        href: "https://sinav.radio.org.tr/",
        target: "_blank"
      }
    },
    {
      title: "\u2699\uFE0F Teknik Destek",
      description: "R\xF6le sistemleri, anten kurulumu, frekans ayarlar\u0131 ve di\u011Fer teknik konularda destek almak i\xE7in bizimle ileti\u015Fime ge\xE7in.",
      callToAction: {
        text: "DMR Editor",
        href: "https://dmr.radio.org.tr/",
        target: "_blank"
      }
    },
    {
      title: "\u{1F4DE} Telefon",
      description: "+90 510 220 50 24 (dernek hatt\u0131)",
      icon: "tabler:headset"
    },
    {
      title: "E-posta",
      description: "bilgi@radio.org.tr",
      icon: "tabler:mail",
      href: "mailto:bilgi@radio.org.tr"
    },
    {
      title: "\u{1F4CD} Adres",
      description: "34433 Beyo\u011Flu \u2013 \u0130stanbul",
      icon: "tabler:map-pin"
    }
  ] })}  ${renderComponent($$result2, "Features2", $$Features2, { "title": "\u{1F4FB} DMR ID'ler", "tagline": "\u{1F50A} DMR \u0130leti\u015Fim", "columns": 3, "items": [
    {
      title: "YM0KTC",
      description: "2867241 (B\xF6lge 0)",
      icon: "tabler:radio"
    },
    {
      title: "YM1KTC",
      description: "2866808 (B\xF6lge 1)",
      icon: "tabler:radio"
    },
    {
      title: "YM2KTR",
      description: "2867887 (B\xF6lge 2)",
      icon: "tabler:radio"
    },
    {
      title: "YM3KTC",
      description: "2867234 (B\xF6lge 3)",
      icon: "tabler:radio"
    },
    {
      title: "YM4KTC",
      description: "2867235 (B\xF6lge 4)",
      icon: "tabler:radio"
    },
    {
      title: "YM5KTC",
      description: "2867187 (B\xF6lge 5)",
      icon: "tabler:radio"
    },
    {
      title: "YM6KTB",
      description: "2867237 (B\xF6lge 6)",
      icon: "tabler:radio"
    },
    {
      title: "YM7KTC",
      description: "2867238 (B\xF6lge 7)",
      icon: "tabler:radio"
    },
    {
      title: "YM8KTC",
      description: "2867239 (B\xF6lge 8)",
      icon: "tabler:radio"
    },
    {
      title: "YM9KTC",
      description: "2867240 (B\xF6lge 9)",
      icon: "tabler:radio"
    }
  ] })}  ${renderComponent($$result2, "Features2", $$Features2, { "title": "\u{1F4F1} Sosyal Medya", "tagline": "\u{1F440} Takip Edin", "columns": 3, "items": [
    {
      title: "\u{1F4F8} Facebook",
      description: "Facebook sayfam\u0131zdan g\xFCncel haberler ve etkinliklerimizi takip edin.",
      icon: "tabler:brand-facebook",
      callToAction: {
        text: "Sayfay\u0131 Ziyaret Et",
        href: "https://facebook.com/ym1ktc",
        target: "_blank",
        variant: "link"
      }
    },
    {
      title: "\u{1F3A5} YouTube",
      description: "YouTube kanal\u0131m\u0131zdan e\u011Fitim videolar\u0131 ve canl\u0131 yay\u0131nlar\u0131 izleyin.",
      icon: "tabler:brand-youtube",
      callToAction: {
        text: "Kanal\u0131 Ziyaret Et",
        href: "https://www.youtube.com/@YM1KTC",
        target: "_blank",
        variant: "link"
      }
    },
    {
      title: "\u{1F4F7} Instagram",
      description: "Instagram hesab\u0131m\u0131zdan foto\u011Fraf ve video payla\u015F\u0131mlar\u0131m\u0131z\u0131 g\xF6r\xFCn.",
      icon: "tabler:brand-instagram",
      callToAction: {
        text: "Hesab\u0131 Ziyaret Et",
        href: "https://www.instagram.com/ym1ktc",
        target: "_blank",
        variant: "link"
      }
    },
    {
      title: "\u{1F4AC} Telegram",
      description: "Telegram grubumuzda g\xFCncel tart\u0131\u015Fmalara kat\u0131l\u0131n ve haberle\u015Fin.",
      icon: "tabler:brand-telegram",
      callToAction: {
        text: "Gruba Kat\u0131l",
        href: "https://t.me/ym1ktc",
        target: "_blank",
        variant: "link"
      }
    },
    {
      title: "\u{1F426} X (Twitter)",
      description: "X (Twitter) hesab\u0131m\u0131zdan anl\u0131k g\xFCncellemeler ve duyurular.",
      icon: "tabler:brand-x",
      callToAction: {
        text: "Hesab\u0131 Takip Et",
        href: "https://x.com/ym1ktc",
        target: "_blank",
        variant: "link"
      }
    },
    {
      title: "\u{1F4CB} LinkedIn",
      description: "LinkedIn sayfam\u0131zdan profesyonel g\xFCncellemeler ve i\u015F birli\u011Fi f\u0131rsatlar\u0131.",
      icon: "tabler:brand-linkedin",
      callToAction: {
        text: "Sayfay\u0131 Ziyaret Et",
        href: "https://www.linkedin.com/company/arctr/",
        target: "_blank",
        variant: "link"
      }
    },
    {
      title: "\u{1F4E7} E-posta",
      description: "Do\u011Frudan e-posta ile bizimle ileti\u015Fime ge\xE7in: bilgi@radio.org.tr",
      icon: "tabler:mail",
      callToAction: {
        text: "E-posta G\xF6nder",
        href: "mailto:bilgi@radio.org.tr",
        variant: "link"
      }
    }
  ] })} ` })}`;
}, "/Users/bugracanata/Developer/[Telsiz]/ARC-Web-Sitesi/src/pages/iletisim.astro", void 0);

const $$file = "/Users/bugracanata/Developer/[Telsiz]/ARC-Web-Sitesi/src/pages/iletisim.astro";
const $$url = "/iletisim";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Iletisim,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
