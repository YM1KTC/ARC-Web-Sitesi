import { defineField, defineType } from 'sanity';

const EVENT_TYPES = [
  { title: '📻 Çevrim (Net)', value: 'net' },
  { title: '🤝 Toplantı', value: 'meeting' },
  { title: '🎓 Eğitim', value: 'training' },
  { title: '📝 Sınav', value: 'exam' },
  { title: '🏆 Yarışma', value: 'contest' },
  { title: '📅 Diğer', value: 'other' },
];

export const event = defineType({
  name: 'event',
  title: 'Etkinlik',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Başlık',
      type: 'string',
      description: "Örn: 'Haftalık VHF Çevrimi' veya 'Bahar Dönemi Lisans Kursu'.",
      validation: (Rule) => Rule.required().max(120),
    }),
    defineField({
      name: 'eventType',
      title: 'Tür',
      type: 'string',
      options: { list: EVENT_TYPES, layout: 'radio' },
      initialValue: 'net',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'isRecurring',
      title: 'Düzenli tekrarlanan etkinlik mi?',
      type: 'boolean',
      description:
        "Haftalık çevrim gibi düzenli etkinlikler için açın. Açıksa 'Tekrar Bilgisi' alanını doldurun; tek seferlik etkinlikler için tarih kullanılır.",
      initialValue: false,
    }),
    defineField({
      name: 'recurrenceNote',
      title: 'Tekrar Bilgisi',
      type: 'string',
      description: "Örn: 'Her Çarşamba 21:00'. Sadece düzenli etkinliklerde görünür.",
      hidden: ({ document }) => !document?.isRecurring,
      validation: (Rule) =>
        Rule.custom((value, context) => {
          const doc = context.document as { isRecurring?: boolean } | undefined;
          if (doc?.isRecurring && !value) {
            return "Düzenli etkinlikler için tekrar bilgisi gerekli (örn: 'Her Çarşamba 21:00').";
          }
          return true;
        }),
    }),
    defineField({
      name: 'date',
      title: 'Tarih ve Saat',
      type: 'datetime',
      description: 'Tek seferlik etkinliğin başlangıcı. Düzenli etkinliklerde boş bırakabilirsiniz.',
      hidden: ({ document }) => Boolean(document?.isRecurring),
      validation: (Rule) =>
        Rule.custom((value, context) => {
          const doc = context.document as { isRecurring?: boolean } | undefined;
          if (!doc?.isRecurring && !value) {
            return 'Tek seferlik etkinlikler için tarih gerekli.';
          }
          return true;
        }),
    }),
    defineField({
      name: 'location',
      title: 'Yer',
      type: 'string',
      description: "Fiziksel adres veya çevrimiçi bağlantı bilgisi. Örn: 'Dernek lokali, Beyoğlu' veya 'Zoom'.",
    }),
    defineField({
      name: 'frequency',
      title: 'Frekans',
      type: 'string',
      description: "Telsiz etkinlikleri için. Örn: '145.500 MHz FM' veya 'TG 28610'.",
    }),
    defineField({
      name: 'description',
      title: 'Açıklama',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'link',
      title: 'Bağlantı',
      type: 'url',
      description: 'Kayıt formu veya detay sayfası varsa.',
    }),
  ],
  orderings: [
    {
      title: 'Tarih, Yakın → Uzak',
      name: 'dateAsc',
      by: [{ field: 'date', direction: 'asc' }],
    },
  ],
  preview: {
    select: { title: 'title', date: 'date', eventType: 'eventType', isRecurring: 'isRecurring', note: 'recurrenceNote' },
    prepare({ title, date, eventType, isRecurring, note }) {
      const icon = EVENT_TYPES.find((t) => t.value === eventType)?.title.split(' ')[0] ?? '📅';
      const when = isRecurring ? `🔁 ${note ?? 'Düzenli'}` : date ? new Date(date).toLocaleString('tr-TR') : '';
      return { title: `${icon} ${title}`, subtitle: when };
    },
  },
});
