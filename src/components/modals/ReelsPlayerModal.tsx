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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-3xl animate-fadeIn">
      <div className="bg-[#0A0A0A] border border-white/15 rounded-2xl sm:rounded-3xl p-5 sm:p-6 max-w-sm w-full relative shadow-2xl overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/60 hover:text-white p-1.5 rounded-full bg-white/5 hover:bg-white/10 transition-all z-20"
          aria-label="Kapat"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-3">
          <span className="text-[10px] font-mono text-[#C8FF00] uppercase tracking-widest font-bold block">
            {reelItem.views}
          </span>
          <h3 className="text-base font-bold text-white tracking-tight leading-snug font-heading">
            {reelItem.title}
          </h3>
        </div>

        <div className="relative aspect-[9/16] rounded-xl overflow-hidden mb-4 border border-white/10 bg-black group">
          <img src={reelItem.posterImage} alt={reelItem.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 flex items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-[#C8FF00] text-black flex items-center justify-center shadow-[0_0_30px_rgba(200,255,0,0.7)] animate-pulse">
              <Play className="w-6 h-6 fill-current ml-1" />
            </div>
          </div>
        </div>

        <p className="text-xs text-white/90 font-mono leading-relaxed bg-black/60 p-3 rounded-xl border border-white/10">
          {reelItem.description}
        </p>
      </div>
    </div>
  );
}
