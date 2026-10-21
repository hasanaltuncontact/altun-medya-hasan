'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import MobileNav from '@/components/layout/MobileNav';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import BrandsMarquee from '@/components/sections/BrandsMarquee';
import ServicesSection from '@/components/sections/ServicesSection';
import ReelsLabSection from '@/components/sections/ReelsLabSection';
import CreatorNetworkSection from '@/components/sections/CreatorNetworkSection';
import WorksSection from '@/components/sections/WorksSection';
import ProjectTicketSection from '@/components/sections/ProjectTicketSection';
import ReviewsSection from '@/components/sections/ReviewsSection';
import LocalSeoSection from '@/components/sections/LocalSeoSection';
import AboutSection from '@/components/sections/AboutSection';
import CareerSection from '@/components/sections/CareerSection';
import HighImpactCtaSection from '@/components/sections/HighImpactCtaSection';
import SectionDivider from '@/components/ui/SectionDivider';

import BriefModal from '@/components/modals/BriefModal';
import CaseStudyModal from '@/components/modals/CaseStudyModal';
import ReelsPlayerModal from '@/components/modals/ReelsPlayerModal';

import { WorkItem } from '@/data/works';
import { ReelItem, reelsList } from '@/data/reels';

export default function HomePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBriefOpen, setIsBriefOpen] = useState(false);
  const [briefServiceSlug, setBriefServiceSlug] = useState<string | undefined>(undefined);
  const [selectedWork, setSelectedWork] = useState<WorkItem | null>(null);
  const [selectedReel, setSelectedReel] = useState<ReelItem | null>(null);

  const handleOpenBrief = (serviceSlug?: string) => {
    setBriefServiceSlug(serviceSlug);
    setIsBriefOpen(true);
  };

  return (
    <div className="relative w-full overflow-hidden bg-[#262626] text-[#F6F6F6]">
      {/* HEADER & MOBILE NAV */}
      <Header
        onOpenBrief={() => handleOpenBrief()}
        onToggleMobileMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        isMobileMenuOpen={isMobileMenuOpen}
      />
      <MobileNav
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onOpenBrief={() => handleOpenBrief()}
      />

      {/* HERO SECTION */}
      <main>
        {/* HERO SECTION */}
        <HeroSection onOpenBrief={() => handleOpenBrief()} />

        {/* BRANDS MARQUEE (15 REAL CLIENT SVGS ON SEAMLESS DARK) */}
        <BrandsMarquee />

        {/* DİNAMİK GEÇİŞ: CHARCOAL (#262626) -> DEEP RED (#A40001) */}
        <SectionDivider topBgColor="#262626" bottomBgColor="#A40001" />

        {/* 6 MAIN CATEGORY SERVICES SECTION (GÜÇLÜ KIRMIZI BÖLGE) */}
        <ServicesSection onOpenBriefWithService={(slug) => handleOpenBrief(slug)} />

        {/* DİNAMİK GEÇİŞ: DEEP RED (#A40001) -> SOFT GREY (#C3C3C3) */}
        <SectionDivider topBgColor="#A40001" bottomBgColor="#C3C3C3" />

        {/* REELS LAB INLINE VIDEO SLIDER (SOFT GREY ARŞİTEKTURAL BÖLGE) */}
        <ReelsLabSection />

        {/* DİNAMİK GEÇİŞ: SOFT GREY (#C3C3C3) -> CHARCOAL BLACK (#262626) */}
        <SectionDivider topBgColor="#C3C3C3" bottomBgColor="#262626" />

        {/* CREATOR NETWORK (INTEGRATED INTO UNIFIED VIRAL STUDIO ZONE) */}
        <CreatorNetworkSection />

        {/* DİNAMİK GEÇİŞ: CHARCOAL BLACK (#262626) -> PURE WHITE (#F6F6F6) */}
        <SectionDivider topBgColor="#262626" bottomBgColor="#F6F6F6" />

        {/* WORKS & CASE STUDIES (PURE WHITE BÖLGE) */}
        <WorksSection onSelectWork={(work) => setSelectedWork(work)} />

        {/* DİNAMİK GEÇİŞ: PURE WHITE (#F6F6F6) -> DEEP RED (#A40001) */}
        <SectionDivider topBgColor="#F6F6F6" bottomBgColor="#A40001" />

        {/* INTERACTIVE 3D PROJECT TICKET (GÜÇLÜ KIRMIZI BÖLGE) */}
        <ProjectTicketSection onOpenBriefWithService={(slug) => handleOpenBrief(slug)} />

        {/* DİNAMİK GEÇİŞ: DEEP RED (#A40001) -> SOFT GREY (#C3C3C3) */}
        <SectionDivider topBgColor="#A40001" bottomBgColor="#C3C3C3" />

        {/* REVIEWS & 15 CLIENT LOGOS GRID (SOFT GREY BÖLGE) */}
        <ReviewsSection />

        {/* DİNAMİK GEÇİŞ: SOFT GREY (#C3C3C3) -> CHARCOAL BLACK (#262626) */}
        <SectionDivider topBgColor="#C3C3C3" bottomBgColor="#262626" />

        {/* DIDIM & REGIONAL SEO CARDS (OBSIDIAN DARK STUDIO) */}
        <LocalSeoSection />

        {/* DİNAMİK GEÇİŞ: CHARCOAL BLACK (#262626) -> PURE WHITE (#F6F6F6) */}
        <SectionDivider topBgColor="#262626" bottomBgColor="#F6F6F6" />

        {/* ABOUT STUDIO (PURE WHITE BÖLGE) */}
        <AboutSection />

        {/* DİNAMİK GEÇİŞ: PURE WHITE (#F6F6F6) -> CHARCOAL BLACK (#262626) */}
        <SectionDivider topBgColor="#F6F6F6" bottomBgColor="#262626" />

        {/* CORPORATE CAREER & POSITIONS (REVİZE EDİLEN KARİYER BÖLÜMÜ) */}
        <CareerSection onOpenBrief={() => handleOpenBrief()} />

        {/* DİNAMİK GEÇİŞ: CHARCOAL BLACK (#262626) -> DEEP RED (#A40001) */}
        <SectionDivider topBgColor="#262626" bottomBgColor="#A40001" />

        {/* HIGH-IMPACT DEEP RED CTA BAND */}
        <HighImpactCtaSection onOpenBrief={() => handleOpenBrief()} />

        {/* DİNAMİK GEÇİŞ: DEEP RED (#A40001) -> CHARCOAL FOOTER (#262626) */}
        <SectionDivider topBgColor="#A40001" bottomBgColor="#262626" />
      </main>

      {/* FOOTER */}
      <Footer />

      {/* MODALS */}
      <BriefModal
        isOpen={isBriefOpen}
        onClose={() => setIsBriefOpen(false)}
        selectedCategorySlug={briefServiceSlug}
      />
      <CaseStudyModal
        workItem={selectedWork}
        onClose={() => setSelectedWork(null)}
        onOpenBrief={() => handleOpenBrief()}
      />
      <ReelsPlayerModal
        reelItem={selectedReel}
        onClose={() => setSelectedReel(null)}
      />
    </div>
  );
}
