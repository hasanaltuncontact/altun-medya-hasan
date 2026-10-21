import type { CSSProperties } from 'react';

/* ------------------------------------------------------------------
 * Renk yardımcıları — firmanın accent rengini sitenin koyu/krem
 * paletiyle harmanlayıp her markaya özel bir zemin üretir.
 * ------------------------------------------------------------------ */
function hexToRgb(hex: string): [number, number, number] {
  const h = hex.replace('#', '');
  const full = h.length === 3 ? h.split('').map((c) => c + c).join('') : h;
  const n = parseInt(full, 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

/** a rengini b rengine `t` oranında karıştırır (0 = a, 1 = b) */
export function mixHex(a: string, b: string, t: number): string {
  const [r1, g1, b1] = hexToRgb(a);
  const [r2, g2, b2] = hexToRgb(b);
  const m = (x: number, y: number) => Math.round(x + (y - x) * t).toString(16).padStart(2, '0');
  return `#${m(r1, r2)}${m(g1, g2)}${m(b1, b2)}`;
}

/** Firma accent renginden oluşturulan avatar zemini */
export function brandSurface(accent: string): string {
  const light = mixHex(accent, '#FFFFFF', 0.18);
  const deep = mixHex(accent, '#262626', 0.55);
  const night = mixHex(accent, '#262626', 0.82);
  return `radial-gradient(circle at 28% 22%, ${light} 0%, ${accent} 32%, ${deep} 70%, ${night} 100%)`;
}

interface BrandAvatarProps {
  accent: string;
  logoSrc?: string;
  name: string;
  /** Tailwind boyut sınıfları, örn. "w-24 h-24" */
  className?: string;
  /** Logo yüzdesel genişliği (çember içinde) */
  logoScale?: number;
  /** Dış halka (sitenin turuncusu ile marka rengi arasında dönen) */
  ring?: boolean;
  priority?: boolean;
}

/**
 * Firma profil yuvarlağı: marka renginde zemin + üstünde beyaz logo.
 * Kapak fotoğrafı KULLANILMAZ — logo her zaman çemberin içinde durur.
 */
export default function BrandAvatar({
  accent,
  logoSrc,
  name,
  className = 'w-24 h-24',
  logoScale = 64,
  ring = false,
  priority = false,
}: BrandAvatarProps) {
  const surface: CSSProperties = { background: brandSurface(accent) };

  const core = (
    <span
      className="relative block w-full h-full rounded-full overflow-hidden shadow-[inset_0_2px_14px_rgba(255,255,255,0.25),inset_0_-12px_30px_rgba(0,0,0,0.35)]"
      style={surface}
    >
      {/* İnce doku + parlama */}
      <span
        aria-hidden
        className="absolute inset-0 opacity-30 mix-blend-overlay"
        style={{
          backgroundImage:
            'repeating-linear-gradient(135deg, rgba(255,255,255,0.12) 0 1px, transparent 1px 7px)',
        }}
      />
      <span aria-hidden className="absolute -top-1/3 -left-1/4 w-3/4 h-3/4 rounded-full bg-[#F6F6F6]/20 blur-2xl" />
      {logoSrc ? (
        <img
          src={logoSrc}
          alt={`${name} logosu`}
          loading={priority ? 'eager' : 'lazy'}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-contain brightness-0 invert drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)]"
          style={{ width: `${logoScale}%`, height: `${logoScale}%` }}
        />
      ) : (
        <span className="absolute inset-0 flex items-center justify-center text-[#F6F6F6] font-black font-heading text-[40%]">
          {name[0]}
        </span>
      )}
    </span>
  );

  if (!ring) {
    return <span className={`relative inline-block shrink-0 rounded-full ${className}`}>{core}</span>;
  }

  return (
    <span className={`relative inline-block shrink-0 rounded-full ${className}`}>
      <span
        aria-hidden
        className="absolute -inset-[6px] rounded-full animate-[spin_9s_linear_infinite]"
        style={{ background: `conic-gradient(from 0deg, ${accent}, #A40001, transparent 55%, ${accent})` }}
      />
      <span className="absolute -inset-[2px] rounded-full bg-[#262626]" />
      <span className="absolute inset-[4px]">{core}</span>
    </span>
  );
}
