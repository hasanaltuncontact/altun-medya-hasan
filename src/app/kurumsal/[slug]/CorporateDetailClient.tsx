'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import MobileNav from '@/components/layout/MobileNav';
import BriefModal from '@/components/modals/BriefModal';
import { AboutPageData } from '@/data/about-database';
import { 
  Target, Video, Code, MapPin, Camera, TrendingUp, 
  Cpu, Users, Zap, Globe, ShieldCheck, ArrowRight, Ticket, CheckCircle2, ChevronRight 
} from 'lucide-react';

interface CorporateDetailClientProps {
  pageData: AboutPageData;
}

export default function CorporateDetailClient({ pageData }: CorporateDetailClientProps) {
  const [isBriefOpen, setIsBriefOpen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Target': return <Target className="w-6 h-6 text-[#B33A06]" />;
      case 'Video': return <Video className="w-6 h-6 text-[#B33A06]" />;
      case 'Code': return <Code className="w-6 h-6 text-[#B33A06]" />;
      case 'MapPin': return <MapPin className="w-6 h-6 text-[#B33A06]" />;
      case 'Camera': return <Camera className="w-6 h-6 text-[#B33A06]" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6 text-[#B33A06]" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-[#B33A06]" />;
      case 'Users': return <Users className="w-6 h-6 text-[#B33A06]" />;
      case 'Zap': return <Zap className="w-6 h-6 text-[#B33A06]" />;
      case 'Globe': return <Globe className="w-6 h-6 text-[#B33A06]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-[#B33A06]" />;
      default: return <Target className="w-6 h-6 text-[#B33A06]" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#B33A06] selection:text-white font-sans antialiased">
      
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
          <div className="flex items-center gap-2 text-xs font-mono text-white/50">
            <Link href="/" className="hover:text-white transition-colors">Anasayfa</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/80">Kurumsal</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#B33A06] font-bold">{pageData.badge}</span>
          </div>
        </div>

        {/* HERO SECTION */}
        <section className="py-16 sm:py-24 px-5 sm:px-10 lg:px-14 border-b border-white/10 relative overflow-hidden bg-gradient-to-b from-[#080808] to-[#050505]">
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#B33A06]/[0.05] rounded-full blur-[140px] pointer-events-none" />
          
          <div className="max-w-7xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#B33A06] mb-6">
              <span className="w-2 h-2 rounded-full bg-[#B33A06] animate-ping" />
              <span>{pageData.badge}</span>
            </div>

            <h1 className="text-3xl xs:text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-4xl leading-[1.08] font-heading">
              {pageData.title}
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-white/70 max-w-2xl leading-relaxed">
              {pageData.heroDescription}
            </p>

            {/* STATS BAND */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/10">
              {pageData.heroStats.map((st, i) => (
                <div key={i} className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                  <div className="text-2xl sm:text-4xl font-black text-white font-heading">{st.value}</div>
                  <div className="text-xs font-mono text-[#8E8E93] mt-1 font-semibold">{st.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* OVERVIEW SECTION */}
        <section className="py-20 px-5 sm:px-10 lg:px-14 bg-[#0A0A0A]">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#B33A06]">MİSYON & UZMANLIK</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading leading-tight">
                {pageData.overviewTitle}
              </h2>
              <div className="w-16 h-1 bg-[#B33A06] rounded-full" />
            </div>

            <div className="lg:col-span-7 space-y-6 text-base text-white/80 leading-relaxed font-normal">
              {pageData.overviewContent.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        {/* PILLARS / VALUES GRID */}
        <section className="py-20 px-5 sm:px-10 lg:px-14 bg-[#050505] border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#B33A06]">STANDARTLARIMIZ</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading mt-2">
                {pageData.pillarsTitle}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {pageData.pillars.map((item, idx) => (
                <div key={idx} className="p-6 rounded-3xl bg-[#0D0D0D] border border-white/10 hover:border-[#B33A06]/40 transition-all group">
                  <div className="p-3 rounded-2xl bg-white/5 w-fit mb-4 group-hover:scale-110 transition-transform">
                    {getIcon(item.iconName)}
                  </div>
                  <h3 className="text-lg font-bold text-white font-heading mb-2">{item.title}</h3>
                  <p className="text-xs text-white/60 leading-relaxed font-mono">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TIMELINE (For Hikayemiz) */}
        {pageData.timeline && (
          <section className="py-20 px-5 sm:px-10 lg:px-14 bg-[#080808] border-t border-white/10">
            <div className="max-w-7xl mx-auto">
              <div className="mb-14 text-center">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#B33A06]">TARSİHÇE</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading mt-2">
                  {pageData.chronologyTitle}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
                {pageData.timeline.map((item, i) => (
                  <div key={i} className="p-6 rounded-3xl bg-[#0D0D0D] border border-white/10 relative">
                    <div className="text-3xl font-black text-[#B33A06] font-heading mb-3">{item.year}</div>
                    <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-xs text-white/60 leading-relaxed font-mono">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* TEAM MEMBERS (For Biz Kimiz) */}
        {pageData.teamMembers && (
          <section className="py-20 px-5 sm:px-10 lg:px-14 bg-[#080808] border-t border-white/10">
            <div className="max-w-7xl mx-auto">
              <div className="mb-14">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#B33A06]">YARATICI EKİP</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading mt-2">
                  {pageData.teamTitle}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {pageData.teamMembers.map((member, idx) => (
                  <div key={idx} className="p-7 rounded-3xl bg-[#0D0D0D] border border-white/10 hover:border-[#B33A06]/50 transition-all">
                    <h3 className="text-xl font-extrabold text-white font-heading">{member.name}</h3>
                    <div className="text-xs text-[#B33A06] font-mono font-bold mt-1 mb-3">{member.role}</div>
                    <p className="text-xs text-white/70 leading-relaxed mb-4 font-mono">{member.bio}</p>
                    <div className="flex flex-wrap gap-2">
                      {member.tags.map((t, ti) => (
                        <span key={ti} className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/60">
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
        <section className="py-20 px-5 sm:px-10 lg:px-14 bg-[#B33A06] text-white">
          <div className="max-w-5xl mx-auto text-center space-y-6">
            <h2 className="text-3xl sm:text-5xl font-black font-heading tracking-tight">
              {pageData.callToActionTitle}
            </h2>
            <p className="text-base sm:text-lg font-medium text-black/80 max-w-2xl mx-auto">
              {pageData.callToActionDesc}
            </p>
            <div className="pt-4 flex justify-center">
              <button
                onClick={() => setIsBriefOpen(true)}
                className="px-8 py-4 text-xs sm:text-sm font-extrabold uppercase tracking-wider bg-black text-white rounded-xl hover:bg-black/90 transition-all flex items-center gap-3 shadow-2xl active:scale-95"
              >
                <Ticket className="w-4 h-4 text-[#B33A06]" />
                <span>Proje Biletini Kes & Strateji Planla</span>
                <ArrowRight className="w-4 h-4 text-[#B33A06]" />
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
