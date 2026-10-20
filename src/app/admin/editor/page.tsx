'use client';

import React, { useState } from 'react';
import { EditorProvider, useEditor } from '@/components/editor/EditorContext';
import EditorTopBar from '@/components/editor/EditorTopBar';
import LeftElementPanel from '@/components/editor/LeftElementPanel';
import VisualEditorCanvas from '@/components/editor/VisualEditorCanvas';
import ElementSettingsDrawer from '@/components/editor/ElementSettingsDrawer';
import MediaLibraryModal from '@/components/editor/MediaLibraryModal';
import SeoDrawer from '@/components/editor/SeoDrawer';
import GlobalStylesModal from '@/components/editor/GlobalStylesModal';
import RevisionHistoryModal from '@/components/editor/RevisionHistoryModal';

function VisualBuilderContent() {
  const [leftPanelOpen, setLeftPanelOpen] = useState(true);
  const [elementSettingsOpen, setElementSettingsOpen] = useState(false);

  return (
    <div className="h-screen w-screen bg-[#050505] text-white selection:bg-[#B33A06] selection:text-white flex flex-col overflow-hidden font-sans antialiased">

      {/* TOPBAR */}
      <EditorTopBar 
        leftPanelOpen={leftPanelOpen}
        onToggleLeftPanel={() => setLeftPanelOpen(!leftPanelOpen)}
      />

      {/* MAIN WORKSPACE */}
      <div className="flex-1 flex min-h-0 relative">
        {/* LEFT PANEL: WIDGETS & NAVIGATOR */}
        <LeftElementPanel 
          isOpen={leftPanelOpen}
          onClose={() => setLeftPanelOpen(false)}
        />

        {/* INTERACTIVE CANVAS */}
        <VisualEditorCanvas 
          onOpenSettings={() => setElementSettingsOpen(true)}
        />

        {/* RIGHT DRAWER: ELEMENT SETTINGS */}
        <ElementSettingsDrawer 
          isOpen={elementSettingsOpen}
          onClose={() => setElementSettingsOpen(false)}
        />
      </div>

      {/* MODALS & DRAWERS */}
      <MediaLibraryModal />
      <SeoDrawer />
      <GlobalStylesModal />
      <RevisionHistoryModal />
    </div>
  );
}

export default function VisualEditorPage() {
  return (
    <EditorProvider>
      <VisualBuilderContent />
    </EditorProvider>
  );
}
