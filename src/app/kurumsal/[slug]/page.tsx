import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { aboutDatabase } from '@/data/about-database';
import CorporateDetailClient from './CorporateDetailClient';

interface CorporatePageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: CorporatePageProps): Promise<Metadata> {
  const pageData = aboutDatabase.find((item) => item.slug === params.slug);

  if (!pageData) {
    return {
      title: 'Kurumsal | Didim ALTUN MEDYA',
      description: 'ALTUN MEDYA 360° Kurumsal Medya Stüdyosu',
    };
  }

  return {
    title: `${pageData.badge} - ${pageData.title} | ALTUN MEDYA`,
    description: pageData.heroDescription,
    openGraph: {
      title: `${pageData.badge} | ALTUN MEDYA Didim`,
      description: pageData.heroDescription,
      url: `https://altunmedya.com/kurumsal/${params.slug}`,
    },
  };
}

export function generateStaticParams() {
  return aboutDatabase.map((item) => ({
    slug: item.slug,
  }));
}

export default function CorporatePage({ params }: CorporatePageProps) {
  const pageData = aboutDatabase.find((item) => item.slug === params.slug);

  if (!pageData) {
    notFound();
  }

  return <CorporateDetailClient pageData={pageData} />;
}
