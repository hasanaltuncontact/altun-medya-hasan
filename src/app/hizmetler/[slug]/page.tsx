import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { servicesDatabase } from '@/data/services-database';
import { seoKeywordsDetailed } from '@/config/seo-keywords';
import ServiceDetailClient from './ServiceDetailClient';

interface ServicePageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const category = servicesDatabase.find((c) => c.slug === params.slug);
  const seoKeyword = seoKeywordsDetailed.find((k) => k.slug === params.slug);

  const title = category?.title || seoKeyword?.keyword || 'Hizmet Detayı';
  const description = category?.description || seoKeyword?.description || 'ALTUN MEDYA 360° Medya & Dijital Stüdyo hizmet detayları.';

  return {
    title: `${title} | Didim ALTUN MEDYA`,
    description,
    openGraph: {
      title: `${title} | Didim ALTUN MEDYA`,
      description,
      url: `https://altunmedya.com/hizmetler/${params.slug}`,
    },
  };
}

export function generateStaticParams() {
  const categorySlugs = servicesDatabase.map((c) => ({ slug: c.slug }));
  const keywordSlugs = seoKeywordsDetailed.map((k) => ({ slug: k.slug }));
  return [...categorySlugs, ...keywordSlugs];
}

export default function ServiceDetailPage({ params }: ServicePageProps) {
  const category = servicesDatabase.find((c) => c.slug === params.slug);
  const keywordTarget = seoKeywordsDetailed.find((k) => k.slug === params.slug);

  if (!category && !keywordTarget) {
    notFound();
  }

  const activeCategory = category || servicesDatabase.find((c) => c.badges.some((b) => keywordTarget?.badge.includes(b))) || servicesDatabase[0];
  const pageTitle = keywordTarget?.keyword || category?.title || activeCategory.title;
  const pageDesc = keywordTarget?.description || category?.description || activeCategory.description;

  return (
    <ServiceDetailClient
      pageTitle={pageTitle}
      pageDesc={pageDesc}
      activeCategory={activeCategory}
      keywordTarget={keywordTarget}
    />
  );
}
