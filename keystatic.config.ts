import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'github',
    repo: 'YM1KTC/ARC-Web-Sitesi',
    branch: 'main',
  },
  collections: {
    post: collection({
      label: 'Blog Yazıları',
      slugField: 'title',
      path: 'src/data/post/*.md',
      format: {
        contentField: 'body',
        frontmatter: 'yaml',
      },
      schema: {
        title: fields.slug({
          name: {
            label: 'Başlık',
            description: 'Blog yazısının başlığı',
          },
        }),
        date: fields.datetime({
          label: 'Yayın Tarihi',
          description: 'Yazının yayınlanma tarihi',
        }),
        author: fields.text({
          label: 'Yazar',
          description: 'Çağrı işareti veya yazar adı',
          default: 'TA1SPH',
        }),
        categories: fields.array(
          fields.text({
            label: 'Kategori',
          })
        , {
          label: 'Kategoriler',
          description: 'Blog yazısının kategorileri',
        }),
        tags: fields.array(
          fields.text({
            label: 'Etiket',
          })
        , {
          label: 'Etiketler',
          description: 'Blog yazısının etiketleri',
        }),
        layout: fields.text({
          label: 'Düzen',
          default: 'post',
        }),
        image: fields.image({
          label: 'Öne Çıkan Görsel',
          description: 'Blog yazısı için kapak görseli',
        }),
        excerpt: fields.text({
          label: 'Özet',
          description: 'Blog yazısının kısa özeti',
          multiline: true,
        }),
        body: fields.markdoc({
          label: 'İçerik',
          description: 'Blog yazısının ana içeriği',
        }),
      },
    }),
  },
});
