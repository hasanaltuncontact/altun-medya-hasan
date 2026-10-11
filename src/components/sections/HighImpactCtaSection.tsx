import { Ticket, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '@/config/site.config';

interface HighImpactCtaSectionProps {
  onOpenBrief: () => void;
}

export default function HighImpactCtaSection({ onOpenBrief }: HighImpactCtaSectionProps) {
  return (
    <section className="py-20 sm:py-28 px-5 sm:px-10 lg:px-14 bg-[#B33A06] text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center justify-between gap-8 relative z-10">
        <div className="space-y-3">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl tracking-tight text-white leading-[0.92] font-heading">
            <span className="font-black">MARKANIZI</span>{' '}
            <span className="font-light text-white/85">DİJİTALDE</span><br />
            <span className="font-light text-white/85">BİRLİKTE</span>{' '}
            <span className="font-black">YÜKSELTELİM.</span>
          </h2>
          <p className="text-xs sm:text-sm text-white/80 font-mono max-w-lg">
            Didim, Aydın ve Ege bölgesindeki markanız için özel prodüksiyon ve büyüme planını hemen devreye sokalım.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
          <button
            onClick={onOpenBrief}
            className="px-8 py-5 text-sm font-extrabold uppercase tracking-wider bg-black text-white hover:bg-white hover:text-black border border-white/20 rounded-2xl transition-all flex items-center justify-center gap-2.5 shadow-2xl active:scale-95"
          >
            <Ticket className="w-5 h-5 text-[#FF6B35]" />
            <span>Hemen Proje Biletini Kes</span>
          </button>

          <a
            href={`https://wa.me/${siteConfig.phone.replace(/[^0-9]/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-5 text-sm font-bold uppercase tracking-wider bg-white text-black border-2 border-black rounded-2xl hover:bg-black hover:text-white transition-all flex items-center justify-center gap-2 active:scale-95 font-mono"
          >
            <span>WhatsApp Hattı</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
