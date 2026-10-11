import React from 'react';

interface BrandDuoHeadingProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'div' | 'span';
  title: string;
  className?: string;
  splitIndex?: number;
  boldFirst?: boolean;
  accentLast?: boolean;
  accentClassName?: string;
  boldClassName?: string;
  thinClassName?: string;
}

/**
 * BrandDuoHeading
 * Replicates the ALTUN (Bold) + MEDYA (Thin) logo typography harmony across titles.
 * Splits titles into bold/black and light/thin segments.
 */
export default function BrandDuoHeading({
  as: Component = 'h2',
  title,
  className = '',
  splitIndex,
  boldFirst = true,
  accentLast = false,
  accentClassName = 'text-[#FF6B35]',
  boldClassName = 'font-black tracking-tight',
  thinClassName = 'font-light tracking-normal opacity-85',
}: BrandDuoHeadingProps) {
  if (!title) return null;

  const words = title.trim().split(/\s+/);
  if (words.length <= 1) {
    return <Component className={`${className} ${boldClassName}`}>{title}</Component>;
  }

  // Determine split point
  let idx = splitIndex;
  if (idx === undefined) {
    if (words.length === 2) idx = 1;
    else if (words.length === 3) idx = 1;
    else if (words.length === 4) idx = 2;
    else idx = Math.min(3, Math.ceil(words.length / 2));
  }

  const part1 = words.slice(0, idx).join(' ');
  const remainingWords = words.slice(idx);

  // If accentLast is true, give the last word accent color + bold
  let part2 = remainingWords.join(' ');
  let lastWord = '';
  if (accentLast && remainingWords.length > 0) {
    lastWord = remainingWords[remainingWords.length - 1];
    part2 = remainingWords.slice(0, -1).join(' ');
  }

  return (
    <Component className={className}>
      <span className={boldFirst ? boldClassName : thinClassName}>{part1}</span>{' '}
      {part2 && <span className={boldFirst ? thinClassName : boldClassName}>{part2}</span>}
      {lastWord && (
        <>
          {' '}
          <span className={`${boldClassName} ${accentClassName}`}>{lastWord}</span>
        </>
      )}
    </Component>
  );
}
