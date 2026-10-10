// ==================================================
// ALTUN MEDYA VISUAL EDITOR DATA ARCHITECTURE
// COMPLETE REAL-SITE SCHEMA & DATA STORE
// ==================================================

export type ViewportMode = 'desktop' | 'tablet' | 'mobile';

export type ElementType = 
  | 'heading'
  | 'text'
  | 'image'
  | 'video'
  | 'button'
  | 'container'
  | 'card'
  | 'divider'
  | 'spacer'
  | 'testimonial'
  | 'faq';

export interface ResponsiveStyle {
  fontSize?: string;
  lineHeight?: string;
  letterSpacing?: string;
  paddingTop?: string;
  paddingBottom?: string;
  paddingLeft?: string;
  paddingRight?: string;
  marginTop?: string;
  marginBottom?: string;
  color?: string;
  backgroundColor?: string;
  borderColor?: string;
  borderRadius?: string;
  textAlign?: 'left' | 'center' | 'right' | 'justify';
  fontWeight?: string;
  fontFamily?: string;
}

export interface ElementModel {
  id: string;
  type: ElementType;
  label: string;
  content: {
    text?: string;
    html?: string;
    src?: string;
    alt?: string;
    url?: string;
    targetBlank?: boolean;
    videoUrl?: string;
    autoplay?: boolean;
    muted?: boolean;
    loop?: boolean;
    poster?: string;
    icon?: string;
    quote?: string;
    author?: string;
    role?: string;
    question?: string;
    answer?: string;
  };
  styles: {
    desktop: ResponsiveStyle;
    tablet: ResponsiveStyle;
    mobile: ResponsiveStyle;
    hover?: {
      color?: string;
      backgroundColor?: string;
      borderColor?: string;
      scale?: string;
    };
  };
  children?: ElementModel[];
  isLocked?: boolean;
  isHidden?: boolean;
}

export interface SectionModel {
  id: string;
  title: string;
  category: string;
  background: {
    type: 'color' | 'image' | 'video' | 'gradient';
    color?: string;
    imageUrl?: string;
    videoUrl?: string;
    overlayOpacity?: number;
    gradient?: string;
  };
  padding: {
    desktop: string;
    tablet: string;
    mobile: string;
  };
  elements: ElementModel[];
}

export interface PageSchema {
  id: string;
  slug: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  ogImage: string;
  updatedAt: string;
  status: 'published' | 'draft';
  version: number;
  sections: SectionModel[];
}

export interface GlobalStyleConfig {
  primaryColor: string;
  secondaryColor: string;
  backgroundColor: string;
  textColor: string;
  headingFont: string;
  bodyFont: string;
  borderRadius: string;
}

export interface RevisionHistoryItem {
  version: number;
  timestamp: string;
  note: string;
  schema: PageSchema;
}

// ==================================================
// COMPLETE REAL-WORLD ALTUN MEDYA HOMEPAGE SCHEMA
// ==================================================

