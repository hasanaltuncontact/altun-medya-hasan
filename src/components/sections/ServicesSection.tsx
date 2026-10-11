import Link from 'next/link';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { servicesDatabase } from '@/data/services-database';

interface ServicesSectionProps {
  onOpenBriefWithService: (slug: string) => void;
}

// Concise, punchy descriptions and top 3 badges to keep cards compact and eliminate sprawl
const serviceSummaries: Record<string, { shortDesc: string; topBadges: string[] }> = {
  'dijital-pazarlama': {
    shortDesc: 'Meta Ads, Google Ads ve 9:16 viral içeriklerle harcanan bütçeyi doğrudan satış ve müşteri trafiğine dönüştürüyoruz.',
    topBadges: ['Meta Ads (ROAS)', 'Sosyal Medya', 'Google Ads'],
  },
  'web-dijital': {
    shortDesc: 'Next.js 14 altyapısıyla yıldırım hızında açılan, Google SEO uyumlu ve yüksek dönüşümlü modern kurumsal web sistemleri.',
    topBadges: ['Next.js Kurumsal', 'E-Ticaret', 'Lokal SEO'],
  },
  'fotograf-video': {
    shortDesc: 'Sony Cine FX kameralar ve 4K lisanslı dronelar ile otel, mekan, lezzet ve ürünlerinize sinematik değer katıyoruz.',
    topBadges: ['4K Drone Çekimi', '9:16 Viral Reels', 'Mekan & Otel'],
  },
  'ozel-cekimler': {
    shortDesc: 'Doğal sahil ve gün batımı konseptlerinde yapay pozlardan uzak, editoryal fotoğraf ve sinematik düğün hikayeleri.',
    topBadges: ['Düğün Hikayesi', 'Editoryal Fotoğraf', 'Save The Date'],
  },
  'marka-tasarim': {
    shortDesc: 'Akılda kalıcı vektörel logo, kurumsal kimlik kılavuzu, restoran menüleri ve baskıya hazır kurumsal materyaller.',
    topBadges: ['Vektörel Logo', 'Kurumsal Kimlik', 'Menü Tasarımı'],
  },
  'reklam-produksiyon': {
    shortDesc: 'Senaryolu TV, dijital ve LED ekran reklamları; profesyonel seslendirme, oyuncu seçimi ve DaVinci renk kurgusu.',
    topBadges: ['Senaryolu Reklam', 'Tanıtım Filmi', 'Cast & Dublaj'],
  },
};

export default function ServicesSection({ onOpenBriefWithService }: ServicesSectionProps) {
  return (
    <section id="services" className="py-14 sm:py-20 px-5 sm:px-10 lg:px-14 bg-[#D9D0C1] text-[#050505]">
      <div className="max-w-7xl mx-auto">
        
        {/* COMPACT SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-8 sm:mb-12 border-b border-black/15 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/10 text-xs font-mono font-bold uppercase tracking-wider text-black mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B33A06]" />
              <span>360° Stüdyo Çözümleri • 6 Disiplin</span>
            </div>
            <h2 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl tracking-[-0.04em] text-[#050505] leading-[0.95] font-heading">
              <span className="font-black">SADECE AJANS</span>{' '}
              <span className="font-light text-[#050505]/70">DEĞİLİZ.</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#050505]/80 max-w-md font-medium leading-relaxed">
            Fikir, 4K dikey prodüksiyon, yeni nesil web ve performans pazarlamasını tek stüdyoda birleştiriyoruz. Markanızı dijitalde <strong className="text-black font-extrabold">harekete</strong> geçiriyoruz.
          </p>
        </div>

        {/* ORDERED COMPACT CARD BOXES GRID: 3 COLS DESKTOP, 2 COLS TABLET, COMPACT CARDS MOBILE */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {servicesDatabase.map((cat) => {
            const summary = serviceSummaries[cat.id] || {
              shortDesc: cat.tagline,
              topBadges: cat.badges.slice(0, 3),
            };

            return (
              <div
                key={cat.id}
                className="group relative bg-[#F4EFE6]/95 hover:bg-white rounded-2xl p-5 sm:p-6 border border-black/10 hover:border-[#B33A06]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* TOP ROW: NUMBER BADGE & DETAIL ARROW */}
                  <div className="flex items-center justify-between mb-3.5">
                    <span className="px-2.5 py-0.5 rounded-md bg-black/5 font-mono text-xs font-black text-[#B33A06] border border-black/5">
                      {cat.number}
                    </span>
                    <Link
                      href={`/hizmetler/${cat.slug}`}
                      className="w-8 h-8 rounded-full bg-black/5 group-hover:bg-[#B33A06] group-hover:text-white text-black/60 flex items-center justify-center transition-all shadow-sm"
                      title="Hizmeti İncele"
                    >
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>

                  {/* TITLE: LOGO-STYLE BOLD-THIN PAIRING */}
                  <h3 className="text-lg sm:text-xl text-[#050505] group-hover:text-[#B33A06] transition-colors font-heading leading-snug mb-2">
                    <Link href={`/hizmetler/${cat.slug}`} className="hover:underline">
                      {cat.title.includes('&') ? (
                        <>
                          <span className="font-black">{cat.title.split('&')[0].trim()}</span>{' '}
                          <span className="font-light text-[#050505]/75">&amp; {cat.title.split('&')[1].trim()}</span>
                        </>
                      ) : (
                        <span className="font-black">{cat.title}</span>
                      )}
                    </Link>
                  </h3>

                  {/* CONCISE DESCRIPTION (AZ VE ÖZ METİN) */}
                  <p className="text-xs sm:text-[13px] text-[#050505]/75 leading-relaxed mb-4">
                    {summary.shortDesc}
                  </p>

                  {/* TOP 3 CLEAN BADGES */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {summary.topBadges.map((badge) => (
                      <span
                        key={badge}
                        className="text-[10px] sm:text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-black/5 text-black/75 group-hover:bg-[#B33A06]/10 group-hover:text-[#B33A06] transition-colors"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>

                {/* BOTTOM COMPACT ACTION ROW */}
                <div className="pt-3 border-t border-black/10 flex items-center justify-between gap-2">
                  <Link
                    href={`/hizmetler/${cat.slug}`}
                    className="text-xs font-mono font-bold text-black/80 hover:text-[#B33A06] flex items-center gap-1 transition-colors"
                  >
                    <span>Detaylar</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>

                  <button
                    onClick={() => onOpenBriefWithService(cat.slug)}
                    className="px-3 py-1.5 rounded-lg bg-black text-white hover:bg-[#B33A06] text-[11px] font-mono font-bold uppercase tracking-wider flex items-center gap-1 transition-all active:scale-95 shadow-sm"
                  >
                    <span>Proje Başlat</span>
                    <Sparkles className="w-3 h-3 text-[#FF6B35]" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
