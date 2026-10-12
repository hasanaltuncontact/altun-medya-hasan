import Link from 'next/link';
import { siteConfig } from '@/config/site.config';
import AltunMedyaLogo from './AltunMedyaLogo';

const quickLinks: { href: string; label: string; accent?: boolean }[] = [
  { href: '/influencer', label: 'İnfluencer & Creator Ağı', accent: true },
  { href: '/blog', label: 'Didim SEO & Blog Rehberleri' },
  { href: '/musteri-giris', label: 'Müşteri Medya Paneli' },
  { href: '/admingiris', label: 'Ajans Admin Girişi' },
  { href: '/#services', label: 'Dijital Pazarlama & Sosyal Medya' },
  { href: '/#works', label: 'Seçkin Marka Çalışmalarımız' },
];

type IconProps = { className?: string };

function InstagramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
      <circle cx="12" cy="12" r="4.3" />
      <circle cx="17.6" cy="6.4" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function YouTubeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function WhatsAppIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

const socialLinks = [
  { label: 'Instagram', href: siteConfig.social.instagram, Icon: InstagramIcon },
  { label: 'YouTube', href: siteConfig.social.youtube, Icon: YouTubeIcon },
  { label: 'WhatsApp', href: siteConfig.social.whatsapp, Icon: WhatsAppIcon },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#050505] text-white pt-16 pb-12 px-5 sm:px-10 lg:px-14 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
        <div className="md:col-span-5 space-y-4">
          <Link href="/" className="group inline-flex items-center select-none" aria-label="Altun Medya">
            <AltunMedyaLogo className="h-8 sm:h-10 w-auto text-white group-hover:opacity-90 transition-opacity" showStar={true} />
          </Link>
          <p className="text-xs sm:text-sm text-white/60 max-w-sm leading-relaxed">
            Didim, Kuşadası, Bodrum ve tüm Ege bölgesinde markaları dijitalde harekete geçiren 360° medya, web tasarım ve prodüksiyon stüdyosu.
          </p>
        </div>

        <div className="md:col-span-3 space-y-3">
          <h4 className="text-xs font-mono uppercase tracking-widest text-[#FF6B35] font-bold">Hızlı Bağlantılar</h4>
          <ul className="space-y-2.5 text-xs text-white/65">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`group inline-flex items-center gap-1.5 transition-colors hover:text-white ${link.accent ? 'text-[#FF8A50] font-semibold' : ''}`}
                >
                  <span>{link.label}</span>
                  <span className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4 space-y-3">
          <h4 className="text-xs font-mono uppercase tracking-widest text-[#FF6B35] font-bold">İletişim &amp; Konum</h4>
          <p className="text-xs text-white/70 font-mono">{siteConfig.address}</p>
          <p className="text-xs text-white/70 font-mono">E-posta: {siteConfig.email}</p>
          <p className="text-xs text-white/70 font-mono">Telefon: {siteConfig.phone}</p>
          <div className="pt-3 flex items-center gap-2.5">
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
                className="w-9 h-9 rounded-full border border-white/15 text-white/60 flex items-center justify-center transition-all duration-300 hover:text-white hover:border-[#FF6B35] hover:bg-[#FF6B35] hover:-translate-y-0.5"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-white/40 font-mono gap-3">
        <div>© {new Date().getFullYear()} ALTUN MEDYA. Tüm hakları saklıdır.</div>
        <div>Didim Sosyal Medya • Didim Web Tasarım • Didim Video Prodüksiyon</div>
      </div>
    </footer>
  );
}