export const initialHomePageSchema: PageSchema = {
  id: 'page-home',
  slug: '/',
  title: 'Ana Sayfa',
  seoTitle: 'ALTUN MEDYA — Branding, Web Tasarım & Video Prodüksiyon Stüdyosu',
  seoDescription: 'Didim, Aydın ve Ege bölgesinde markaları dijitalde harekete geçiren 360° medya, web tasarım, fotoğraf & video prodüksiyon ve dijital pazarlama stüdyosu.',
  ogImage: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1200&auto=format&fit=crop',
  updatedAt: '2026-10-07 05:40',
  status: 'published',
  version: 5,
  sections: [
    // 1. HERO SECTION
    {
      id: 'sec-hero',
      title: 'Hero Section (Giriş)',
      category: 'Giriş & Lansman',
      background: {
        type: 'video',
        color: '#050505',
        videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-fashion-model-posing-in-neon-light-40114-large.mp4',
        overlayOpacity: 0.75,
      },
      padding: {
        desktop: '140px 20px 80px',
        tablet: '100px 20px 60px',
        mobile: '80px 16px 40px',
      },
      elements: [
        {
          id: 'el-hero-badge',
          type: 'text',
          label: 'Rozet Etiket',
          content: {
            text: '⚡ DİDİM & EGE BÖLGESİ — 360° DİJİTAL MEDYA STÜDYOSU',
          },
          styles: {
            desktop: {
              fontSize: '11px',
              color: '#C8FF00',
              fontWeight: '700',
              letterSpacing: '0.2em',
              marginBottom: '16px',
              textAlign: 'left',
            },
            tablet: { fontSize: '10px' },
            mobile: { fontSize: '10px' },
          },
        },
        {
          id: 'el-hero-title',
          type: 'heading',
          label: 'Hero Ana Başlık',
          content: {
            text: 'DİDİM\'DE MARKALARI DİJİTALDE GÜÇLÜ BÜYÜTÜYORUZ.',
          },
          styles: {
            desktop: {
              fontSize: '76px',
              lineHeight: '0.94',
              color: '#FFFFFF',
              fontWeight: '900',
              letterSpacing: '-0.04em',
              marginBottom: '24px',
              textAlign: 'left',
              fontFamily: 'Outfit, sans-serif',
            },
            tablet: { fontSize: '52px' },
            mobile: { fontSize: '36px' },
          },
        },
        {
          id: 'el-hero-desc',
          type: 'text',
          label: 'Hero Alt Açıklama',
          content: {
            text: 'Stratejik marka danışmanlığı, 4K sinematik prodüksiyon, Next.js web mimarisi ve yüksek dönüşümlü dijital pazarlamayı kurumsal disiplinle sunuyoruz.',
          },
          styles: {
            desktop: {
              fontSize: '18px',
              lineHeight: '1.6',
              color: '#CCCCCC',
              fontWeight: '400',
              marginBottom: '36px',
              textAlign: 'left',
            },
            tablet: { fontSize: '16px' },
            mobile: { fontSize: '14px' },
          },
        },
        {
          id: 'el-hero-cta1',
          type: 'button',
          label: 'Stratejik Görüşme Butonu',
          content: {
            text: 'Stratejik Görüşme Planla →',
            url: '/musteri-paneli',
            targetBlank: false,
          },
          styles: {
            desktop: {
              fontSize: '13px',
              color: '#000000',
              backgroundColor: '#C8FF00',
              fontWeight: '800',
              paddingTop: '16px',
              paddingBottom: '16px',
              paddingLeft: '32px',
              paddingRight: '32px',
              borderRadius: '12px',
              textAlign: 'center',
            },
            tablet: { fontSize: '12px' },
            mobile: { fontSize: '12px' },
          },
        },
      ],
    },

    // 2. BRANDS MARQUEE SECTION
    {
      id: 'sec-brands',
      title: 'Partner Markalarımız',
      category: 'Referanslar',
      background: {
        type: 'color',
        color: '#F7F6F2',
      },
      padding: {
        desktop: '40px 20px',
        tablet: '30px 20px',
        mobile: '20px 16px',
      },
      elements: [
        {
          id: 'el-brands-title',
          type: 'heading',
          label: 'Partnerler Başlığı',
          content: {
            text: 'RESMİ MEDYA & REKLAM PARTNERLERİMİZ',
          },
          styles: {
            desktop: {
              fontSize: '22px',
              color: '#050505',
              fontWeight: '800',
              marginBottom: '12px',
              textAlign: 'left',
              fontFamily: 'Outfit, sans-serif',
            },
            tablet: { fontSize: '18px' },
            mobile: { fontSize: '16px' },
          },
        },
        {
          id: 'el-brands-subtitle',
          type: 'text',
          label: 'Partnerler Alt Metin',
          content: {
            text: 'Meta Business, Google Partner, TikTok Ads ve Shopify resmi yetkili stüdyo entegrasyonları.',
          },
          styles: {
            desktop: {
              fontSize: '13px',
              color: '#555555',
              marginBottom: '24px',
              textAlign: 'left',
            },
            tablet: { fontSize: '12px' },
            mobile: { fontSize: '12px' },
          },
        },
      ],
    },

    // 3. SERVICES SECTION
    {
      id: 'sec-services',
      title: '360° Uzmanlık Hizmetlerimiz',
      category: 'Hizmetler',
      background: {
        type: 'color',
        color: '#D9D0C1',
      },
      padding: {
        desktop: '100px 20px',
        tablet: '80px 20px',
        mobile: '60px 16px',
      },
      elements: [
        {
          id: 'el-serv-badge',
          type: 'text',
          label: 'Hizmet Rozeti',
          content: {
            text: '360° UZMANLIK ALANLARIMIZ',
          },
          styles: {
            desktop: {
              fontSize: '11px',
              color: '#050505',
              fontWeight: '800',
              letterSpacing: '0.2em',
              marginBottom: '12px',
              textAlign: 'center',
            },
            tablet: { fontSize: '10px' },
            mobile: { fontSize: '10px' },
          },
        },
        {
          id: 'el-serv-title',
          type: 'heading',
          label: 'Hizmetler Başlık',
          content: {
            text: 'Markanız İçin Geliştirdiğimiz Çözüm Paketleri',
          },
          styles: {
            desktop: {
              fontSize: '54px',
              lineHeight: '1.05',
              color: '#050505',
              fontWeight: '900',
              marginBottom: '20px',
              textAlign: 'center',
              fontFamily: 'Outfit, sans-serif',
            },
            tablet: { fontSize: '38px' },
            mobile: { fontSize: '28px' },
          },
        },
        {
          id: 'el-serv-desc',
          type: 'text',
          label: 'Hizmetler Açıklama',
          content: {
            text: 'Fikir aşamasından prodüksiyona, reklam optimizasyonundan yazılıma kadar uçtan uca 360° ajans hizmeti.',
          },
          styles: {
            desktop: {
              fontSize: '16px',
              color: '#444444',
              marginBottom: '48px',
              textAlign: 'center',
            },
            tablet: { fontSize: '15px' },
            mobile: { fontSize: '14px' },
          },
        },
      ],
    },

    // 4. REELS LAB SECTION
    {
      id: 'sec-reels',
      title: 'High-Retention Reels Lab',
      category: 'Video Prodüksiyon',
      background: {
        type: 'color',
        color: '#070707',
      },
      padding: {
        desktop: '100px 20px',
        tablet: '80px 20px',
        mobile: '60px 16px',
      },
      elements: [
        {
          id: 'el-reels-title',
          type: 'heading',
          label: 'Reels Lab Başlık',
          content: {
            text: 'High-Retention Reels & Dikey Video Lab',
          },
          styles: {
            desktop: {
              fontSize: '48px',
              color: '#FFFFFF',
              fontWeight: '900',
              marginBottom: '16px',
              textAlign: 'left',
              fontFamily: 'Outfit, sans-serif',
            },
            tablet: { fontSize: '34px' },
            mobile: { fontSize: '26px' },
          },
        },
        {
          id: 'el-reels-desc',
          type: 'text',
          label: 'Reels Lab Açıklama',
          content: {
            text: 'Yüksek izlenme oranlı, kancalı (hook) sinematik dikey videolar ile organik erişimlerinizi patlatıyoruz.',
          },
          styles: {
            desktop: {
              fontSize: '16px',
              color: '#AAAAAA',
              marginBottom: '32px',
              textAlign: 'left',
            },
            tablet: { fontSize: '14px' },
            mobile: { fontSize: '14px' },
          },
        },
        {
          id: 'el-reels-video',
          type: 'video',
          label: 'Sample Video Reel',
          content: {
            videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-fashion-model-posing-in-neon-light-40114-large.mp4',
            autoplay: true,
            muted: true,
            loop: true,
            poster: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=800&auto=format&fit=crop',
          },
          styles: {
            desktop: {
              borderRadius: '24px',
              marginBottom: '24px',
            },
            tablet: { borderRadius: '16px' },
            mobile: { borderRadius: '12px' },
          },
        },
      ],
    },

    // 5. WORKS & CASE STUDIES SECTION
    {
      id: 'sec-works',
      title: 'Seçkin Projelerimiz',
      category: 'Portföy',
      background: {
        type: 'color',
        color: '#F1F0EA',
      },
      padding: {
        desktop: '100px 20px',
        tablet: '80px 20px',
        mobile: '60px 16px',
      },
      elements: [
        {
          id: 'el-works-title',
          type: 'heading',
          label: 'Projeler Başlık',
          content: {
            text: 'Seçkin Projelerimiz & Başarı Hikayeleri',
          },
          styles: {
            desktop: {
              fontSize: '52px',
              color: '#050505',
              fontWeight: '900',
              marginBottom: '16px',
              textAlign: 'center',
              fontFamily: 'Outfit, sans-serif',
            },
            tablet: { fontSize: '36px' },
            mobile: { fontSize: '28px' },
          },
        },
        {
          id: 'el-works-desc',
          type: 'text',
          label: 'Projeler Alt Metin',
          content: {
            text: 'Didim, Kuşadası ve Bodrum\'da hayata geçirdiğimiz yüksek prodüksiyonlu lansmanlar ve reklam kampanyaları.',
          },
          styles: {
            desktop: {
              fontSize: '16px',
              color: '#555555',
              marginBottom: '40px',
              textAlign: 'center',
            },
            tablet: { fontSize: '15px' },
            mobile: { fontSize: '14px' },
          },
        },
        {
          id: 'el-works-img',
          type: 'image',
          label: 'Didim Palace Case Study Görseli',
          content: {
            src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop',
            alt: 'Didim Palace Resort & Spa 4K Lansman',
          },
          styles: {
            desktop: {
              borderRadius: '24px',
              marginBottom: '24px',
            },
            tablet: { borderRadius: '16px' },
            mobile: { borderRadius: '12px' },
          },
        },
      ],
    },

    // 6. REVIEWS & TESTIMONIALS SECTION
    {
      id: 'sec-reviews',
      title: 'Müşteri Deneyimleri & Markalar',
      category: 'Yorumlar',
      background: {
        type: 'color',
        color: '#F7F6F2',
      },
      padding: {
        desktop: '100px 20px',
        tablet: '80px 20px',
        mobile: '60px 16px',
      },
      elements: [
        {
          id: 'el-rev-title',
          type: 'heading',
          label: 'Müşteri Yorum Başlığı',
          content: {
            text: 'Birlikte ürettik, birlikte büyüttük.',
          },
          styles: {
            desktop: {
              fontSize: '56px',
              color: '#050505',
              fontWeight: '900',
              marginBottom: '12px',
              textAlign: 'left',
              fontFamily: 'Outfit, sans-serif',
            },
            tablet: { fontSize: '40px' },
            mobile: { fontSize: '30px' },
          },
        },
        {
          id: 'el-rev-subtitle',
          type: 'text',
          label: 'Müşteri Yorum Alt Başlık',
          content: {
            text: '216 Marka Deneyimi. Gerçek sonuçlar ve ölçülebilir büyüme.',
          },
          styles: {
            desktop: {
              fontSize: '24px',
              color: '#333333',
              marginBottom: '40px',
              textAlign: 'left',
            },
            tablet: { fontSize: '20px' },
            mobile: { fontSize: '18px' },
          },
        },
      ],
    },

    // 7. ABOUT STUDIO SECTION
    {
      id: 'sec-about',
      title: 'Hakkımızda & Stüdyomuz',
      category: 'Kurumsal',
      background: {
        type: 'color',
        color: '#070707',
      },
      padding: {
        desktop: '100px 20px',
        tablet: '80px 20px',
        mobile: '60px 16px',
      },
      elements: [
        {
          id: 'el-about-title',
          type: 'heading',
          label: 'Hakkımızda Başlığı',
          content: {
            text: 'Altun Medya Stüdyo Hikayesi',
          },
          styles: {
            desktop: {
              fontSize: '48px',
              color: '#FFFFFF',
              fontWeight: '900',
              marginBottom: '20px',
              textAlign: 'center',
              fontFamily: 'Outfit, sans-serif',
            },
            tablet: { fontSize: '36px' },
            mobile: { fontSize: '28px' },
          },
        },
        {
          id: 'el-about-desc',
          type: 'text',
          label: 'Hakkımızda Metni',
          content: {
            text: 'Didim merkezli kreatif stüdyomuzda, turizmden otomotive, lüks gastronimiden e-ticarete kadar markalara 360° dijital prodüksiyon ve büyüme danışmanlığı sağlıyoruz.',
          },
          styles: {
            desktop: {
              fontSize: '17px',
              color: '#BBBBBB',
              lineHeight: '1.7',
              marginBottom: '36px',
              textAlign: 'center',
            },
            tablet: { fontSize: '15px' },
            mobile: { fontSize: '14px' },
          },
        },
      ],
    },

    // 8. HIGH IMPACT CTA SECTION
    {
      id: 'sec-cta',
      title: 'Proje Başlat Çağrısı',
      category: 'Kapanış CTA',
      background: {
        type: 'color',
        color: '#050505',
      },
      padding: {
        desktop: '120px 20px',
        tablet: '90px 20px',
        mobile: '65px 16px',
      },
      elements: [
        {
          id: 'el-cta-title',
          type: 'heading',
          label: 'Kapanış CTA Başlık',
          content: {
            text: 'Markanızı Geleceğe Birlikte Taşıyalım.',
          },
          styles: {
            desktop: {
              fontSize: '60px',
              lineHeight: '0.96',
              color: '#FFFFFF',
              fontWeight: '900',
              marginBottom: '20px',
              textAlign: 'center',
              fontFamily: 'Outfit, sans-serif',
            },
            tablet: { fontSize: '42px' },
            mobile: { fontSize: '32px' },
          },
        },
        {
          id: 'el-cta-desc',
          type: 'text',
          label: 'Kapanış CTA Açıklama',
          content: {
            text: 'Yeni projeniz için 24 saat içinde özel stratejik teklifinizi hazırlayalım.',
          },
          styles: {
            desktop: {
              fontSize: '18px',
              color: '#8E8E93',
              marginBottom: '36px',
              textAlign: 'center',
            },
            tablet: { fontSize: '16px' },
            mobile: { fontSize: '14px' },
          },
        },
        {
          id: 'el-cta-btn',
          type: 'button',
          label: 'Hemen Projenizi Başlatın Butonu',
          content: {
            text: '+ HEMEN PROJENİZİ BAŞLATIN',
            url: '/musteri-paneli',
          },
          styles: {
            desktop: {
              fontSize: '14px',
              color: '#000000',
              backgroundColor: '#C8FF00',
              fontWeight: '900',
              paddingTop: '18px',
              paddingBottom: '18px',
              paddingLeft: '36px',
              paddingRight: '36px',
              borderRadius: '9999px',
              textAlign: 'center',
            },
            tablet: { fontSize: '13px' },
            mobile: { fontSize: '12px' },
          },
        },
      ],
    },
  ],
};

export const initialGlobalStyles: GlobalStyleConfig = {
  primaryColor: '#C8FF00',
  secondaryColor: '#0B0B0B',
  backgroundColor: '#050505',
  textColor: '#FFFFFF',
  headingFont: 'Outfit, sans-serif',
  bodyFont: 'Inter, sans-serif',
  borderRadius: '16px',
};
