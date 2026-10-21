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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#262626]/95 backdrop-blur-2xl animate-fadeIn">
      <div className="bg-[#1E1E1E] border border-[#F6F6F6]/15 rounded-2xl sm:rounded-3xl p-6 sm:p-8 max-w-2xl w-full relative shadow-2xl overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[#F6F6F6]/60 hover:text-[#F6F6F6] p-1.5 rounded-full bg-[#F6F6F6]/5 hover:bg-[#F6F6F6]/10 transition-all z-20"
          aria-label="Kapat"
        >
          <X className="w-5 h-5" />
        </button>

        <span className="text-xs font-medium text-[#A40001] font-bold block mb-1">
          {workItem.category}
        </span>
        <h3 className="text-2xl font-extrabold text-[#F6F6F6] tracking-tight mb-2 font-heading">
          {workItem.title}
        </h3>
        <p className="text-xs text-[#F6F6F6]/60 font-medium mb-4">Müşteri: {workItem.client}</p>

        <div className="relative aspect-video rounded-xl overflow-hidden mb-5 border border-[#F6F6F6]/10">
          <img src={workItem.image} alt={workItem.title} className="w-full h-full object-cover" />
          <div className="absolute bottom-3 right-3 bg-[#262626]/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-[#F6F6F6]/10 text-xs font-medium text-[#A40001] font-bold">
            {workItem.resultMetric} {workItem.resultLabel}
          </div>
        </div>

        <p className="text-xs sm:text-sm text-[#F6F6F6]/80 leading-relaxed font-normal mb-5">
          {workItem.description}
        </p>

        <div className="flex flex-wrap items-center gap-2 mb-6">
          {workItem.tags.map((tag) => (
            <span key={tag} className="px-2.5 py-1 rounded-md bg-[#F6F6F6]/5 border border-[#F6F6F6]/10 text-xs text-[#F6F6F6]/70 font-medium">
              #{tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#F6F6F6]/10">
          <button
            onClick={() => {
              onClose();
              onOpenBrief();
            }}
            className="px-5 py-2.5 rounded-xl bg-[#A40001] text-[#F6F6F6] text-xs font-bold font-medium hover:bg-[#A40001] transition-all flex items-center gap-1.5"
          >
            <span>Benzer Proje Başlat</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
