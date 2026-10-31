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

const INK = '#0B0B0B';
const CREAM = '#F8F0DB';

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
    <div className="relative w-full overflow-hidden bg-[#0B0B0B] text-[#F8F0DB]">
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
        {/* Geçişler yalnızca logo renkleri: siyah (#0B0B0B) ve krem (#F8F0DB).
            "m-hide" ile işaretlenenler mobilde gizlenir — sayfa kısa kalır. */}
        <HeroSection onOpenBrief={() => handleOpenBrief()} />
        <BrandsMarquee />

        <SectionDivider topBgColor={CREAM} bottomBgColor={INK} star />
        <ServicesSection onOpenBriefWithService={(slug) => handleOpenBrief(slug)} />

        <SectionDivider topBgColor={INK} bottomBgColor={CREAM} />
        <ReelsLabSection />

        <SectionDivider topBgColor={CREAM} bottomBgColor={INK} />
        <CreatorNetworkSection />

        <SectionDivider topBgColor={INK} bottomBgColor={CREAM} />
        <WorksSection onSelectWork={(work) => setSelectedWork(work)} />

        <SectionDivider topBgColor={CREAM} bottomBgColor={INK} star className="m-hide" />
        <div className="m-hide">
          <ProjectTicketSection onOpenBriefWithService={(slug) => handleOpenBrief(slug)} />
        </div>
        <SectionDivider topBgColor={INK} bottomBgColor={CREAM} className="m-hide" />

        <ReviewsSection />

        <SectionDivider topBgColor={CREAM} bottomBgColor={INK} className="m-hide" />
        <div className="m-hide">
          <LocalSeoSection />
        </div>
        <SectionDivider topBgColor={INK} bottomBgColor={CREAM} className="m-hide" />

        <AboutSection />

        <SectionDivider topBgColor={CREAM} bottomBgColor={INK} className="m-hide" />
        <div className="m-hide">
          <CareerSection onOpenBrief={() => handleOpenBrief()} />
        </div>
        <SectionDivider topBgColor={INK} bottomBgColor={CREAM} className="m-hide" />

        <HighImpactCtaSection onOpenBrief={() => handleOpenBrief()} />
        <SectionDivider topBgColor={CREAM} bottomBgColor={INK} />
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
