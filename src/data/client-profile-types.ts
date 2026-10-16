export type ServiceIcon =
  | 'video' | 'camera' | 'drone' | 'web' | 'ads' | 'brand' | 'social' | 'seo' | 'influencer' | 'print';

export interface ProfileVideo {
  title: string;
  videoUrl: string;
  posterImage: string;
  views?: string;
  description?: string;
}

export interface ClientProfile {
  slug: string;
  /** clients.ts içindeki `name` ile birebir aynı olmalı */
  logoName: string;
  displayName: string;
  /** Gerçek sektör, örn. "İnternet Servis Sağlayıcı" */
  sector: string;
  location: string;
  since: string;
  /** H1 altındaki SEO alt başlığı, örn. "Didim internet sağlayıcısı için sosyal medya & video prodüksiyon" */
  seoTitle: string;
  tagline: string;
  intro: string;
  cover?: string;
  accent: string;

  /** NELER YAPTIK */
  did: string[];
  services: { title: string; desc: string; icon: ServiceIcon }[];

  /** NELER ÜRETTİK */
  made: string[];
  deliverables: { value: string; label: string }[];

  /** NELER BAŞARDIK */
  achieved: string[];
  results: { value: string; label: string }[];
  milestones: string[];

  equipment: string[];
  faq: { q: string; a: string }[];

  reelIds?: string[];
  extraVideos?: ProfileVideo[];
  instagram?: { handle: string; bio?: string; posts?: string[] };
  links: { website?: string; maps: string; phone?: string };
  keywords: string[];
}

export const maps = (q: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
export const cover = (slug: string) => `/assets/portfolio/${slug}.jpg`;
