import { ArrowUpRight } from 'lucide-react';
import { worksList, WorkItem } from '@/data/works';

interface WorksSectionProps {
  onSelectWork: (work: WorkItem) => void;
}

export default function WorksSection({ onSelectWork }: WorksSectionProps) {
  return (
    <section id="works" className="py-14 md:py-20 px-5 sm:px-10 lg:px-14 bg-[#F6F6F6] text-[#262626]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-tight font-heading mb-7 md:mb-12">
          <span className="font-black">BAŞARI</span>{' '}
          <span className="font-light opacity-75">HİKAYELERİ.</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-4 md:gap-5 m-rail">
          {worksList.map((work) => (
            <button
              key={work.id}
              type="button"
              onClick={() => onSelectWork(work)}
              className="group text-left p-2.5 rounded-[26px] bg-[#262626] text-[#F6F6F6] hover:bg-[#A40001] transition-colors duration-300"
            >
              <div className="aspect-[4/3] rounded-[20px] overflow-hidden">
                <img
                  src={work.image}
                  alt={work.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="px-3 pt-4 pb-3">
                <h3 className="text-lg leading-snug font-heading font-bold line-clamp-2">{work.title}</h3>
                <div className="mt-5 flex items-end justify-between">
                  <div>
                    <div className="text-2xl font-black font-heading">{work.resultMetric}</div>
                    <div className="text-sm opacity-60">{work.resultLabel}</div>
                  </div>
                  <span className="w-10 h-10 rounded-full bg-[#F6F6F6] text-[#262626] flex items-center justify-center">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
