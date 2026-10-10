import { ArrowUpRight } from 'lucide-react';
import { worksList, WorkItem } from '@/data/works';

interface WorksSectionProps {
  onSelectWork: (work: WorkItem) => void;
}

export default function WorksSection({ onSelectWork }: WorksSectionProps) {
  return (
    <section id="works" className="py-20 px-5 sm:px-10 lg:px-14 bg-[#F1F0EA] text-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-black/15 pb-6">
          <div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#050505] leading-tight font-heading">
              VERİ DESTEKLİ<br />
              <span className="underline decoration-[#C8FF00] decoration-4">BAŞARI HİKAYELERİ.</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#050505]/80 max-w-md font-medium leading-relaxed">
            Gastronomi, lüks gayrimenkul, turizm ve e-ticaret sektörlerinde imza attığımız stratejik prodüksiyon ve pazarlama başarıları.
          </p>
        </div>

        {/* WORKS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {worksList.map((work) => (
            <div
              key={work.id}
              onClick={() => onSelectWork(work)}
              className="group bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-black/10 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-mono text-[#C8FF00] font-bold">
                  {work.category}
                </div>
                <div className="absolute bottom-3 right-3 bg-[#C8FF00] text-black px-3 py-1 rounded-lg text-xs font-mono font-extrabold shadow-lg">
                  {work.resultMetric} {work.resultLabel}
                </div>
              </div>

              <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                <div>
                  <span className="text-[10px] font-mono text-black/50 uppercase tracking-wider block">
                    Müşteri: {work.client}
                  </span>
                  <h3 className="text-lg font-extrabold text-[#050505] mt-1 group-hover:text-black transition-colors leading-snug font-heading">
                    {work.title}
                  </h3>
                  <p className="text-xs text-black/70 mt-2 line-clamp-2 leading-relaxed">
                    {work.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-black/10 flex items-center justify-between">
                  <div className="flex gap-1.5 flex-wrap">
                    {work.tags.map((tag) => (
                      <span key={tag} className="text-[9.5px] font-mono text-black/60 bg-black/5 px-2 py-0.5 rounded">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <span className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center group-hover:bg-[#C8FF00] group-hover:text-black transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
