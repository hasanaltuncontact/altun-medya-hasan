import React from 'react';

interface SectionHeadingProps {
  title: string;
  /** Tek satırlık, bölümün ne olduğunu söyleyen açıklama */
  desc?: string;
  /** Sağ tarafta düğme / ok gibi ek öğe */
  action?: React.ReactNode;
  className?: string;
}

/**
 * Tüm ana sayfa bölümleri için tek tip başlık: kısa, net, aynı boyut.
 */
export default function SectionHeading({ title, desc, action, className = '' }: SectionHeadingProps) {
  return (
    <div className={`flex items-end justify-between gap-4 mb-6 md:mb-10 ${className}`}>
      <div>
        <h2 className="text-[28px] sm:text-4xl lg:text-5xl font-black font-heading tracking-[-0.03em] leading-[1.05]">
          {title}
        </h2>
        {desc && <p className="mt-2 sm:mt-3 text-sm sm:text-base opacity-60 max-w-xl leading-relaxed">{desc}</p>}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
