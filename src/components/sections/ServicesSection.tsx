import Link from 'next/link';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { servicesDatabase } from '@/data/services-database';

interface ServicesSectionProps {
  onOpenBriefWithService: (slug: string) => void;
}

export default function ServicesSection({ onOpenBriefWithService }: ServicesSectionProps) {
  return (
    <section id="services" className="py-20 px-5 sm:px-10 lg:px-14 bg-[#D9D0C1] text-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 border-b border-black/15 pb-6">
          <div>
            <h2 className="text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-[-0.04em] text-[#050505] leading-[0.92] font-heading">
              SADECE<br />
              AJANS<br />
              DEĞİLİZ.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#050505]/85 max-w-md font-medium leading-relaxed">
            Yaratıcı fikir, dikey prodüksiyon, web teknolojileri, fotoğraf çekimi ve performans pazarlamasını 360° stüdyo sisteminde birleştiriyoruz. Markanızı dijitalde <strong className="text-black font-extrabold">harekete</strong> geçiriyoruz.
          </p>
        </div>

        {/* 6 MAIN CATEGORY CARDS LIST */}
        <div className="divide-y divide-black/15">
          {servicesDatabase.map((cat) => (
            <div
              key={cat.id}
              className="group py-8 sm:py-10 transition-all duration-300 hover:px-3 flex flex-col lg:flex-row lg:items-center justify-between gap-6"
            >
              <div className="flex items-start gap-5 sm:gap-8 max-w-2xl">
                <span className="text-xl sm:text-2xl font-mono text-[#050505]/60 group-hover:text-black font-extrabold pt-1">
                  {cat.number}
                </span>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#050505] group-hover:translate-x-1.5 transition-transform font-heading">
                    {cat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#050505]/80 mt-1.5 leading-relaxed">
                    {cat.description}
                  </p>

                  {/* 4-6 SUB-SERVICE BADGES */}
                  <div className="flex flex-wrap items-center gap-2 mt-4">
                    {cat.badges.map((badge) => (
                      <span
                        key={badge}
                        className="px-3 py-1 rounded-lg bg-black/10 text-black font-mono text-[11px] font-semibold tracking-tight group-hover:bg-black group-hover:text-[#C8FF00] transition-colors"
                      >
                        ● {badge}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* ACTION CTAS */}
              <div className="flex items-center gap-3 self-end lg:self-center">
                <Link
                  href={`/hizmetler/${cat.slug}`}
                  className="px-4 py-2.5 rounded-xl bg-black/10 hover:bg-black hover:text-[#C8FF00] text-black text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center gap-1.5"
                >
                  <span>Detaylı İncele</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>

                <button
                  onClick={() => onOpenBriefWithService(cat.slug)}
                  className="px-4 py-2.5 rounded-xl bg-black text-white text-xs font-mono font-bold uppercase tracking-wider hover:bg-neutral-800 transition-all flex items-center gap-1.5 active:scale-95 shadow-md"
                >
                  <span>Proje Başlat</span>
                  <Sparkles className="w-3.5 h-3.5 text-[#C8FF00]" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
