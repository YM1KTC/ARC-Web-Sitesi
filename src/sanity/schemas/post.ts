import { createElement } from 'react';
import { defineField, defineType } from 'sanity';
import { H2Preview, H3Preview, H4Preview, QuotePreview, NormalPreview } from '../components/blockPreviews';

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
        'Listeleme sayfalarında, arama motoru sonuçlarında ve RSS akışında görünür. 50–160 karakter ideal.',
      validation: (Rule) => [
        Rule.custom((value, context) => {
          const doc = context.document as { status?: string } | undefined;
          if (doc?.status === 'published' && !value) {
            return 'Yayınlanan yazılar için özet gereklidir.';
          }
          return true;
        }),
        Rule.min(50).max(160).warning('50–160 karakter arası tutmaya çalışın.'),
      ],
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
            { title: 'Normal', value: 'normal', component: NormalPreview },
            { title: 'Başlık 2', value: 'h2', component: H2Preview },
            { title: 'Başlık 3', value: 'h3', component: H3Preview },
            { title: 'Başlık 4', value: 'h4', component: H4Preview },
            { title: 'Alıntı', value: 'blockquote', component: QuotePreview },
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
              // Editörde video küçük resmi göster — URL'den video kimliğini çıkar.
              const match = (title || '').match(/(?:youtu\.be\/|v=|\/embed\/|\/shorts\/)([\w-]{11})/);
              const media = match
                ? createElement('img', {
                    src: `https://img.youtube.com/vi/${match[1]}/mqdefault.jpg`,
                    alt: 'Video önizlemesi',
                    style: { objectFit: 'cover', width: '100%', height: '100%' },
                  })
                : undefined;
              return { title: 'YouTube Videosu', subtitle: title || '', media };
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
        'Yazıyı tanımlayan kısa anahtar kelimeler. Tekrarı önlemek için varolan yazılardaki etiketleri tutarlı yazın (örn: "amatör anten projeleri", "röle kullanımı").',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
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
