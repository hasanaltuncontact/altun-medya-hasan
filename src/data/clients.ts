export interface ClientLogo {
  name: string;
  svgPath: string;
  category: string;
  /** Logonun gerçek (kırpılmış) en/boy oranı – eşit görsel ağırlık için kullanılır */
  ratio: number;
}

export const clientLogos: ClientLogo[] = [
  { name: 'Dior Beach Club', svgPath: '/assets/clients/dior-beach-club.svg', category: 'Beach & Lüks Turizm', ratio: 2.6 },
  { name: "Urus Hotel's", svgPath: '/assets/clients/urus-hotels.png', category: 'Otel & Turizm', ratio: 2.6 },
  { name: 'Bebek Bodrum', svgPath: '/assets/clients/bebek-bodrum.svg', category: 'Eğlence & Restoran', ratio: 1.91 },
  { name: 'Aytepe Sofrası', svgPath: '/assets/clients/aytepe-sofrasi.svg', category: 'Gastronomi & Restoran', ratio: 2.01 },
  { name: "Nika's Altınkum", svgPath: '/assets/clients/nikas-altinkum.png', category: 'Gastronomi & Deniz Ürünleri', ratio: 2.12 },
  { name: 'Kastyörem', svgPath: '/assets/clients/kastyorem.svg', category: 'Gastronomi & Yöresel Lezzetler', ratio: 4.79 },
  { name: 'Defne Dekorasyon', svgPath: '/assets/clients/defne-dekorasyon.svg', category: 'Taş Duvar & Dekorasyon', ratio: 2.0 },
  { name: 'CisaLax', svgPath: '/assets/clients/cisalax.svg', category: 'Sağlık & Takviye Gıda', ratio: 3.93 },
  { name: 'Dark Room İstanbul', svgPath: '/assets/clients/dark-room-istanbul.png', category: 'Nightlife & Eğlence', ratio: 4.98 },
  { name: 'SQ Beach Club Didim', svgPath: '/assets/clients/sqbeachclub.svg', category: 'Turizm & Beach', ratio: 0.91 },
  { name: 'MNA Kuyumculuk', svgPath: '/assets/clients/mnakuyumculuk.svg', category: 'Lüks & Mücevher', ratio: 2.04 },
  { name: 'Vay Vay', svgPath: '/assets/clients/vay-vay.png', category: 'Restoran & Bar', ratio: 2.39 },
  { name: 'Mertsky', svgPath: '/assets/clients/mertskylogo.svg', category: 'İnternet & Telekomünikasyon', ratio: 4.04 },
  { name: 'Halil Usta Ford Servis', svgPath: '/assets/clients/halilustalogo.svg', category: 'Otomotiv', ratio: 4.4 },
  { name: 'Bulvar Künefe', svgPath: '/assets/clients/bulvarkünefelogo.svg', category: 'Gastronomi', ratio: 2.15 },
  { name: 'Onyx Lounge', svgPath: '/assets/clients/onyxloungelogo.svg', category: 'Eğlence & Restoran', ratio: 3.3 },
  { name: 'Sensation Club', svgPath: '/assets/clients/Sensationlogo.svg', category: 'Nightlife', ratio: 2.73 },
  { name: 'Yat Sat Kirala', svgPath: '/assets/clients/yatsatkirala.com.svg', category: 'PropTech & Denizcilik', ratio: 6.47 },
  { name: 'Mülkünü Hesapla', svgPath: '/assets/clients/mulkunuhesapla.png', category: 'PropTech & Gayrimenkul', ratio: 7.88 },
  { name: 'Reklam Deposu', svgPath: '/assets/clients/reklamdeposulogo.svg', category: 'Medya & Baskı', ratio: 2.41 },
  { name: 'Rai Club', svgPath: '/assets/clients/railogo.svg', category: 'Nightlife & Eğlence', ratio: 1.35 },
  { name: 'Emser Grill Eck', svgPath: '/assets/clients/emsergrilleckelogo.svg', category: 'Gastronomi & Restoran', ratio: 1.48 },
  { name: 'Palm Studio', svgPath: '/assets/clients/palm-studio.svg', category: 'Düğün & Fotoğraf Stüdyosu', ratio: 2.21 },
];

/**
 * Farklı en/boy oranlarındaki logoların eşit görsel ağırlıkta görünmesi için
 * yükseklik çarpanı döndürür. Geniş logolar biraz kısalır, kare logolar büyür.
 */
export function logoScale(ratio: number): number {
  return Math.min(1.3, Math.max(0.55, Math.sqrt(2.2 / ratio)));
}
