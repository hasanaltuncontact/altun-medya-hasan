'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Monitor, Tablet, Smartphone, Undo2, Redo2, Eye, 
  Globe, Palette, History, Image as ImageIcon, Rocket, Check, ArrowLeft, Layers 
} from 'lucide-react';
import { useEditor } from './EditorContext';

export default function EditorTopBar({ onToggleLeftPanel, leftPanelOpen }: { onToggleLeftPanel: () => void; leftPanelOpen: boolean }) {
  const { 
    viewport, setViewport, 
    canUndo, canRedo, undo, redo, 
    isPreviewMode, setIsPreviewMode,
    saveStatus, saveDraft, publishPage,
    setSeoDrawerOpen, setGlobalStylesOpen, setRevisionsModalOpen, setMediaLibraryOpen,
    pageSchema, updateSeo
  } = useEditor();

  return (
    <header className="h-16 bg-[#080808]/95 backdrop-blur-xl border-b border-white/10 px-4 flex items-center justify-between z-50 text-white selection:bg-[#B33A06] selection:text-white">
      {/* LEFT: BACK TO DASHBOARD & PAGE SELECTOR */}
      <div className="flex items-center gap-3">
        <Link
          href="/admin"
          className="p-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white/70 hover:text-white transition-all flex items-center gap-2 text-xs font-mono"
          title="Admin Paneline Dön"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="hidden sm:inline">Admin</span>
        </Link>

        <button
          onClick={onToggleLeftPanel}
          className={`p-2 rounded-xl border transition-all flex items-center gap-2 text-xs font-semibold font-mono ${
            leftPanelOpen ? 'bg-[#B33A06] text-white border-[#B33A06]' : 'bg-white/5 border-white/10 text-white hover:bg-white/10'
          }`}
          title="Element & Katman Paneli"
        >
          <Layers className="w-4 h-4" />
          <span className="hidden md:inline">Elementler</span>
        </button>

        {/* Page Switcher Dropdown */}
        <div className="relative">
          <select
            value={pageSchema.slug}
            onChange={(e) => updateSeo({ slug: e.target.value })}
            className="bg-white/5 border border-white/10 text-white text-xs font-bold py-2 px-3 rounded-xl focus:outline-none focus:border-[#B33A06] cursor-pointer"
          >
            <option value="/" className="bg-[#0A0A0A] text-white">Ana Sayfa (/)</option>
            <option value="/hizmetler" className="bg-[#0A0A0A] text-white">Hizmetlerimiz (/hizmetler)</option>
            <option value="/kurumsal/hakkimizda" className="bg-[#0A0A0A] text-white">Hakkımızda (/kurumsal/hakkimizda)</option>
            <option value="/iletisim" className="bg-[#0A0A0A] text-white">İletişim (/iletisim)</option>
          </select>
        </div>
      </div>

      {/* CENTER: RESPONSIVE SWITCHER & UNDO/REDO */}
      <div className="flex items-center gap-2">
        <div className="flex items-center p-1 rounded-xl bg-white/5 border border-white/10">
          <button
            onClick={() => setViewport('desktop')}
            className={`p-2 rounded-lg text-xs transition-all flex items-center gap-1.5 font-mono ${
              viewport === 'desktop' ? 'bg-[#B33A06] text-white font-extrabold shadow-md' : 'text-white/60 hover:text-white'
            }`}
            title="Masaüstü (Desktop)"
          >
            <Monitor className="w-4 h-4" />
            <span className="hidden md:inline">Masaüstü</span>
          </button>
          
          <button
            onClick={() => setViewport('tablet')}
            className={`p-2 rounded-lg text-xs transition-all flex items-center gap-1.5 font-mono ${
              viewport === 'tablet' ? 'bg-[#B33A06] text-white font-extrabold shadow-md' : 'text-white/60 hover:text-white'
            }`}
            title="Tablet (768px)"
          >
            <Tablet className="w-4 h-4" />
            <span className="hidden md:inline">Tablet</span>
          </button>
          
          <button
            onClick={() => setViewport('mobile')}
            className={`p-2 rounded-lg text-xs transition-all flex items-center gap-1.5 font-mono ${
              viewport === 'mobile' ? 'bg-[#B33A06] text-white font-extrabold shadow-md' : 'text-white/60 hover:text-white'
            }`}
            title="Mobil (375px)"
          >
            <Smartphone className="w-4 h-4" />
            <span className="hidden md:inline">Mobil</span>
          </button>
        </div>

        {/* Undo / Redo */}
        <div className="flex items-center gap-1 border-l border-white/10 pl-2">
          <button
            onClick={undo}
            disabled={!canUndo}
            className="p-2 rounded-xl bg-white/5 border border-white/10 text-white/70 hover:text-white disabled:opacity-30 transition-all"
            title="Geri Al (Ctrl+Z)"
          >
            <Undo2 className="w-4 h-4" />
          </button>
          <button
            onClick={redo}
            disabled={!canRedo}
            className="p-2 rounded-xl bg-white/5 border border-white/10 text-white/70 hover:text-white disabled:opacity-30 transition-all"
            title="Yinele (Ctrl+Shift+Z)"
          >
            <Redo2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* RIGHT: TOOL MODALS & PUBLISH BUTTON */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => setMediaLibraryOpen(true)}
          className="p-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white/80 hover:text-white transition-all text-xs font-mono hidden lg:flex items-center gap-1.5"
          title="Medya Kütüphanesi"
        >
          <ImageIcon className="w-4 h-4" />
          <span>Medya</span>
        </button>

        <button
          onClick={() => setSeoDrawerOpen(true)}
          className="p-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white/80 hover:text-white transition-all text-xs font-mono hidden lg:flex items-center gap-1.5"
          title="SEO Ayarları"
        >
          <Globe className="w-4 h-4" />
          <span>SEO</span>
        </button>

        <button
          onClick={() => setGlobalStylesOpen(true)}
          className="p-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white/80 hover:text-white transition-all text-xs font-mono hidden lg:flex items-center gap-1.5"
          title="Global Stiller & Renkler"
        >
          <Palette className="w-4 h-4 text-[#B33A06]" />
          <span>Stiller</span>
        </button>

        <button
          onClick={() => setRevisionsModalOpen(true)}
          className="p-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white/80 hover:text-white transition-all text-xs font-mono hidden xl:flex items-center gap-1.5"
          title="Revizyon Geçmişi"
        >
          <History className="w-4 h-4" />
          <span>v{pageSchema.version}</span>
        </button>

        {/* PREVIEW TOGGLE */}
        <button
          onClick={() => setIsPreviewMode(!isPreviewMode)}
          className={`p-2 rounded-xl border transition-all text-xs font-mono font-semibold flex items-center gap-1.5 ${
            isPreviewMode ? 'bg-[#B33A06] text-white border-[#B33A06]' : 'bg-white/5 border-white/10 text-white hover:bg-white/10'
          }`}
          title={isPreviewMode ? 'Editöre Dön' : 'Önizleme Modu'}
        >
          <Eye className="w-4 h-4" />
          <span className="hidden sm:inline">{isPreviewMode ? 'Editör' : 'Önizle'}</span>
        </button>

        {/* SAVE DRAFT & PUBLISH */}
        <button
          onClick={saveDraft}
          className="px-3 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white text-xs font-mono font-bold flex items-center gap-1.5 transition-all"
        >
          {saveStatus === 'saving' ? (
            <span className="animate-spin text-[#B33A06]">🌀</span>
          ) : (
            <span className="w-2 h-2 rounded-full bg-[#B33A06]" />
          )}
          <span className="hidden sm:inline">Taslak</span>
        </button>

        <button
          onClick={publishPage}
          className="px-4 py-2 rounded-xl bg-[#B33A06] text-white hover:bg-[#C84408] text-xs font-extrabold tracking-wider uppercase flex items-center gap-2 shadow-[0_0_20px_rgba(179, 58, 6,0.3)] transition-all active:scale-95"
        >
          <Rocket className="w-4 h-4" />
          <span>Yayınla</span>
        </button>
      </div>
    </header>
  );
}
