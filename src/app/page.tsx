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
    <div className="relative w-full overflow-hidden bg-[#050505] text-[#F7F6F2]">
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

        {/* C-SWOOP DIVIDER: MARQUEE (#050505) -> SERVICES (#D9D0C1) */}
        <SectionDivider topBgColor="#050505" gradientSection="below" />

        {/* 6 MAIN CATEGORY SERVICES SECTION (ORDERED COMPACT BOXES) */}
        <ServicesSection onOpenBriefWithService={(slug) => handleOpenBrief(slug)} />

        {/* C-SWOOP DIVIDER: SERVICES (#D9D0C1) -> REELS LAB & CREATOR (#070707) */}
        <SectionDivider bottomBgColor="#070707" gradientSection="above" />

        {/* REELS LAB INLINE VIDEO SLIDER */}
        <ReelsLabSection />

        {/* CREATOR NETWORK (INTEGRATED INTO UNIFIED VIRAL STUDIO ZONE) */}
        <CreatorNetworkSection />

        {/* C-SWOOP DIVIDER: VIRAL CREATOR STUDIO (#070707) -> WORKS (#F1F0EA) */}
        <SectionDivider topBgColor="#070707" bottomBgColor="#F1F0EA" />

        {/* WORKS & CASE STUDIES */}
        <WorksSection onSelectWork={(work) => setSelectedWork(work)} />

        {/* OVAL C-SWOOP DIVIDER: WORKS (#F1F0EA) -> TICKET (#050505) */}
        <SectionDivider topBgColor="#F1F0EA" bottomBgColor="#050505" />

        {/* INTERACTIVE 3D PROJECT TICKET */}
        <ProjectTicketSection onOpenBriefWithService={(slug) => handleOpenBrief(slug)} />

        {/* OVAL C-SWOOP DIVIDER: TICKET (#050505) -> REVIEWS (#F7F6F2) */}
        <SectionDivider topBgColor="#050505" bottomBgColor="#F7F6F2" />

        {/* REVIEWS & 15 CLIENT LOGOS GRID */}
        <ReviewsSection />

        {/* C-SWOOP DIVIDER: REVIEWS (#F7F6F2) -> LOCAL SEO (#0B0A12) */}
        <SectionDivider topBgColor="#F7F6F2" bottomBgColor="#0B0A12" />

        {/* DIDIM & REGIONAL SEO CARDS (OBSIDIAN DARK STUDIO) */}
        <LocalSeoSection />

        {/* C-SWOOP DIVIDER: LOCAL SEO (#0B0A12) -> ABOUT STUDIO (#EDE8DF) */}
        <SectionDivider topBgColor="#0B0A12" bottomBgColor="#EDE8DF" />

        {/* ABOUT STUDIO (WARM ARCHITECTURAL LINEN) */}
        <AboutSection />

        {/* C-SWOOP DIVIDER: ABOUT STUDIO (#EDE8DF) -> CAREER (#131218) */}
        <SectionDivider topBgColor="#EDE8DF" bottomBgColor="#131218" />

        {/* CORPORATE CAREER & POSITIONS */}
        <CareerSection onOpenBrief={() => handleOpenBrief()} />

        {/* C-SWOOP DIVIDER: CAREER (#131218) -> HIGH-IMPACT CTA (#B33A06) */}
        <SectionDivider topBgColor="#131218" bottomBgColor="#B33A06" />

        {/* HIGH-IMPACT TERRACOTTA CTA BAND */}
        <HighImpactCtaSection onOpenBrief={() => handleOpenBrief()} />

        {/* C-SWOOP DIVIDER: HIGH-IMPACT CTA (#B33A06) -> FOOTER (#050505) */}
        <SectionDivider topBgColor="#B33A06" bottomBgColor="#050505" />
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
