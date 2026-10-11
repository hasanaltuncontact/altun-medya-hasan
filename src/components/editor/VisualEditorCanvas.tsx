'use client';

import React, { useState, useRef, useEffect } from 'react';
import { 
  Pencil, Copy, ArrowUp, ArrowDown, Trash2, Plus, 
  ImageIcon, VideoIcon, ExternalLink, Layers, Move, ArrowRight, Sparkles, Check 
} from 'lucide-react';
import { useEditor } from './EditorContext';
import { ElementModel, SectionModel } from '@/data/visual-editor-store';
import InlineEditingToolbar from './InlineEditingToolbar';
import FloatingElementToolbar from './FloatingElementToolbar';
import RightContextMenu from './RightContextMenu';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import BrandsMarquee from '@/components/sections/BrandsMarquee';
import SectionDivider from '@/components/ui/SectionDivider';

export default function VisualEditorCanvas({ onOpenSettings }: { onOpenSettings: () => void }) {
  const { 
    pageSchema, viewport, 
    selectedElementId, setSelectedElementId,
    selectedSectionId, setSelectedSectionId,
    hoveredElementId, setHoveredElementId,
    hoveredSectionId, setHoveredSectionId,
    isPreviewMode,
    updateElementContent,
    openMediaLibraryForTarget,
    deleteSection, moveSection, duplicateElement, moveElement, deleteElement
  } = useEditor();

  const [contextMenuPos, setContextMenuPos] = useState<{ x: number; y: number } | null>(null);
  const [toolbarPos, setToolbarPos] = useState<{ top: number; left: number } | null>(null);
  const selectedRef = useRef<HTMLDivElement | null>(null);

  // Position floating toolbars above selected element
  useEffect(() => {
    if (selectedRef.current) {
      const rect = selectedRef.current.getBoundingClientRect();
      setToolbarPos({
        top: rect.top,
        left: rect.left + rect.width / 2,
      });
    } else {
      setToolbarPos(null);
    }
  }, [selectedElementId, pageSchema, viewport]);

  // Context Menu Right Click Handler
  const handleContextMenu = (e: React.MouseEvent, elId: string) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedElementId(elId);
    setContextMenuPos({ x: e.clientX, y: e.clientY });
  };

  // Render individual Element Model
  const renderElement = (el: ElementModel, sec: SectionModel) => {
    const isSelected = selectedElementId === el.id && !isPreviewMode;
    const isHovered = hoveredElementId === el.id && !isSelected && !isPreviewMode;
    const styleObj = el.styles[viewport] || el.styles.desktop || {};

    const elClasses = `relative transition-all cursor-pointer ${
      isSelected 
        ? 'ring-2 ring-[#B33A06] shadow-[0_0_25px_rgba(179, 58, 6,0.35)] z-30' 
        : isHovered 
        ? 'outline outline-2 outline-[#B33A06] outline-offset-2 z-20' 
        : ''
    }`;

    const handleElementClick = (e: React.MouseEvent) => {
      if (isPreviewMode) return;
      e.stopPropagation();
      setSelectedElementId(el.id);
      setSelectedSectionId(sec.id);
    };

    switch (el.type) {
      case 'heading':
        return (
          <div
            key={el.id}
            ref={isSelected ? selectedRef : null}
            onClick={handleElementClick}
            onContextMenu={(e) => handleContextMenu(e, el.id)}
            onMouseEnter={() => setHoveredElementId(el.id)}
            onMouseLeave={() => setHoveredElementId(null)}
            className={elClasses}
            style={styleObj}
          >
            {(isHovered || isSelected) && (
              <span className="absolute -top-6 left-0 px-2 py-0.5 rounded bg-[#B33A06] text-white font-mono font-extrabold text-[9px] uppercase tracking-wider z-30 shadow-md">
                BAŞLIK: {el.label}
              </span>
            )}

            <h2
              contentEditable={isSelected}
              suppressContentEditableWarning
              onBlur={(e) => updateElementContent(el.id, { text: e.currentTarget.innerText })}
              className="outline-none focus:outline-none"
            >
              {el.content.text}
            </h2>
          </div>
        );

      case 'text':
        return (
          <div
            key={el.id}
            ref={isSelected ? selectedRef : null}
            onClick={handleElementClick}
            onContextMenu={(e) => handleContextMenu(e, el.id)}
            onMouseEnter={() => setHoveredElementId(el.id)}
            onMouseLeave={() => setHoveredElementId(null)}
            className={elClasses}
            style={styleObj}
          >
            {(isHovered || isSelected) && (
              <span className="absolute -top-6 left-0 px-2 py-0.5 rounded bg-[#B33A06] text-white font-mono font-extrabold text-[9px] uppercase tracking-wider z-30 shadow-md">
                METİN: {el.label}
              </span>
            )}

            <p
              contentEditable={isSelected}
              suppressContentEditableWarning
              onBlur={(e) => updateElementContent(el.id, { text: e.currentTarget.innerText })}
              className="outline-none focus:outline-none"
            >
              {el.content.text}
            </p>
          </div>
        );

      case 'button':
        return (
          <div
            key={el.id}
            ref={isSelected ? selectedRef : null}
            onClick={handleElementClick}
            onContextMenu={(e) => handleContextMenu(e, el.id)}
            onMouseEnter={() => setHoveredElementId(el.id)}
            onMouseLeave={() => setHoveredElementId(null)}
            className={`inline-block ${elClasses}`}
          >
            {(isHovered || isSelected) && (
              <span className="absolute -top-6 left-0 px-2 py-0.5 rounded bg-[#B33A06] text-white font-mono font-extrabold text-[9px] uppercase tracking-wider z-30 shadow-md">
                BUTON: {el.label}
              </span>
            )}

            <button
              style={styleObj}
              className="cursor-pointer transition-transform active:scale-95 shadow-xl flex items-center justify-center gap-2"
            >
              <span>{el.content.text}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        );

      case 'image':
        return (
          <div
            key={el.id}
            ref={isSelected ? selectedRef : null}
            onClick={handleElementClick}
            onContextMenu={(e) => handleContextMenu(e, el.id)}
            onMouseEnter={() => setHoveredElementId(el.id)}
            onMouseLeave={() => setHoveredElementId(null)}
            className={`group relative overflow-hidden rounded-2xl ${elClasses}`}
            style={styleObj}
          >
            {(isHovered || isSelected) && (
              <span className="absolute top-3 left-3 px-2 py-1 rounded bg-[#B33A06] text-white font-mono font-extrabold text-[10px] uppercase tracking-wider z-30 shadow-xl">
                GÖRSEL: {el.label}
              </span>
            )}

            <img
              src={el.content.src}
              alt={el.content.alt || ''}
              className="w-full h-auto object-cover max-h-[550px] rounded-2xl"
            />

            {!isPreviewMode && (
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    openMediaLibraryForTarget(el.id, 'src');
                  }}
                  className="px-5 py-2.5 rounded-xl bg-[#B33A06] text-white font-extrabold text-xs uppercase tracking-wider shadow-2xl hover:bg-[#C84408] transition-all flex items-center gap-2"
                >
                  <ImageIcon className="w-4 h-4" />
                  <span>[ Görseli Değiştir ]</span>
                </button>
              </div>
            )}
          </div>
        );

      case 'video':
        return (
          <div
            key={el.id}
            ref={isSelected ? selectedRef : null}
            onClick={handleElementClick}
            onContextMenu={(e) => handleContextMenu(e, el.id)}
            onMouseEnter={() => setHoveredElementId(el.id)}
            onMouseLeave={() => setHoveredElementId(null)}
            className={`group relative overflow-hidden rounded-2xl ${elClasses}`}
            style={styleObj}
          >
            {(isHovered || isSelected) && (
              <span className="absolute top-3 left-3 px-2 py-1 rounded bg-[#B33A06] text-white font-mono font-extrabold text-[10px] uppercase tracking-wider z-30 shadow-xl">
                VIDEO: {el.label}
              </span>
            )}

            <video
              src={el.content.videoUrl}
              autoPlay={el.content.autoplay ?? true}
              muted={el.content.muted ?? true}
              loop={el.content.loop ?? true}
              poster={el.content.poster}
              className="w-full h-auto object-cover max-h-[550px] rounded-2xl"
            />

            {!isPreviewMode && (
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    openMediaLibraryForTarget(el.id, 'videoUrl');
                  }}
                  className="px-5 py-2.5 rounded-xl bg-[#B33A06] text-white font-extrabold text-xs uppercase tracking-wider shadow-2xl hover:bg-[#C84408] transition-all flex items-center gap-2"
                >
                  <VideoIcon className="w-4 h-4" />
                  <span>[ Videoyu Değiştir ]</span>
                </button>
              </div>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  // Dynamic Viewport Container Sizing
  const viewportWidthClass = 
    viewport === 'mobile' 
      ? 'w-[375px] my-6 rounded-3xl border-4 border-white/20 shadow-2xl overflow-hidden' 
      : viewport === 'tablet' 
      ? 'w-[768px] my-6 rounded-2xl border-2 border-white/20 shadow-2xl overflow-hidden' 
      : 'w-full';

  return (
    <div className="flex-1 overflow-y-auto bg-[#040404] flex justify-center relative p-0 sm:p-4 select-none">
      <div className={`bg-[#050505] text-white font-sans transition-all duration-300 relative ${viewportWidthClass}`}>
        
        {/* LIVE REAL SITE HEADER */}
        <Header onOpenBrief={() => {}} onToggleMobileMenu={() => {}} isMobileMenuOpen={false} />

        {/* RENDER ALL REAL-SITE SECTIONS */}
        {pageSchema.sections.map((sec, secIdx) => {
          const isSecSelected = selectedSectionId === sec.id && !isPreviewMode;
          const isSecHovered = hoveredSectionId === sec.id && !isSecSelected && !isPreviewMode;
          const secPadding = sec.padding[viewport] || sec.padding.desktop;

          return (
            <React.Fragment key={sec.id}>
              <section
                onClick={() => {
                  if (isPreviewMode) return;
                  setSelectedSectionId(sec.id);
                  setSelectedElementId(null);
                }}
                onMouseEnter={() => setHoveredSectionId(sec.id)}
                onMouseLeave={() => setHoveredSectionId(null)}
                style={{
                  backgroundColor: sec.background.color || '#050505',
                  padding: secPadding,
                }}
                className={`relative transition-all ${
                  isSecSelected 
                    ? 'ring-2 ring-[#B33A06] ring-inset' 
                    : isSecHovered 
                    ? 'outline outline-2 outline-[#B33A06] outline-offset-[-2px]' 
                    : ''
                }`}
              >
                {/* SECTION CONTROL BAR ON HOVER / SELECTED */}
                {!isPreviewMode && (isSecHovered || isSecSelected) && (
                  <div className="absolute top-4 left-6 z-40 bg-[#080808]/95 backdrop-blur-md border border-[#B33A06] text-white rounded-xl px-3.5 py-2 flex items-center gap-3 text-xs font-mono shadow-2xl animate-in fade-in duration-150">
                    <span className="font-extrabold text-[#B33A06] uppercase tracking-wider">
                      SECTION: {sec.title}
                    </span>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenSettings();
                      }}
                      className="p-1 hover:text-[#B33A06] transition-colors"
                      title="Bölüm Ayarlarını Aç"
                    >
                      <Pencil className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        moveSection(sec.id, 'up');
                      }}
                      disabled={secIdx === 0}
                      className="p-1 hover:text-white disabled:opacity-30"
                      title="Yukarı Taşı"
                    >
                      <ArrowUp className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        moveSection(sec.id, 'down');
                      }}
                      disabled={secIdx === pageSchema.sections.length - 1}
                      className="p-1 hover:text-white disabled:opacity-30"
                      title="Aşağı Taşı"
                    >
                      <ArrowDown className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteSection(sec.id);
                      }}
                      className="p-1 text-red-400 hover:text-red-300"
                      title="Bölümü Sil"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}

                {/* RENDER SECTION ELEMENTS WITH REAL-WORLD LAYOUT */}
                <div className="max-w-6xl mx-auto space-y-6 relative z-10">
                  {sec.elements.map((el) => renderElement(el, sec))}
                </div>
              </section>

              {/* RENDER BRANDS MARQUEE ON BRANDS SECTION */}
              {sec.id === 'sec-brands' && <BrandsMarquee />}
            </React.Fragment>
          );
        })}

        {/* LIVE REAL SITE FOOTER */}
        <Footer />
      </div>

      {/* FLOATING ACTION TOOLBARS ABOVE SELECTED ITEM */}
      {!isPreviewMode && toolbarPos && (
        <>
          <FloatingElementToolbar 
            position={toolbarPos} 
            onOpenSettings={onOpenSettings} 
          />

          <InlineEditingToolbar 
            position={toolbarPos} 
            onClose={() => setSelectedElementId(null)} 
          />
        </>
      )}

      {/* RIGHT CLICK CONTEXT MENU */}
      {!isPreviewMode && (
        <RightContextMenu 
          position={contextMenuPos} 
          onClose={() => setContextMenuPos(null)} 
          onOpenSettings={onOpenSettings} 
        />
      )}
    </div>
  );
}
