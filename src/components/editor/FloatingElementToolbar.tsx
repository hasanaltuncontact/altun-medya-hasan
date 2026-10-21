'use client';

import React from 'react';
import { Pencil, Copy, ArrowUp, ArrowDown, Trash2, MoreVertical, Layers } from 'lucide-react';
import { useEditor } from './EditorContext';

export default function FloatingElementToolbar({ 
  position, 
  onOpenSettings 
}: { 
  position: { top: number; left: number };
  onOpenSettings: () => void;
}) {
  const { 
    selectedElementId, pageSchema, 
    duplicateElement, moveElement, deleteElement 
  } = useEditor();

  if (!selectedElementId) return null;

  // Find element
  let selectedEl: any = null;
  for (const sec of pageSchema.sections) {
    const found = sec.elements.find((el) => el.id === selectedElementId);
    if (found) {
      selectedEl = found;
      break;
    }
  }

  if (!selectedEl) return null;

  return (
    <div
      style={{ top: Math.max(10, position.top - 48), left: position.left }}
      className="fixed z-50 transform -translate-x-1/2 bg-[#262626]/95 backdrop-blur-2xl border border-[#A40001]/40 shadow-[0_0_25px_rgba(179,58,6,0.25)] rounded-xl px-2 py-1 flex items-center gap-1.5 text-white selection:bg-[#A40001] selection:text-white animate-in fade-in zoom-in-95 duration-150"
    >
      <span className="text-[10px] font-mono font-extrabold uppercase tracking-wider text-[#A40001] px-1 border-r border-white/10">
        {selectedEl.type}
      </span>

      <button
        onClick={onOpenSettings}
        className="px-2 py-1 rounded-lg bg-[#A40001] text-white font-extrabold text-xs flex items-center gap-1 hover:bg-[#A40001] transition-all shadow-sm"
        title="Element Ayarlarını Aç"
      >
        <Pencil className="w-3.5 h-3.5" />
        <span>Düzenle</span>
      </button>

      <button
        onClick={() => duplicateElement(selectedElementId)}
        className="p-1.5 rounded-lg hover:bg-white/10 text-white/80 hover:text-white transition-all text-xs"
        title="Elementi Kopyala / Çoğalt"
      >
        <Copy className="w-3.5 h-3.5" />
      </button>

      <button
        onClick={() => moveElement(selectedElementId, 'up')}
        className="p-1.5 rounded-lg hover:bg-white/10 text-white/80 hover:text-white transition-all text-xs"
        title="Yukarı Taşı"
      >
        <ArrowUp className="w-3.5 h-3.5" />
      </button>

      <button
        onClick={() => moveElement(selectedElementId, 'down')}
        className="p-1.5 rounded-lg hover:bg-white/10 text-white/80 hover:text-white transition-all text-xs"
        title="Aşağı Taşı"
      >
        <ArrowDown className="w-3.5 h-3.5" />
      </button>

      <button
        onClick={() => deleteElement(selectedElementId)}
        className="p-1.5 rounded-lg hover:bg-red-500/20 text-red-400 hover:text-red-300 transition-all text-xs"
        title="Elementi Sil"
      >
        <Trash2 className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
