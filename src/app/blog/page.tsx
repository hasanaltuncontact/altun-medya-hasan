import { Metadata } from 'next';
import BlogIndexClient from './BlogIndexClient';

export const metadata: Metadata = {
  title: 'Bölgesel Bilgi Bankası & Stratejik Blog — Didim & Ege Rehberleri',
  description:
    'Didim, Akbük, Kuşadası ve Bodrum bölgesindeki işletmeler için yerel SEO rehberleri, video prodüksiyon taktikleri ve sosyal medya stratejileri.',
  alternates: {
    canonical: 'https://altunmedya.com/blog',
  },
  openGraph: {
    title: 'Bölgesel Bilgi Bankası & Stratejik Blog | ALTUN MEDYA',
    description:
      'Didim ve Ege kıyısındaki otel, restoran ve perakende işletmelerinin dijitalde büyümesi için hazırlanan sektörel rehberler.',
    url: 'https://altunmedya.com/blog',
    type: 'website',
  },
};

export default function BlogPage() {
  return <BlogIndexClient />;
}
