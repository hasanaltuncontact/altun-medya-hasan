'use client';

import React, { useState } from 'react';
import { X, Sparkles, Plus, Calendar, ArrowRight } from 'lucide-react';
import { usePortal } from '../PortalContext';

export default function NewProjectModal() {
  const { isNewProjectModalOpen, setIsNewProjectModalOpen, createNewProjectRequest } = usePortal();

  const [serviceCategory, setServiceCategory] = useState('Sosyal Medya Yönetimi');
  const [projectTitle, setProjectTitle] = useState('');
  const [projectDesc, setProjectDesc] = useState('');
  const [dueDate, setDueDate] = useState('2026-11-15');

  if (!isNewProjectModalOpen) return null;

  const categories = [
    'Sosyal Medya Yönetimi',
    'Reels / 4K Video Prodüksiyon',
    'Fotoğraf Çekimi & Stüdyo',
    'Meta & Google Ads Reklam Kampanyası',
    'Web Tasarım & Next.js Yazılım',
    'Grafik Tasarım & Kurumsal Kimlik',
    'Diğer Özel Proje',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!projectTitle.trim()) return;
    createNewProjectRequest(projectTitle, serviceCategory, projectDesc, dueDate);
    setIsNewProjectModalOpen(false);
    setProjectTitle('');
    setProjectDesc('');
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xl flex items-center justify-center p-5 animate-fadeIn select-none">
      <div className="w-full max-w-xl p-8 rounded-3xl bg-[#262626] border border-white/15 shadow-2xl space-y-6 relative font-mono">
        
        <button
          onClick={() => setIsNewProjectModalOpen(false)}
          className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[#A40001]/10 border border-[#A40001]/30 text-[10px] text-[#A40001] font-bold">
            <Sparkles className="w-3 h-3" />
            <span>YENİ PROJE TALEBİ</span>
          </div>
          <h2 className="text-2xl font-extrabold text-white font-heading">Ne Yapmak İstiyorsunuz?</h2>
          <p className="text-xs text-white/60 font-sans">
            Markanız için yeni bir prodüksiyon, yazılım veya pazarlama projesi başlatın.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div>
            <label className="block text-white/70 font-semibold mb-2">Hizmet Kategorisi Seçin</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setServiceCategory(cat)}
                  className={`p-2.5 rounded-xl border text-left font-mono text-[11px] transition-all ${
                    serviceCategory === cat
                      ? 'bg-[#A40001] text-white font-extrabold border-[#A40001]'
                      : 'bg-white/5 text-white/70 border-white/10 hover:border-white/30'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-white/70 font-semibold mb-1">Proje Adı / Konusu</label>
            <input
              type="text"
              required
              value={projectTitle}
              onChange={(e) => setProjectTitle(e.target.value)}
              placeholder="Örn: 2027 Kış Sezonu Dikey Reels Lansmanı"
              className="w-full px-4 py-3 text-xs rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-[#A40001] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-white/70 font-semibold mb-1">Proje Açıklaması &amp; Detaylar</label>
            <textarea
              rows={3}
              value={projectDesc}
              onChange={(e) => setProjectDesc(e.target.value)}
              placeholder="İstediğiniz detayları, kurgu tarzını veya beklentilerinizi yazın..."
              className="w-full p-4 text-xs rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-[#A40001] focus:outline-none font-sans"
            />
          </div>

          <div>
            <label className="block text-white/70 font-semibold mb-1">Hedef Teslim Tarihi</label>
            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className="w-full px-4 py-2.5 text-xs rounded-xl bg-white/5 border border-white/10 text-white focus:border-[#A40001] focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 text-xs font-extrabold uppercase tracking-wider bg-[#A40001] text-white rounded-xl hover:bg-[#A40001] transition-all flex items-center justify-center gap-2 shadow-xl active:scale-95"
          >
            <span>PROJE TALEBİ OLUŞTUR</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

      </div>
    </div>
  );
}
