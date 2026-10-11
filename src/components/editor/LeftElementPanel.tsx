'use client';

import React, { useState } from 'react';
import { 
  Type, Heading as HeadingIcon, Image as ImageIcon, Video as VideoIcon, 
  Square, Layers, Plus, ArrowUp, ArrowDown, Trash2, Copy, Move, AlignLeft, 
  HelpCircle, MessageSquare, Minus, Sparkles, X, ChevronRight, ChevronDown 
} from 'lucide-react';
import { useEditor } from './EditorContext';
import { ElementModel, ElementType, SectionModel } from '@/data/visual-editor-store';

export default function LeftElementPanel({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [activeTab, setActiveTab] = useState<'widgets' | 'navigator'>('widgets');
  const { 
    pageSchema, addElementToSection, addSection, 
    selectedSectionId, setSelectedSectionId, 
    selectedElementId, setSelectedElementId,
    deleteElement, moveElement, duplicateElement,
    deleteSection, moveSection, updateSection
  } = useEditor();

  const handleAddWidget = (type: ElementType) => {
    const targetSectionId = selectedSectionId || pageSchema.sections[0]?.id;
    if (!targetSectionId) return;

    let newEl: ElementModel;
    const now = Date.now();

    switch (type) {
      case 'heading':
        newEl = {
          id: `el-heading-${now}`,
          type: 'heading',
          label: 'Yeni Başlık',
          content: { text: 'Yeni Başlık Metnini Buraya Yazın' },
          styles: {
            desktop: { fontSize: '42px', fontWeight: '800', color: '#FFFFFF', marginBottom: '16px', fontFamily: 'Outfit, sans-serif' },
            tablet: { fontSize: '32px' },
            mobile: { fontSize: '24px' },
          },
        };
        break;
      case 'text':
        newEl = {
          id: `el-text-${now}`,
          type: 'text',
          label: 'Paragraf Metni',
          content: { text: 'Altun Medya ile dijital varlığınızı ve dönüşümlerinizi katlayın.' },
          styles: {
            desktop: { fontSize: '16px', lineHeight: '1.6', color: '#A1A1AA', marginBottom: '24px' },
            tablet: { fontSize: '15px' },
            mobile: { fontSize: '14px' },
          },
        };
        break;
      case 'image':
        newEl = {
          id: `el-img-${now}`,
          type: 'image',
          label: 'Görsel',
          content: { 
            src: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=800&auto=format&fit=crop',
            alt: 'Altun Medya Görsel'
          },
          styles: {
            desktop: { borderRadius: '16px', marginBottom: '24px' },
            tablet: { borderRadius: '12px' },
            mobile: { borderRadius: '8px' },
          },
        };
        break;
      case 'video':
        newEl = {
          id: `el-vid-${now}`,
          type: 'video',
          label: '4K Tanıtım Videosu',
          content: { 
            videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-fashion-model-posing-in-neon-light-40114-large.mp4',
            autoplay: true,
            muted: true,
            loop: true
          },
          styles: {
            desktop: { borderRadius: '24px', marginBottom: '24px' },
            tablet: { borderRadius: '16px' },
            mobile: { borderRadius: '12px' },
          },
        };
        break;
      case 'button':
        newEl = {
          id: `el-btn-${now}`,
          type: 'button',
          label: 'CTA Butonu',
          content: { text: 'PROJEYİ BAŞLAT', url: '/musteri-paneli' },
          styles: {
            desktop: { 
              fontSize: '14px', color: '#000000', backgroundColor: '#B33A06', 
              fontWeight: '800', paddingTop: '14px', paddingBottom: '14px', 
              paddingLeft: '28px', paddingRight: '28px', borderRadius: '9999px' 
            },
            tablet: { fontSize: '13px' },
            mobile: { fontSize: '13px' },
          },
        };
        break;
      case 'divider':
        newEl = {
          id: `el-div-${now}`,
          type: 'divider',
          label: 'Ayırıcı Çizgi',
          content: {},
          styles: {
            desktop: { marginTop: '32px', marginBottom: '32px', borderColor: 'rgba(255,255,255,0.1)' },
            tablet: {},
            mobile: {},
          },
        };
        break;
      default:
        newEl = {
          id: `el-${type}-${now}`,
          type,
          label: `Yeni ${type}`,
          content: { text: 'İçerik buraya gelecek' },
          styles: { desktop: { color: '#FFF' }, tablet: {}, mobile: {} },
        };
    }

    addElementToSection(targetSectionId, newEl);
  };

  const handleAddNewSection = () => {
    const newSec: SectionModel = {
      id: `sec-${Date.now()}`,
      title: 'Yeni Özel Bölüm',
      category: 'Özel',
      background: { type: 'color', color: '#0B0B0B' },
      padding: { desktop: '80px 20px', tablet: '60px 20px', mobile: '40px 16px' },
      elements: [
        {
          id: `el-h-${Date.now()}`,
          type: 'heading',
          label: 'Bölüm Başlığı',
          content: { text: 'Yeni Bölüm Başlığınız' },
          styles: { desktop: { fontSize: '36px', color: '#FFF', fontWeight: '800', marginBottom: '16px', textAlign: 'center' }, tablet: {}, mobile: {} }
        }
      ]
    };

    addSection(newSec);
  };

  if (!isOpen) return null;

  return (
    <aside className="w-80 bg-[#0A0A0A] border-r border-white/10 flex flex-col z-40 text-white selection:bg-[#B33A06] selection:text-white">
      {/* HEADER TABS */}
      <div className="p-4 border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-1 p-1 bg-white/5 rounded-xl border border-white/10 flex-1">
          <button
            onClick={() => setActiveTab('widgets')}
            className={`flex-1 py-1.5 text-xs font-mono font-bold rounded-lg transition-all ${
              activeTab === 'widgets' ? 'bg-[#B33A06] text-white shadow-md' : 'text-white/60 hover:text-white'
            }`}
          >
            + Elementler
          </button>
          <button
            onClick={() => setActiveTab('navigator')}
            className={`flex-1 py-1.5 text-xs font-mono font-bold rounded-lg transition-all ${
              activeTab === 'navigator' ? 'bg-[#B33A06] text-white shadow-md' : 'text-white/60 hover:text-white'
            }`}
          >
            📑 Yapı Tree
          </button>
        </div>

        <button
          onClick={onClose}
          className="p-2 text-white/50 hover:text-white transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* CONTENT TAB 1: WIDGETS */}
      {activeTab === 'widgets' && (
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          <div>
            <h4 className="text-[11px] font-mono uppercase tracking-wider text-white/50 mb-3 font-semibold">
              Temel Yapı Taşları
            </h4>
            <div className="grid grid-cols-2 gap-2.5">
              <button
                onClick={() => handleAddWidget('heading')}
                className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#B33A06] hover:bg-white/10 transition-all flex flex-col items-center justify-center gap-2 group text-center"
              >
                <HeadingIcon className="w-5 h-5 text-[#B33A06] group-hover:scale-110 transition-transform" />
                <span className="text-xs font-semibold">Başlık</span>
              </button>

              <button
                onClick={() => handleAddWidget('text')}
                className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#B33A06] hover:bg-white/10 transition-all flex flex-col items-center justify-center gap-2 group text-center"
              >
                <Type className="w-5 h-5 text-[#B33A06] group-hover:scale-110 transition-transform" />
                <span className="text-xs font-semibold">Metin Paragraf</span>
              </button>

              <button
                onClick={() => handleAddWidget('image')}
                className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#B33A06] hover:bg-white/10 transition-all flex flex-col items-center justify-center gap-2 group text-center"
              >
                <ImageIcon className="w-5 h-5 text-[#B33A06] group-hover:scale-110 transition-transform" />
                <span className="text-xs font-semibold">Görsel</span>
              </button>

              <button
                onClick={() => handleAddWidget('video')}
                className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#B33A06] hover:bg-white/10 transition-all flex flex-col items-center justify-center gap-2 group text-center"
              >
                <VideoIcon className="w-5 h-5 text-[#B33A06] group-hover:scale-110 transition-transform" />
                <span className="text-xs font-semibold">Video</span>
              </button>

              <button
                onClick={() => handleAddWidget('button')}
                className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#B33A06] hover:bg-white/10 transition-all flex flex-col items-center justify-center gap-2 group text-center"
              >
                <Square className="w-5 h-5 text-[#B33A06] group-hover:scale-110 transition-transform" />
                <span className="text-xs font-semibold">CTA Buton</span>
              </button>

              <button
                onClick={() => handleAddWidget('divider')}
                className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#B33A06] hover:bg-white/10 transition-all flex flex-col items-center justify-center gap-2 group text-center"
              >
                <Minus className="w-5 h-5 text-[#B33A06] group-hover:scale-110 transition-transform" />
                <span className="text-xs font-semibold">Ayırıcı Çizgi</span>
              </button>
            </div>
          </div>

          {/* ADD NEW SECTION CTA */}
          <div className="pt-4 border-t border-white/10">
            <button
              onClick={handleAddNewSection}
              className="w-full py-3 rounded-xl bg-[#B33A06]/10 border border-[#B33A06]/40 hover:bg-[#B33A06] text-[#B33A06] hover:text-black transition-all font-mono font-bold text-xs flex items-center justify-center gap-2"
            >
              <Plus className="w-4 h-4" />
              <span>+ Yeni Section Ekle</span>
            </button>
          </div>
        </div>
      )}

      {/* CONTENT TAB 2: NAVIGATOR (PAGE STRUCTURE TREE) */}
      {activeTab === 'navigator' && (
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-[11px] font-mono uppercase tracking-wider text-white/50 font-semibold">
              Sayfa Bölümleri ({pageSchema.sections.length})
            </h4>
            <button
              onClick={handleAddNewSection}
              className="text-[11px] text-[#B33A06] hover:underline font-mono font-bold flex items-center gap-1"
            >
              <Plus className="w-3 h-3" />
              <span>Bölüm Ekle</span>
            </button>
          </div>

          <div className="space-y-3">
            {pageSchema.sections.map((sec, secIdx) => {
              const isSecSelected = selectedSectionId === sec.id;
              return (
                <div
                  key={sec.id}
                  className={`rounded-2xl border transition-all ${
                    isSecSelected ? 'border-[#B33A06] bg-[#B33A06]/5' : 'border-white/10 bg-white/5'
                  }`}
                >
                  {/* Section Title Bar */}
                  <div 
                    onClick={() => {
                      setSelectedSectionId(sec.id);
                      setSelectedElementId(null);
                    }}
                    className="p-3 flex items-center justify-between cursor-pointer hover:bg-white/5 rounded-t-2xl"
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <Layers className="w-4 h-4 text-[#B33A06] flex-shrink-0" />
                      <span className="text-xs font-bold font-heading truncate text-white">{sec.title}</span>
                    </div>

                    <div className="flex items-center gap-1">
                      <button
                        onClick={(e) => { e.stopPropagation(); moveSection(sec.id, 'up'); }}
                        disabled={secIdx === 0}
                        className="p-1 text-white/40 hover:text-white disabled:opacity-20"
                        title="Yukarı Taşı"
                      >
                        <ArrowUp className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={(e) => { e.stopPropagation(); moveSection(sec.id, 'down'); }}
                        disabled={secIdx === pageSchema.sections.length - 1}
                        className="p-1 text-white/40 hover:text-white disabled:opacity-20"
                        title="Aşağı Taşı"
                      >
                        <ArrowDown className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={(e) => { e.stopPropagation(); deleteSection(sec.id); }}
                        className="p-1 text-red-400/60 hover:text-red-400"
                        title="Bölümü Sil"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Section Elements Sublist */}
                  <div className="px-3 pb-3 space-y-1.5 border-t border-white/5 pt-2">
                    {sec.elements.map((el, elIdx) => {
                      const isElSelected = selectedElementId === el.id;
                      return (
                        <div
                          key={el.id}
                          onClick={() => {
                            setSelectedElementId(el.id);
                            setSelectedSectionId(sec.id);
                          }}
                          className={`p-2 rounded-xl text-xs flex items-center justify-between cursor-pointer transition-all ${
                            isElSelected ? 'bg-[#B33A06] text-white font-extrabold' : 'bg-white/5 text-white/80 hover:bg-white/10'
                          }`}
                        >
                          <span className="truncate pr-2 font-mono text-[11px]">
                            {el.type.toUpperCase()}: {el.label}
                          </span>

                          <div className="flex items-center gap-1 opacity-60 hover:opacity-100">
                            <button
                              onClick={(e) => { e.stopPropagation(); moveElement(el.id, 'up'); }}
                              disabled={elIdx === 0}
                              className="p-0.5 hover:text-white"
                            >
                              <ArrowUp className="w-3 h-3" />
                            </button>
                            <button
                              onClick={(e) => { e.stopPropagation(); moveElement(el.id, 'down'); }}
                              disabled={elIdx === sec.elements.length - 1}
                              className="p-0.5 hover:text-white"
                            >
                              <ArrowDown className="w-3 h-3" />
                            </button>
                            <button
                              onClick={(e) => { e.stopPropagation(); deleteElement(el.id); }}
                              className="p-0.5 hover:text-red-500"
                            >
                              <Trash2 className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      );
                    })}

                    <button
                      onClick={() => handleAddWidget('text')}
                      className="w-full py-1.5 text-[10px] font-mono text-[#B33A06] hover:underline flex items-center justify-center gap-1"
                    >
                      <Plus className="w-3 h-3" />
                      <span>+ Bu Bölüme Element Ekle</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </aside>
  );
}
