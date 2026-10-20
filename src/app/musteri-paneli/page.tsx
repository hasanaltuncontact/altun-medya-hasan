'use client';

import React from 'react';
import { PortalProvider, usePortal } from '@/components/portal/PortalContext';
import PortalSidebar from '@/components/portal/PortalSidebar';
import PortalHeader from '@/components/portal/PortalHeader';

// View Modules
import OverviewView from '@/components/portal/views/OverviewView';
import ProjectsView from '@/components/portal/views/ProjectsView';
import ApprovalCenterView from '@/components/portal/views/ApprovalCenterView';
import MediaFilesView from '@/components/portal/views/MediaFilesView';
import ContentCalendarView from '@/components/portal/views/ContentCalendarView';
import BrandHubView from '@/components/portal/views/BrandHubView';
import AnalyticsView from '@/components/portal/views/AnalyticsView';
import FinancesView from '@/components/portal/views/FinancesView';
import ContractsView from '@/components/portal/views/ContractsView';
import MessagesView from '@/components/portal/views/MessagesView';

// Modals
import NewProjectModal from '@/components/portal/modals/NewProjectModal';
import RevisionModal from '@/components/portal/modals/RevisionModal';
import VideoPreviewModal from '@/components/portal/modals/VideoPreviewModal';
import ToastContainer from '@/components/portal/modals/ToastContainer';

function PortalMainContent() {
  const { activeSection } = usePortal();

  const renderActiveView = () => {
    switch (activeSection) {
      case '01 Genel Bakış':
        return <OverviewView />;
      case '02 Projeler':
        return <ProjectsView />;
      case '03 Onay Merkezi':
        return <ApprovalCenterView />;
      case '04 Medya & Dosyalar':
        return <MediaFilesView />;
      case '05 İçerik Takvimi':
        return <ContentCalendarView />;
      case '06 Marka Merkezi':
        return <BrandHubView />;
      case '07 Performans':
        return <AnalyticsView />;
      case '08 Finans & Faturalar':
        return <FinancesView />;
      case '09 Sözleşmeler & Belgeler':
        return <ContractsView />;
      case '10 Mesajlar':
        return <MessagesView />;
      default:
        return <OverviewView />;
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#B33A06] selection:text-white font-sans antialiased flex flex-col lg:flex-row">
      
      {/* SIDEBAR NAVIGATION (01 - 10) */}
      <PortalSidebar />

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 flex flex-col min-w-0 pb-20 lg:pb-12">
        {/* STICKY HEADER WITH GLOBAL SEARCH */}
        <PortalHeader />

        {/* ACTIVE SECTION VIEW */}
        <main className="flex-1 p-5 sm:p-8 lg:p-10 max-w-7xl w-full mx-auto">
          {renderActiveView()}
        </main>
      </div>

      {/* SYSTEM MODALS & TOASTS */}
      <NewProjectModal />
      <RevisionModal />
      <VideoPreviewModal />
      <ToastContainer />
    </div>
  );
}

export default function ClientDashboardPage() {
  return (
    <PortalProvider>
      <PortalMainContent />
    </PortalProvider>
  );
}
