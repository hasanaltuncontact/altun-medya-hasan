import type { ServiceIcon } from './client-profile-types';
import { clientLogos, type ClientLogo } from './clients';
import { reelsList, type ReelItem } from './reels';
import { equipmentById, type Equipment } from './equipment';
import type { ClientProfile, ProfileVideo } from './client-profile-types';
import { profilesPart1 } from './client-profiles/part1';
import { profilesPart2 } from './client-profiles/part2';
import { profilesPart3 } from './client-profiles/part3';

export type { ClientProfile, ProfileVideo, ServiceIcon };

/**
 * FİRMA REFERANS SAYFALARI: TEK VERİ KAYNAĞI
 * ------------------------------------------------------------
 * İçerikler src/data/client-profiles/part1..3.ts dosyalarındadır.
 * Her obje otomatik olarak altunmedya.com/<slug> sayfasını üretir, sitemap'e
 * eklenir ve "Referans İşlerimiz" bölümündeki logo bu sayfaya link olur.
 *
 * "// DÜZENLE" ile işaretli alanlar taslaktır, gerçek veriyle güncelleyin.
 *
 * INSTAGRAM GÖNDERİLERİ: Firmanın Instagram'ında göstermek istediğiniz
 * gönderi/reels'in linkini kopyalayıp `instagram.posts` dizisine ekleyin:
 *   posts: ['https://www.instagram.com/reel/ABC123/', 'https://www.instagram.com/p/XYZ789/']
 * Instagram'ın resmi gömme koduyla (token gerektirmez) sayfada gösterilir.
 */
export const clientProfiles: ClientProfile[] = [...profilesPart1, ...profilesPart2, ...profilesPart3];

export function getProfile(slug: string): ClientProfile | undefined {
  return clientProfiles.find((p) => p.slug === slug);
}

export function getProfileLogo(profile: ClientProfile): ClientLogo | undefined {
  return clientLogos.find((c) => c.name === profile.logoName);
}

export function profileHrefByLogoName(name: string): string | undefined {
  const p = clientProfiles.find((x) => x.logoName === name);
  return p ? `/${p.slug}` : undefined;
}

export function getProfileVideos(profile: ClientProfile): ProfileVideo[] {
  const fromReels: ProfileVideo[] = (profile.reelIds ?? [])
    .map((id) => reelsList.find((r) => r.id === id))
    .filter((r): r is ReelItem => Boolean(r))
    .map((r) => ({ title: r.title, videoUrl: r.videoUrl, posterImage: r.posterImage, views: r.views, description: r.description }));
  return [...fromReels, ...(profile.extraVideos ?? [])];
}

export function getProfileEquipment(profile: ClientProfile): Equipment[] {
  return profile.equipment.map(equipmentById).filter((e): e is Equipment => Boolean(e));
}
