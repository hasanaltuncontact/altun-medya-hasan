export interface CreatorItem {
  id: string;
  name: string;
  handle: string;
  niche: string;
  followers: string;
  reach: string;
  avatarImage: string;
  tags: string[];
}

export const creatorsList: CreatorItem[] = [
  {
    id: 'creator-1',
    name: 'Ezgi Güçlü',
    handle: '@ezgigucllu',
    niche: 'Lifestyle & Seyahat',
    followers: '420K',
    reach: '2.8M/Ay',
    avatarImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop',
    tags: ['Bodrum', 'Didim', 'Otel & Beach']
  },
  {
    id: 'creator-2',
    name: 'Can Aksoy',
    handle: '@canaksoy_',
    niche: 'Otomotiv & Tech',
    followers: '680K',
    reach: '4.2M/Ay',
    avatarImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop',
    tags: ['Supercar', 'Tech', 'Reels']
  },
  {
    id: 'creator-3',
    name: 'Selin Yılmaz',
    handle: '@selinyilmazbeauty',
    niche: 'Güzellik & Cilt Bakımı',
    followers: '310K',
    reach: '2.1M/Ay',
    avatarImage: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=600&auto=format&fit=crop',
    tags: ['Beauty', 'Editorial', 'TikTok']
  },
  {
    id: 'creator-4',
    name: 'Mert Eren',
    handle: '@merteren.arch',
    niche: 'Mimari & Lüks Tasarım',
    followers: '540K',
    reach: '3.6M/Ay',
    avatarImage: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=600&auto=format&fit=crop',
    tags: ['Mimari', 'Villa', 'Design']
  },
  {
    id: 'creator-5',
    name: 'Defne Bozkurt',
    handle: '@defnebozkurt',
    niche: 'Gastronomi & Gurme',
    followers: '290K',
    reach: '1.9M/Ay',
    avatarImage: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=600&auto=format&fit=crop',
    tags: ['Fine Dining', 'Ege Mutfagi', 'Gourmet']
  }
];
