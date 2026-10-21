import { siteConfig } from '@/config/site.config';

interface HighImpactCtaSectionProps {
  onOpenBrief: () => void;
}

export default function HighImpactCtaSection({ onOpenBrief }: HighImpactCtaSectionProps) {
  return (
    <section className="py-14 sm:py-24 px-5 sm:px-10 lg:px-14 bg-[#A40001] text-[#F6F6F6]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center justify-between gap-8">
        <h2 className="text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-[0.92] font-heading">
          <span className="font-black">MARKANIZI</span>{' '}
          <span className="font-light opacity-85">BİRLİKTE</span>
          <br />
          <span className="font-black">YÜKSELTELİM.</span>
        </h2>

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={onOpenBrief}
            className="px-8 py-4 rounded-full text-sm font-bold bg-[#262626] text-[#F6F6F6] hover:bg-[#F6F6F6] hover:text-[#262626] transition-colors"
          >
            Proje başlat
          </button>
          <a
            href={`https://wa.me/${siteConfig.phone.replace(/[^0-9]/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full text-sm font-bold text-center border border-[#F6F6F6]/40 hover:bg-[#F6F6F6] hover:text-[#262626] transition-colors"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
