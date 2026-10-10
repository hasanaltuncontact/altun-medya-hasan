export interface WorkItem {
  id: string;
  title: string;
  category: string;
  client: string;
  resultMetric: string;
  resultLabel: string;
  image: string;
  description: string;
  tags: string[];
}

export const worksList: WorkItem[] = [
  {
    id: 'work-1',
    title: 'Lüks Sahil Kulübü Dijital Lansmanı',
    category: 'MARKETING & REELS',
    client: 'SQ Beach Club Didim',
    resultMetric: '+340%',
    resultLabel: 'Rezervasyon Artışı',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=900&auto=format&fit=crop',
    description: 'Sezon öncesi 4K dikey Reels çekimleri ve Meta Ads lansman stratejisi ile doğrudan hedef kitleye ulaşıldı.',
    tags: ['Reels Prodüksiyon', 'Meta Ads', 'Influencer']
  },
  {
    id: 'work-2',
    title: 'Kuyumculuk Marka Kimliği & Kampanya',
    category: 'BRANDING & PRODÜKSİYON',
    client: 'MNA Kuyumculuk',
    resultMetric: '2.8M',
    resultLabel: 'Organik İzlenme',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=900&auto=format&fit=crop',
    description: 'Özel makro çekimler ve editoryal katalog tasarımları ile markanın Ege genelindeki bilinirliği katlandı.',
    tags: ['Brand Identity', 'Ürün Çekimi', 'Katalog']
  },
  {
    id: 'work-3',
    title: 'E-Ticaret & Gayrimenkul Portföyü',
    category: 'WEB & DİJİTAL',
    client: 'Mertsky Gayrimenkul',
    resultMetric: '+210%',
    resultLabel: 'Potansiyel Müşteri',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=900&auto=format&fit=crop',
    description: 'Ultra hızlı Next.js web altyapısı, harita entegrasyonu ve Google Ads ile lider konumlandırma.',
    tags: ['Next.js Web', 'Google Ads', 'Lokal SEO']
  }
];
