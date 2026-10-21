'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { seoKeywordsDetailed } from '@/config/seo-keywords';

export default function LocalSeoSection() {
  return (
    <section id="seo-region" className="py-14 md:py-24 px-5 sm:px-10 lg:px-14 bg-[#262626] text-[#F6F6F6]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-7 md:mb-12">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.05] font-heading">
            <span className="font-black">DİDİM VE EGE&apos;DE</span>
            <br />
            <span className="font-light opacity-80">ZİRVEDE </span>
            <span className="font-black text-[#A40001]">KONUMLANIN.</span>
          </h2>
          <p className="m-hide text-sm opacity-70 max-w-sm leading-relaxed">
            Didim, Akbük, Kuşadası ve Bodrum&apos;da yerel SEO, Google Harita ve yerinde çekim.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 m-rail">
          {seoKeywordsDetailed.map((item) => (
            <Link
              key={item.id}
              href={`/hizmetler/${item.slug}`}
              className="group flex flex-col justify-between min-h-[170px] p-6 rounded-[22px] bg-[#F6F6F6]/[0.06] border border-[#F6F6F6]/10 hover:bg-[#A40001] hover:border-transparent transition-colors duration-300"
            >
              <div>
                <h3 className="text-xl font-bold font-heading">{item.keyword}</h3>
                <p className="mt-2 text-sm opacity-65 leading-relaxed line-clamp-2">{item.description}</p>
              </div>
              <span className="mt-5 self-end w-10 h-10 rounded-full bg-[#F6F6F6] text-[#262626] flex items-center justify-center">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-8 md:mt-12 flex justify-center">
          <Link
            href="/blog"
            className="px-7 py-3.5 rounded-full border border-[#F6F6F6]/25 text-sm font-bold hover:bg-[#F6F6F6] hover:text-[#262626] transition-colors"
          >
            Blog rehberlerini oku
          </Link>
        </div>
      </div>
    </section>
  );
}
