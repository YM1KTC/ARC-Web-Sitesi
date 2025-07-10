import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Ana Sayfa',
      href: getPermalink('/'),
    },
    {
      text: 'Hakkımızda',
      href: getPermalink('/hakkimizda'),
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
    {
      text: 'Kategoriler',
      href: getPermalink('/kategoriler'),
    },
    {
      text: 'Etiketler',
      href: getPermalink('/etiketler'),
    },
    {
      text: 'Sınav Hazırlık',
      href: 'https://sinav.radio.org.tr/',
      target: '_blank',
    },
    {
      text: 'DMR Editor',
      href: 'https://dmr.radio.org.tr/',
      target: '_blank',
    },
    {
      text: 'İletişim',
      href: getPermalink('/iletisim'),
    },
  ],
  actions: [{ text: 'İletişim', href: getPermalink('/iletisim'), icon: 'tabler:mail' }],
};

export const footerData = {
  links: [
    {
      title: 'Hızlı Linkler',
      links: [
        { text: 'Ana Sayfa', href: getPermalink('/') },
        { text: 'Hakkımızda', href: getPermalink('/hakkimizda') },
        { text: 'Blog', href: getBlogPermalink() },
        { text: 'Kategoriler', href: getPermalink('/kategoriler') },
        { text: 'Etiketler', href: getPermalink('/etiketler') },
        { text: 'Sınav Hazırlık', href: 'https://sinav.radio.org.tr/', target: '_blank' },
        { text: 'DMR Editor', href: 'https://dmr.radio.org.tr/', target: '_blank' },
        { text: 'İletişim', href: getPermalink('/iletisim') },
      ],
    },
    {
      title: 'Hizmetler',
      links: [
        { text: 'Eğitim Programları', href: getPermalink('/iletisim') },
        { text: 'Lisans Sınavı Hazırlığı', href: getPermalink('/iletisim') },
        { text: 'Teknik Destek', href: getPermalink('/iletisim') },
        { text: 'Acil Haberleşme', href: getPermalink('/iletisim') },
      ],
    },
    {
      title: 'İletişim',
      links: [
        { text: 'E-posta: bilgi@radio.org.tr', href: 'mailto:bilgi@radio.org.tr' },
        { text: 'Telefon: +90 510 220 50 24', href: 'tel:+905102205024' },
        { text: 'Adres: Beyoğlu, İstanbul', href: getPermalink('/iletisim') },
        { text: 'Çağrı İşareti: YM1KTC', href: getPermalink('/iletisim') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Gizlilik Politikası', href: getPermalink('/gizlilik') },
    { text: 'Kullanım Şartları', href: getPermalink('/kullanim-sartlari') },
  ],
  socialLinks: [
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://facebook.com/ym1ktc' },
    { ariaLabel: 'X (Twitter)', icon: 'tabler:brand-x', href: 'https://x.com/ym1ktc' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/company/arctr/' },
    { ariaLabel: 'YouTube', icon: 'tabler:brand-youtube', href: 'https://www.youtube.com/@YM1KTC' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/ym1ktc' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    © 2024 Amatör Radyocular Derneği (ARC) - YM1KTC. Tüm hakları saklıdır.
  `,
};
