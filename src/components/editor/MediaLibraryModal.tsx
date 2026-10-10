'use client';

import React, { useState } from 'react';
import { X, Upload, Search, Check, Image as ImageIcon, Video as VideoIcon, FileText } from 'lucide-react';
import { useEditor } from './EditorContext';

export const demoMediaLibrary = [
  { id: 'm-1', name: 'Altun Medya Stüdyo Çekim 4K', type: 'image', url: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=800&auto=format&fit=crop', category: 'Görseller' },
  { id: 'm-2', name: 'Didim Palace Resort Lansman', type: 'image', url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop', category: 'Görseller' },
  { id: 'm-3', name: 'Kurumsal Kimlik & Rehber', type: 'image', url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=800&auto=format&fit=crop', category: 'Görseller' },
  { id: 'm-4', name: '4K Fashion Reels Tanıtım Videosu', type: 'video', url: 'https://assets.mixkit.co/videos/preview/mixkit-fashion-model-posing-in-neon-light-40114-large.mp4', category: 'Videolar' },
  { id: 'm-5', name: 'Otel & Restoran Çekim Arşivi', type: 'image', url: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop', category: 'Görseller' },
];

export default function MediaLibraryModal() {
  const { 
    mediaLibraryOpen, setMediaLibraryOpen, 
    mediaSelectTarget, updateElementContent 
  } = useEditor();
  const [filterTab, setFilterTab] = useState<'all' | 'image' | 'video'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedUrl, setSelectedUrl] = useState<string | null>(null);

  if (!mediaLibraryOpen) return null;

  const handleApplySelection = () => {
    if (selectedUrl && mediaSelectTarget) {
      updateElementContent(mediaSelectTarget.elementId, { [mediaSelectTarget.field]: selectedUrl });
    }
    setMediaLibraryOpen(false);
  };

  const filteredMedia = demoMediaLibrary.filter((m) => {
    if (filterTab !== 'all' && m.type !== filterTab) return false;
    if (searchQuery && !m.name.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 text-white selection:bg-[#C8FF00] selection:text-black">
      <div className="w-full max-w-4xl bg-[#090909] border border-white/15 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh] animate-in fade-in zoom-in-95 duration-200">
        {/* HEADER */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold font-heading text-white">Ajans Medya Kütüphanesi</h2>
            <p className="text-xs font-mono text-white/50">Görsel ve video varlıklarınızı seçin veya bilgisayarınızdan yükleyin.</p>
          </div>

          <button
            onClick={() => setMediaLibraryOpen(false)}
            className="p-2 rounded-xl hover:bg-white/10 text-white/50 hover:text-white transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* SEARCH & FILTERS */}
        <div className="p-4 border-b border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 bg-white/5">
          <div className="flex items-center gap-1.5 p-1 bg-white/5 border border-white/10 rounded-xl w-full sm:w-auto font-mono text-xs">
            <button
              onClick={() => setFilterTab('all')}
              className={`px-3 py-1.5 rounded-lg transition-all ${filterTab === 'all' ? 'bg-[#C8FF00] text-black font-bold' : 'text-white/60 hover:text-white'}`}
            >
              Tümü
            </button>
            <button
              onClick={() => setFilterTab('image')}
              className={`px-3 py-1.5 rounded-lg transition-all ${filterTab === 'image' ? 'bg-[#C8FF00] text-black font-bold' : 'text-white/60 hover:text-white'}`}
            >
              Görseller
            </button>
            <button
              onClick={() => setFilterTab('video')}
              className={`px-3 py-1.5 rounded-lg transition-all ${filterTab === 'video' ? 'bg-[#C8FF00] text-black font-bold' : 'text-white/60 hover:text-white'}`}
            >
              Videolar
            </button>
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-white/40 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Dosya Ara..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-white/5 border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-[#C8FF00]"
            />
          </div>
        </div>

        {/* MEDIA GRID */}
        <div className="flex-1 overflow-y-auto p-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {filteredMedia.map((media) => {
            const isSelected = selectedUrl === media.url;
            return (
              <div
                key={media.id}
                onClick={() => setSelectedUrl(media.url)}
                className={`relative rounded-2xl border overflow-hidden cursor-pointer group transition-all h-36 bg-black flex items-center justify-center ${
                  isSelected ? 'border-[#C8FF00] ring-2 ring-[#C8FF00] shadow-[0_0_20px_rgba(200,255,0,0.3)]' : 'border-white/10 hover:border-white/40'
                }`}
              >
                {media.type === 'image' ? (
                  <img src={media.url} alt={media.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-zinc-900 text-[#C8FF00]">
                    <VideoIcon className="w-8 h-8" />
                  </div>
                )}

                <div className="absolute inset-x-0 bottom-0 p-2 bg-black/80 backdrop-blur-md text-[10px] font-mono text-white truncate">
                  {media.name}
                </div>

                {isSelected && (
                  <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-[#C8FF00] text-black flex items-center justify-center font-bold">
                    <Check className="w-4 h-4" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* FOOTER */}
        <div className="p-4 border-t border-white/10 bg-white/5 flex items-center justify-between">
          <div className="text-xs font-mono text-white/50">
            {selectedUrl ? 'Dosya Seçildi' : 'Lütfen değiştirmek istediğiniz medya dosyasını tıklayın.'}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setMediaLibraryOpen(false)}
              className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-mono font-bold hover:bg-white/10 transition-all"
            >
              İptal
            </button>
            <button
              onClick={handleApplySelection}
              disabled={!selectedUrl}
              className="px-5 py-2 rounded-xl bg-[#C8FF00] text-black font-extrabold text-xs uppercase tracking-wider disabled:opacity-40 hover:bg-[#D4FF28] transition-all"
            >
              Seçimi Kullan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
