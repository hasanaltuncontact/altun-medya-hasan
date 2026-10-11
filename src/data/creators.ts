export interface CreatorItem {
  id: string;
  name: string;
  handle: string;
  niche: string;
  nicheCategory: 'lifestyle' | 'gastronomi' | 'turizm' | 'mimari' | 'moda';
  followers: string;
  reach: string;
  engagementRate: string;
  avatarImage: string;
  verified: boolean;
  platforms: ('instagram' | 'tiktok' | 'youtube')[];
  tags: string[];
  pastBrands: string[];
  bio: string;
}

export const creatorCategories = [
  { name: 'Tüm Creatorlar', id: 'all' },
  { name: 'Gastronomi & Gurme', id: 'gastronomi' },
  { name: 'Lüks Turizm & Otel', id: 'turizm' },
  { name: 'Lifestyle & Seyahat', id: 'lifestyle' },
  { name: 'Mimari, Villa & Gayrimenkul', id: 'mimari' },
  { name: 'Moda & Trend', id: 'moda' },
];

export const creatorsList: CreatorItem[] = [
  {
    id: 'creator-1',
    name: 'Ezgi Güçlü',
    handle: '@ezgigucllu',
    niche: 'Lüks Turizm & Seyahat',
    nicheCategory: 'turizm',
    followers: '420K',
    reach: '2.8M/Ay',
    engagementRate: '%6.8',
    avatarImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop',
    verified: true,
    platforms: ['instagram', 'tiktok'],
    tags: ['Bodrum', 'Didim', 'Otel & Beach'],
    pastBrands: ['Dior Beach Club', 'SQ Beach Club', 'Mekan Suites'],
    bio: 'Ege kıyıları, lüks tatil rotaları ve bohem sahil otelleri üzerine sinematik 9:16 vlog üreticisi.',
  },
  {
    id: 'creator-2',
    name: 'Defne Bozkurt',
    handle: '@defnebozkurt.eats',
    niche: 'Gastronomi & Gurme Eleştirmeni',
    nicheCategory: 'gastronomi',
    followers: '340K',
    reach: '3.1M/Ay',
    engagementRate: '%8.2',
    avatarImage: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=600&auto=format&fit=crop',
    verified: true,
    platforms: ['instagram', 'tiktok', 'youtube'],
    tags: ['Ege Mutfağı', 'Mezeler', 'Fine Dining'],
    pastBrands: ['Bebek Bodrum', 'Aytepe Sofrası', 'Bulvar Künefe'],
    bio: 'Ege’nin gizli lezzet duraklarını ve lüks restoran menülerini yüksek iştah kabartan kurgularla keşfediyor.',
  },
  {
    id: 'creator-3',
    name: 'Mert Eren',
    handle: '@merteren.arch',
    niche: 'Mimari, Villa & Gayrimenkul',
    nicheCategory: 'mimari',
    followers: '540K',
    reach: '3.6M/Ay',
    engagementRate: '%5.9',
    avatarImage: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=600&auto=format&fit=crop',
    verified: true,
    platforms: ['instagram', 'youtube'],
    tags: ['Villa Turu', 'Akbük', 'Lüks Mimari'],
    pastBrands: ['Mertsky', 'Defne Dekorasyon', 'Mülkünü Hesapla'],
    bio: 'Didim, Bodrum ve Çeşme’deki imza mimari villaları drone ve 4K stabilizasyon turlarıyla alıcılarla buluşturuyor.',
  },
  {
    id: 'creator-4',
    name: 'Can Aksoy',
    handle: '@canaksoy_',
    niche: 'Lifestyle & Teknoloji',
    nicheCategory: 'lifestyle',
    followers: '680K',
    reach: '4.2M/Ay',
    engagementRate: '%6.4',
    avatarImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop',
    verified: true,
    platforms: ['instagram', 'youtube', 'tiktok'],
    tags: ['Teknoloji', 'Lüks Yaşam', 'Mekan'],
    pastBrands: ['Halil Usta Servis', 'Onyx Lounge', 'Sensation Club'],
    bio: 'Yüksek tempolu video kurguları, teknolojik ürün deneyimleri ve Ege gece hayatı rehberleri.',
  },
  {
    id: 'creator-5',
    name: 'Selin Yılmaz',
    handle: '@selinyilmaz.style',
    niche: 'Moda, Takı & Mücevher',
    nicheCategory: 'moda',
    followers: '310K',
    reach: '2.1M/Ay',
    engagementRate: '%7.1',
    avatarImage: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=600&auto=format&fit=crop',
    verified: true,
    platforms: ['instagram', 'tiktok'],
    tags: ['Mücevher', 'Yaz Modası', 'Lüks'],
    pastBrands: ['MNA Kuyumculuk', 'Dior Beach', 'Rai Exclusive'],
    bio: 'Yaz stili, altın & pırlanta kombinleri ve prestijli sahil davetlerinin stil ikonlarından biri.',
  },
  {
    id: 'creator-6',
    name: 'Kaan Demir',
    handle: '@kaandemir.marine',
    niche: 'Denizcilik, Yat & Seyahat',
    nicheCategory: 'turizm',
    followers: '280K',
    reach: '1.8M/Ay',
    engagementRate: '%6.1',
    avatarImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop',
    verified: true,
    platforms: ['instagram', 'youtube'],
    tags: ['Yat Kiralama', 'Mavi Tur', 'Koylar'],
    pastBrands: ['Yat Sat Kirala', 'Didim D-Marin', 'Cennet Koyu'],
    bio: 'Didim, Göcek ve Bodrum koylarında lüks motoryat turları, yelken rotaları ve deniz tatili rehberi.',
  },
  {
    id: 'creator-7',
    name: 'Buse Arslan',
    handle: '@busearslan.chef',
    niche: 'Yöresel Lezzet & Gastronomi',
    nicheCategory: 'gastronomi',
    followers: '490K',
    reach: '3.8M/Ay',
    engagementRate: '%9.1',
    avatarImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop',
    verified: true,
    platforms: ['instagram', 'tiktok'],
    tags: ['Kastyörem', 'Kahvaltı', 'Doğal Ürünler'],
    pastBrands: ['Kastyörem', 'Aytepe Sofrası', 'Emser Grill'],
    bio: 'Köy kahvaltıları, organik gurme lezzetler ve yöresel Türk mutfağının viral ses getiren içerikleri.',
  },
  {
    id: 'creator-8',
    name: 'Barış Yıldız',
    handle: '@barisyildiz.reels',
    niche: 'Trend Reels & Eğlence',
    nicheCategory: 'lifestyle',
    followers: '820K',
    reach: '6.5M/Ay',
    engagementRate: '%10.4',
    avatarImage: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop',
    verified: true,
    platforms: ['tiktok', 'instagram'],
    tags: ['Viral Reels', 'Mekan İnceleme', 'Eğlence'],
    pastBrands: ['Sensation Club', 'Onyx Lounge', 'Reklam Deposu'],
    bio: 'Mekan açılışlarında saatler içinde 1 milyon izlenmeyi aşan trend ses ve mizahi kurguların ustası.',
  }
];
