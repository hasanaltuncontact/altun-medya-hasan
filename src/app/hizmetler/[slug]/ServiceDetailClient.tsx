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
import { 
  CheckCircle2, ArrowLeft, Ticket, Sparkles, HelpCircle, 
  Camera, Film, Cpu, Zap, MapPin, BookOpen, ArrowUpRight, Award 
} from 'lucide-react';

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
    <div className="relative w-full overflow-hidden bg-[#050505] text-[#F7F6F2] selection:bg-[#C8FF00] selection:text-black">
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
            className="inline-flex items-center gap-2 text-xs font-mono text-[#C8FF00] hover:underline mb-6 font-bold"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Tüm Hizmetlere Dön</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              {/* DYNAMIC REGION BADGE */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C8FF00]/10 border border-[#C8FF00]/30 text-xs font-mono text-[#C8FF00] font-bold">
                <MapPin className="w-3.5 h-3.5" />
                <span>{regionName} &amp; EGE BÖLGESİ ÖZEL HİZMET ALANI</span>
              </div>

              {/* CLEAN DYNAMIC TITLE - NO REPETITION */}
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight font-heading">
                <span className="text-[#C8FF00]">{regionName}</span> {cleanTitle}
              </h1>

              <p className="text-sm sm:text-lg text-white/80 leading-relaxed font-normal max-w-2xl font-sans">
                {pageDesc} {regionName} merkezli ve çevre ilçelerdeki otel, restoran, beach club, sanayi ve gayrimenkul projeleri için yüksek dönüşümlü 360° ajans çözümleri.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => setIsBriefOpen(true)}
                  className="px-7 py-3.5 text-xs font-extrabold uppercase tracking-wider bg-[#C8FF00] text-black rounded-xl hover:bg-[#D4FF28] transition-all flex items-center gap-2 shadow-xl active:scale-95"
                >
                  <Ticket className="w-4 h-4" />
                  <span>Teklif Al &amp; Başlat</span>
                </button>

                <a
                  href="#scope"
                  className="px-5 py-3.5 text-xs font-semibold tracking-wide bg-white/5 text-white border border-white/10 rounded-xl hover:bg-white/10 transition-all font-mono"
                >
                  Hizmet Kapsamını İncele
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative aspect-video sm:aspect-square rounded-3xl overflow-hidden border border-white/15 shadow-2xl">
                <img
                  src={activeCategory.heroImage}
                  alt={pageTitle}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-black/85 backdrop-blur-md border border-white/10 text-xs font-mono text-[#C8FF00] font-bold flex items-center justify-between">
                  <span>● ALTUN MEDYA PROFESYONEL PAKET</span>
                  <span className="text-white/60">{regionName}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SWOOP DIVIDER */}
        <SectionDivider topBgColor="#050505" bottomBgColor="#D9D0C1" />

        {/* OVERVIEW & SCOPE SECTION */}
        <section id="scope" className="py-20 px-5 sm:px-10 lg:px-14 bg-[#D9D0C1] text-[#050505]">
          <div className="max-w-7xl mx-auto space-y-12">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-black/60 font-bold block mb-2">
                KAPSAM VE YÖNTEM
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#050505] font-heading">
                Neden ALTUN MEDYA İle Çalışmalısınız?
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {activeCategory.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="bg-[#F7F6F2] p-6 rounded-2xl border border-black/10 flex items-start gap-4 shadow-sm"
                >
                  <CheckCircle2 className="w-6 h-6 text-black flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-base font-bold text-black font-heading">{feat}</h3>
                    <p className="text-xs text-black/70 mt-1 font-sans">
                      {regionName} ve Ege bölgesindeki markanız için özel kurgulanmış profesyonel ajans standardı.
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* RICH SUB-SERVICES CARDS WITH DIRECT LINKS */}
            <div className="pt-8 border-t border-black/15 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-extrabold text-black font-heading">
                    İlgili Alt Disiplinler &amp; Özel Sayfalar
                  </h3>
                  <p className="text-xs font-mono text-black/60">
                    Detaylarını incelemek istediğiniz uzmanlık alanına tıklayarak özel sayfasına geçebilirsiniz.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {activeCategory.subServices.map((sub) => (
                  <Link
                    key={sub.slug}
                    href={`/hizmetler/${sub.slug}`}
                    className="p-6 rounded-2xl bg-white border border-black/10 hover:border-black hover:shadow-xl transition-all duration-300 group flex flex-col justify-between space-y-4"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="px-2 py-0.5 rounded-full bg-black/10 text-[10px] font-mono font-bold text-black uppercase">
                          {regionName} UZMANLIĞI
                        </span>
                        <ArrowUpRight className="w-4 h-4 text-black/40 group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                      </div>
                      <h4 className="text-base font-bold text-black group-hover:text-[#050505] font-heading">
                        {sub.name}
                      </h4>
                      <p className="text-xs text-black/70 mt-2 leading-relaxed font-sans font-normal">
                        {sub.shortDesc}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-black/5 flex items-center justify-between text-xs font-mono font-bold text-black group-hover:text-[#050505]">
                      <span>Detaylı Sayfayı İncele</span>
                      <span>→</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SWOOP DIVIDER */}
        <SectionDivider topBgColor="#D9D0C1" bottomBgColor="#080808" />

        {/* EQUIPMENT & REGIONAL TECH STACK SECTION */}
        <section className="py-20 px-5 sm:px-10 lg:px-14 bg-[#080808] text-white">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C8FF00]/10 border border-[#C8FF00]/30 text-xs font-mono text-[#C8FF00] font-bold">
                <Camera className="w-4 h-4" />
                <span>BÖLGESEL PRODÜKSİYON &amp; STÜDYO EKİPMANLARI</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white">
                {regionName} &amp; Ege Çekimlerinde Kullandığımız Teknolojiler
              </h2>
              <p className="text-sm sm:text-base text-white/70 font-sans">
                Sinema standartlarında donanım, lisanslı çekim yazılımları ve yüksek çözünürlüklü lens setleri.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-2xl bg-[#0F0F0F] border border-white/10 space-y-3">
                <Film className="w-8 h-8 text-[#C8FF00]" />
                <h3 className="text-base font-bold text-white font-heading">Sony FX6 &amp; RED 6K Cinema</h3>
                <p className="text-xs text-white/60 font-sans">
                  4K 120fps ağır çekim, 15+ stop dinamik aralık ve sinematik renk gradyanı ile {regionName} çekimleri.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#0F0F0F] border border-white/10 space-y-3">
                <Zap className="w-8 h-8 text-[#C8FF00]" />
                <h3 className="text-base font-bold text-white font-heading">DJI Inspire 3 &amp; Mavic 3 Cine</h3>
                <p className="text-xs text-white/60 font-sans">
                  8K CinemaDNG ve ProRes formatında {regionName} marina, koylar ve tesislerin havadan turları.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#0F0F0F] border border-white/10 space-y-3">
                <Award className="w-8 h-8 text-[#C8FF00]" />
                <h3 className="text-base font-bold text-white font-heading">Zeiss CP.3 &amp; G-Master Cine</h3>
                <p className="text-xs text-white/60 font-sans">
                  F/1.2 diyafram açıklığı ile lüks mekanlarda pürüzsüz bokeh ve doğal alan derinliği kurgusu.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#0F0F0F] border border-white/10 space-y-3">
                <Cpu className="w-8 h-8 text-[#C8FF00]" />
                <h3 className="text-base font-bold text-white font-heading">DaVinci 18 &amp; Next.js 14</h3>
                <p className="text-xs text-white/60 font-sans">
                  Hollywood standartlarında renk düzenlemesi (Color Grading) ve ışık hızında web mimarisi.
                </p>
              </div>
            </div>

            {/* REGIONAL CASE STUDIES & ARTICLES */}
            <div className="pt-10 border-t border-white/10">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                <div>
                  <h3 className="text-2xl font-extrabold text-white font-heading">
                    {regionName} &amp; Ege İçin İlgili Makaleler ve Rehberler
                  </h3>
                  <p className="text-xs font-mono text-white/60">
                    Bölgesel dijital büyüme ve çekim teknikleri üzerine hazırladığımız yayınlar.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#C8FF00] transition-all group">
                  <div className="text-[10px] font-mono text-[#C8FF00] font-bold uppercase mb-2">REHBER • {regionName} TURİZMİ</div>
                  <h4 className="text-base font-bold text-white group-hover:text-[#C8FF00] transition-colors font-heading">
                    {regionName} Otel &amp; Beach Club&apos;larında 4K Reels Çekim Rehberi
                  </h4>
                  <p className="text-xs text-white/60 mt-2 font-sans">
                    Instagram algoritmalarında öne çıkan kancalı (hook) dikey video kurguları ve sezonsal ivmeler.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#C8FF00] transition-all group">
                  <div className="text-[10px] font-mono text-[#C8FF00] font-bold uppercase mb-2">STRATEJİ • YEREL SEO</div>
                  <h4 className="text-base font-bold text-white group-hover:text-[#C8FF00] transition-colors font-heading">
                    {regionName} ve Çevresinde Google Haritalar&apos;da 1. Sıraya Çıkma
                  </h4>
                  <p className="text-xs text-white/60 mt-2 font-sans">
                    Harita konum optimizasyonu, müşteri yorumları ve lokal arama terimleriyle müşteri yakalama.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#C8FF00] transition-all group">
                  <div className="text-[10px] font-mono text-[#C8FF00] font-bold uppercase mb-2">VAKA ANALİZİ • PRODÜKSİYON</div>
                  <h4 className="text-base font-bold text-white group-hover:text-[#C8FF00] transition-colors font-heading">
                    Didim Palace 4K Lansmanı: 2 Ayda %300 Dönüşüm Artışı
                  </h4>
                  <p className="text-xs text-white/60 mt-2 font-sans">
                    Sinematik lansman filmi ve Meta reklam stratejisi ile uluslararası alıcı kitleye ulaşma başarısı.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SWOOP DIVIDER */}
        <SectionDivider topBgColor="#080808" bottomBgColor="#050505" />

        {/* FAQ SECTION */}
        <section className="py-20 px-5 sm:px-10 lg:px-14 bg-[#050505] text-white">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-2">
              <HelpCircle className="w-10 h-10 text-[#C8FF00] mx-auto" />
              <h2 className="text-3xl font-extrabold tracking-tight text-white font-heading">
                Sıkça Sorulan Sorular
              </h2>
              <p className="text-xs text-white/60 font-mono">{regionName} ve Ege bölgesindeki hizmet süreçlerimiz</p>
            </div>

            <div className="space-y-4">
              {activeCategory.faq.map((item, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-[#090909] border border-white/10 space-y-2">
                  <h3 className="text-base font-bold text-white font-heading">{item.question}</h3>
                  <p className="text-xs text-white/70 leading-relaxed font-sans">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
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
