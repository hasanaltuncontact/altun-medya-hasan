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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0B0B0B]/95 backdrop-blur-2xl animate-fadeIn">
      <div className="bg-[#161616] border border-[#F8F0DB]/15 rounded-2xl sm:rounded-3xl p-6 sm:p-8 max-w-2xl w-full relative shadow-2xl overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[#F8F0DB]/60 hover:text-[#F8F0DB] p-1.5 rounded-full bg-[#F8F0DB]/5 hover:bg-[#F8F0DB]/10 transition-all z-20"
          aria-label="Kapat"
        >
          <X className="w-5 h-5" />
        </button>

        <span className="text-xs font-medium text-accent font-bold block mb-1">
          {workItem.category}
        </span>
        <h3 className="text-2xl font-extrabold text-[#F8F0DB] tracking-tight mb-2 font-heading">
          {workItem.title}
        </h3>
        <p className="text-xs text-[#F8F0DB]/60 font-medium mb-4">Müşteri: {workItem.client}</p>

        <div className="relative aspect-video rounded-xl overflow-hidden mb-5 border border-[#F8F0DB]/10">
          <img src={workItem.image} alt={workItem.title} className="w-full h-full object-cover" />
          <div className="absolute bottom-3 right-3 bg-[#0B0B0B]/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-[#F8F0DB]/10 text-xs font-medium text-accent font-bold">
            {workItem.resultMetric} {workItem.resultLabel}
          </div>
        </div>

        <p className="text-xs sm:text-sm text-[#F8F0DB]/80 leading-relaxed font-normal mb-5">
          {workItem.description}
        </p>

        <div className="flex flex-wrap items-center gap-2 mb-6">
          {workItem.tags.map((tag) => (
            <span key={tag} className="px-2.5 py-1 rounded-md bg-[#F8F0DB]/5 border border-[#F8F0DB]/10 text-xs text-[#F8F0DB]/70 font-medium">
              #{tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#F8F0DB]/10">
          <button
            onClick={() => {
              onClose();
              onOpenBrief();
            }}
            className="px-5 py-2.5 rounded-xl bg-accent text-onAccent text-xs font-bold font-medium hover:bg-accent transition-all flex items-center gap-1.5 hover:text-onAccent"
          >
            <span>Benzer Proje Başlat</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
