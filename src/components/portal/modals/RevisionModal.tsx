'use client';

import React, { useState } from 'react';
import { X, RotateCcw, Plus, Trash2, Clock, Send } from 'lucide-react';
import { usePortal } from '../PortalContext';
import { TimestampComment } from '@/data/portal-database';

export default function RevisionModal() {
  const { isRevisionModalOpen, setIsRevisionModalOpen, activeApprovalTarget, requestRevision } = usePortal();

  const [revisionNote, setRevisionNote] = useState('');
  const [timestampInput, setTimestampInput] = useState('');
  const [commentInput, setCommentInput] = useState('');
  const [timestampList, setTimestampList] = useState<TimestampComment[]>([]);

  if (!isRevisionModalOpen || !activeApprovalTarget) return null;

  const handleAddTimestamp = () => {
    if (!commentInput.trim()) return;
    const newComm: TimestampComment = {
      id: `tc-${Date.now()}`,
      timestamp: timestampInput || '00:00',
      comment: commentInput,
      author: 'Ahmet Yılmaz (Müşteri)',
      date: 'Bugün',
    };
    setTimestampList([...timestampList, newComm]);
    setTimestampInput('');
    setCommentInput('');
  };

  const handleRemoveTimestamp = (id: string) => {
    setTimestampList(timestampList.filter((t) => t.id !== id));
  };

  const handleSubmitRevision = (e: React.FormEvent) => {
    e.preventDefault();
    if (!revisionNote.trim() && timestampList.length === 0) return;
    requestRevision(activeApprovalTarget.id, revisionNote, timestampList);
    setIsRevisionModalOpen(false);
    setRevisionNote('');
    setTimestampList([]);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xl flex items-center justify-center p-5 animate-fadeIn font-mono text-xs select-none">
      <div className="w-full max-w-xl p-8 rounded-3xl bg-[#0E0E0E] border border-amber-500/30 shadow-2xl space-y-6 relative">
        
        <button
          onClick={() => setIsRevisionModalOpen(false)}
          className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-bold text-[10px]">
            <RotateCcw className="w-3 h-3" />
            <span>REVİZYON TALEBİ DÜZENLE</span>
          </div>
          <h2 className="text-xl font-extrabold text-white font-heading">
            {activeApprovalTarget.title}
          </h2>
          <p className="text-white/60 font-sans text-xs">
            {activeApprovalTarget.version} kurgusu için stüdyo ekibimize iletilecek revizyon ve timestamp notları.
          </p>
        </div>

        <form onSubmit={handleSubmitRevision} className="space-y-5">
          {/* REVISION NOTE TEXTAREA */}
          <div>
            <label className="block text-white/70 font-semibold mb-1">Genel Revizyon Açıklaması</label>
            <textarea
              rows={3}
              required={timestampList.length === 0}
              value={revisionNote}
              onChange={(e) => setRevisionNote(e.target.value)}
              placeholder="Örn: Videonun temposu genel olarak çok iyi, ancak belirtilen saniyelerde düzenleme istiyoruz..."
              className="w-full p-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-amber-400 focus:outline-none font-sans text-xs"
            />
          </div>

          {/* TIMESTAMP COMMENT BUILDER */}
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-3">
            <div className="flex items-center justify-between text-white/70 font-bold">
              <span>Zaman Damgalı Not Ekle (Timestamp)</span>
              <span className="text-amber-400">Örn: 00:13</span>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="text"
                value={timestampInput}
                onChange={(e) => setTimestampInput(e.target.value)}
                placeholder="00:13"
                className="w-24 px-3 py-2 text-xs rounded-xl bg-black border border-white/10 text-white font-mono text-center focus:border-amber-400 focus:outline-none"
              />
              <input
                type="text"
                value={commentInput}
                onChange={(e) => setCommentInput(e.target.value)}
                placeholder="Bu saniyedeki geçiş biraz daha yavaş olabilir..."
                className="flex-1 px-3 py-2 text-xs rounded-xl bg-black border border-white/10 text-white placeholder-white/30 focus:border-amber-400 focus:outline-none font-sans"
              />
              <button
                type="button"
                onClick={handleAddTimestamp}
                className="px-3 py-2 rounded-xl bg-amber-400 text-black font-bold text-xs hover:bg-amber-300 transition-colors"
              >
                + Ekle
              </button>
            </div>

            {/* LIST OF TIMESTAMPS */}
            {timestampList.length > 0 && (
              <div className="space-y-1.5 pt-2 border-t border-white/10">
                {timestampList.map((t) => (
                  <div key={t.id} className="flex items-center justify-between p-2 rounded-xl bg-black/60 border border-white/5 text-[11px]">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-amber-400 text-black font-bold">{t.timestamp}</span>
                      <span className="text-white/80 font-sans">{t.comment}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleRemoveTimestamp(t.id)}
                      className="text-white/40 hover:text-red-400"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3.5 text-xs font-extrabold uppercase tracking-wider bg-amber-400 text-black rounded-xl hover:bg-amber-300 transition-all flex items-center justify-center gap-2 active:scale-95"
          >
            <Send className="w-4 h-4" />
            <span>REVİZYON TALEBİNİ EKİBE İLET</span>
          </button>
        </form>

      </div>
    </div>
  );
}
