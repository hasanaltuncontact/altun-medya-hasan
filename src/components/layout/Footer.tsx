import Link from 'next/link';
import { siteConfig } from '@/config/site.config';
import AltunMedyaLogo from './AltunMedyaLogo';

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
          <ul className="space-y-2 text-xs text-white/70">
            <li><Link href="/influencer" className="text-[#FF8A50] font-bold hover:underline flex items-center gap-1.5">✦ İnfluencer &amp; Creator Ağı</Link></li>
            <li><Link href="/blog" className="text-white hover:text-[#FF6B35] transition-colors font-medium">📖 Didim SEO &amp; Blog Rehberleri</Link></li>
            <li><Link href="/musteri-giris" className="text-white/80 hover:text-white transition-colors">🔑 Müşteri Medya Paneli</Link></li>
            <li><Link href="/admingiris" className="hover:text-white transition-colors">⚙️ Ajans Admin Girişi</Link></li>
            <li><a href="/#services" className="hover:text-white transition-colors">Dijital Pazarlama &amp; Sosyal Medya</a></li>
            <li><a href="/#works" className="hover:text-white transition-colors">Seçkin Marka Çalışmalarımız</a></li>
          </ul>
        </div>

        <div className="md:col-span-4 space-y-3">
          <h4 className="text-xs font-mono uppercase tracking-widest text-[#FF6B35] font-bold">İletişim &amp; Konum</h4>
          <p className="text-xs text-white/70 font-mono">{siteConfig.address}</p>
          <p className="text-xs text-white/70 font-mono">E-posta: {siteConfig.email}</p>
          <p className="text-xs text-white/70 font-mono">Telefon: {siteConfig.phone}</p>
          <div className="pt-2 flex items-center gap-4 text-xs font-mono">
            <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[#FF6B35] transition-colors">Instagram</a>
            <a href={siteConfig.social.youtube} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[#FF6B35] transition-colors">YouTube</a>
            <a href={siteConfig.social.whatsapp} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[#FF6B35] transition-colors">WhatsApp</a>
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
