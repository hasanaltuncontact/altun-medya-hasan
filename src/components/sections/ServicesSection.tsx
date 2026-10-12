import Link from 'next/link';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { servicesDatabase } from '@/data/services-database';

// Altun Medya marka gradient'i: #D9C3AB (bej ışıma) → #F16001 → #C10801 → #000000
const BRAND_GRADIENT =
  'radial-gradient(110% 80% at 0% 100%, rgba(217,195,171,0.55) 0%, rgba(217,195,171,0) 34%), ' +
  'linear-gradient(105deg, #F16001 0%, #E03E01 24%, #C10801 55%, #4A0300 82%, #000000 100%)';

// Bölüm arka planı: kartlardaki marka gradient'inin bölüm geneline yayılmış hâli
const SECTION_GRADIENT =
  'radial-gradient(60% 55% at 0% 100%, rgba(217,195,171,0.50) 0%, rgba(217,195,171,0) 60%), ' +
  'linear-gradient(120deg, #F16001 0%, #E03E01 22%, #C10801 52%, #4A0300 80%, #000000 100%)';

// Buzlu cam kart yüzeyi: üstte parlak, altta hafif dumanlı
const GLASS_SURFACE =
  'linear-gradient(160deg, rgba(255,255,255,0.20) 0%, rgba(255,255,255,0.07) 45%, rgba(20,8,4,0.18) 100%)';

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
    <section
      id="services"
      style={{ backgroundImage: SECTION_GRADIENT }}
      className="relative overflow-hidden -mt-10 sm:-mt-16 -mb-10 sm:-mb-16 pt-24 sm:pt-36 pb-24 sm:pb-36 px-5 sm:px-10 lg:px-14 text-white"
    >
      {/* Işık lekeleri: cam kartların arkasında bulanıklaşarak derinlik verir */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-[8%] w-[420px] h-[420px] rounded-full bg-[#FF8A3D]/50 blur-[110px]" />
        <div className="absolute top-[38%] right-[6%] w-[460px] h-[460px] rounded-full bg-[#7A0A02]/70 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[30%] w-[380px] h-[380px] rounded-full bg-[#F4C9A0]/30 blur-[120px]" />
        <div className="absolute top-[18%] left-[48%] w-[260px] h-[260px] rounded-full bg-[#FFB27A]/25 blur-[90px]" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        
        {/* COMPACT SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-8 sm:mb-12 border-b border-white/20 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-xs font-mono font-bold uppercase tracking-wider text-white mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              <span>360° Stüdyo Çözümleri • 6 Disiplin</span>
            </div>
            <h2 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl tracking-[-0.04em] leading-[0.95] font-heading text-white">
              <span className="font-black">SADECE AJANS</span>{' '}
              <span className="font-light text-white/75">DEĞİLİZ.</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-white/80 max-w-md font-medium leading-relaxed">
            Fikir, 4K dikey prodüksiyon, yeni nesil web ve performans pazarlamasını tek stüdyoda birleştiriyoruz. Markanızı dijitalde <strong className="text-white font-extrabold">harekete</strong> geçiriyoruz.
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
                style={{ backgroundImage: GLASS_SURFACE }}
                className="group relative overflow-hidden rounded-[28px] p-6 sm:p-7 min-h-[300px] sm:min-h-[320px] text-white flex flex-col justify-between border border-white/20 backdrop-blur-2xl backdrop-saturate-150 shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_20px_45px_-20px_rgba(40,4,0,0.55)] hover:border-white/35 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.45),0_28px_60px_-18px_rgba(40,4,0,0.7)] hover:-translate-y-1 transition-all duration-500 ease-out"
              >
                {/* Cam parlaması: üst kenar ışığı + hover'da beliren yumuşak ışık */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/[0.12] to-transparent" />
                <div className="pointer-events-none absolute -top-1/3 -right-1/4 w-2/3 h-2/3 rounded-full bg-white/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="relative">
                  {/* TOP ROW: NUMBER & DETAIL ARROW */}
                  <div className="flex items-center justify-between mb-8 sm:mb-10">
                    <span className="font-mono text-xs tracking-[0.2em] text-white/60">
                      {cat.number}
                    </span>
                    <Link
                      href={`/hizmetler/${cat.slug}`}
                      className="w-9 h-9 rounded-full border border-white/25 text-white/80 group-hover:bg-white group-hover:text-black group-hover:border-white flex items-center justify-center transition-all duration-300"
                      title="Hizmeti İncele"
                      aria-label={`${cat.title} hizmetini incele`}
                    >
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>

                  {/* TITLE: LARGE BOLD-THIN PAIRING */}
                  <h3 className="text-[26px] sm:text-[30px] lg:text-[32px] tracking-[-0.03em] font-heading leading-[1.02] mb-3">
                    <Link href={`/hizmetler/${cat.slug}`}>
                      {cat.title.includes('&') ? (
                        <>
                          <span className="font-black block">{cat.title.split('&')[0].trim()}</span>
                          <span className="font-light text-white/80">&amp; {cat.title.split('&')[1].trim()}</span>
                        </>
                      ) : (
                        <span className="font-black">{cat.title}</span>
                      )}
                    </Link>
                  </h3>

                  {/* MINIMAL DESCRIPTION */}
                  <p className="text-[12.5px] sm:text-[13px] text-white/75 leading-relaxed max-w-[38ch]">
                    {summary.shortDesc}
                  </p>
                </div>

                <div className="relative mt-6">
                  {/* MINIMAL TAGS: THIN OUTLINE PILLS */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {summary.topBadges.map((badge) => (
                      <span
                        key={badge}
                        className="whitespace-nowrap px-2.5 py-1 rounded-full bg-white/10 border border-white/10 text-[10px] font-mono uppercase tracking-[0.08em] text-white/85"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>

                  {/* BOTTOM ACTION ROW */}
                  <div className="pt-4 border-t border-white/15 flex items-center justify-between gap-2">
                    <Link
                      href={`/hizmetler/${cat.slug}`}
                      className="text-xs font-mono font-bold text-white/85 hover:text-white flex items-center gap-1 transition-colors"
                    >
                      <span>Detaylar</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>

                    <button
                      onClick={() => onOpenBriefWithService(cat.slug)}
                      className="px-3.5 py-2 rounded-full bg-white text-black hover:bg-black hover:text-white text-[11px] font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all active:scale-95"
                    >
                      <span>Proje Başlat</span>
                      <Sparkles className="w-3 h-3 text-[#F16001]" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
