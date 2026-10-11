// ==================================================
// ALTUN MEDYA ADVANCED SEO CONTENT ENGINE
// DATA SCHEMAS, DATABASE ENTITIES & UTILITIES
// ==================================================

export type PageType = 
  | 'service' 
  | 'location' 
  | 'sector' 
  | 'service_location' 
  | 'service_sector' 
  | 'service_location_sector' 
  | 'blog' 
  | 'case_study' 
  | 'landing';

export type SearchIntent = 'commercial' | 'transactional' | 'informational' | 'navigational';

export type IndexStatus = 'indexed' | 'not_indexed' | 'pending' | 'noindex';

export interface LocationEntity {
  id: string;
  name: string;
  city: string;
  district?: string;
  slug: string;
  shortDesc: string;
  regionalHighlight: string;
  regionalDescription?: string;
  latitude: number;
  longitude: number;
}

export interface SectorEntity {
  id: string;
  name: string;
  slug: string;
  description: string;
  commonProblems: string[];
  painPoints?: string[];
  recommendedServices: string[];
  faq: { question: string; answer: string }[];
}

export interface ServiceEntity {
  id: string;
  name: string;
  slug: string;
  description: string;
  features: string[];
  equipmentUsed: string[];
  targetSectors: string[];
  faq: { question: string; answer: string }[];
}

export interface InternalLinkItem {
  id: string;
  sourcePageId: string;
  targetPageId: string;
  anchorText: string;
  targetSlug: string;
  status: 'suggested' | 'accepted' | 'rejected';
  relevanceScore: number;
}

export interface RedirectRule {
  id: string;
  fromUrl: string;
  toUrl: string;
  statusCode: 301 | 302;
  createdAt: string;
}

export interface SEOPageModel {
  id: string;
  slug: string;
  title: string;
  pageType: PageType;
  searchIntent: SearchIntent;
  primaryKeyword: string;
  secondaryKeywords: string[];
  h1: string;
  seoTitle: string;
  seoDescription: string;
  canonicalUrl: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  indexStatus: IndexStatus;
  isPublished: boolean;
  seoScore: number;
  duplicateRiskPercent: number;
  locationId?: string;
  sectorId?: string;
  serviceId?: string;
  clusterId?: string;
  schemaType?: string;
  content: {
    introAnswer: string; // Direct snippet answer to search intent
    mainContentHtml: string;
    regionalCallout?: string;
    equipmentUsed?: string[];
    caseStudyId?: string;
    faq: { question: string; answer: string }[];
    ctaText: string;
    ctaUrl: string;
  };
  gscData?: {
    impressions: number;
    clicks: number;
    ctr: number;
    avgPosition: number;
  };
  updatedAt: string;
  createdAt: string;
}

export interface TopicalCluster {
  id: string;
  name: string;
  pillarPageId: string;
  supportingPageIds: string[];
}

// ==================================================
// INITIAL CENTRALIZED DATABASES
// ==================================================

