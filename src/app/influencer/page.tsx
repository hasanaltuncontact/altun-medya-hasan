import { Metadata } from 'next';
import { siteConfig } from '@/config/site.config';
import InfluencerClient from './InfluencerClient';

export const metadata: Metadata = {
  title: 'Didim & Ege Influencer Pazarlama Ağı — Markalar & İçerik Üreticileri',
  description:
    'Didim, Bodrum ve Ege bölgesindeki otel, restoran, beach club ve lüks markalar için doğrulanmış influencer ve içerik üreticisi ağı. Yüksek erişimli iş birlikleri.',
  alternates: {
    canonical: `${siteConfig.url}/influencer`,
  },
  openGraph: {
    title: 'Didim & Ege Influencer Pazarlama Ağı | ALTUN MEDYA',
    description:
      'Ege kıyısındaki seçkin işletmeler için gerçek etkileşimli yerel ve ulusal creator ağı.',
    url: `${siteConfig.url}/influencer`,
    type: 'website',
  },
};

export default function InfluencerPage() {
  return <InfluencerClient />;
}
