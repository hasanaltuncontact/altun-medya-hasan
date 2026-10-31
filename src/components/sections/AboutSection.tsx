const pillars = ['4K çekim & drone', 'Reels kurgusu', 'Web & e-ticaret', 'Meta & Google reklam'];

export default function AboutSection() {
  return (
    <section id="about" className="py-14 md:py-24 px-5 sm:px-10 lg:px-14 bg-[#F8F0DB] text-[#0B0B0B]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <div className="lg:col-span-7 space-y-5 md:space-y-6">
          <h2 className="text-3xl sm:text-5xl tracking-tight leading-tight font-heading">
            <span className="font-black">GÖRSEL PRESTİJ</span>{' '}
            <span className="font-light opacity-75">VE</span>
            <br />
            <span className="font-black text-accent">360° MEDYA.</span>
          </h2>
          <p className="text-base opacity-75 leading-relaxed max-w-xl">
            Fikir, kimlik, prodüksiyon ve reklamı tek çatı altında çözen kreatif stüdyo.
          </p>
          <ul className="flex flex-wrap gap-2">
            {pillars.map((p) => (
              <li key={p} className="px-4 py-2 rounded-full bg-[#0B0B0B] text-[#F8F0DB] text-sm">
                {p}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-5 m-hide">
          <div className="p-2.5 rounded-[30px] bg-[#0B0B0B]">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
              alt="ALTUN MEDYA Stüdyo"
              className="w-full aspect-square object-cover rounded-[22px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