export const initialLocations: LocationEntity[] = [
  { id: 'loc-didim', name: 'Didim', city: 'Aydın', district: 'Didim', slug: 'didim', shortDesc: 'Didim Marina, Altınkum ve Ege turizm bölgesi.', regionalHighlight: 'Marina, Lüks Oteller, Beach Clublar & Konut Projeleri', latitude: 37.3822, longitude: 27.2583 },
  { id: 'loc-kusadasi', name: 'Kuşadası', city: 'Aydın', district: 'Kuşadası', slug: 'kusadasi', shortDesc: 'Kruvaziyer turizmi, marina ve sahil işletmeleri.', regionalHighlight: 'Marina, Kruvaziyer Turizmi, Sahil Restoranları', latitude: 37.8579, longitude: 27.2610 },
  { id: 'loc-soke', name: 'Söke', city: 'Aydın', district: 'Söke', slug: 'soke', shortDesc: 'Söke OSB sanayi, tarım ve ticari merkez.', regionalHighlight: 'Sanayi Tesisleri, Tarım & Yerel Ticaret', latitude: 37.7519, longitude: 27.4069 },
  { id: 'loc-aydin', name: 'Aydın', city: 'Aydın', district: 'Merkez', slug: 'aydin', shortDesc: 'Aydın büyükşehir merkez ve kurumsal şirketler.', regionalHighlight: 'Kurumsal Firmalar, Üniversite Kitle & E-Ticaret', latitude: 37.8444, longitude: 27.8458 },
  { id: 'loc-nazilli', name: 'Nazilli', city: 'Aydın', district: 'Nazilli', slug: 'nazilli', shortDesc: 'Nazilli e-ticaret üreticileri ve sanayi firmaları.', regionalHighlight: 'Yöresel E-Ticaret & İmalat Sanayii', latitude: 37.9150, longitude: 28.3217 },
  { id: 'loc-bodrum', name: 'Bodrum', city: 'Muğla', district: 'Bodrum', slug: 'bodrum', shortDesc: 'Bodrum Yalıkavak marina ve ultra lüks turizm.', regionalHighlight: 'Yalıkavak Marina, Lüks Oteller & Villalar', latitude: 37.0344, longitude: 27.4305 },
  { id: 'loc-akbuk', name: 'Akbük', city: 'Aydın', district: 'Didim', slug: 'akbuk', shortDesc: 'Akbük körfezi otel ve sahil restoranları.', regionalHighlight: 'Butik Oteller & Sahil Gastronomisi', latitude: 37.4194, longitude: 27.4128 },
];

export const initialSectors: SectorEntity[] = [
  {
    id: 'sec-hotel',
    name: 'Otel & Turizm',
    slug: 'otel-turizm',
    description: 'Resort oteller, butik oteller ve marinalar için dijital pazarlama ve prodüksiyon.',
    commonProblems: ['Düşük Sezonda Doluluk Düşüşü', 'Yurtdışı Müşteri Rezervasyon Eksikliği', 'Google Harita Görünürlüğü'],
    recommendedServices: ['4K Video Prodüksiyon', 'Meta Ads', 'Google Ads', 'Yerel SEO'],
    faq: [
      { question: 'Oteller için 4K Reels videoları rezervasyon artırır mı?', answer: 'Evet, özellikle yurtdışı hedef kitleye yönelik sinematik oda ve sahil videoları tıklama başına rezervasyon oranını ortalama %2.8 artırır.' }
    ]
  },
  {
    id: 'sec-restaurant',
    name: 'Restoran & Gastronomi',
    slug: 'restoran-gastronomi',
    description: 'Lüks beach clublar, sahil restoranları ve cafe zincirleri için görsel içerik.',
    commonProblems: ['Masa Doluluk Oranı', 'Sezon Dışı Satış Kaybı', 'İştah Kabartan Görsel Eksikliği'],
    recommendedServices: ['Lezzet Fotoğrafçılığı', 'Reels Lab Video', 'Sosyal Medya Yönetimi'],
    faq: [
      { question: 'Restoran menü çekimlerinde hangi ışık kullanılır?', answer: 'Profoto B10X ve doğal pencere ışığı kombinasyonu ile yemeklerin tazeliği ve dokusu ortaya çıkarılır.' }
    ]
  },
  {
    id: 'sec-realestate',
    name: 'Gayrimenkul & Mimari',
    slug: 'gayrimenkul-mimari',
    description: 'Lüks villa projeleri, müteahhitler ve emlak portföyleri için drone ve sinematik çekimler.',
    commonProblems: ['Yabancı Alıcıya Ulaşamamak', 'Portföy Görsel Kalitesizliği', 'Yavaş Satış Süreci'],
    recommendedServices: ['8K Drone Çekimi', '360 Sinematik Tur', 'Google PMax Ads'],
    faq: [
      { question: 'Villa çekimlerinde drone kullanımı gerekli mi?', answer: 'Kesinlikle! 8K hava turları deniz mesafesini ve arsa büyüklüğünü net göstererek yabancı yatırımcılara anında güven verir.' }
    ]
  },
];

