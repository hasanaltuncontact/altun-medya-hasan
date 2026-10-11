'use client';

import { X, ArrowUpRight } from 'lucide-react';
import { WorkItem } from '@/data/works';

interface CaseStudyModalProps {
  workItem: WorkItem | null;
  onClose: () => void;
  onOpenBrief: () => void;
}

export default function CaseStudyModal({ workItem, onClose, onOpenBrief }: CaseStudyModalProps) {
  if (!workItem) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/95 backdrop-blur-2xl animate-fadeIn">
      <div className="bg-[#111111] border border-white/15 rounded-2xl sm:rounded-3xl p-6 sm:p-8 max-w-2xl w-full relative shadow-2xl overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-white/60 hover:text-white p-1.5 rounded-full bg-white/5 hover:bg-white/10 transition-all z-20"
          aria-label="Kapat"
        >
          <X className="w-5 h-5" />
        </button>

        <span className="text-xs font-mono text-[#B33A06] uppercase tracking-widest font-bold block mb-1">
          {workItem.category}
        </span>
        <h3 className="text-2xl font-extrabold text-white tracking-tight mb-2 font-heading">
          {workItem.title}
        </h3>
        <p className="text-xs text-white/60 font-mono mb-4">Müşteri: {workItem.client}</p>

        <div className="relative aspect-video rounded-xl overflow-hidden mb-5 border border-white/10">
          <img src={workItem.image} alt={workItem.title} className="w-full h-full object-cover" />
          <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-xs font-mono text-[#B33A06] font-bold">
            {workItem.resultMetric} {workItem.resultLabel}
          </div>
        </div>

        <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-normal mb-5">
          {workItem.description}
        </p>

        <div className="flex flex-wrap items-center gap-2 mb-6">
          {workItem.tags.map((tag) => (
            <span key={tag} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] text-white/70 font-mono">
              #{tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
          <button
            onClick={() => {
              onClose();
              onOpenBrief();
            }}
            className="px-5 py-2.5 rounded-xl bg-[#B33A06] text-white text-xs font-bold font-mono uppercase tracking-wider hover:bg-[#C84408] transition-all flex items-center gap-1.5"
          >
            <span>Benzer Proje Başlat</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
