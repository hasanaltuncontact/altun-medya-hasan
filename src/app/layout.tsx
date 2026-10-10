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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={`scroll-smooth ${plusJakarta.variable} ${manrope.variable}`}>
      <body className="bg-[#050505] text-[#F7F6F2] font-sans antialiased selection:bg-[#C8FF00] selection:text-black min-h-screen flex flex-col justify-between">
        <SEOEngineProviderWrapper>
          <CustomCursor />
          {children}
        </SEOEngineProviderWrapper>
      </body>
    </html>
  );
}
