import { c as createComponent, r as renderComponent, a as renderTemplate, u as unescapeHTML } from '../chunks/astro/server_BfDhyAjM.mjs';
import 'kleur/colors';
import { $ as $$MarkdownLayout } from '../chunks/MarkdownLayout_Cs6tfEA2.mjs';
export { renderers } from '../renderers.mjs';

const html = () => "<p><em>Son güncelleme</em>: 6 Ocak 2023</p>\n<h2 id=\"gizlilik-politikası\">Gizlilik Politikası</h2>\n<p>Bu Gizlilik Politikası, Amatör Radyocular Derneği (ARC) olarak kişisel bilgilerinizin nasıl toplandığını, kullanıldığını ve korunduğunu açıklar.</p>\n<h3 id=\"toplanan-bilgiler\">Toplanan Bilgiler</h3>\n<ul>\n<li><strong>İletişim Bilgileri</strong>: İsim, e-posta adresi, telefon numarası</li>\n<li><strong>Çağrı İşareti</strong>: Amatör radio çağrı işaretiniz</li>\n<li><strong>Lisans Bilgileri</strong>: Amatör radio lisans durumu ve sınıfı</li>\n<li><strong>Eğitim Bilgileri</strong>: Katıldığınız kurslar ve sınavlar</li>\n</ul>\n<h3 id=\"bilgilerin-kullanımı\">Bilgilerin Kullanımı</h3>\n<p>Kişisel bilgileriniz aşağıdaki amaçlarla kullanılır:</p>\n<ul>\n<li>Eğitim programları ve etkinlikler hakkında bilgilendirme</li>\n<li>Lisans sınavları ve başvuru süreçleri</li>\n<li>Teknik destek ve danışmanlık hizmetleri</li>\n<li>Acil durum haberleşme koordinasyonu</li>\n</ul>\n<h3 id=\"bilgi-güvenliği\">Bilgi Güvenliği</h3>\n<p>Kişisel bilgileriniz güvenli sunucularda saklanır ve yetkisiz erişime karşı korunur. Bilgileriniz üçüncü taraflarla paylaşılmaz.</p>\n<h3 id=\"i̇letişim\">İletişim</h3>\n<p>Gizlilik politikamız hakkında sorularınız için:</p>\n<ul>\n<li>E-posta: <a href=\"mailto:bilgi@radio.org.tr\">bilgi@radio.org.tr</a></li>\n<li>Telefon: +90 510 220 50 24</li>\n</ul>\n<h3 id=\"güncellemeler\">Güncellemeler</h3>\n<p>Bu politika gerektiğinde güncellenebilir. Değişiklikler web sitesinde yayınlanır.</p>";

				const frontmatter = {"title":"Gizlilik Politikası","layout":"~/layouts/MarkdownLayout.astro","readingTime":1};
				const file = "/Users/bugracanata/Developer/[Telsiz]/ARC-Web-Sitesi/src/pages/gizlilik.md";
				const url = "/gizlilik";
				function rawContent() {
					return "   \n                            \n                                        \n   \n\n_Son güncelleme_: 6 Ocak 2023\n\n## Gizlilik Politikası\n\nBu Gizlilik Politikası, Amatör Radyocular Derneği (ARC) olarak kişisel bilgilerinizin nasıl toplandığını, kullanıldığını ve korunduğunu açıklar.\n\n### Toplanan Bilgiler\n\n- **İletişim Bilgileri**: İsim, e-posta adresi, telefon numarası\n- **Çağrı İşareti**: Amatör radio çağrı işaretiniz\n- **Lisans Bilgileri**: Amatör radio lisans durumu ve sınıfı\n- **Eğitim Bilgileri**: Katıldığınız kurslar ve sınavlar\n\n### Bilgilerin Kullanımı\n\nKişisel bilgileriniz aşağıdaki amaçlarla kullanılır:\n\n- Eğitim programları ve etkinlikler hakkında bilgilendirme\n- Lisans sınavları ve başvuru süreçleri\n- Teknik destek ve danışmanlık hizmetleri\n- Acil durum haberleşme koordinasyonu\n\n### Bilgi Güvenliği\n\nKişisel bilgileriniz güvenli sunucularda saklanır ve yetkisiz erişime karşı korunur. Bilgileriniz üçüncü taraflarla paylaşılmaz.\n\n### İletişim\n\nGizlilik politikamız hakkında sorularınız için:\n- E-posta: bilgi@radio.org.tr\n- Telefon: +90 510 220 50 24\n\n### Güncellemeler\n\nBu politika gerektiğinde güncellenebilir. Değişiklikler web sitesinde yayınlanır.";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [{"depth":2,"slug":"gizlilik-politikası","text":"Gizlilik Politikası"},{"depth":3,"slug":"toplanan-bilgiler","text":"Toplanan Bilgiler"},{"depth":3,"slug":"bilgilerin-kullanımı","text":"Bilgilerin Kullanımı"},{"depth":3,"slug":"bilgi-güvenliği","text":"Bilgi Güvenliği"},{"depth":3,"slug":"i̇letişim","text":"İletişim"},{"depth":3,"slug":"güncellemeler","text":"Güncellemeler"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$MarkdownLayout, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html())}`
							})}`;
				});

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content,
	compiledContent,
	default: Content,
	file,
	frontmatter,
	getHeadings,
	rawContent,
	url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
