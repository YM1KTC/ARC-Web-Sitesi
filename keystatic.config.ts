import { config, fields, collection, singleton } from '@keystatic/core';

// Use GitHub storage in production (when env vars are set), local storage for development
const isProd = import.meta.env.PUBLIC_KEYSTATIC_GITHUB_APP_SLUG;

export default config({
  storage: isProd ? {
    kind: 'github',
    repo: 'YM1KTC/ARC-Web-Sitesi',
    branch: 'main',
  } : undefined,
  ui: {
    brand: {
      name: 'ARC CMS',
      mark: () => '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>',
    },
    navigation: {
      'İçerik': ['post'],
      'Ayarlar': ['site'],
    },
  },
  singletons: {
    site: singleton({
      label: 'Site Ayarları',
      path: 'src/data/site',
      schema: {
        siteName: fields.text({
          label: 'Site Adı',
          default: 'Amatör Radyocular Derneği',
        }),
        siteDescription: fields.text({
          label: 'Site Açıklaması',
          multiline: true,
          default: 'Amatör telsizciliği yaygınlaştıran Türkiye\'deki öncü dernek.',
        }),
        siteUrl: fields.text({
          label: 'Site URL',
          default: 'https://radio.org.tr',
        }),
        contactEmail: fields.text({
          label: 'İletişim E-posta',
          default: 'info@radio.org.tr',
        }),
        socialMedia: fields.object({
          label: 'Sosyal Medya Hesapları',
          schema: {
            facebook: fields.text({ label: 'Facebook' }),
            twitter: fields.text({ label: 'Twitter/X' }),
            instagram: fields.text({ label: 'Instagram' }),
            youtube: fields.text({ label: 'YouTube' }),
          },
        }),
      },
    }),
  },
  collections: {
    post: collection({
      label: 'Blog Yazıları',
      slugField: 'title',
      path: 'src/data/post/*',
      format: {
        contentField: 'body',
        frontmatter: 'yaml',
      },
      previewURL: ({ slug }) => `http://localhost:4321/blog/${slug}`,
      columns: ['title', 'date', 'author', 'published', 'featured'],
      entryLayout: {
        'Ana Bilgiler': ['title', 'date', 'author', 'published', 'featured'],
        'Medya': ['image'],
        'Sınıflandırma': ['categories', 'tags', 'layout'],
        'Özet': ['excerpt'],
        'İçerik': ['body', 'relatedPosts'],
      },
      schema: {
        title: fields.slug({
          name: {
            label: 'Başlık',
            description: 'Blog yazısının başlığı (URL\'de kullanılır)',
          },
        }),
        date: fields.datetime({
          label: 'Yayın Tarihi',
          description: 'Yazının yayınlanma tarihi ve saati',
        }),
        author: fields.text({
          label: 'Yazar',
          description: 'Çağrı işareti (örn: TA1SPH) veya yazar adı',
          default: 'TA1SPH',
        }),
        published: fields.checkbox({
          label: 'Yayınlandı',
          description: 'Bu yazı yayınlandı mı?',
          defaultValue: true,
        }),
        featured: fields.checkbox({
          label: 'Öne Çıkan',
          description: 'Ana sayfada öne çıkan yazılar',
          defaultValue: false,
        }),
        categories: fields.array(
          fields.text({
            label: 'Kategori',
            description: 'Kategori adı',
          })
        , {
          label: 'Kategoriler',
          description: 'Blog yazısını kategorize etmek için (örn: "Teknik", "Haberler")',
          itemLabel: 'Kategori',
        }),
        tags: fields.array(
          fields.text({
            label: 'Etiket',
            description: 'Etiket anahtar kelimesi',
          })
        , {
          label: 'Etiketler',
          description: 'Arama ve filtreleme için etiketler (örn: "dmr", "antren")',
          itemLabel: 'Etiket',
        }),
        layout: fields.text({
          label: 'Sayfa Düzeni',
          description: 'Kullanılacak sayfa layout\'u',
          default: 'post',
        }),
        image: fields.image({
          label: 'Öne Çıkan Görsel',
          description: 'Blog yazısının kapak görseli (varsayılan: /images/logbook.png)',
        }),
        excerpt: fields.text({
          label: 'Kısa Özet',
          description: 'Blog listesinde gösterilecek özet (isteğe bağlı)',
          multiline: true,
        }),
        relatedPosts: fields.relationship({
          label: 'İlgili Yazılar',
          description: 'Bu yazıyla ilgili diğer blog yazıları',
          collection: 'post',
          validation: { length: { min: 0, max: 5 } },
        }),
        body: fields.markdoc({
          label: 'İçerik',
          description: 'Blog yazısının ana içeriği (Markdown formatında yazın)',
        }),
      },
    }),
  },
});
