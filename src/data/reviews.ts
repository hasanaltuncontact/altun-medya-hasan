export interface ReviewItem {
  id: string;
  author: string;
  role: string;
  company: string;
  comment: string;
  rating: number;
  avatar: string;
}

export const reviewsList: ReviewItem[] = [
  {
    id: 'review-1',
    author: 'Halil Usta',
    role: 'Firma Sahibi',
    company: 'Halil Usta Ford Servis',
    comment: 'Altun Medya ile çalışmaya başladıktan sonra sosyal medya trafiğimiz ve servis randevularımız gözle görülür şekilde arttı. Reels videolarının kalitesi harika.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop'
  },
  {
    id: 'review-2',
    author: 'Mustafa Nuri',
    role: 'Yönetici',
    company: 'MNA Kuyumculuk',
    comment: 'Ürün çekimleri ve takı koleksiyonumuz için hazırladıkları videolar markamıza tam anlamıyla sınıf atlattı. Ege bölgesindeki en profesyonel stüdyo.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop'
  },
  {
    id: 'review-3',
    author: 'Mert Göktürk',
    role: 'Kurucu',
    company: 'Mertsky',
    comment: 'Web sitemizin yenilenmesi ve Google reklam yönetimi süreçlerinde sundukları hızlı çözümler ve editoryal tasarım kalitesi için teşekkür ederiz.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop'
  }
];

export const editorialStats = [
  { value: '120+', label: 'MUTLU MÜŞTERİ' },
  { value: '98%', label: 'SATIŞ & ETKİLEŞİM ARTIŞI' },
  { value: '48M+', label: 'ORGANİK İZLENME' },
  { value: '360°', label: 'MEDYA & PRODÜKSİYON' }
];
