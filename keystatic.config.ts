import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'github',
    repo: 'YM1KTC/ARC-Web-Sitesi',
    branch: 'main',
  },
  ui: {
    brand: {
      name: 'ARC CMS',
    },
    navigation: {
      'İçerik': ['post'],
    },
  },
  collections: {
    post: collection({
      label: 'Blog Yazıları',
      slugField: 'title',
      path: 'src/data/post/*',
      columns: ['title', 'date', 'author'],
      schema: {
        title: fields.text({
          label: 'Başlık',
          description: 'Blog yazısının başlığı (URL\'de kullanılır)',
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
        body: fields.markdoc({
          label: 'İçerik',
          description: 'Blog yazısının ana içeriği (Markdown formatında yazın)',
        }),
      },
    }),
  },
});
