import { defineField, defineType } from 'sanity';

export const post = defineType({
  name: 'post',
  title: 'Blog Yazısı',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Başlık',
      type: 'string',
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: 'slug',
      title: 'URL (slug)',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Yayın Tarihi',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Yazar',
      type: 'string',
      initialValue: 'TA1SPH',
    }),
    defineField({
      name: 'excerpt',
      title: 'Özet',
      type: 'text',
      rows: 3,
      description: 'Listeleme sayfalarında ve arama sonuçlarında görünür.',
    }),
    defineField({
      name: 'image',
      title: 'Kapak Görseli',
      type: 'image',
      options: { hotspot: true },
      fields: [
        { name: 'alt', type: 'string', title: 'Alternatif metin' },
      ],
    }),
    defineField({
      name: 'categories',
      title: 'Kategoriler',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
    }),
    defineField({
      name: 'tags',
      title: 'Etiketler',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
    }),
    defineField({
      name: 'body',
      title: 'İçerik',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'Başlık 2', value: 'h2' },
            { title: 'Başlık 3', value: 'h3' },
            { title: 'Başlık 4', value: 'h4' },
            { title: 'Alıntı', value: 'blockquote' },
          ],
          lists: [
            { title: 'Madde Listesi', value: 'bullet' },
            { title: 'Numaralı Liste', value: 'number' },
          ],
          marks: {
            decorators: [
              { title: 'Kalın', value: 'strong' },
              { title: 'İtalik', value: 'em' },
              { title: 'Kod', value: 'code' },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Bağlantı',
                fields: [
                  { name: 'href', type: 'url', title: 'URL' },
                ],
              },
            ],
          },
        },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            { name: 'alt', type: 'string', title: 'Alternatif metin' },
          ],
        },
      ],
    }),
    defineField({
      name: 'status',
      title: 'Durum',
      type: 'string',
      options: {
        list: [
          { title: 'Yayında', value: 'published' },
          { title: 'Taslak', value: 'draft' },
        ],
        layout: 'radio',
      },
      initialValue: 'published',
    }),
  ],
  orderings: [
    {
      title: 'Yayın Tarihi, Yeni → Eski',
      name: 'dateDesc',
      by: [{ field: 'date', direction: 'desc' }],
    },
  ],
  preview: {
    select: { title: 'title', date: 'date', media: 'image' },
    prepare({ title, date, media }) {
      return {
        title,
        subtitle: date ? new Date(date).toLocaleDateString('tr-TR') : '',
        media,
      };
    },
  },
});
