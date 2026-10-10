import { MetadataRoute } from 'next';
import { servicesDatabase } from '@/data/services-database';
import { seoKeywordsDetailed } from '@/config/seo-keywords';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://altunmedya.com';

  const categoryUrls = servicesDatabase.map((cat) => ({
    url: `${baseUrl}/hizmetler/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const keywordUrls = seoKeywordsDetailed.map((kw) => ({
    url: `${baseUrl}/hizmetler/${kw.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const corporateUrls = ['hakkimizda', 'biz-kimiz', 'hikayemiz'].map((slug) => ({
    url: `${baseUrl}/kurumsal/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    ...corporateUrls,
    ...categoryUrls,
    ...keywordUrls,
  ];
}
