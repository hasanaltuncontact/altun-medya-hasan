export interface ReelItem {
  id: string;
  title: string;
  category: string;
  views: string;
  posterImage: string;
  videoUrl: string;
  description: string;
}

/**
 * REELS VİDEOLARI NASIL EKLENİR?
 * 1) Dikey (9:16) .mp4 dosyalarını `public/videos/reels/` klasörüne kopyalayın.
 * 2) Kapak görselini `public/videos/reels/posters/` klasörüne koyun.
 * 3) Aşağıya yeni bir obje ekleyin (id benzersiz olmalı), `videoUrl` ve `posterImage` yollarını yazın.
 * Video dosyası bulunamazsa kartta otomatik olarak `posterImage` gösterilir.
 * Öneri: 720x1280, H.264 (Safari/iPhone uyumu için VP9 değil), +faststart, dosya başı < 8 MB.
 */
export const reelsList: ReelItem[] = [
  {
    id: 'halil-usta',
    title: 'Halil Usta Ford Özel Servisi',
    category: 'OTOMOTİV & SERVİS',
    views: '1.1M İZLENME',
    posterImage: '/videos/reels/posters/halil-usta.jpg',
    videoUrl: '/videos/reels/halil-usta.mp4',
    description: 'Ford özel servisi için ustalığı ve güveni öne çıkaran, konuşmalı tanıtım kurgusu.'
  },
  {
    id: 'dior-beach-club',
    title: 'Dior Beach Club',
    category: 'BEACH CLUB & TURİZM',
    views: '1.3M İZLENME',
    posterImage: '/videos/reels/posters/dior-beach-club.jpg',
    videoUrl: '/videos/reels/dior-beach-club.mp4',
    description: 'Didim sahilinde yaz enerjisini drone ve sinematik çekimlerle aktaran tanıtım filmi.'
  },
  {
    id: 'nikas-altinkum',
    title: "Nika's Altınkum",
    category: 'RESTORAN & GASTRONOMİ',
    views: '895B İZLENME',
    posterImage: '/videos/reels/posters/nikas-altinkum.jpg',
    videoUrl: '/videos/reels/nikas-altinkum.mp4',
    description: 'Et, balık ve meze konseptli restoran için atmosfer odaklı sinematik mekan kurgusu.'
  },
  {
    id: 'reklam-deposu',
    title: 'Didim Reklam Deposu',
    category: 'ÜRETİM & TABELA',
    views: '468B İZLENME',
    posterImage: '/videos/reels/posters/reklam-deposu.jpg',
    videoUrl: '/videos/reels/reklam-deposu.mp4',
    description: 'Kutu harf üretim sürecini adım adım anlatan bilgilendirici, altyazılı içerik serisi.'
  },
  {
    id: 'aytepe-sofrasi',
    title: 'Didim Aytepe Sofrası',
    category: 'RESTORAN & LEZZET',
    views: '420B İZLENME',
    posterImage: '/videos/reels/posters/aytepe-sofrasi.jpg',
    videoUrl: '/videos/reels/aytepe-sofrasi.mp4',
    description: 'Drone açılışıyla başlayan, mekanı ve sofrayı tanıtan iştah açıcı restoran kurgusu.'
  },
  {
    id: 'mna-kuyumculuk',
    title: 'MNA Kuyumculuk Yılbaşı Çekilişi',
    category: 'KUYUMCULUK & KAMPANYA',
    views: '4.3M İZLENME',
    posterImage: '/videos/reels/posters/mna-kuyumculuk.jpg',
    videoUrl: '/videos/reels/mna-kuyumculuk.mp4',
    description: 'Yılbaşı çekilişi kampanyası için hazırlanan, 4.3 milyon izlenmeye ulaşan viral içerik.'
  },
  {
    id: 'kastyorem',
    title: 'Kastyörem.com',
    category: 'E-TİCARET & YÖRESEL ÜRÜN',
    views: '9.3M İZLENME',
    posterImage: '/videos/reels/posters/kastyorem.jpg',
    videoUrl: '/videos/reels/kastyorem.mp4',
    description: 'Yöresel ürünleri kapınıza getiren e-ticaret markası için 9.3 milyon izlenmeli viral reels.'
  }
];
