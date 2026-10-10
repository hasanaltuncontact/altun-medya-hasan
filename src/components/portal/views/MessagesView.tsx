'use client';

import React, { useState } from 'react';
import { Send, MessageSquare, Paperclip, User, Sparkles } from 'lucide-react';
import { usePortal } from '../PortalContext';

export default function MessagesView() {
  const { chatMessages, sendChatMessage, projects } = usePortal();
  const [inputText, setInputText] = useState('');
  const [selectedProjectId, setSelectedProjectId] = useState<string>('all');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    sendChatMessage(inputText, selectedProjectId === 'all' ? undefined : selectedProjectId);
    setInputText('');
  };

  return (
    <div className="space-y-6 animate-fadeIn font-mono text-xs max-w-4xl mx-auto">
      
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-white font-heading">
            Stüdyo Canlı İletişim &amp; Mesajlar
          </h1>
          <p className="text-xs text-white/60">
            Altun Medya Kreatif Direktörü Hasan Altun ve prodüksiyon ekibinizle doğrudan iletişim kurun.
          </p>
        </div>

        {/* PROJECT SELECTOR */}
        <select
          value={selectedProjectId}
          onChange={(e) => setSelectedProjectId(e.target.value)}
          className="px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs font-mono focus:border-[#C8FF00] focus:outline-none"
        >
          <option value="all" className="bg-[#0D0D0D]">Tüm Projeler İçin</option>
          {projects.map((p) => (
            <option key={p.id} value={p.id} className="bg-[#0D0D0D]">{p.title}</option>
          ))}
        </select>
      </div>

      {/* CHAT MESSAGES BOX */}
      <div className="p-6 rounded-3xl bg-[#0D0D0D] border border-white/10 min-h-[420px] flex flex-col justify-between space-y-4">
        
        {/* MESSAGES LIST */}
        <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
          {chatMessages.map((msg) => (
            <div
              key={msg.id}
              className={`flex items-start gap-3 ${msg.isAgency ? 'justify-start' : 'justify-end'}`}
            >
              {msg.isAgency && (
                <img src={msg.senderAvatar} className="w-9 h-9 rounded-xl object-cover border border-[#C8FF00] shrink-0" />
              )}

              <div
                className={`max-w-md p-4 rounded-2xl space-y-1 ${
                  msg.isAgency
                    ? 'bg-white/10 text-white border border-white/10 rounded-tl-none'
                    : 'bg-[#C8FF00] text-black font-semibold rounded-tr-none shadow-[0_0_15px_rgba(200,255,0,0.25)] font-sans'
                }`}
              >
                <div className={`flex items-center justify-between text-[10px] font-mono mb-1 ${msg.isAgency ? 'text-[#C8FF00]' : 'text-black/60 font-bold'}`}>
                  <span>{msg.senderName}</span>
                  <span>{msg.timestamp}</span>
                </div>
                <p className="text-xs leading-relaxed">{msg.message}</p>
              </div>

              {!msg.isAgency && (
                <img src={msg.senderAvatar} className="w-9 h-9 rounded-xl object-cover border border-white/20 shrink-0" />
              )}
            </div>
          ))}
        </div>

        {/* INPUT BOX */}
        <form onSubmit={handleSend} className="pt-3 border-t border-white/10 flex items-center gap-3">
          <input
            type="text"
            required
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Mesajınızı veya revizyon notunuzu buraya yazın..."
            className="flex-1 px-4 py-3 text-xs rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:border-[#C8FF00] focus:outline-none font-sans"
          />

          <button
            type="submit"
            className="px-6 py-3 rounded-xl bg-[#C8FF00] text-black font-extrabold font-mono text-xs hover:bg-[#D4FF28] transition-colors flex items-center gap-2"
          >
            <Send className="w-4 h-4" />
            <span>[ Gönder ]</span>
          </button>
        </form>

      </div>

    </div>
  );
}
