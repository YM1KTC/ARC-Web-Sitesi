export const translations = {
  tr: {
    nav: {
      home: 'Ana Sayfa',
      about: 'Hakkımızda',
      blog: 'Blog',
      categories: 'Kategoriler',
      tags: 'Etiketler',
      contact: 'İletişim',
    },
    hero: {
      title: 'Amatör Radyocular Derneği',
      subtitle: 'Amatör telsizciliği yaygınlaştırmak, eğitim vermek ve röle-beacon altyapıları işletmek amacıyla kurulmuştur.',
    },
    repeaters: {
      title: 'DMR Röle Durumu',
      subtitle: 'DMR röle sistemlerimizin anlık durumunu buradan takip edebilirsiniz.',
      online: 'Çevrimiçi',
      offline: 'Çevrimdışı',
      lastSeen: 'Son duyulum',
    },
    search: {
      placeholder: 'Çağrı işareti veya isim ara...',
      search: 'Ara',
      searching: 'Aranıyor...',
      noResults: 'Sonuç bulunamadı. Lütfen farklı bir arama deneyin.',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About Us',
      blog: 'Blog',
      categories: 'Categories',
      tags: 'Tags',
      contact: 'Contact',
    },
    hero: {
      title: 'Amateur Radio Association',
      subtitle: 'Established to promote amateur radio, provide education, and operate repeater-beacon infrastructure.',
    },
    repeaters: {
      title: 'DMR Repeater Status',
      subtitle: 'Monitor our DMR repeater systems in real-time.',
      online: 'Online',
      offline: 'Offline',
      lastSeen: 'Last heard',
    },
    search: {
      placeholder: 'Search by callsign or name...',
      search: 'Search',
      searching: 'Searching...',
      noResults: 'No results found. Please try a different search.',
    },
  },
} as const;

export type Locale = keyof typeof translations;
export type TranslationKey = keyof typeof translations.tr;
