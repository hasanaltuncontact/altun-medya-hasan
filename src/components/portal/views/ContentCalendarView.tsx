'use client';

import React, { useState } from 'react';
import { Calendar, Instagram, Facebook, Youtube, Clock, CheckCircle2, Eye, X } from 'lucide-react';
import { usePortal } from '../PortalContext';
import { ContentCalendarItem } from '@/data/portal-database';

export default function ContentCalendarView() {
  const { calendarItems } = usePortal();
  const [selectedItem, setSelectedItem] = useState<ContentCalendarItem | null>(null);

  const getPlatformBadge = (platform: string) => {
    switch (platform) {
      case 'Instagram': return <span className="px-2.5 py-0.5 rounded-full bg-pink-500/20 text-pink-400 font-bold border border-pink-500/30">Instagram</span>;
      case 'TikTok': return <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-400 font-bold border border-cyan-500/30">TikTok</span>;
      case 'Facebook': return <span className="px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-400 font-bold border border-blue-500/30">Facebook</span>;
      case 'YouTube': return <span className="px-2.5 py-0.5 rounded-full bg-red-500/20 text-red-400 font-bold border border-red-500/30">YouTube</span>;
      default: return <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-white font-bold">Social</span>;
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-white font-heading">
            Sosyal Medya İçerik Takvimi &amp; Planlama
          </h1>
          <p className="text-xs font-mono text-white/60">
            Instagram, TikTok ve YouTube platformları için planlanmış, üretimdeki ve onaylanmış içerikler.
          </p>
        </div>

        <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-white/70">
          Ekim 2026 İçerik Planı
        </div>
      </div>

      {/* CALENDAR ITEMS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {calendarItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedItem(item)}
            className="p-6 rounded-3xl bg-[#262626] border border-white/10 hover:border-[#A40001]/40 transition-all cursor-pointer group space-y-4 font-mono text-xs flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                {getPlatformBadge(item.platform)}
                <span className="px-2.5 py-0.5 rounded-full bg-[#A40001]/10 text-[#A40001] font-bold border border-[#A40001]/30 text-[10px]">
                  {item.status}
                </span>
              </div>

              <div className="relative h-40 rounded-2xl overflow-hidden bg-black border border-white/10">
                <img src={item.mediaPreview} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80" />
                <div className="absolute top-2 right-2 px-2 py-0.5 rounded bg-black/80 text-[10px] font-bold text-white">
                  {item.contentType}
                </div>
              </div>

              <h3 className="text-sm font-bold text-white font-heading leading-snug">{item.title}</h3>
              <p className="text-[11px] text-white/60 font-sans line-clamp-2 leading-relaxed">{item.caption}</p>
            </div>

            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-white/50 text-[11px]">
              <span>📅 {item.scheduledDate} • {item.scheduledTime}</span>
              <span className="text-[#A40001] font-bold group-hover:underline flex items-center gap-1">
                <Eye className="w-3.5 h-3.5" />
                <span>[ Detay ]</span>
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* DETAIL MODAL */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xl flex items-center justify-center p-5 animate-fadeIn">
          <div className="w-full max-w-lg p-7 rounded-3xl bg-[#262626] border border-white/15 shadow-2xl space-y-5 font-mono text-xs relative">
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-5 right-5 text-white/40 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2">
              {getPlatformBadge(selectedItem.platform)}
              <span className="text-[#A40001] font-bold">• {selectedItem.contentType}</span>
            </div>

            <h2 className="text-xl font-bold text-white font-heading">{selectedItem.title}</h2>

            <div className="relative h-48 rounded-2xl overflow-hidden bg-black border border-white/10">
              <img src={selectedItem.mediaPreview} className="w-full h-full object-cover" />
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
              <div className="text-[10px] text-white/40 uppercase font-bold">Metin &amp; Açıklama (Caption)</div>
              <p className="text-white/80 font-sans text-xs leading-relaxed">{selectedItem.caption}</p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {selectedItem.hashtags.map((h, i) => (
                  <span key={i} className="text-[10px] text-[#A40001]">#{h}</span>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-white/10 text-white/60">
              <span>Yayın Tarihi: <strong className="text-white">{selectedItem.scheduledDate} {selectedItem.scheduledTime}</strong></span>
              <span className="text-[#A40001] font-bold">Durum: {selectedItem.status}</span>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
