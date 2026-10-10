'use client';

import React from 'react';
import { X, Globe, Save } from 'lucide-react';
import { useEditor } from './EditorContext';

export default function SeoDrawer() {
  const { seoDrawerOpen, setSeoDrawerOpen, pageSchema, updateSeo } = useEditor();

  if (!seoDrawerOpen) return null;

  return (
    <aside className="fixed top-16 right-0 bottom-0 w-96 bg-[#090909]/95 backdrop-blur-2xl border-l border-white/10 flex flex-col z-50 text-white selection:bg-[#C8FF00] selection:text-black shadow-2xl animate-in slide-in-from-right duration-200">
      <div className="p-4 border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Globe className="w-5 h-5 text-[#C8FF00]" />
          <h3 className="text-sm font-bold text-white font-heading">Sayfa SEO & Meta Ayarları</h3>
        </div>

        <button onClick={() => setSeoDrawerOpen(false)} className="p-1.5 text-white/50 hover:text-white">
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-5 space-y-4 text-xs">
        <div>
          <label className="block font-mono text-white/70 mb-1.5 font-bold">SEO Başlık (Title Tag)</label>
          <input
            type="text"
            value={pageSchema.seoTitle}
            onChange={(e) => updateSeo({ seoTitle: e.target.value })}
            className="w-full p-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#C8FF00]"
          />
        </div>

        <div>
          <label className="block font-mono text-white/70 mb-1.5 font-bold">Meta Açıklaması (Description)</label>
          <textarea
            rows={4}
            value={pageSchema.seoDescription}
            onChange={(e) => updateSeo({ seoDescription: e.target.value })}
            className="w-full p-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#C8FF00]"
          />
        </div>

        <div>
          <label className="block font-mono text-white/70 mb-1.5 font-bold">Sosyal Medya Görseli (OG Image)</label>
          <input
            type="text"
            value={pageSchema.ogImage}
            onChange={(e) => updateSeo({ ogImage: e.target.value })}
            className="w-full p-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#C8FF00]"
          />
        </div>

        <div>
          <label className="block font-mono text-white/70 mb-1.5 font-bold">URL Slug</label>
          <input
            type="text"
            value={pageSchema.slug}
            onChange={(e) => updateSeo({ slug: e.target.value })}
            className="w-full p-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#C8FF00] font-mono"
          />
        </div>
      </div>

      <div className="p-4 border-t border-white/10">
        <button
          onClick={() => setSeoDrawerOpen(false)}
          className="w-full py-3 rounded-xl bg-[#C8FF00] text-black font-extrabold text-xs uppercase tracking-wider hover:bg-[#D4FF28] transition-all"
        >
          Kaydet & Kapat
        </button>
      </div>
    </aside>
  );
}
