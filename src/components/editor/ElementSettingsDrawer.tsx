'use client';

import React, { useState } from 'react';
import { X, Sliders, Type, Palette, Layout, Link as LinkIcon, Image as ImageIcon, Video as VideoIcon, Check } from 'lucide-react';
import { useEditor } from './EditorContext';

export default function ElementSettingsDrawer({ 
  isOpen, 
  onClose 
}: { 
  isOpen: boolean; 
  onClose: () => void;
}) {
  const [activeTab, setActiveTab] = useState<'content' | 'style' | 'advanced'>('content');
  const { 
    selectedElementId, pageSchema, viewport, 
    updateElementContent, updateElementStyle, openMediaLibraryForTarget 
  } = useEditor();

  if (!isOpen || !selectedElementId) return null;

  // Find selected element
  let selectedEl: any = null;
  for (const sec of pageSchema.sections) {
    const found = sec.elements.find((el) => el.id === selectedElementId);
    if (found) {
      selectedEl = found;
      break;
    }
  }

  if (!selectedEl) return null;

  const currentStyles = selectedEl.styles[viewport] || selectedEl.styles.desktop || {};

  return (
    <aside className="fixed top-16 right-0 bottom-0 w-88 bg-[#090909]/95 backdrop-blur-2xl border-l border-white/10 flex flex-col z-50 text-white selection:bg-[#B33A06] selection:text-white shadow-2xl animate-in slide-in-from-right duration-200">
      {/* DRAWER HEADER */}
      <div className="p-4 border-b border-white/10 flex items-center justify-between">
        <div>
          <div className="text-[10px] font-mono text-[#B33A06] font-extrabold uppercase tracking-wider">
            {selectedEl.type} ELEMENT
          </div>
          <h3 className="text-sm font-bold text-white font-heading truncate max-w-[200px]">
            {selectedEl.label}
          </h3>
        </div>

        <button
          onClick={onClose}
          className="p-1.5 rounded-xl hover:bg-white/10 text-white/50 hover:text-white transition-all"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* THREE TABS: CONTENT | STYLE | ADVANCED */}
      <div className="flex items-center p-2 bg-white/5 border-b border-white/10 gap-1">
        <button
          onClick={() => setActiveTab('content')}
          className={`flex-1 py-1.5 text-xs font-mono font-bold rounded-lg transition-all ${
            activeTab === 'content' ? 'bg-[#B33A06] text-white shadow-md' : 'text-white/60 hover:text-white'
          }`}
        >
          İçerik
        </button>
        <button
          onClick={() => setActiveTab('style')}
          className={`flex-1 py-1.5 text-xs font-mono font-bold rounded-lg transition-all ${
            activeTab === 'style' ? 'bg-[#B33A06] text-white shadow-md' : 'text-white/60 hover:text-white'
          }`}
        >
          Stil ({viewport.toUpperCase()})
        </button>
        <button
          onClick={() => setActiveTab('advanced')}
          className={`flex-1 py-1.5 text-xs font-mono font-bold rounded-lg transition-all ${
            activeTab === 'advanced' ? 'bg-[#B33A06] text-white shadow-md' : 'text-white/60 hover:text-white'
          }`}
        >
          Gelişmiş
        </button>
      </div>

      {/* TAB CONTENT */}
      <div className="flex-1 overflow-y-auto p-4 space-y-5 text-xs font-sans">
        
        {/* TAB 1: CONTENT */}
        {activeTab === 'content' && (
          <div className="space-y-4">
            {/* TEXT & HEADING */}
            {(selectedEl.type === 'heading' || selectedEl.type === 'text') && (
              <div>
                <label className="block text-[11px] font-mono text-white/70 mb-1.5 font-bold">
                  Metin İçeriği
                </label>
                <textarea
                  rows={4}
                  value={selectedEl.content.text || ''}
                  onChange={(e) => updateElementContent(selectedEl.id, { text: e.target.value })}
                  className="w-full p-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-[#B33A06] transition-colors"
                />
              </div>
            )}

            {/* BUTTON CONTENT */}
            {selectedEl.type === 'button' && (
              <>
                <div>
                  <label className="block text-[11px] font-mono text-white/70 mb-1.5 font-bold">
                    Buton Metni
                  </label>
                  <input
                    type="text"
                    value={selectedEl.content.text || ''}
                    onChange={(e) => updateElementContent(selectedEl.id, { text: e.target.value })}
                    className="w-full p-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#B33A06]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-white/70 mb-1.5 font-bold">
                    Hedef Link URL
                  </label>
                  <input
                    type="text"
                    value={selectedEl.content.url || ''}
                    onChange={(e) => updateElementContent(selectedEl.id, { url: e.target.value })}
                    placeholder="/musteri-paneli"
                    className="w-full p-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#B33A06]"
                  />
                </div>
              </>
            )}

            {/* IMAGE CONTENT */}
            {selectedEl.type === 'image' && (
              <>
                <div>
                  <label className="block text-[11px] font-mono text-white/70 mb-1.5 font-bold">
                    Görsel URL
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={selectedEl.content.src || ''}
                      onChange={(e) => updateElementContent(selectedEl.id, { src: e.target.value })}
                      className="w-full p-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#B33A06]"
                    />
                    <button
                      onClick={() => openMediaLibraryForTarget(selectedEl.id, 'src')}
                      className="px-3 rounded-xl bg-[#B33A06] text-white font-extrabold text-xs hover:bg-[#C84408] transition-all flex items-center gap-1 flex-shrink-0"
                    >
                      <ImageIcon className="w-4 h-4" />
                      <span>Seç</span>
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-white/70 mb-1.5 font-bold">
                    Alt Metin (SEO)
                  </label>
                  <input
                    type="text"
                    value={selectedEl.content.alt || ''}
                    onChange={(e) => updateElementContent(selectedEl.id, { alt: e.target.value })}
                    className="w-full p-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#B33A06]"
                  />
                </div>
              </>
            )}

            {/* VIDEO CONTENT */}
            {selectedEl.type === 'video' && (
              <>
                <div>
                  <label className="block text-[11px] font-mono text-white/70 mb-1.5 font-bold">
                    Video Dosya / URL
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={selectedEl.content.videoUrl || ''}
                      onChange={(e) => updateElementContent(selectedEl.id, { videoUrl: e.target.value })}
                      className="w-full p-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#B33A06]"
                    />
                    <button
                      onClick={() => openMediaLibraryForTarget(selectedEl.id, 'videoUrl')}
                      className="px-3 rounded-xl bg-[#B33A06] text-white font-extrabold text-xs hover:bg-[#C84408] transition-all flex items-center gap-1 flex-shrink-0"
                    >
                      <VideoIcon className="w-4 h-4" />
                      <span>Seç</span>
                    </button>
                  </div>
                </div>

                <div className="space-y-2 pt-2 border-t border-white/10 font-mono text-xs">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedEl.content.autoplay ?? true}
                      onChange={(e) => updateElementContent(selectedEl.id, { autoplay: e.target.checked })}
                      className="w-4 h-4 accent-[#B33A06]"
                    />
                    <span>Otomatik Oynat (Autoplay)</span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedEl.content.muted ?? true}
                      onChange={(e) => updateElementContent(selectedEl.id, { muted: e.target.checked })}
                      className="w-4 h-4 accent-[#B33A06]"
                    />
                    <span>Sessiz (Muted)</span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedEl.content.loop ?? true}
                      onChange={(e) => updateElementContent(selectedEl.id, { loop: e.target.checked })}
                      className="w-4 h-4 accent-[#B33A06]"
                    />
                    <span>Sürekli Döngü (Loop)</span>
                  </label>
                </div>
              </>
            )}
          </div>
        )}

        {/* TAB 2: STYLE */}
        {activeTab === 'style' && (
          <div className="space-y-4">
            {/* Font Family */}
            <div>
              <label className="block text-[11px] font-mono text-white/70 mb-1.5 font-bold">
                Font Ailesi
              </label>
              <select
                value={currentStyles.fontFamily || 'Outfit, sans-serif'}
                onChange={(e) => updateElementStyle(selectedEl.id, { fontFamily: e.target.value })}
                className="w-full p-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#B33A06]"
              >
                <option value="Outfit, sans-serif" className="bg-[#0A0A0A]">Outfit (Modern Agency)</option>
                <option value="Inter, sans-serif" className="bg-[#0A0A0A]">Inter (Clean SaaS)</option>
                <option value="Roboto, sans-serif" className="bg-[#0A0A0A]">Roboto</option>
                <option value="Space Grotesk, sans-serif" className="bg-[#0A0A0A]">Space Grotesk (Tech)</option>
              </select>
            </div>

            {/* Font Size & Weight */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-mono text-white/70 mb-1.5 font-bold">
                  Yazı Boyutu (px)
                </label>
                <input
                  type="text"
                  value={currentStyles.fontSize || '16px'}
                  onChange={(e) => updateElementStyle(selectedEl.id, { fontSize: e.target.value })}
                  placeholder="24px"
                  className="w-full p-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#B33A06]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono text-white/70 mb-1.5 font-bold">
                  Font Kalınlığı
                </label>
                <select
                  value={currentStyles.fontWeight || '400'}
                  onChange={(e) => updateElementStyle(selectedEl.id, { fontWeight: e.target.value })}
                  className="w-full p-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#B33A06]"
                >
                  <option value="400" className="bg-[#0A0A0A]">Normal (400)</option>
                  <option value="600" className="bg-[#0A0A0A]">Semi-Bold (600)</option>
                  <option value="700" className="bg-[#0A0A0A]">Bold (700)</option>
                  <option value="800" className="bg-[#0A0A0A]">Extra-Bold (800)</option>
                  <option value="900" className="bg-[#0A0A0A]">Black (900)</option>
                </select>
              </div>
            </div>

            {/* Colors */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-mono text-white/70 mb-1.5 font-bold">
                  Metin Rengi
                </label>
                <div className="flex gap-2 items-center">
                  <input
                    type="color"
                    value={currentStyles.color || '#FFFFFF'}
                    onChange={(e) => updateElementStyle(selectedEl.id, { color: e.target.value })}
                    className="w-8 h-8 rounded-lg border border-white/20 bg-transparent cursor-pointer"
                  />
                  <input
                    type="text"
                    value={currentStyles.color || '#FFFFFF'}
                    onChange={(e) => updateElementStyle(selectedEl.id, { color: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-none font-mono"
                  />
                </div>
              </div>

              {selectedEl.type === 'button' && (
                <div>
                  <label className="block text-[11px] font-mono text-white/70 mb-1.5 font-bold">
                    Arka Plan Rengi
                  </label>
                  <div className="flex gap-2 items-center">
                    <input
                      type="color"
                      value={currentStyles.backgroundColor || '#B33A06'}
                      onChange={(e) => updateElementStyle(selectedEl.id, { backgroundColor: e.target.value })}
                      className="w-8 h-8 rounded-lg border border-white/20 bg-transparent cursor-pointer"
                    />
                    <input
                      type="text"
                      value={currentStyles.backgroundColor || '#B33A06'}
                      onChange={(e) => updateElementStyle(selectedEl.id, { backgroundColor: e.target.value })}
                      className="w-full p-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-none font-mono"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Alignment & Border Radius */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-mono text-white/70 mb-1.5 font-bold">
                  Hizalama
                </label>
                <select
                  value={currentStyles.textAlign || 'left'}
                  onChange={(e) => updateElementStyle(selectedEl.id, { textAlign: e.target.value as any })}
                  className="w-full p-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#B33A06]"
                >
                  <option value="left" className="bg-[#0A0A0A]">Sola Hizala</option>
                  <option value="center" className="bg-[#0A0A0A]">Ortala</option>
                  <option value="right" className="bg-[#0A0A0A]">Sağa Hizala</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-mono text-white/70 mb-1.5 font-bold">
                  Köşe Yuvarlama (Radius)
                </label>
                <input
                  type="text"
                  value={currentStyles.borderRadius || '0px'}
                  onChange={(e) => updateElementStyle(selectedEl.id, { borderRadius: e.target.value })}
                  placeholder="16px"
                  className="w-full p-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#B33A06]"
                />
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: ADVANCED */}
        {activeTab === 'advanced' && (
          <div className="space-y-4 font-mono">
            <div>
              <label className="block text-[11px] text-white/70 mb-1.5 font-bold">
                Element ID
              </label>
              <input
                type="text"
                disabled
                value={selectedEl.id}
                className="w-full p-3 rounded-xl bg-white/5 border border-white/10 text-white/50 text-xs cursor-not-allowed"
              />
            </div>

            <div>
              <label className="block text-[11px] text-white/70 mb-1.5 font-bold">
                Aşama Animasyonu
              </label>
              <select className="w-full p-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#B33A06]">
                <option value="fade-in" className="bg-[#0A0A0A]">Yumuşak Belirme (Fade In)</option>
                <option value="slide-up" className="bg-[#0A0A0A]">Aşağıdan Yukarı (Slide Up)</option>
                <option value="zoom-in" className="bg-[#0A0A0A]">Büyüyerek Açılma (Zoom)</option>
              </select>
            </div>
          </div>
        )}

      </div>
    </aside>
  );
}