export const initialServices: ServiceEntity[] = [
  {
    id: 'srv-social',
    name: 'Sosyal Medya Yönetimi',
    slug: 'sosyal-medya-yonetimi',
    description: 'Instagram, TikTok ve Facebook için 9:16 dikey video üretimi ve editoryal yönetim.',
    features: ['30 Günlük İçerik Takvimi', 'Stüdyo & Mekan Çekimleri', 'Haftalık Raporlama'],
    equipmentUsed: ['Sony FX6 4K Camera', 'Aputure 600d Pro', 'DaVinci Resolve 18'],
    targetSectors: ['Otel & Turizm', 'Restoran & Gastronomi', 'Kuyumculuk'],
    faq: [{ question: 'Sosyal medya yönetimi neleri kapsar?', answer: 'Planlı 9:16 Reels çekimleri, grafik tasarım, topluluk etkileşimi ve reklam optimizasyonunu kapsar.' }]
  },
  {
    id: 'srv-video',
    name: '4K Sinematik Video Prodüksiyon',
    slug: 'video-produksiyon',
    description: 'Sony FX6 4K ve RED Komodo kameralar ile TV ve dijital reklam filmleri.',
    features: ['4K 120fps Yüksek Hız', 'Drone Hava Çekimi', 'Profesyonel Seslendirme'],
    equipmentUsed: ['Sony FX6', 'RED Komodo 6K', 'DJI Inspire 3 Drone', 'Zeiss CP.3 Lensler'],
    targetSectors: ['Otel & Turizm', 'Gayrimenkul & Mimari', 'Sanayi & İmalat'],
    faq: [{ question: 'Tanıtım filmi çekimleri kaç gün sürer?', answer: 'Mekan büyüklüğüne göre 1 ila 3 çekim günü ve 5 iş günü kurgu/color stüdyo süreci alır.' }]
  },
];

// ==================================================
// 10 DISTINCT HIGH-QUALITY DEMO SEO PAGES SCHEMA
// ==================================================

