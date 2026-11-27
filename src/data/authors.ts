// Blog yazarları: çağrı işareti → görünen ad. Yeni yazar eklenince buraya da ekleyin;
// listede olmayan yazarlar yalnızca çağrı işaretiyle gösterilir.
export const AUTHORS: Record<string, { name: string }> = {
  TA1GP: { name: 'Cüneyt Şahna' },
  TA1JS: { name: 'Buğra Canata' },
  TA1SPH: { name: 'Suphi Çakır' },
};

export const authorSlug = (callsign: string): string => callsign.trim().toLowerCase();

export const authorPermalink = (callsign: string): string => `/yazar/${authorSlug(callsign)}`;

export const authorDisplayName = (callsign: string): string => {
  const a = AUTHORS[callsign.trim().toUpperCase()];
  return a ? `${a.name} (${callsign})` : callsign;
};
