import { c as createComponent, r as renderComponent, a as renderTemplate, u as unescapeHTML } from '../chunks/astro/server_BfDhyAjM.mjs';
import 'kleur/colors';
import { $ as $$MarkdownLayout } from '../chunks/MarkdownLayout_Cs6tfEA2.mjs';
export { renderers } from '../renderers.mjs';

const html = () => "<p><em>Son güncelleme</em>: 6 Ocak 2023</p>\n<h2 id=\"kullanım-şartları\">Kullanım Şartları</h2>\n<p>Bu web sitesini kullanarak aşağıdaki şartları kabul etmiş olursunuz.</p>\n<h3 id=\"genel-kullanım\">Genel Kullanım</h3>\n<ul>\n<li>Web sitesi eğitim ve bilgilendirme amaçlıdır</li>\n<li>İçerik telif hakları ile korunmaktadır</li>\n<li>Ticari olmayan amaçlarla kullanılabilir</li>\n<li>Kaynak göstermek şartıyla paylaşılabilir</li>\n</ul>\n<h3 id=\"amatör-radio-lisans-bilgileri\">Amatör Radio Lisans Bilgileri</h3>\n<ul>\n<li>Sınavlar ve eğitim materyalleri güncel düzenlemelere göre hazırlanır</li>\n<li>Lisans başvuru süreçleri resmi kurumlar tarafından yürütülür</li>\n<li>Dernek sadece eğitim ve danışmanlık hizmeti verir</li>\n</ul>\n<h3 id=\"sorumluluk\">Sorumluluk</h3>\n<ul>\n<li>Teknik bilgiler referans amaçlıdır</li>\n<li>Uygulamalar kişisel sorumluluktadır</li>\n<li>Güvenlik önlemlerine uyulmalıdır</li>\n<li>Yasal düzenlemelere uyum gereklidir</li>\n</ul>\n<h3 id=\"etik-kurallar\">Etik Kurallar</h3>\n<ul>\n<li>Amatör radio etik kurallarına uyulmalıdır</li>\n<li>Zararlı girişimde bulunulmamalıdır</li>\n<li>Diğer kullanıcılara saygı gösterilmelidir</li>\n<li>Doğru bilgi paylaşımı önemlidir</li>\n</ul>\n<h3 id=\"değişiklikler\">Değişiklikler</h3>\n<p>Bu şartlar gerektiğinde güncellenebilir. Güncel sürüm web sitesinde yayınlanır.</p>\n<h3 id=\"i̇letişim\">İletişim</h3>\n<p>Sorularınız için:</p>\n<ul>\n<li>E-posta: <a href=\"mailto:bilgi@radio.org.tr\">bilgi@radio.org.tr</a></li>\n<li>Telefon: +90 510 220 50 24</li>\n<li>Adres: Beyoğlu, İstanbul</li>\n</ul>";

				const frontmatter = {"title":"Kullanım Şartları","layout":"~/layouts/MarkdownLayout.astro","readingTime":1};
				const file = "/Users/bugracanata/Developer/[Telsiz]/ARC-Web-Sitesi/src/pages/kullanim-sartlari.md";
				const url = "/kullanim-sartlari";
				function rawContent() {
					return "   \n                          \n                                        \n   \n\n_Son güncelleme_: 6 Ocak 2023\n\n## Kullanım Şartları\n\nBu web sitesini kullanarak aşağıdaki şartları kabul etmiş olursunuz.\n\n### Genel Kullanım\n\n- Web sitesi eğitim ve bilgilendirme amaçlıdır\n- İçerik telif hakları ile korunmaktadır\n- Ticari olmayan amaçlarla kullanılabilir\n- Kaynak göstermek şartıyla paylaşılabilir\n\n### Amatör Radio Lisans Bilgileri\n\n- Sınavlar ve eğitim materyalleri güncel düzenlemelere göre hazırlanır\n- Lisans başvuru süreçleri resmi kurumlar tarafından yürütülür\n- Dernek sadece eğitim ve danışmanlık hizmeti verir\n\n### Sorumluluk\n\n- Teknik bilgiler referans amaçlıdır\n- Uygulamalar kişisel sorumluluktadır\n- Güvenlik önlemlerine uyulmalıdır\n- Yasal düzenlemelere uyum gereklidir\n\n### Etik Kurallar\n\n- Amatör radio etik kurallarına uyulmalıdır\n- Zararlı girişimde bulunulmamalıdır\n- Diğer kullanıcılara saygı gösterilmelidir\n- Doğru bilgi paylaşımı önemlidir\n\n### Değişiklikler\n\nBu şartlar gerektiğinde güncellenebilir. Güncel sürüm web sitesinde yayınlanır.\n\n### İletişim\n\nSorularınız için:\n- E-posta: bilgi@radio.org.tr\n- Telefon: +90 510 220 50 24\n- Adres: Beyoğlu, İstanbul";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [{"depth":2,"slug":"kullanım-şartları","text":"Kullanım Şartları"},{"depth":3,"slug":"genel-kullanım","text":"Genel Kullanım"},{"depth":3,"slug":"amatör-radio-lisans-bilgileri","text":"Amatör Radio Lisans Bilgileri"},{"depth":3,"slug":"sorumluluk","text":"Sorumluluk"},{"depth":3,"slug":"etik-kurallar","text":"Etik Kurallar"},{"depth":3,"slug":"değişiklikler","text":"Değişiklikler"},{"depth":3,"slug":"i̇letişim","text":"İletişim"}];
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
