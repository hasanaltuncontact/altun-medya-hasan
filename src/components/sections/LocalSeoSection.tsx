'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { seoKeywordsDetailed } from '@/config/seo-keywords';
import SectionHeading from '@/components/ui/SectionHeading';

export default function LocalSeoSection() {
  return (
    <section id="seo-region" className="py-14 md:py-24 px-5 sm:px-10 lg:px-14 bg-[#0B0B0B] text-[#F8F0DB]">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="Hizmet Bölgelerimiz" desc="Didim, Akbük, Kuşadası, Söke, Bodrum ve Aydın." />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 m-rail">
          {seoKeywordsDetailed.slice(0, 6).map((item) => (
            <Link
              key={item.id}
              href={`/hizmetler/${item.slug}`}
              className="group flex flex-col justify-between min-h-[170px] p-6 rounded-[22px] bg-[#F8F0DB]/[0.06] border border-[#F8F0DB]/10 hover:bg-accent hover:border-transparent transition-colors duration-300 hover:text-onAccent"
            >
              <div>
                <h3 className="text-xl font-bold font-heading">{item.keyword}</h3>
                <p className="mt-2 text-sm opacity-65 leading-relaxed line-clamp-2">{item.description}</p>
              </div>
              <span className="mt-5 self-end w-10 h-10 rounded-full bg-[#F8F0DB] text-[#0B0B0B] flex items-center justify-center">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>

        {/* Kalan bölgesel hizmetler: kısa etiket bağlantıları (iç linkler korunur, bölüm kısa kalır) */}
        <ul className="mt-6 md:mt-8 flex flex-wrap gap-2">
          {seoKeywordsDetailed.slice(6).map((item) => (
            <li key={item.id}>
              <Link
                href={`/hizmetler/${item.slug}`}
                className="inline-block px-4 py-2 rounded-full border border-[#F8F0DB]/15 text-sm text-[#F8F0DB]/80 hover:bg-[#F8F0DB] hover:text-[#0B0B0B] transition-colors"
              >
                {item.keyword}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-8 md:mt-12 flex justify-center">
          <Link
            href="/blog"
            className="px-7 py-3.5 rounded-full border border-[#F8F0DB]/25 text-sm font-bold hover:bg-[#F8F0DB] hover:text-[#0B0B0B] transition-colors"
          >
            Blog rehberlerini oku
          </Link>
        </div>
      </div>
    </section>
  );
}
