'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, ChevronRight } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import MobileNav from '@/components/layout/MobileNav';
import BriefModal from '@/components/modals/BriefModal';
import { clientProfiles, getProfileLogo } from '@/data/client-profiles';
import BrandAvatar from '@/components/ui/BrandAvatar';

export default function ReferencesClient() {
  const [isBriefOpen, setIsBriefOpen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [filter, setFilter] = useState('Tümü');

  const groups = useMemo(() => {
    const g = new Set(clientProfiles.map((p) => (p.sector || 'Diğer').split(' & ')[0]));
    return ['Tümü', ...Array.from(g)];
  }, []);

  const list = filter === 'Tümü' ? clientProfiles : clientProfiles.filter((p) => (p.sector || '').startsWith(filter));

  return (
    <div className="min-h-screen bg-[#262626] text-[#F6F6F6] font-sans antialiased">
      <Header
        onOpenBrief={() => setIsBriefOpen(true)}
        onToggleMobileMenu={() => setIsMobileNavOpen(!isMobileNavOpen)}
        isMobileMenuOpen={isMobileNavOpen}
      />
      <MobileNav isOpen={isMobileNavOpen} onClose={() => setIsMobileNavOpen(false)} onOpenBrief={() => setIsBriefOpen(true)} />

      <main className="pt-28">
        <section className="relative overflow-hidden px-5 sm:px-10 lg:px-14 py-16 sm:py-24">
          <div className="relative max-w-7xl mx-auto">
            <nav className="flex items-center gap-1.5 text-xs font-medium text-[#F6F6F6]/45 mb-8">
              <Link href="/" className="hover:text-[#F6F6F6]">Anasayfa</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-[#F6F6F6]/80">Referanslar</span>
            </nav>
            <span className="text-xs font-medium font-bold text-[#A40001]">
              {clientProfiles.length} marka · Vaka çalışmaları
            </span>
            <h1 className="mt-3 text-4xl sm:text-6xl lg:text-7xl font-extrabold font-heading tracking-tight leading-[1.02] max-w-4xl">
              Kime <span className="font-light text-[#F6F6F6]/70">ne iş</span> yaptık?
            </h1>
            <p className="mt-6 text-lg text-[#F6F6F6]/65 max-w-2xl leading-relaxed">
              Her markanın kendi sayfasında hedefini, yaptığımız işleri, elde ettiğimiz sonuçları ve ürettiğimiz içerikleri bulabilirsiniz.
            </p>

            <div className="mt-10 flex flex-wrap gap-2">
              {groups.map((g) => (
                <button
                  key={g}
                  onClick={() => setFilter(g)}
                  className={`px-4 py-2 rounded-full text-xs font-bold border transition-all ${
                    filter === g ? 'bg-white text-[#262626] border-white' : 'bg-white/5 text-[#F6F6F6]/70 border-[#F6F6F6]/10 hover:border-[#F6F6F6]/40'
                  }`}
                >
                  {g}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 sm:px-10 lg:px-14 pb-16 sm:pb-28">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-5">
            {list.map((p, i) => {
              const logo = getProfileLogo(p);
              const headline = p.results[0];
              return (
                <motion.div
                  key={p.slug}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: Math.min(i * 0.03, 0.4) }}
                >
                  <Link
                    href={`/${p.slug}`}
                    className="group relative flex flex-col h-full p-3.5 sm:p-6 rounded-2xl sm:rounded-[2rem] bg-[#262626] border border-[#F6F6F6]/10 hover:border-[#F6F6F6]/30 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                  >
                    <div className="relative flex items-center gap-4">
                      <BrandAvatar
                        accent={p.accent}
                        logoSrc={logo?.svgPath}
                        name={p.displayName}
                        className="w-12 h-12 sm:w-16 sm:h-16 ring-2 ring-[#F6F6F6]/10 group-hover:ring-[#F6F6F6]/40 transition-all"
                      />
                      <div className="min-w-0">
                        <h2 className="text-lg font-bold font-heading truncate">{p.displayName}</h2>
                        <p className="text-xs font-medium text-[#F6F6F6]/50 truncate">{p.sector} · {p.location}</p>
                      </div>
                      <ArrowUpRight className="ml-auto w-5 h-5 text-[#F6F6F6]/30 group-hover:text-[#F6F6F6] group-hover:rotate-45 transition-all shrink-0" />
                    </div>
                    <p className="m-hide relative mt-5 text-sm text-[#F6F6F6]/70 leading-relaxed flex-1">{p.tagline}</p>
                    <div className="m-hide relative mt-5 pt-4 border-t border-[#F6F6F6]/10 flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-black font-heading" style={{ color: p.accent }}>{headline.value}</div>
                        <div className="text-xs font-medium text-[#F6F6F6]/45">{headline.label}</div>
                      </div>
                      <span className="text-xs font-medium text-[#F6F6F6]/40">altunmedya.com/{p.slug}</span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </section>
      </main>

      <Footer />
      <BriefModal isOpen={isBriefOpen} onClose={() => setIsBriefOpen(false)} />
    </div>
  );
}
