'use client';

import React from 'react';
import { X, Palette, Check } from 'lucide-react';
import { useEditor } from './EditorContext';

export default function GlobalStylesModal() {
  const { globalStylesOpen, setGlobalStylesOpen, globalStyles, setGlobalStyles } = useEditor();

  if (!globalStylesOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xl flex items-center justify-center p-4 text-white selection:bg-[#A40001] selection:text-white">
      <div className="w-full max-w-md bg-[#262626] border border-white/15 rounded-3xl p-6 shadow-2xl space-y-5">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-2">
            <Palette className="w-5 h-5 text-[#A40001]" />
            <h3 className="text-lg font-bold font-heading text-white">Global Marka Stilleri</h3>
          </div>
          <button onClick={() => setGlobalStylesOpen(false)} className="p-1.5 text-white/50 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4 text-xs font-mono">
          <div>
            <label className="block text-white/70 mb-1 font-bold">Ana Vurgu Rengi (Primary Accent)</label>
            <div className="flex items-center gap-3">
              <input
                type="color"
                value={globalStyles.primaryColor}
                onChange={(e) => setGlobalStyles({ ...globalStyles, primaryColor: e.target.value })}
                className="w-10 h-10 rounded-xl bg-transparent border border-white/20 cursor-pointer"
              />
              <input
                type="text"
                value={globalStyles.primaryColor}
                onChange={(e) => setGlobalStyles({ ...globalStyles, primaryColor: e.target.value })}
                className="flex-1 p-3 rounded-xl bg-white/5 border border-white/10 text-white font-bold"
              />
            </div>
          </div>

          <div>
            <label className="block text-white/70 mb-1 font-bold">Arka Plan Rengi (Background)</label>
            <div className="flex items-center gap-3">
              <input
                type="color"
                value={globalStyles.backgroundColor}
                onChange={(e) => setGlobalStyles({ ...globalStyles, backgroundColor: e.target.value })}
                className="w-10 h-10 rounded-xl bg-transparent border border-white/20 cursor-pointer"
              />
              <input
                type="text"
                value={globalStyles.backgroundColor}
                onChange={(e) => setGlobalStyles({ ...globalStyles, backgroundColor: e.target.value })}
                className="flex-1 p-3 rounded-xl bg-white/5 border border-white/10 text-white font-bold"
              />
            </div>
          </div>

          <div>
            <label className="block text-white/70 mb-1 font-bold">Başlık Fontu (Heading Font)</label>
            <select
              value={globalStyles.headingFont}
              onChange={(e) => setGlobalStyles({ ...globalStyles, headingFont: e.target.value })}
              className="w-full p-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#A40001]"
            >
              <option value="Outfit, sans-serif" className="bg-[#262626]">Outfit (Agency Bold)</option>
              <option value="Inter, sans-serif" className="bg-[#262626]">Inter</option>
              <option value="Space Grotesk, sans-serif" className="bg-[#262626]">Space Grotesk</option>
            </select>
          </div>
        </div>

        <button
          onClick={() => setGlobalStylesOpen(false)}
          className="w-full py-3 rounded-xl bg-[#A40001] text-white font-extrabold text-xs uppercase tracking-wider hover:bg-[#A40001] transition-all"
        >
          Değişiklikleri Uygula
        </button>
      </div>
    </div>
  );
}
