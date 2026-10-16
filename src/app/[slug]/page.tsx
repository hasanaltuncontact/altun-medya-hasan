import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { clientProfiles, getProfile, getProfileLogo, getProfileVideos } from '@/data/client-profiles';
import { siteConfig } from '@/config/site.config';
import ClientProfileClient from './ClientProfileClient';

interface ClientPageProps {
  params: { slug: string };
}

// Sadece client-profiles.ts'deki firmalar için sayfa üretilir; diğer tüm yollar 404 olur.
export const dynamicParams = false;

export function generateStaticParams() {
  return clientProfiles.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: ClientPageProps): Promise<Metadata> {
  const p = getProfile(params.slug);
  if (!p) return {};

  const title = `${p.displayName} — Referans Çalışması`;
  const description = `${p.displayName} (${p.location}) için ALTUN MEDYA'nın yaptığı işler: ${p.services
    .map((s) => s.title)
    .join(', ')}. ${p.tagline}`;
  const url = `${siteConfig.url}/${p.slug}`;
  const image = p.cover ?? getProfileLogo(p)?.svgPath;

  return {
    title,
    description,
    keywords: [...p.keywords, 'ALTUN MEDYA referans', `${p.displayName} sosyal medya`],
    alternates: { canonical: url },
    openGraph: {
      title: `${p.displayName} × ALTUN MEDYA`,
      description: p.tagline,
      url,
      type: 'profile',
      images: image ? [{ url: image }] : undefined,
    },
    twitter: { card: 'summary_large_image', title: `${p.displayName} × ALTUN MEDYA`, description: p.tagline },
  };
}

export default function ClientPage({ params }: ClientPageProps) {
  const profile = getProfile(params.slug);
  if (!profile) notFound();

  const logo = getProfileLogo(profile);
  const videos = getProfileVideos(profile);
  const url = `${siteConfig.url}/${profile.slug}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CreativeWork',
        name: `${profile.displayName} — ALTUN MEDYA Referans Çalışması`,
        url,
        description: profile.tagline,
        image: profile.cover ? `${siteConfig.url}${profile.cover}` : undefined,
        creator: { '@type': 'Organization', name: siteConfig.name, url: siteConfig.url },
        about: {
          '@type': 'LocalBusiness',
          name: profile.displayName,
          address: profile.location,
          ...(profile.links.website ? { url: profile.links.website } : {}),
        },
        keywords: profile.keywords.join(', '),
      },
      ...videos.map((v) => ({
        '@type': 'VideoObject',
        name: v.title,
        description: v.description ?? profile.tagline,
        thumbnailUrl: `${siteConfig.url}${v.posterImage}`,
        contentUrl: `${siteConfig.url}${v.videoUrl}`,
        uploadDate: `${profile.since}-01-01`,
      })),
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Anasayfa', item: siteConfig.url },
          { '@type': 'ListItem', position: 2, name: 'Referanslar', item: `${siteConfig.url}/referanslar` },
          { '@type': 'ListItem', position: 3, name: profile.displayName, item: url },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ClientProfileClient profile={profile} logo={logo} videos={videos} />
    </>
  );
}
