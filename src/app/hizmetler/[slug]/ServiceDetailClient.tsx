'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import MobileNav from '@/components/layout/MobileNav';
import Footer from '@/components/layout/Footer';
import SectionDivider from '@/components/ui/SectionDivider';
import BriefModal from '@/components/modals/BriefModal';
import { ServiceCategory } from '@/data/services-database';
import { SeoKeywordTarget } from '@/config/seo-keywords';
import { CheckCircle2, ArrowLeft, ArrowUpRight } from 'lucide-react';

interface ServiceDetailClientProps {
  pageTitle: string;
  pageDesc: string;
  activeCategory: ServiceCategory;
  keywordTarget?: SeoKeywordTarget;
}

export default function ServiceDetailClient({
  pageTitle,
  pageDesc,
  activeCategory,
  keywordTarget,
}: ServiceDetailClientProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBriefOpen, setIsBriefOpen] = useState(false);

  // Extract region name & clean duplicate city prefix from title
  let regionName = 'DİDİM';
  let cleanTitle = pageTitle;

  const lowerTitle = pageTitle.toLowerCase();
  const lowerSlug = (keywordTarget?.slug || '').toLowerCase();

  if (lowerSlug.includes('soke') || lowerTitle.includes('söke')) {
    regionName = 'SÖKE';
    cleanTitle = pageTitle.replace(/söke/gi, '').trim();
  } else if (lowerSlug.includes('kusadasi') || lowerTitle.includes('kuşadası')) {
    regionName = 'KUŞADASI';
    cleanTitle = pageTitle.replace(/kuşadası/gi, '').trim();
  } else if (lowerSlug.includes('aydin') || lowerTitle.includes('aydın')) {
    regionName = 'AYDIN';
    cleanTitle = pageTitle.replace(/aydın/gi, '').trim();
  } else if (lowerSlug.includes('nazilli') || lowerTitle.includes('nazilli')) {
    regionName = 'NAZİLLİ';
    cleanTitle = pageTitle.replace(/nazilli/gi, '').trim();
  } else if (lowerSlug.includes('bodrum') || lowerTitle.includes('bodrum')) {
    regionName = 'BODRUM';
    cleanTitle = pageTitle.replace(/bodrum/gi, '').trim();
  } else if (lowerSlug.includes('akbuk') || lowerTitle.includes('akbük')) {
    regionName = 'AKBÜK';
    cleanTitle = pageTitle.replace(/akbük/gi, '').trim();
  } else if (lowerTitle.includes('didim')) {
    regionName = 'DİDİM';
    cleanTitle = pageTitle.replace(/didim/gi, '').trim();
  }

  if (!cleanTitle) cleanTitle = activeCategory.title;

  return (
    <div className="relative w-full overflow-hidden bg-[#0B0B0B] text-[#F8F0DB] selection:bg-accent selection:text-[#F8F0DB]">
      {/* HEADER */}
      <Header
        onOpenBrief={() => setIsBriefOpen(true)}
        onToggleMobileMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        isMobileMenuOpen={isMobileMenuOpen}
      />
      <MobileNav
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onOpenBrief={() => setIsBriefOpen(true)}
      />

      <main className="pt-32 sm:pt-40 pb-20">
        {/* HERO HEADER */}
        <section className="px-5 sm:px-10 lg:px-14 pb-16 max-w-7xl mx-auto">
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 text-xs font-medium text-accent hover:underline mb-6 font-bold"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Tüm Hizmetlere Dön</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              {/* DYNAMIC REGION BADGE */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-accent/10 border border-accent/30 text-xs font-medium text-accent font-bold">
                <span>{regionName} &amp; EGE BÖLGESİ ÖZEL HİZMET ALANI</span>
              </div>

              {/* CLEAN DYNAMIC TITLE - LOGO-INSPIRED BOLD-THIN PAIRING */}
              <h1 className="text-4xl sm:text-6xl tracking-tight text-[#F8F0DB] leading-tight font-heading">
                <span className="font-black text-accent">{regionName}</span>{' '}
                <span className="font-light text-[#F8F0DB]/80">{cleanTitle}</span>
              </h1>

              <p className="text-sm sm:text-lg text-[#F8F0DB]/80 leading-relaxed font-normal max-w-2xl font-sans">
                {pageDesc} {regionName} merkezli ve çevre ilçelerdeki otel, restoran, beach club, sanayi ve gayrimenkul projeleri için yüksek dönüşümlü 360° ajans çözümleri.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => setIsBriefOpen(true)}
                  className="px-7 py-3.5 text-xs font-extrabold bg-accent text-onAccent rounded-xl hover:bg-accent transition-all flex items-center gap-2 shadow-xl active:scale-95 hover:text-onAccent"
                >
                  <span>Teklif Al &amp; Başlat</span>
                </button>

                <a
                  href="#scope"
                  className="px-5 py-3.5 text-xs font-semibold tracking-wide bg-[#F8F0DB]/5 text-[#F8F0DB] border border-[#F8F0DB]/10 rounded-xl hover:bg-[#F8F0DB]/10 transition-all font-medium"
                >
                  Hizmet Kapsamını İncele
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative aspect-video sm:aspect-square rounded-3xl overflow-hidden border border-[#F8F0DB]/15 shadow-2xl">
                <img
                  src={activeCategory.heroImage}
                  alt={pageTitle}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#0B0B0B]/30" />
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-[#0B0B0B]/85 backdrop-blur-md border border-[#F8F0DB]/10 text-xs font-medium text-accent font-bold flex items-center justify-between">
                  <span>● ALTUN MEDYA PROFESYONEL PAKET</span>
                  <span className="text-[#F8F0DB]/60">{regionName}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SWOOP DIVIDER */}
        <SectionDivider topBgColor="#0B0B0B" bottomBgColor="#F8F0DB" />

        {/* OVERVIEW & SCOPE SECTION */}
        <section id="scope" className="py-20 px-5 sm:px-10 lg:px-14 bg-[#F8F0DB] text-[#0B0B0B]">
          <div className="max-w-7xl mx-auto space-y-12">
            <div>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0B0B0B] font-heading">
                Neden ALTUN MEDYA İle Çalışmalısınız?
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {activeCategory.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="bg-[#F8F0DB] p-6 rounded-2xl border border-[#0B0B0B]/10 flex items-start gap-4 shadow-sm"
                >
                  <CheckCircle2 className="w-6 h-6 text-[#0B0B0B] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-base font-bold text-[#0B0B0B] font-heading">{feat}</h3>
                    <p className="text-xs text-[#0B0B0B]/70 mt-1 font-sans">
                      {regionName} ve Ege bölgesindeki markanız için özel kurgulanmış profesyonel ajans standardı.
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* RICH SUB-SERVICES CARDS WITH DIRECT LINKS */}
            <div className="pt-8 border-t border-[#0B0B0B]/15 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-extrabold text-[#0B0B0B] font-heading">
                    İlgili Alt Disiplinler &amp; Özel Sayfalar
                  </h3>
                  <p className="text-xs font-medium text-[#0B0B0B]/60">
                    Detaylarını incelemek istediğiniz uzmanlık alanına tıklayarak özel sayfasına geçebilirsiniz.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {activeCategory.subServices.map((sub) => (
                  <Link
                    key={sub.slug}
                    href={`/hizmetler/${sub.slug}`}
                    className="p-6 rounded-2xl bg-[#F8F0DB] border border-[#0B0B0B]/10 hover:border-[#0B0B0B] hover:shadow-xl transition-all duration-300 group flex flex-col justify-between space-y-4"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="px-2 py-0.5 rounded-full bg-[#0B0B0B]/10 text-xs font-medium font-bold text-[#0B0B0B] uppercase">
                          {regionName} UZMANLIĞI
                        </span>
                        <ArrowUpRight className="w-4 h-4 text-[#0B0B0B]/40 group-hover:text-[#0B0B0B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                      </div>
                      <h4 className="text-base font-bold text-[#0B0B0B] group-hover:text-[#0B0B0B] font-heading">
                        {sub.name}
                      </h4>
                      <p className="text-xs text-[#0B0B0B]/70 mt-2 leading-relaxed font-sans font-normal">
                        {sub.shortDesc}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-[#0B0B0B]/5 flex items-center justify-between text-xs font-medium font-bold text-[#0B0B0B] group-hover:text-[#0B0B0B]">
                      <span>Detaylı Sayfayı İncele</span>
                      <span>→</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SWOOP DIVIDER: SCOPE (#F8F0DB) -> EQUIPMENT (#0B0B0B) */}
        <SectionDivider topBgColor="#F8F0DB" bottomBgColor="#0B0B0B" />

        {/* 1. SEPARATE EQUIPMENT & REGIONAL TECH STACK SECTION (DARK STUDIO THEME) */}
        <section className="py-20 px-5 sm:px-10 lg:px-14 bg-[#0B0B0B] text-[#F8F0DB]">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/20 border border-accent/50 text-xs font-medium text-accent font-bold">
                <span>BÖLGESEL PRODÜKSİYON &amp; STÜDYO EKİPMANLARI</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-heading text-[#F8F0DB]">
                <span className="font-black">{regionName} &amp; EGE</span>{' '}
                <span className="font-light text-[#F8F0DB]/80">Kullandığımız Teknolojiler</span>
              </h2>
              <p className="text-sm sm:text-base text-[#F8F0DB]/70 font-sans">
                Sinema standartlarında donanım, lisanslı çekim yazılımları ve yüksek çözünürlüklü lens setleri.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-2xl bg-[#161616] border border-[#F8F0DB]/10 hover:border-accent/50 transition-all space-y-3 group shadow-lg">
                <h3 className="text-base font-bold text-[#F8F0DB] font-heading">Sony FX6 &amp; RED 6K Cinema</h3>
                <p className="text-xs text-[#F8F0DB]/65 font-sans leading-relaxed">
                  4K 120fps ağır çekim, 15+ stop dinamik aralık ve sinematik renk gradyanı ile {regionName} çekimleri.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#161616] border border-[#F8F0DB]/10 hover:border-accent/50 transition-all space-y-3 group shadow-lg">
                <h3 className="text-base font-bold text-[#F8F0DB] font-heading">DJI Inspire 3 &amp; Mavic 3 Cine</h3>
                <p className="text-xs text-[#F8F0DB]/65 font-sans leading-relaxed">
                  8K CinemaDNG ve ProRes formatında {regionName} marina, koylar ve tesislerin havadan turları.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#161616] border border-[#F8F0DB]/10 hover:border-accent/50 transition-all space-y-3 group shadow-lg">
                <h3 className="text-base font-bold text-[#F8F0DB] font-heading">Zeiss CP.3 &amp; G-Master Cine</h3>
                <p className="text-xs text-[#F8F0DB]/65 font-sans leading-relaxed">
                  F/1.2 diyafram açıklığı ile lüks mekanlarda pürüzsüz bokeh ve doğal alan derinliği kurgusu.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#161616] border border-[#F8F0DB]/10 hover:border-accent/50 transition-all space-y-3 group shadow-lg">
                <h3 className="text-base font-bold text-[#F8F0DB] font-heading">DaVinci 18 &amp; Next.js 14</h3>
                <p className="text-xs text-[#F8F0DB]/65 font-sans leading-relaxed">
                  Hollywood standartlarında renk düzenlemesi (Color Grading) ve ışık hızında web mimarisi.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SWOOP DIVIDER: EQUIPMENT (#0B0B0B) -> ARTICLES (#F8F0DB) */}
        <SectionDivider topBgColor="#0B0B0B" bottomBgColor="#F8F0DB" />

        {/* 2. COMPLETELY SEPARATE ARTICLES & GUIDES SECTION (WARM ARCHITECTURAL LINEN THEME) */}
        <section className="py-20 px-5 sm:px-10 lg:px-14 bg-[#F8F0DB] text-[#0B0B0B]">
          <div className="max-w-7xl mx-auto space-y-10">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 border-b border-[#0B0B0B]/15 pb-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/15 text-xs font-medium font-bold text-accent mb-3">
                  <span>BÖLGESEL BÜYÜME REHBERİ</span>
                </div>
                <h3 className="text-3xl sm:text-5xl font-heading text-[#0B0B0B]">
                  <span className="font-black">{regionName} &amp; EGE İÇİN</span>{' '}
                  <span className="font-light text-[#0B0B0B]/75">İlgili Makaleler ve Rehberler</span>
                </h3>
              </div>
              <Link
                href="/blog"
                className="px-4 py-2 rounded-xl bg-[#0B0B0B] text-[#F8F0DB] hover:bg-accent transition-colors text-xs font-medium font-bold flex items-center gap-1.5 w-fit shadow-md hover:text-onAccent"
              >
                <span>Tüm Rehberleri Oku</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link
                href="/blog/didim-otel-ve-beach-club-sosyal-medya-yonetimi-rehberi"
                className="p-7 rounded-2xl bg-[#F8F0DB] border border-[#0B0B0B]/10 hover:border-accent hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="inline-block px-2.5 py-1 rounded bg-accent text-onAccent text-xs font-medium font-bold uppercase mb-3">
                    REHBER • {regionName} TURİZMİ
                  </div>
                  <h4 className="text-lg font-bold text-[#0B0B0B] group-hover:text-accent transition-colors font-heading leading-snug">
                    {regionName} Otel &amp; Beach Club&apos;larında 4K Reels Çekim Rehberi
                  </h4>
                  <p className="text-xs text-[#0B0B0B]/75 mt-2.5 font-sans leading-relaxed">
                    Instagram algoritmalarında öne çıkan kancalı (hook) dikey video kurguları ve erken rezervasyon stratejisi.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-[#0B0B0B]/10 flex items-center justify-between text-xs font-medium font-bold text-[#0B0B0B] group-hover:text-accent">
                  <span>Makaleyi Oku</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </Link>

              <Link
                href="/blog/google-haritalar-didim-yerel-seo-siralama-optimizasyonu"
                className="p-7 rounded-2xl bg-[#F8F0DB] border border-[#0B0B0B]/10 hover:border-accent hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="inline-block px-2.5 py-1 rounded bg-[#0B0B0B] text-[#F8F0DB] text-xs font-medium font-bold uppercase mb-3">
                    STRATEJİ • YEREL SEO
                  </div>
                  <h4 className="text-lg font-bold text-[#0B0B0B] group-hover:text-accent transition-colors font-heading leading-snug">
                    {regionName} ve Çevresinde Google Haritalar&apos;da 1. Sıraya Çıkma
                  </h4>
                  <p className="text-xs text-[#0B0B0B]/75 mt-2.5 font-sans leading-relaxed">
                    Harita konum optimizasyonu, müşteri yorumları ve lokal arama terimleriyle doğrudan rezervasyon alma.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-[#0B0B0B]/10 flex items-center justify-between text-xs font-medium font-bold text-[#0B0B0B] group-hover:text-accent">
                  <span>Makaleyi Oku</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </Link>

              <Link
                href="/blog/didim-villa-ve-gayrimenkul-cekimi-drone-video-produksiyonu"
                className="p-7 rounded-2xl bg-[#F8F0DB] border border-[#0B0B0B]/10 hover:border-accent hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="inline-block px-2.5 py-1 rounded bg-accent text-onAccent text-xs font-medium font-bold uppercase mb-3">
                    VAKA ANALİZİ • PRODÜKSİYON
                  </div>
                  <h4 className="text-lg font-bold text-[#0B0B0B] group-hover:text-accent transition-colors font-heading leading-snug">
                    Didim Palace 4K Lansmanı: 2 Ayda %300 Dönüşüm Artışı
                  </h4>
                  <p className="text-xs text-[#0B0B0B]/75 mt-2.5 font-sans leading-relaxed">
                    Sinematik lansman filmi ve Meta reklam stratejisi ile uluslararası alıcı kitleye ulaşma başarısı.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-[#0B0B0B]/10 flex items-center justify-between text-xs font-medium font-bold text-[#0B0B0B] group-hover:text-accent">
                  <span>Makaleyi Oku</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* SWOOP DIVIDER: ARTICLES (#F8F0DB) -> FAQ (#0B0B0B) */}
        <SectionDivider topBgColor="#F8F0DB" bottomBgColor="#0B0B0B" />

        {/* 3. SEPARATE FAQ SECTION (DEEP CHARCOAL THEME) */}
        <section className="py-20 px-5 sm:px-10 lg:px-14 bg-[#0B0B0B] text-[#F8F0DB]">
          <div className="max-w-4xl mx-auto space-y-10">
            <div className="text-center space-y-3">
              <h2 className="text-3xl sm:text-4xl tracking-tight text-[#F8F0DB] font-heading">
                <span className="font-black">SIKÇA SORULAN</span>{' '}
                <span className="font-light text-[#F8F0DB]/80">SORULAR</span>
              </h2>
              <p className="text-xs sm:text-sm text-[#F8F0DB]/60 font-medium">
                {regionName} ve Ege bölgesindeki kurumsal hizmet süreçlerimiz
              </p>
            </div>

            <div className="space-y-4">
              {activeCategory.faq.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#1B1A24] border border-[#F8F0DB]/10 hover:border-accent/40 transition-colors space-y-2.5 shadow-md"
                >
                  <h3 className="text-base font-bold text-[#F8F0DB] font-heading flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent text-onAccent" />
                    <span>{item.question}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-[#F8F0DB]/75 leading-relaxed font-sans pl-4 border-l-2 border-accent/40">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SWOOP DIVIDER: FAQ (#0B0B0B) -> CTA (rgb(var(--accent))) */}
        <SectionDivider topBgColor="#0B0B0B" bottomBgColor="#0B0B0B" />

        {/* 4. HIGH-IMPACT PROJECT CTA BANNER */}
        <section className="py-16 sm:py-20 px-5 sm:px-10 lg:px-14 bg-[#0B0B0B] text-[#F8F0DB] text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <span className="px-3.5 py-1.5 rounded-full bg-[#0B0B0B]/20 text-[#F8F0DB] font-medium text-xs font-bold">
              {regionName} VE EGE BÖLGESİ PROJELERİNİZ İÇİN
            </span>
            <h2 className="text-3xl sm:text-5xl font-black font-heading tracking-tight text-[#F8F0DB]">
              Markanızı Zirveye Taşımaya Hazır mısınız?
            </h2>
            <p className="text-sm sm:text-base text-[#F8F0DB]/90 max-w-xl mx-auto leading-relaxed">
              İhtiyaçlarınıza özel strateji, net bütçe planlaması ve 24 saat içinde geri dönüş için hemen brief formunu doldurun.
            </p>
            <div className="pt-2">
              <button
                onClick={() => setIsBriefOpen(true)}
                className="px-8 py-4 rounded-xl bg-[#F8F0DB] text-[#0B0B0B] hover:bg-neutral-900 hover:text-[#F8F0DB] transition-all text-xs sm:text-sm font-medium font-extrabold inline-flex items-center gap-2 shadow-2xl active:scale-95"
              >
                <span>Proje Başlat &amp; Teklif Al</span>
              </button>
            </div>
          </div>
        </section>

        {/* SWOOP DIVIDER: CTA (rgb(var(--accent))) -> FOOTER (#0B0B0B) */}
        <SectionDivider topBgColor="#0B0B0B" bottomBgColor="#0B0B0B" />
      </main>

      <Footer />

      <BriefModal
        isOpen={isBriefOpen}
        onClose={() => setIsBriefOpen(false)}
        initialServiceSlug={activeCategory.slug}
      />
    </div>
  );
}
