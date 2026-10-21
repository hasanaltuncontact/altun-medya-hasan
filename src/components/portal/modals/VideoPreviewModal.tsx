'use client';

import React, { useState } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Download, Check, RotateCcw, Send } from 'lucide-react';
import { usePortal } from '../PortalContext';

export default function VideoPreviewModal() {
  const { videoPreviewMedia, setVideoPreviewMedia, approveMediaItem, setActiveApprovalTarget, setIsRevisionModalOpen } = usePortal();
  const [isPlaying, setIsPlaying] = useState(true);

  if (!videoPreviewMedia) return null;

  const videoUrl = 'downloadUrl' in videoPreviewMedia ? videoPreviewMedia.downloadUrl : (videoPreviewMedia as any).mediaUrl;
  const title = videoPreviewMedia.title;

  const handleApprove = () => {
    approveMediaItem(videoPreviewMedia.id);
    setVideoPreviewMedia(null);
  };

  const handleOpenRevision = () => {
    setVideoPreviewMedia(null);
    if ('comments' in videoPreviewMedia) {
      setActiveApprovalTarget(videoPreviewMedia as any);
      setIsRevisionModalOpen(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-5 animate-fadeIn font-mono text-xs select-none">
      <div className="w-full max-w-5xl h-[85vh] rounded-3xl bg-[#262626] border border-white/15 shadow-2xl flex flex-col lg:flex-row overflow-hidden relative">
        
        <button
          onClick={() => setVideoPreviewMedia(null)}
          className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/60 text-white/60 hover:text-white border border-white/10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* LEFT: 4K VIDEO PLAYER */}
        <div className="flex-1 bg-black flex flex-col justify-between relative overflow-hidden">
          <video
            src={videoUrl}
            autoPlay
            controls
            playsInline
            className="w-full h-full object-contain"
          />

          <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-[10px] text-[#A40001] font-bold border border-white/10">
            4K ULTRA HD PREVIEW
          </div>
        </div>

        {/* RIGHT: SIDEBAR CONTROLS & COMMENTS */}
        <div className="w-full lg:w-80 p-6 bg-[#262626] border-t lg:border-t-0 lg:border-l border-white/10 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div>
              <div className="text-[10px] text-[#A40001] font-bold uppercase tracking-wider">MEDYA ONAY PORTALI</div>
              <h2 className="text-base font-bold text-white font-heading mt-1 leading-snug">{title}</h2>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2 text-[11px] text-white/70">
              <div className="text-white font-bold">Stüdyo Bilgisi:</div>
              <p className="font-sans leading-relaxed">
                Kurgusu ve renk optimizasyonu tamamlanan videoyu buradan saniye bazlı inceleyebilirsiniz.
              </p>
            </div>
          </div>

          <div className="space-y-2 pt-4 border-t border-white/10">
            {'comments' in videoPreviewMedia && (
              <button
                onClick={handleOpenRevision}
                className="w-full py-3 rounded-xl bg-white/10 hover:bg-amber-500/20 text-amber-400 border border-amber-500/30 font-bold flex items-center justify-center gap-2"
              >
                <RotateCcw className="w-4 h-4" />
                <span>[ ↻ Revizyon İste ]</span>
              </button>
            )}

            <button
              onClick={handleApprove}
              className="w-full py-3 rounded-xl bg-[#A40001] text-white font-extrabold flex items-center justify-center gap-2 hover:bg-[#A40001]"
            >
              <Check className="w-4 h-4" />
              <span>[ ✓ Videoyu Onayla ]</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