export const initialSEOPageModels: SEOPageModel[] = [
  {
    id: 'seo-1',
    slug: 'didim-sosyal-medya-ajansi',
    title: 'Didim Sosyal Medya Ajansı',
    pageType: 'service_location',
    searchIntent: 'commercial',
    primaryKeyword: 'Didim Sosyal Medya Ajansı',
    secondaryKeywords: ['Didim Instagram Yönetimi', 'Didim Reels Çekimi', 'Didim Dijital Ajans'],
    h1: 'Didim Sosyal Medya Ajansı & 360° Dijital Medya Stüdyosu',
    seoTitle: 'Didim Sosyal Medya Ajansı | 4K Reels & Reklam Yönetimi | ALTUN MEDYA',
    seoDescription: 'Didim, Altınkum ve Marinalardaki otel, restoran ve gayrimenkul markaları için profesyonel sosyal medya yönetimi, 4K Reels üretimi ve Meta reklam danışmanlığı.',
    canonicalUrl: 'https://altunmedya.com/hizmetler/didim-sosyal-medya-ajansi',
    ogTitle: 'Didim Sosyal Medya Ajansı — Altun Medya Stüdyosu',
    ogDescription: 'Didim markalarını dijitalde büyüten 360° sosyal medya yönetimi ve sinematik video prodüksiyonu.',
    ogImage: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1200&auto=format&fit=crop',
    indexStatus: 'indexed',
    isPublished: true,
    seoScore: 94,
    duplicateRiskPercent: 4,
    locationId: 'loc-didim',
    serviceId: 'srv-social',
    content: {
      introAnswer: 'Didim Sosyal Medya Ajansı Altun Medya; Didim, Altınkum ve Akbük bölgesindeki otel, restoran, beach club ve gayrimenkul işletmelerine aylık planlı 4K Reels çekimi, editoryal feed kurgusu ve satış odaklı Meta Ads yönetimi sunan yetkili kreatif stüdyodur.',
      mainContentHtml: `
        <h2>Didim'de Sosyal Medyada Neden Profesyonel Stüdyo İle Çalışmalısınız?</h2>
        <p>Didim turizm ve ticaret ekosisteminde hedef kitlenize ulaşmanın en hızlı yolu, yüksek izlenme oranlı dikey video kurgularıdır. Geleneksel ajansların aksine, kendi Sony 4K sinema kameralarımız ve DJI drone donanımımız ile mekanınıza gelip çekimlerimizi yapıyoruz.</p>
        <h2>Didim Sosyal Medya Paketlerimiz Neleri Kapsar?</h2>
        <ul>
          <li><strong>Aylık Çekim Günleri:</strong> Didim stüdyo ekibimizin işletmenize gelerek Sony FX6 ile yaptığı 4K çekimler.</li>
          <li><strong>9:16 Viral Reels Kurgusu:</strong> İlk 3 saniyede izleyiciyi yakalayan ses ve kanca tasarımı.</li>
          <li><strong>Meta Ads Büyüme Hunisi:</strong> Harcanan bütçeyi rezervasyon ve müşteriye dönüştüren reklam optimizasyonu.</li>
        </ul>
      `,
      regionalCallout: 'Didim Marina, Altınkum Sahili ve Akbük Koylarındaki 45+ Turizm Tesisinin Yetkili Dijital Medya Partneri.',
      equipmentUsed: ['Sony FX6 4K Cinema Camera', 'DJI Mavic 3 Pro Cine Drone', 'Profoto B10X Flash'],
      faq: [
        { question: 'Didim sosyal medya ajansı çekimleri nerede yapılıyor?', answer: 'Tüm çekimler Didim ve Akbük bölgesindeki kendi işletmenizde, Sony 4K sinema ekipmanlarımız ile gerçekleştirilir.' },
        { question: 'Haftalık reklam performans raporu sunuluyor mu?', answer: 'Evet, Meta Ads Manager ve Google Analytics verileri şeffaf dashboard üzerinden haftalık olarak paylaşılır.' }
      ],
      ctaText: 'Didim Markanız İçin Teklif Alın',
      ctaUrl: '/musteri-paneli'
    },
    gscData: { impressions: 14200, clicks: 890, ctr: 6.27, avgPosition: 1.8 },
    updatedAt: '2026-10-07 05:40',
    createdAt: '2026-09-01 10:00'
  },
  {
    id: 'seo-2',
    slug: 'kusadasi-4k-otel-tanitim-filmi',
    title: 'Kuşadası 4K Otel Tanıtım Filmi',
    pageType: 'service_location_sector',
    searchIntent: 'transactional',
    primaryKeyword: 'Kuşadası 4K Otel Tanıtım Filmi',
    secondaryKeywords: ['Kuşadası Otel Video Çekimi', 'Kuşadası Drone Çekimi', 'Kuşadası Tanıtım Filmi'],
    h1: 'Kuşadası 4K Sinematik Otel & Resort Tanıtım Filmi Prodüksiyonu',
    seoTitle: 'Kuşadası 4K Otel Tanıtım Filmi | 8K Drone & Sinema Çekimi | ALTUN MEDYA',
    seoDescription: 'Kuşadası marina ve sahil otelleri için Sony FX6 4K ve 8K drone çekimleri ile uluslararası rezervasyon getiren sinematik otel tanıtım filmleri.',
    canonicalUrl: 'https://altunmedya.com/hizmetler/kusadasi-4k-otel-tanitim-filmi',
    ogTitle: 'Kuşadası 4K Otel Tanıtım Filmi Prodüksiyonu',
    ogDescription: 'Kuşadası otelleri için sinematik hava ve kara prodüksiyonu.',
    ogImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop',
    indexStatus: 'indexed',
    isPublished: true,
    seoScore: 96,
    duplicateRiskPercent: 2,
    locationId: 'loc-kusadasi',
    sectorId: 'sec-hotel',
    serviceId: 'srv-video',
    content: {
      introAnswer: 'Kuşadası 4K Otel Tanıtım Filmi hizmetimiz; Kuşadası sahil şeridindeki resort ve marina otellerinin mimarisini, odalarını ve lezzet deneyimlerini uluslararası turist kitlelerine aktaran 8K havadan ve karadan sinematik prodüksiyondur.',
      mainContentHtml: `
        <h2>Kuşadası Otelleri İçin Uluslararası Rezervasyon Getiren Tanıtım Filmleri</h2>
        <p>Kuşadası kruvaziyer turizmi ve İngiltere/Almanya pazarında öne çıkmanın yolu, otelinizin atmosferini gerçekçi ve büyüleyici şekilde yansıtmaktır. Zeiss sinema lensleri ve HDR renk derecelendirmesi ile otelinizi küresel standartta tanıtıyoruz.</p>
      `,
      regionalCallout: 'Kuşadası Yat Limanı ve Kadınlar Denizi Bölgesindeki Resort Oteller İçin 4K Prodüksiyon.',
      equipmentUsed: ['Sony FX6 4K', 'DJI Inspire 3 (8K CinemaDNG)', 'Zeiss CP.3 Cinema Lenses'],
      faq: [
        { question: 'Otel tanıtım filmi İngilizce seslendirme içeriyor mu?', answer: 'Evet, ana dilde İngilizce, Almanca ve Rusça profesyonel seslendirme sanatçıları ile çalışıyoruz.' }
      ],
      ctaText: 'Kuşadası Otel Çekimi İçin Teklif Alın',
      ctaUrl: '/musteri-paneli'
    },
    gscData: { impressions: 8900, clicks: 540, ctr: 6.06, avgPosition: 2.1 },
    updatedAt: '2026-10-07 05:40',
    createdAt: '2026-09-05 11:20'
  },
  {
    id: 'seo-3',
    slug: 'soke-sanayi-dijital-pazarlama',
    title: 'Söke Sanayi Dijital Pazarlama',
    pageType: 'service_location_sector',
    searchIntent: 'commercial',
    primaryKeyword: 'Söke Sanayi Dijital Pazarlama',
    secondaryKeywords: ['Söke Web Tasarım', 'Söke B2B Reklam', 'Söke Şirket Web Siteleri'],
    h1: 'Söke Sanayi & Üretim Firmaları İçin Dijital Pazarlama ve B2B Büyüme Hunisi',
    seoTitle: 'Söke Sanayi Dijital Pazarlama & Kurumsal Web Tasarımı | ALTUN MEDYA',
    seoDescription: 'Söke Organize Sanayi (OSB) ve imalat firmaları için B2B müşteri yakalama, Google Arama Ağı reklamları ve kurumsal Next.js web çözümleri.',
    canonicalUrl: 'https://altunmedya.com/hizmetler/soke-sanayi-dijital-pazarlama',
    ogTitle: 'Söke Sanayi Dijital Pazarlama Çözümleri',
    ogDescription: 'Söke OSB üreticileri için ihracat ve B2B dijital büyüme.',
    ogImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
    indexStatus: 'indexed',
    isPublished: true,
    seoScore: 91,
    duplicateRiskPercent: 3,
    locationId: 'loc-soke',
    content: {
      introAnswer: 'Söke Sanayi Dijital Pazarlama hizmetimiz; Söke OSB bünyesindeki tarım, makineler, tekstil ve imalat firmalarının Türkiye ve küresel pazarda kurumsal B2B talepleri (lead) toplaması için kurgulanmış arama ağı ve web sistemidir.',
      mainContentHtml: `<h2>Söke Üreticileri İçin İhrakat Odaklı B2B Dijital Pazarlama</h2>`,
      regionalCallout: 'Söke Organize Sanayi Bölgesi (OSB) Üreticileri İçin İhracat Odaklı Dijital Dönüşüm.',
      equipmentUsed: ['Google Ads Smart Bidding', 'Next.js 14 Web Architecture', 'Conversions API'],
      faq: [{ question: 'B2B sanayi reklamlarında dönüşüm nasıl ölçülüyor?', answer: 'Google Ads form doldurma ve WhatsApp doğrudan teklif hatları ile her bir müşteri talebi net ölçülür.' }],
      ctaText: 'Söke Firmanız İçin Strateji Alın',
      ctaUrl: '/musteri-paneli'
    },
    gscData: { impressions: 5600, clicks: 310, ctr: 5.53, avgPosition: 1.5 },
    updatedAt: '2026-10-07 05:40',
    createdAt: '2026-09-10 09:15'
  },
];

export const initialRedirectRules: RedirectRule[] = [
  { id: 'red-1', fromUrl: '/didim-medya-ajansi', toUrl: '/hizmetler/didim-sosyal-medya-ajansi', statusCode: 301, createdAt: '2026-09-01' },
  { id: 'red-2', fromUrl: '/kusadasi-otel-cekim', toUrl: '/hizmetler/kusadasi-4k-otel-tanitim-filmi', statusCode: 301, createdAt: '2026-09-05' },
];
