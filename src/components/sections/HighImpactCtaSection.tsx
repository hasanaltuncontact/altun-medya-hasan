import { siteConfig } from '@/config/site.config';
import { BrandStar } from '@/components/ui/StarDivider';

interface HighImpactCtaSectionProps {
  onOpenBrief: () => void;
}

export default function HighImpactCtaSection({ onOpenBrief }: HighImpactCtaSectionProps) {
  return (
    <section className="pt-4 pb-10 sm:pt-6 sm:pb-16 px-4 sm:px-10 lg:px-14 bg-[#141414]">
      <div className="relative max-w-7xl mx-auto rounded-[28px] sm:rounded-[44px] bg-[#0B0B0B] text-[#F8F0DB] border border-[#F8F0DB]/10 overflow-hidden px-6 py-12 sm:px-14 sm:py-20 text-center">
        <video
          aria-hidden
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
          poster="/videos/reels/posters/dior-beach-club.jpg"
        >
          <source src="/videos/reels/dior-beach-club.mp4" type="video/mp4" />
        </video>
        <div className="relative flex flex-col items-center gap-6 sm:gap-8">
          <BrandStar className="w-6 h-6 sm:w-8 sm:h-8" color="#F8F0DB" />
          <h2 className="text-[30px] sm:text-5xl lg:text-6xl font-black font-heading tracking-[-0.03em] leading-[1.05]">
            Projenizi konuşalım
          </h2>
          <p className="-mt-2 sm:-mt-4 text-sm sm:text-base text-[#F8F0DB]/60">Ücretsiz ön görüşme, 24 saat içinde dönüş.</p>

          <div className="flex items-center justify-center gap-2.5 sm:gap-3">
            <button
              onClick={onOpenBrief}
              className="group inline-flex items-center gap-3 pl-5 pr-1.5 py-1.5 rounded-full text-sm font-bold bg-[#F8F0DB] text-[#0B0B0B] hover:bg-white transition-colors"
            >
              Proje başlat
              <span className="w-8 h-8 rounded-full bg-[#0B0B0B] text-[#F8F0DB] grid place-items-center transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </button>
            <a
              href={`https://wa.me/${siteConfig.phone.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-full text-sm font-bold text-center border border-[#F8F0DB]/30 hover:bg-[#F8F0DB] hover:text-[#0B0B0B] transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
