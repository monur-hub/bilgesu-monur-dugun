const tokatAddress = 'İncipark Düğün Salonu, Tokat';
const ankaraAddress = 'Ayçe Sokak No:9, Örnek Mahallesi, Dışkapı/Ankara';
const konyaAddress = 'Karahüyük Mah. Hatıp Cad. Derinkuyu Sok. No:1, Meram/Konya';

export const EVENTS = [
  {
    key: 'tokat',
    title: 'Tokat Düğün',
    date: '06 Ekim',
    weekday: 'Salı',
    times: [
      { label: 'Yemek', time: '19.00' },
      { label: 'Kına', time: '20.00' },
    ],
    venue: 'İncipark Düğün Salonu',
    address: 'Tokat',
    mapLink: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(tokatAddress)}`,
    mapEmbed: `https://www.google.com/maps?q=${encodeURIComponent(tokatAddress)}&output=embed`,
  },
  {
    key: 'ankara',
    title: 'Ankara Nikah',
    date: '08 Ekim',
    weekday: 'Perşembe',
    times: [{ label: 'Nikah', time: '15.00' }],
    venue: 'Altın Nikah Sarayı',
    address: 'Ayçe Sokak No:9, Örnek Mahallesi, Dışkapı/Ankara',
    mapLink: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ankaraAddress)}`,
    mapEmbed: `https://www.google.com/maps?q=${encodeURIComponent(ankaraAddress)}&output=embed`,
  },
  {
    key: 'konya',
    title: 'Konya Düğün',
    date: '10 Ekim',
    weekday: 'Cumartesi',
    times: [{ label: 'Yemek', time: '17.30 - 20.00' }],
    venue: 'Alyans Kösedağ Kır Bahçesi',
    address: 'Karahüyük Mah. Hatıp Cad. Derinkuyu Sok. No:1, Meram/Konya',
    mapLink: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(konyaAddress)}`,
    mapEmbed: `https://www.google.com/maps?q=${encodeURIComponent(konyaAddress)}&output=embed`,
  },
];
