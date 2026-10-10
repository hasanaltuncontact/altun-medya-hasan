'use client';

import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement | null;
      if (target && (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-pointer')
      )) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      id="custom-cursor"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
      className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center text-[9px] font-extrabold uppercase tracking-wider transition-all duration-150 ${
        isHovered
          ? 'w-10 h-10 bg-[#C8FF00] border-[#C8FF00] text-black scale-110 shadow-[0_0_20px_rgba(200,255,0,0.6)]'
          : 'bg-white/90 border-white/20 text-black'
      }`}
    >
      {isHovered && <span className="text-[10px] font-mono font-bold">+</span>}
    </div>
  );
}
