export interface ReelItem {
  id: string;
  title: string;
  category: string;
  views: string;
  posterImage: string;
  videoUrl: string;
  description: string;
}

export const reelsList: ReelItem[] = [
  {
    id: 'reel-1',
    title: 'Lüks Villa Mimari Çekimi',
    category: 'GAYRİMENKUL & MİMARİ',
    views: '1.4M İZLENME',
    posterImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=700&auto=format&fit=crop',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-modern-architecture-of-a-luxurious-house-41556-large.mp4',
    description: 'Didim & Bodrum hattında lüks gayrimenkul için hazırlanan yüksek tempolu 4K mimari kurgu.'
  },
  {
    id: 'reel-2',
    title: 'Gastronomi & Kokteyl Lab',
    category: 'FOOD & BEVERAGE',
    views: '890K İZLENME',
    posterImage: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=700&auto=format&fit=crop',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-barman-preparing-a-cocktail-in-a-bar-42938-large.mp4',
    description: 'Özel ışıklandırma ve macro lenslerle lezzet algısını artıran dinamik mekan kurgusu.'
  },
  {
    id: 'reel-3',
    title: 'Otomotiv & Ses Tasarımı',
    category: 'AUTOMOTIVE & ACTION',
    views: '2.1M İZLENME',
    posterImage: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=700&auto=format&fit=crop',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-luxury-sports-car-driving-on-a-highway-41560-large.mp4',
    description: 'Hassas ses mühendisliği ve hızlı kesimlerle hazırlanan otomotiv lansman içeriği.'
  },
  {
    id: 'reel-4',
    title: 'Moda & Doku Kurgusu',
    category: 'FASHION & EDITORIAL',
    views: '650K İZLENME',
    posterImage: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=700&auto=format&fit=crop',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-fashion-model-posing-in-neon-light-40114-large.mp4',
    description: 'Editoryal moda markası için kurgulanmış ritmik renk geçişleri ve dikey estetik.'
  },
  {
    id: 'reel-5',
    title: 'Otel & Sahil Deneyimi',
    category: 'TURİZM & HOSPITALITY',
    views: '1.8M İZLENME',
    posterImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=700&auto=format&fit=crop',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-hotel-swimming-pool-surrounded-by-palm-trees-41555-large.mp4',
    description: 'Ege kıyılarında büyüleyici tatil deneyimini aktaran drone ve 4K dikey çekim.'
  },
  {
    id: 'reel-6',
    title: 'Gece Kulübü & Etkinlik',
    category: 'NIGHTLIFE & EVENT',
    views: '940K İZLENME',
    posterImage: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=700&auto=format&fit=crop',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-dj-mixing-music-at-a-party-41562-large.mp4',
    description: 'Neon ışıklar ve bas odaklı müzik senkronizasyonu ile lansman gecesi atmosferi.'
  },
  {
    id: 'reel-7',
    title: 'Mücevher & Detay Çekimi',
    category: 'LUXURY & JEWELRY',
    views: '1.2M İZLENME',
    posterImage: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=700&auto=format&fit=crop',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-hands-adjusting-a-gold-watch-41561-large.mp4',
    description: 'Işık kırılmaları ve makro lenslerle hazırlanan lüks takı ve altın koleksiyon filmi.'
  }
];
