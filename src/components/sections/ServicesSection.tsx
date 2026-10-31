import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { servicesDatabase } from '@/data/services-database';
import SectionHeading from '@/components/ui/SectionHeading';

interface ServicesSectionProps {
  onOpenBriefWithService: (slug: string) => void;
}

// Kutularda tek, kısa cümle — yazıya boğmadan
const serviceSummaries: Record<string, string> = {
  'dijital-pazarlama': 'Reklam bütçenizi satışa ve müşteriye dönüştürüyoruz.',
  'web-dijital': 'Hızlı, Google uyumlu ve satış odaklı web siteleri.',
  'fotograf-video': '4K kamera ve drone ile sinematik çekimler.',
  'ozel-cekimler': 'Doğal, editoryal düğün ve özel gün hikayeleri.',
  'marka-tasarim': 'Akılda kalan logo ve kurumsal kimlik.',
  'reklam-produksiyon': 'Senaryodan kurguya reklam ve tanıtım filmleri.',
};

export default function ServicesSection({ onOpenBriefWithService }: ServicesSectionProps) {
  return (
    <section id="services" className="bg-[#0B0B0B] text-[#F8F0DB] py-14 md:py-24 px-5 sm:px-10 lg:px-14">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="Hizmetlerimiz" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 m-rail">
          {servicesDatabase.map((cat) => {
            const [bold, light] = cat.title.includes('&')
              ? cat.title.split('&').map((s) => s.trim())
              : [cat.title, ''];
            return (
              <article
                key={cat.id}
                className="group flex flex-col justify-between min-h-[220px] md:min-h-[240px] p-6 rounded-[22px] bg-[#161616] text-[#F8F0DB] border border-[#F8F0DB]/10 hover:bg-[#F8F0DB] hover:text-[#0B0B0B] transition-colors duration-300"
              >
                <div>
                  <h3 className="text-2xl md:text-[26px] leading-[1.05] tracking-[-0.03em] font-heading">
                    <Link href={`/hizmetler/${cat.slug}`}>
                      <span className="font-black block">{bold}</span>
                      {light && <span className="font-light opacity-75">&amp; {light}</span>}
                    </Link>
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed opacity-70 max-w-[32ch]">
                    {serviceSummaries[cat.id] ?? cat.tagline}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <button
                    onClick={() => onOpenBriefWithService(cat.slug)}
                    className="px-4 py-2 rounded-full text-sm font-bold bg-[#F8F0DB] text-[#0B0B0B] group-hover:bg-[#0B0B0B] group-hover:text-[#F8F0DB] transition-colors"
                  >
                    Teklif al
                  </button>
                  <Link
                    href={`/hizmetler/${cat.slug}`}
                    aria-label={`${cat.title} detayları`}
                    className="w-10 h-10 rounded-full border border-[#F8F0DB]/20 group-hover:border-[#0B0B0B]/20 flex items-center justify-center hover:bg-accent hover:text-onAccent hover:border-transparent transition-colors"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
