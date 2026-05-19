import { defineField, defineType } from 'sanity';

const CATEGORY_OPTIONS = [
  'Temel Amatör Telsiz Bilgisi',
  'Frekanslar ve Band Planları',
  'Antenler ve Anten Yapımı',
  'Telsiz Teknolojileri ve Sistemler',
  'Mobil ve Dijital Uygulamalar',
  'Diğer Telsiz Türleri',
  'Kayıt ve Belgeleme',
];

const AUTHOR_OPTIONS = ['TA1SPH'];

export const post = defineType({
  name: 'post',
  title: 'Blog Yazısı',
  type: 'document',
  groups: [
    { name: 'content', title: 'İçerik', default: true },
    { name: 'publishing', title: 'Yayınlama' },
    { name: 'taxonomy', title: 'Sınıflandırma' },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Başlık',
      type: 'string',
      group: 'content',
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: 'slug',
      title: 'URL (slug)',
      type: 'slug',
      group: 'content',
      description:
        "URL'in son kısmı (radio.org.tr/<slug>). Yayınladıktan sonra değiştirmeyin — eski bağlantılar kırılır.",
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Kapak Görseli',
      type: 'image',
      group: 'content',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternatif metin',
          description:
            "Görseli görmeyen kullanıcılar (ekran okuyucular, görme engelliler) için açıklayın. Örn: 'Moxon anteninin elemanlarının diyagramı'.",
        },
      ],
    }),
    defineField({
      name: 'excerpt',
      title: 'Özet',
      type: 'text',
      group: 'content',
      rows: 3,
      description:
        'Listeleme sayfalarında ve arama sonuçlarında görünür. 50–160 karakter ideal.',
      validation: (Rule) =>
        Rule.min(50)
          .max(160)
          .warning('50–160 karakter arası tutmaya çalışın.'),
    }),
    defineField({
      name: 'body',
      title: 'İçerik',
      type: 'array',
      group: 'content',
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
                fields: [{ name: 'href', type: 'url', title: 'URL' }],
              },
            ],
          },
        },
        {
          type: 'image',
          name: 'inlineImage',
          title: 'Görsel',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternatif metin',
              description: 'Erişilebilirlik için görselin kısa açıklaması.',
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Görsel altı yazısı',
              description: 'Opsiyonel. Görselin altında küçük yazı olarak gösterilir.',
            },
            {
              name: 'alignment',
              type: 'string',
              title: 'Hizalama',
              options: {
                list: [
                  { title: 'Tam genişlik', value: 'full' },
                  { title: 'Sola yaslı', value: 'left' },
                  { title: 'Sağa yaslı', value: 'right' },
                ],
                layout: 'radio',
              },
              initialValue: 'full',
            },
          ],
        },
        {
          type: 'object',
          name: 'youtube',
          title: 'YouTube Videosu',
          fields: [
            {
              name: 'url',
              type: 'url',
              title: 'Video URL',
              description: 'YouTube video bağlantısını yapıştırın.',
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: { title: 'url' },
            prepare({ title }) {
              return { title: title || 'YouTube Videosu', subtitle: '▶︎' };
            },
          },
        },
        {
          type: 'code',
          name: 'code',
          title: 'Kod Bloğu',
          options: {
            language: 'text',
            languageAlternatives: [
              { title: 'Düz metin', value: 'text' },
              { title: 'JavaScript', value: 'javascript' },
              { title: 'TypeScript', value: 'typescript' },
              { title: 'Python', value: 'python' },
              { title: 'Bash', value: 'bash' },
              { title: 'YAML', value: 'yaml' },
              { title: 'HTML', value: 'html' },
              { title: 'CSS', value: 'css' },
            ],
          },
        },
      ],
    }),

    defineField({
      name: 'status',
      title: 'Durum',
      type: 'string',
      group: 'publishing',
      description:
        "Yeni yazılar taslak olarak başlar. Yayına almak için bunu 'Yayında' yapın.",
      options: {
        list: [
          { title: '📝 Taslak', value: 'draft' },
          { title: '✓ Yayında', value: 'published' },
        ],
        layout: 'radio',
      },
      initialValue: 'draft',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Yayın Tarihi',
      type: 'datetime',
      group: 'publishing',
      description:
        'İleri bir tarih seçerseniz yazı o tarihe kadar listede görünmez.',
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Yazar',
      type: 'string',
      group: 'publishing',
      options: { list: AUTHOR_OPTIONS },
      initialValue: 'TA1SPH',
    }),

    defineField({
      name: 'categories',
      title: 'Kategoriler',
      type: 'array',
      group: 'taxonomy',
      description: 'En fazla 2 kategori seçin.',
      of: [
        {
          type: 'string',
          options: { list: CATEGORY_OPTIONS },
        },
      ],
      options: { layout: 'tags' },
      validation: (Rule) => Rule.max(2),
    }),
    defineField({
      name: 'tags',
      title: 'Etiketler',
      type: 'array',
      group: 'taxonomy',
      description:
        'Yazmaya başlayın — önceden kullanılan etiketler önerilecek. Tekrarı önlemek için varolan etiketleri tercih edin.',
      of: [{ type: 'tag' }],
      options: {
        predefinedTags: async (client: { fetch: <T = unknown>(q: string) => Promise<T> }) => {
          const allTags = await client.fetch<unknown[]>(
            `array::unique(*[_type == "post"].tags[])`
          );
          return (allTags ?? [])
            .filter((t): t is string => typeof t === 'string' && t.length > 0)
            .map((t) => ({ label: t, value: t }));
        },
      } as Record<string, unknown>,
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
    select: { title: 'title', date: 'date', status: 'status', media: 'image' },
    prepare({ title, date, status, media }) {
      const badge = status === 'draft' ? '📝 Taslak' : '✓ Yayında';
      const dateStr = date ? new Date(date).toLocaleDateString('tr-TR') : '';
      return {
        title,
        subtitle: dateStr ? `${badge} · ${dateStr}` : badge,
        media,
      };
    },
  },
});
