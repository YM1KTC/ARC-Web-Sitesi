import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Hakkımızda',
      href: getPermalink('/about'),
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
    {
      text: 'İletişim',
      href: getPermalink('/contact'),
    },
  ],
  actions: [{ text: 'İletişim', href: getPermalink('/contact'), icon: 'tabler:mail' }],
};

export const footerData = {
  links: [
    {
      title: 'Hızlı Linkler',
      links: [
        { text: 'Hakkımızda', href: getPermalink('/about') },
        { text: 'Blog', href: getBlogPermalink() },
        { text: 'İletişim', href: getPermalink('/contact') },
      ],
    },
    {
      title: 'Hizmetler',
      links: [
        { text: 'Eğitim Programları', href: getPermalink('/contact') },
        { text: 'Lisans Sınavı Hazırlığı', href: getPermalink('/contact') },
        { text: 'Teknik Destek', href: getPermalink('/contact') },
        { text: 'Acil Haberleşme', href: getPermalink('/contact') },
      ],
    },
    {
      title: 'İletişim',
      links: [
        { text: 'E-posta: bilgi@radio.org.tr', href: 'mailto:bilgi@radio.org.tr' },
        { text: 'Telefon: +90 510 220 50 24', href: 'tel:+905102205024' },
        { text: 'Adres: Beyoğlu, İstanbul', href: getPermalink('/contact') },
        { text: 'Çağrı İşareti: YM1KTC', href: getPermalink('/contact') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Gizlilik Politikası', href: getPermalink('/privacy') },
    { text: 'Kullanım Şartları', href: getPermalink('/terms') },
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
