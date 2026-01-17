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
      format: {
        contentField: 'body',
        frontmatter: 'yaml',
      },
      columns: ['title', 'date', 'author'],
      schema: {
        title: fields.text({
          label: 'Başlık',
        }),
        date: fields.datetime({
          label: 'Yayın Tarihi',
        }),
        author: fields.text({
          label: 'Yazar',
        }),
        categories: fields.array(fields.text({ label: 'Kategori' }), {
          label: 'Kategoriler',
        }),
        tags: fields.array(fields.text({ label: 'Etiket' }), {
          label: 'Etiketler',
        }),
        layout: fields.text({
          label: 'Sayfa Düzeni',
        }),
        image: fields.image({
          label: 'Öne Çıkan Görsel',
        }),
        excerpt: fields.text({
          label: 'Kısa Özet',
          multiline: true,
        }),
        body: fields.markdoc({
          label: 'İçerik',
        }),
      },
    }),
  },
});
