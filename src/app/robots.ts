import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/admin',
        '/admin/*',
        '/admingiris',
        '/musteri-paneli',
        '/musteri-paneli/*',
        '/musteri-giris',
        '/api/*',
      ],
    },
    sitemap: 'https://altunmedya.com/sitemap.xml',
  };
}
