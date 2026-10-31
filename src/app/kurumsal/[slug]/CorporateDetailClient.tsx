'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import MobileNav from '@/components/layout/MobileNav';
import BriefModal from '@/components/modals/BriefModal';
import { AboutPageData } from '@/data/about-database';
import { ChevronRight } from 'lucide-react';

interface CorporateDetailClientProps {
  pageData: AboutPageData;
}

export default function CorporateDetailClient({ pageData }: CorporateDetailClientProps) {
  const [isBriefOpen, setIsBriefOpen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-[#F8F0DB] selection:bg-accent selection:text-[#F8F0DB] font-sans antialiased">
      
      <Header
        onOpenBrief={() => setIsBriefOpen(true)}
        onToggleMobileMenu={() => setIsMobileNavOpen(!isMobileNavOpen)}
        isMobileMenuOpen={isMobileNavOpen}
      />

      <MobileNav
        isOpen={isMobileNavOpen}
        onClose={() => setIsMobileNavOpen(false)}
        onOpenBrief={() => setIsBriefOpen(true)}
      />

      <main className="pt-28">
        {/* BREADCRUMB NAV */}
        <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-14 py-4">
          <div className="flex items-center gap-2 text-xs font-medium text-[#F8F0DB]/50">
            <Link href="/" className="hover:text-[#F8F0DB] transition-colors">Anasayfa</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#F8F0DB]/80">Kurumsal</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-accent font-bold">{pageData.badge}</span>
          </div>
        </div>

        {/* HERO SECTION */}
        <section className="py-16 sm:py-24 px-5 sm:px-10 lg:px-14 border-b border-[#F8F0DB]/10 relative overflow-hidden bg-[#0B0B0B]">
          
          <div className="max-w-7xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F8F0DB]/5 border border-[#F8F0DB]/10 text-xs font-medium text-accent mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-ping text-onAccent" />
              <span>{pageData.badge}</span>
            </div>

            <h1 className="text-3xl xs:text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#F8F0DB] max-w-4xl leading-[1.08] font-heading">
              {pageData.title}
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-[#F8F0DB]/70 max-w-2xl leading-relaxed">
              {pageData.heroDescription}
            </p>

            {/* STATS BAND */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-[#F8F0DB]/10">
              {pageData.heroStats.map((st, i) => (
                <div key={i} className="p-4 rounded-2xl bg-[#F8F0DB]/[0.03] border border-[#F8F0DB]/10">
                  <div className="text-2xl sm:text-4xl font-black text-[#F8F0DB] font-heading">{st.value}</div>
                  <div className="text-xs font-medium text-[#F8F0DB]/55 mt-1 font-semibold">{st.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* OVERVIEW SECTION */}
        <section className="py-20 px-5 sm:px-10 lg:px-14 bg-[#0B0B0B]">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-medium font-bold text-accent">MİSYON & UZMANLIK</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8F0DB] font-heading leading-tight">
                {pageData.overviewTitle}
              </h2>
              <div className="w-16 h-1 bg-accent rounded-full text-onAccent" />
            </div>

            <div className="lg:col-span-7 space-y-6 text-base text-[#F8F0DB]/80 leading-relaxed font-normal">
              {pageData.overviewContent.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        {/* PILLARS / VALUES GRID */}
        <section className="py-20 px-5 sm:px-10 lg:px-14 bg-[#0B0B0B] border-t border-[#F8F0DB]/10">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8F0DB] font-heading">
                {pageData.pillarsTitle}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {pageData.pillars.map((item, idx) => (
                <div key={idx} className="p-6 rounded-3xl bg-[#161616] border border-[#F8F0DB]/10 hover:bg-accent transition-colors hover:text-onAccent">
                  <h3 className="text-lg font-bold text-[#F8F0DB] font-heading mb-2">{item.title}</h3>
                  <p className="text-xs text-[#F8F0DB]/60 leading-relaxed font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TIMELINE (For Hikayemiz) */}
        {pageData.timeline && (
          <section className="py-20 px-5 sm:px-10 lg:px-14 bg-[#0B0B0B] border-t border-[#F8F0DB]/10">
            <div className="max-w-7xl mx-auto">
              <div className="mb-14 text-center">
                <span className="text-xs font-medium font-bold text-accent">TARSİHÇE</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8F0DB] font-heading mt-2">
                  {pageData.chronologyTitle}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
                {pageData.timeline.map((item, i) => (
                  <div key={i} className="p-6 rounded-3xl bg-[#0B0B0B] border border-[#F8F0DB]/10 relative">
                    <div className="text-3xl font-black text-accent font-heading mb-3">{item.year}</div>
                    <h3 className="text-base font-bold text-[#F8F0DB] mb-2">{item.title}</h3>
                    <p className="text-xs text-[#F8F0DB]/60 leading-relaxed font-medium">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* TEAM MEMBERS (For Biz Kimiz) */}
        {pageData.teamMembers && (
          <section className="py-20 px-5 sm:px-10 lg:px-14 bg-[#0B0B0B] border-t border-[#F8F0DB]/10">
            <div className="max-w-7xl mx-auto">
              <div className="mb-14">
                <span className="text-xs font-medium font-bold text-accent">YARATICI EKİP</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8F0DB] font-heading mt-2">
                  {pageData.teamTitle}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {pageData.teamMembers.map((member, idx) => (
                  <div key={idx} className="p-7 rounded-3xl bg-[#0B0B0B] border border-[#F8F0DB]/10 hover:border-accent/50 transition-all">
                    <h3 className="text-xl font-extrabold text-[#F8F0DB] font-heading">{member.name}</h3>
                    <div className="text-xs text-accent font-medium font-bold mt-1 mb-3">{member.role}</div>
                    <p className="text-xs text-[#F8F0DB]/70 leading-relaxed mb-4 font-medium">{member.bio}</p>
                    <div className="flex flex-wrap gap-2">
                      {member.tags.map((t, ti) => (
                        <span key={ti} className="text-xs font-medium px-2.5 py-1 rounded-full bg-[#F8F0DB]/5 border border-[#F8F0DB]/10 text-[#F8F0DB]/60">
                          #{t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA BANNER */}
        <section className="py-20 px-5 sm:px-10 lg:px-14 bg-[#0B0B0B] text-[#F8F0DB]">
          <div className="max-w-5xl mx-auto text-center space-y-6">
            <h2 className="text-3xl sm:text-5xl font-black font-heading tracking-tight">
              {pageData.callToActionTitle}
            </h2>
            <p className="text-base sm:text-lg font-medium text-[#0B0B0B]/80 max-w-2xl mx-auto">
              {pageData.callToActionDesc}
            </p>
            <div className="pt-4 flex justify-center">
              <button
                onClick={() => setIsBriefOpen(true)}
                className="px-8 py-4 text-xs sm:text-sm font-extrabold bg-[#0B0B0B] text-[#F8F0DB] rounded-xl hover:bg-[#0B0B0B]/90 transition-all flex items-center gap-3 shadow-2xl active:scale-95"
              >
                <span>Proje Biletini Kes & Strateji Planla</span>
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <BriefModal
        isOpen={isBriefOpen}
        onClose={() => setIsBriefOpen(false)}
      />
    </div>
  );
}
