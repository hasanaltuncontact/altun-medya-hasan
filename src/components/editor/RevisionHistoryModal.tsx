'use client';

import React from 'react';
import { X, History, RotateCcw, Check } from 'lucide-react';
import { useEditor } from './EditorContext';

export default function RevisionHistoryModal() {
  const { 
    revisionsModalOpen, setRevisionsModalOpen, 
    revisions, restoreRevision, pageSchema 
  } = useEditor();

  if (!revisionsModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xl flex items-center justify-center p-4 text-white selection:bg-[#A40001] selection:text-white">
      <div className="w-full max-w-lg bg-[#262626] border border-white/15 rounded-3xl p-6 shadow-2xl space-y-5">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-2">
            <History className="w-5 h-5 text-[#A40001]" />
            <h3 className="text-lg font-bold font-heading text-white">Versiyon & Revizyon Geçmişi</h3>
          </div>
          <button onClick={() => setRevisionsModalOpen(false)} className="p-1.5 text-white/50 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-3 max-h-80 overflow-y-auto pr-1">
          {revisions.map((rev) => {
            const isCurrent = pageSchema.version === rev.version;
            return (
              <div
                key={rev.version}
                className={`p-4 rounded-2xl border flex items-center justify-between transition-all ${
                  isCurrent ? 'bg-[#A40001]/10 border-[#A40001]' : 'bg-white/5 border-white/10 hover:border-white/30'
                }`}
              >
                <div>
                  <div className="flex items-center gap-2 font-mono text-xs">
                    <span className="font-extrabold text-[#A40001]">v{rev.version}</span>
                    <span className="text-white/50">• {rev.timestamp}</span>
                  </div>
                  <p className="text-xs text-white/80 font-medium mt-1">{rev.note}</p>
                </div>

                {isCurrent ? (
                  <span className="px-2.5 py-1 rounded-lg bg-[#A40001] text-white text-[10px] font-mono font-extrabold flex items-center gap-1">
                    <Check className="w-3 h-3" />
                    <span>Aktif</span>
                  </span>
                ) : (
                  <button
                    onClick={() => restoreRevision(rev.version)}
                    className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-[#A40001] text-white hover:text-black font-mono text-xs font-bold transition-all flex items-center gap-1"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Geri Yükle</span>
                  </button>
                )}
              </div>
            );
          })}
        </div>

        <button
          onClick={() => setRevisionsModalOpen(false)}
          className="w-full py-3 rounded-xl bg-white/10 text-white font-extrabold text-xs uppercase tracking-wider hover:bg-white/20 transition-all"
        >
          Kapat
        </button>
      </div>
    </div>
  );
}
