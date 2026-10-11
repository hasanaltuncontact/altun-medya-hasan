'use client';

import React from 'react';
import { Pencil, Copy, ArrowUp, ArrowDown, Trash2, Lock, EyeOff } from 'lucide-react';
import { useEditor } from './EditorContext';

export default function RightContextMenu({ 
  position, 
  onClose,
  onOpenSettings 
}: { 
  position: { x: number; y: number } | null;
  onClose: () => void;
  onOpenSettings: () => void;
}) {
  const { 
    selectedElementId, duplicateElement, 
    moveElement, deleteElement 
  } = useEditor();

  if (!position || !selectedElementId) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 z-50 bg-transparent" onClick={onClose} onContextMenu={(e) => { e.preventDefault(); onClose(); }} />

      {/* Menu Box */}
      <div
        style={{ top: position.y, left: position.x }}
        className="fixed z-50 w-48 bg-[#090909]/95 backdrop-blur-2xl border border-white/15 shadow-2xl rounded-2xl p-1.5 text-xs text-white selection:bg-[#B33A06] selection:text-white font-sans animate-in fade-in zoom-in-95 duration-150"
      >
        <button
          onClick={() => { onOpenSettings(); onClose(); }}
          className="w-full px-3 py-2 rounded-xl hover:bg-[#B33A06] hover:text-white transition-all flex items-center gap-2 font-bold"
        >
          <Pencil className="w-3.5 h-3.5" />
          <span>Elementi Düzenle</span>
        </button>

        <button
          onClick={() => { duplicateElement(selectedElementId); onClose(); }}
          className="w-full px-3 py-2 rounded-xl hover:bg-white/10 transition-all flex items-center gap-2"
        >
          <Copy className="w-3.5 h-3.5" />
          <span>Kopyala / Çoğalt</span>
        </button>

        <button
          onClick={() => { moveElement(selectedElementId, 'up'); onClose(); }}
          className="w-full px-3 py-2 rounded-xl hover:bg-white/10 transition-all flex items-center gap-2"
        >
          <ArrowUp className="w-3.5 h-3.5" />
          <span>Yukarı Taşı</span>
        </button>

        <button
          onClick={() => { moveElement(selectedElementId, 'down'); onClose(); }}
          className="w-full px-3 py-2 rounded-xl hover:bg-white/10 transition-all flex items-center gap-2"
        >
          <ArrowDown className="w-3.5 h-3.5" />
          <span>Aşağı Taşı</span>
        </button>

        <div className="my-1 border-t border-white/10" />

        <button
          onClick={() => { deleteElement(selectedElementId); onClose(); }}
          className="w-full px-3 py-2 rounded-xl hover:bg-red-500/20 text-red-400 hover:text-red-300 transition-all flex items-center gap-2"
        >
          <Trash2 className="w-3.5 h-3.5" />
          <span>Elementi Sil</span>
        </button>
      </div>
    </>
  );
}
