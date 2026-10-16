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
    <div className="min-h-screen bg-[#050505] text-white font-sans antialiased">
      <Header
        onOpenBrief={() => setIsBriefOpen(true)}
        onToggleMobileMenu={() => setIsMobileNavOpen(!isMobileNavOpen)}
        isMobileMenuOpen={isMobileNavOpen}
      />
      <MobileNav isOpen={isMobileNavOpen} onClose={() => setIsMobileNavOpen(false)} onOpenBrief={() => setIsBriefOpen(true)} />

      <main className="pt-28">
        <section className="relative overflow-hidden px-5 sm:px-10 lg:px-14 py-16 sm:py-24">
          <div aria-hidden className="absolute -top-40 right-1/4 w-[600px] h-[600px] bg-[#B33A06]/15 rounded-full blur-[160px] pointer-events-none" />
          <div className="relative max-w-7xl mx-auto">
            <nav className="flex items-center gap-1.5 text-[11px] font-mono text-white/45 mb-8">
              <Link href="/" className="hover:text-white">Anasayfa</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-white/80">Referanslar</span>
            </nav>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#B33A06]">
              {clientProfiles.length} marka · Vaka çalışmaları
            </span>
            <h1 className="mt-3 text-4xl sm:text-6xl lg:text-7xl font-extrabold font-heading tracking-tight leading-[1.02] max-w-4xl">
              Kime <span className="font-light text-white/70">ne iş</span> yaptık?
            </h1>
            <p className="mt-6 text-lg text-white/65 max-w-2xl leading-relaxed">
              Her markanın kendi sayfasında hedefini, yaptığımız işleri, elde ettiğimiz sonuçları ve ürettiğimiz içerikleri bulabilirsiniz.
            </p>

            <div className="mt-10 flex flex-wrap gap-2">
              {groups.map((g) => (
                <button
                  key={g}
                  onClick={() => setFilter(g)}
                  className={`px-4 py-2 rounded-full text-xs font-bold border transition-all ${
                    filter === g ? 'bg-white text-black border-white' : 'bg-white/5 text-white/70 border-white/10 hover:border-white/40'
                  }`}
                >
                  {g}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 sm:px-10 lg:px-14 pb-28">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
                    className="group relative flex flex-col h-full p-6 rounded-[2rem] bg-[#0B0B0B] border border-white/10 hover:border-white/30 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                  >
                    <div aria-hidden className="absolute -top-20 -right-20 w-48 h-48 rounded-full blur-3xl opacity-15 group-hover:opacity-35 transition-opacity" style={{ background: p.accent }} />
                    <div className="relative flex items-center gap-4">
                      <span
                        className="w-16 h-16 shrink-0 rounded-full overflow-hidden ring-2 ring-white/10 group-hover:ring-white/40 transition-all"
                        style={{ background: `radial-gradient(circle at 30% 25%, ${p.accent}, #0A0A0A 85%)` }}
                      >
                        {p.cover ? (
                          <img src={p.cover} alt={p.displayName} loading="lazy" className="w-full h-full object-cover" />
                        ) : logo ? (
                          <img src={logo.svgPath} alt={p.displayName} loading="lazy" className="w-full h-full object-contain p-3.5 brightness-0 invert" />
                        ) : null}
                      </span>
                      <div className="min-w-0">
                        <h2 className="text-lg font-bold font-heading truncate">{p.displayName}</h2>
                        <p className="text-[11px] font-mono text-white/50 truncate">{p.sector} · {p.location}</p>
                      </div>
                      <ArrowUpRight className="ml-auto w-5 h-5 text-white/30 group-hover:text-white group-hover:rotate-45 transition-all shrink-0" />
                    </div>
                    <p className="relative mt-5 text-sm text-white/70 leading-relaxed flex-1">{p.tagline}</p>
                    <div className="relative mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-black font-heading" style={{ color: p.accent }}>{headline.value}</div>
                        <div className="text-[10px] font-mono uppercase tracking-widest text-white/45">{headline.label}</div>
                      </div>
                      <span className="text-[11px] font-mono text-white/40">altunmedya.com/{p.slug}</span>
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
