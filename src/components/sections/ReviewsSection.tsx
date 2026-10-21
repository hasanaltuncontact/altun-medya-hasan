import Link from 'next/link';
import { clientLogos, logoScale } from '@/data/clients';
import { profileHrefByLogoName } from '@/data/client-profiles';

export const topRowReviews = [
  {
    id: 'rev-1',
    quote: 'Altun Medya sosyal medya yöneticimizin yerini aldı! Tüm lansman kurgusu ve Reels çekimleriyle 2 ayda dönüşümlerimiz üçe katlandı.',
    name: 'Maya Rodriguez',
    handle: '@maya.rodriguez • Vento Resort',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop',
  },
  {
    id: 'rev-2',
    quote: "Takipçilerimiz 2 ayda 800'den 44 bine çıktı! Hazırladıkları kurgular tam olarak markamızın diliyle konuşuyor.",
    name: 'Chloe Bennett',
    handle: '@chloe.bennett • Aura Living',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop',
  },
  {
    id: 'rev-3',
    quote: 'E-ticaret sitemizde kancalı Reels reklamları sayesinde ROAS 2.1x seviyesinden 5.2x seviyesine fırladı!',
    name: 'Selin Aksoy',
    handle: '@selin.aksoy • Nox Botanics',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&auto=format&fit=crop',
  },
  {
    id: 'rev-4',
    quote: 'Dükkanım için vazgeçilmez bir dönüm noktası oldu. Çekim gününden reklam optimizasyonuna kadar sıfır stres.',
    name: 'Murat Çelik',
    handle: '@murat.celik • Çelik İnşaat Didim',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop',
  },
];

export const bottomRowReviews = [
  {
    id: 'rev-5',
    quote: "Sanatı ve lüks mekan algısını yansıtma biçimleri harika. Instagram feed'imiz sonunda mimari galerimiz kadar kusursuz ✨",
    name: 'Grace Walker',
    handle: '@grace.walker • Yalıkavak Marina',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop',
  },
  {
    id: 'rev-6',
    quote: 'Bu ekip ne istediğimizi ilk toplantıda anladı. Önceden içerik üretmek için ne kadar vakit kaybettiğimi şimdi anlıyorum.',
    name: 'Brad Cooper',
    handle: '@brad.cooper • Kozmo Cloud B2B',
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=150&auto=format&fit=crop',
  },
  {
    id: 'rev-7',
    quote: 'Bodrum villa satışlarımız için hazırlanan 9:16 sinematik turlar doğrudan yurtdışından alıcı çekti. İnanılmaz bir verim!',
    name: 'Ebru Güneş',
    handle: '@ebru.gunes • Bodrum Prime Homes',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop',
  },
  {
    id: 'rev-8',
    quote: "Didim ve Kuşadası'nda yerel SEO ile Google Haritalar'da birinci sıraya çıktık. Telefonlarımız durmuyor.",
    name: 'Caner Arslan',
    handle: '@caner.arslan • Marina Gourmet',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=150&auto=format&fit=crop',
  },
];

export default function ReviewsSection() {
  const reviews = [...topRowReviews, ...bottomRowReviews];
  return (
    <section id="partners-reviews" className="py-14 md:py-24 px-5 sm:px-10 lg:px-14 bg-[#C3C3C3] text-[#262626]">
      <div className="max-w-7xl mx-auto">
        {/* BAŞLIK + TEK İSTATİSTİK */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-8 md:mb-12">
          <h2 className="text-4xl xs:text-5xl sm:text-6xl lg:text-[72px] tracking-[-0.04em] leading-[0.96] font-heading">
            <span className="font-black">Birlikte</span>{' '}
            <span className="font-light opacity-75">ürettik,</span>
            <br />
            <span className="font-light opacity-75">birlikte</span>{' '}
            <span className="font-black text-[#A40001]">büyüttük.</span>
          </h2>
          <div>
            <div className="text-5xl sm:text-7xl font-black font-heading leading-none">
              216<span className="text-[#A40001]">+</span>
            </div>
            <div className="text-sm opacity-60 mt-2">mutlu marka</div>
          </div>
        </div>

        {/* YORUMLAR — tek sıra kayan şerit */}
        <div className="mb-10 sm:mb-16 overflow-hidden -mx-5 sm:-mx-10 lg:-mx-14">
          <div className="animate-marquee-left flex w-max items-stretch gap-3 sm:gap-4 py-2 px-5">
            {[...reviews, ...reviews].map((rev, idx) => (
              <figure
                key={`${rev.id}-${idx}`}
                className="w-[280px] sm:w-[340px] flex-shrink-0 p-6 rounded-[22px] bg-[#262626] text-[#F6F6F6] flex flex-col justify-between shadow-lg"
              >
                <blockquote className="text-sm sm:text-base leading-relaxed">&ldquo;{rev.quote}&rdquo;</blockquote>
                <figcaption className="flex items-center gap-3 mt-5">
                  <img src={rev.avatar} alt={rev.name} className="w-9 h-9 rounded-full object-cover" />
                  <span className="text-sm font-bold">{rev.name}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        {/* REFERANS LOGOLARI */}
        <div className="pt-8 sm:pt-12 border-t border-[#262626]/15">
          <h3 className="text-center text-3xl sm:text-5xl tracking-[-0.03em] leading-none font-heading mb-6 sm:mb-10">
            <span className="font-black">Referans</span>{' '}
            <span className="font-light opacity-75">İşlerimiz</span>
          </h3>

          <div className="grid grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-4">
            {clientLogos.map((client, idx) => {
              const href = profileHrefByLogoName(client.name);
              return (
                <Link
                  key={`${client.name}-${idx}`}
                  href={href ?? '/referanslar'}
                  onContextMenu={(e) => e.preventDefault()}
                  onDragStart={(e) => e.preventDefault()}
                  aria-label={`${client.name} referans sayfası`}
                  className={`${idx >= 9 ? 'm-hide ' : ''}h-20 sm:h-32 p-3 sm:p-6 rounded-[18px] bg-[#F6F6F6]/60 border border-[#262626]/10 hover:bg-[#262626] flex items-center justify-center transition-colors duration-300 group select-none`}
                >
                  <img
                    src={client.svgPath}
                    alt={client.name}
                    draggable={false}
                    style={{ height: `calc(var(--logo-base) * ${logoScale(client.ratio)})` }}
                    className="[--logo-base:30px] sm:[--logo-base:60px] w-auto max-w-full object-contain filter brightness-0 group-hover:invert opacity-85 transition-[filter] select-none pointer-events-none"
                  />
                </Link>
              );
            })}
          </div>
          <div className="mt-6 sm:mt-10 flex justify-center">
            <Link
              href="/referanslar"
              className="px-7 py-3.5 rounded-full bg-[#A40001] text-[#F6F6F6] text-sm font-bold hover:bg-[#262626] transition-colors shadow-md"
            >
              Tüm vaka çalışmaları
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
