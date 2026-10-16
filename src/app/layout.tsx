import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Manrope } from 'next/font/google';
import '@/styles/globals.css';
import CustomCursor from '@/components/layout/CustomCursor';
import { siteConfig } from '@/config/site.config';

import SEOEngineProviderWrapper from '@/components/providers/SEOEngineProviderWrapper';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin-ext'],
  variable: '--font-jakarta',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin-ext'],
  variable: '--font-manrope',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'ALTUN MEDYA — Branding, Web Tasarım & Video Prodüksiyon Stüdyosu',
    template: '%s | ALTUN MEDYA',
  },
  description: siteConfig.description,
  keywords: [
    'Didim Sosyal Medya',
    'Didim Sosyal Medya Ajansı',
    'Didim Reklam Ajansı',
    'Didim Dijital Pazarlama',
    'Didim Web Tasarım',
    'Didim Video Çekimi',
    'Didim Fotoğraf Çekimi',
    'Didim Drone Çekimi',
    'Didim Reels Çekimi',
    'Didim Tanıtım Filmi',
    'Didim Düğün Çekimi',
    'Didim Grafik Tasarım',
    'Didim Yerel SEO',
  ],
  authors: [{ name: 'ALTUN MEDYA' }],
  creator: 'ALTUN MEDYA',
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: siteConfig.url,
    title: 'ALTUN MEDYA — Branding, Web Tasarım & Video Prodüksiyon Stüdyosu',
    description: siteConfig.description,
    siteName: 'ALTUN MEDYA',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ALTUN MEDYA — Branding & Marketing Studio',
    description: siteConfig.description,
  },
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfessionalService',
      '@id': 'https://altunmedya.com/#organization',
      name: 'ALTUN MEDYA',
      legalName: siteConfig.legalName,
      url: siteConfig.url,
      description: siteConfig.description,
      telephone: '+905443135557',
      email: siteConfig.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Altınkum Mah. Yalı Cad.',
        addressLocality: 'Didim',
        addressRegion: 'Aydın',
        postalCode: '09270',
        addressCountry: 'TR',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 37.3736,
        longitude: 27.2568,
      },
      areaServed: [
        { '@type': 'City', name: 'Didim' },
        { '@type': 'City', name: 'Akbük' },
        { '@type': 'City', name: 'Bodrum' },
        { '@type': 'City', name: 'Kuşadası' },
        { '@type': 'City', name: 'Söke' },
        { '@type': 'AdministrativeArea', name: 'Aydın' },
      ],
      sameAs: [
        siteConfig.social.instagram,
        siteConfig.social.linkedin,
        siteConfig.social.youtube,
      ],
      priceRange: '₺₺₺',
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '09:00',
          closes: '19:00',
        },
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://altunmedya.com/#website',
      url: siteConfig.url,
      name: siteConfig.name,
      publisher: { '@id': 'https://altunmedya.com/#organization' },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={`scroll-smooth ${plusJakarta.variable} ${manrope.variable}`}>
      <body className="bg-[#050505] text-[#F7F6F2] font-sans antialiased selection:bg-[#B33A06] selection:text-white min-h-screen flex flex-col justify-between">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <SEOEngineProviderWrapper>
          <CustomCursor />
          {children}
        </SEOEngineProviderWrapper>
      </body>
    </html>
  );
}
