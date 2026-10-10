import { CheckCircle2 } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-5 sm:px-10 lg:px-14 bg-[#050505] text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight font-heading">
            GÖRSEL PRESTİJ VE<br />
            <span className="text-[#C8FF00]">360° MEDYA DİSİPLİNİ.</span>
          </h2>
          <p className="text-sm sm:text-base text-white/70 leading-relaxed font-normal">
            ALTUN MEDYA, klasik ajans kalıplarının ötesinde; markaların fikir, görsel kimlik, 4K prodüksiyon ve dijital pazarlama ihtiyaçlarını tek çatı altında çözen kreatif bir medya stüdyosudur.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-xs font-mono text-white/80">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#C8FF00] flex-shrink-0" />
              <span>4K Sinematik &amp; Drone Çekimleri</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#C8FF00] flex-shrink-0" />
              <span>High-Retention 9:16 Reels Kurgusu</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#C8FF00] flex-shrink-0" />
              <span>Next.js Web &amp; E-Ticaret Sistemleri</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#C8FF00] flex-shrink-0" />
              <span>ROAS Odaklı Meta &amp; Google Ads</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/15 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
              alt="ALTUN MEDYA Studio"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/80 backdrop-blur-md border border-white/10 text-xs font-mono text-[#C8FF00]">
              ALTUN MEDYA • Didim, Aydın &amp; Bodrum Merkezli Yayıncılık Stüdyosu
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
