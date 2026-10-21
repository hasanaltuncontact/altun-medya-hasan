'use client';

import { X, Play } from 'lucide-react';
import { ReelItem } from '@/data/reels';

interface ReelsPlayerModalProps {
  reelItem: ReelItem | null;
  onClose: () => void;
}

export default function ReelsPlayerModal({ reelItem, onClose }: ReelsPlayerModalProps) {
  if (!reelItem) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#262626]/95 backdrop-blur-3xl animate-fadeIn">
      <div className="bg-[#262626] border border-[#F6F6F6]/15 rounded-2xl sm:rounded-3xl p-5 sm:p-6 max-w-sm w-full relative shadow-2xl overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#F6F6F6]/60 hover:text-[#F6F6F6] p-1.5 rounded-full bg-[#F6F6F6]/5 hover:bg-[#F6F6F6]/10 transition-all z-20"
          aria-label="Kapat"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-3">
          <span className="text-xs font-medium text-[#A40001] font-bold block">
            {reelItem.views}
          </span>
          <h3 className="text-base font-bold text-[#F6F6F6] tracking-tight leading-snug font-heading">
            {reelItem.title}
          </h3>
        </div>

        <div className="relative aspect-[9/16] rounded-xl overflow-hidden mb-4 border border-[#F6F6F6]/10 bg-[#262626] group">
          <img src={reelItem.posterImage} alt={reelItem.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#262626]/40 flex items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-[#A40001] text-[#F6F6F6] flex items-center justify-center shadow-[0_0_30px_rgba(179,58,6,0.7)] animate-pulse">
              <Play className="w-6 h-6 fill-current ml-1" />
            </div>
          </div>
        </div>

        <p className="text-xs text-[#F6F6F6]/90 font-medium leading-relaxed bg-[#262626]/60 p-3 rounded-xl border border-[#F6F6F6]/10">
          {reelItem.description}
        </p>
      </div>
    </div>
  );
}
