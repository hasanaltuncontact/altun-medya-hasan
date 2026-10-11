export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  categorySlug: string;
  readTime: string;
  publishedDate: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  featuredImage: string;
  keywords: string[];
  keyTakeaways: string[];
  content: string; // Full rich HTML/Markdown structure
}

export const blogCategories = [
  { name: 'Tümü', slug: 'all' },
  { name: 'Turizm & Otelcilik', slug: 'turizm' },
  { name: 'Yerel SEO & Haritalar', slug: 'yerel-seo' },
  { name: 'Video Prodüksiyon & Drone', slug: 'video-produksiyon' },
  { name: 'Gastronomi & Restoran', slug: 'gastronomi' },
  { name: 'Web Tasarım & Hız', slug: 'web-tasarim' },
];

export const blogPosts: BlogPost[] = [
  {
    id: 'didim-otel-ve-beach-club-sosyal-medya-yonetimi',
    slug: 'didim-otel-ve-beach-club-sosyal-medya-yonetimi-rehberi',
    title: 'Didim Otel & Beach Club Sosyal Medya Yönetimi ve Turizm Sezonu Stratejisi',
    excerpt: 'Didim ve Akbük sahilindeki turizm işletmeleri için sezon öncesi erken rezervasyon kurguları, 4K sinematik drone çekimleri ve yabancı turistleri hedefleyen Meta Ads reklam mimarisi.',
    category: 'Turizm & Otelcilik',
    categorySlug: 'turizm',
    readTime: '6 dk okuma',
    publishedDate: '10 Ekim 2026',
    author: {
      name: 'Hasan Altun',
      role: 'Kreatif Direktör & Büyüme Stratejisti',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop',
    },
    featuredImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop',
    keywords: ['Didim Otel Sosyal Medya', 'Didim Beach Club Reklamı', 'Didim Turizm Reklam Ajansı', 'Altınkum Otel Çekimi', 'Ege Turizm Pazarlaması'],
    keyTakeaways: [
      'Turizm sezonunun başarısı Mayıs ayında değil, Ocak-Nisan arasındaki erken rezervasyon hunisinde belirlenir.',
      'Sadece fotoğraf paylaşımı yetersizdir; 9:16 dikey formatta gün batımı, kokteyl kurgusu ve deniz atmosferi veren Reels içerikleri 8 kat daha fazla rezervasyon getirir.',
      'İngiltere, Almanya ve gurbetçi kitleye yönelik çok dilli reklam kreatifleri sezon doluluk oranını %94 seviyesine çıkarır.',
      'Google Haritalar ve Instagram profili arasında doğrudan WhatsApp Rezervasyon bağlantısı kurulmalıdır.'
    ],
    content: `
      <h2>Didim'de Sezonsal Dalgalanmayı Aşmak: 365 Gün Değer Üreten Turizm Markası</h2>
      <p>Didim, Altınkum ve Akbük hattı, Türkiye'nin en berrak koylarına ve en yüksek güneşlenme süresine sahip turizm merkezlerinden biridir. Ancak bölgedeki birçok otel, butik pansiyon ve beach club işletmesinin en büyük handikabı, pazarlamaya yalnızca Mayıs ayında başlayıp Eylül sonunda iletişimi tamamen durdurmalarıdır.</p>
      
      <p>Altun Medya olarak geliştirdiğimiz <strong>Sezon Öncesi Erken Rezervasyon Hunisi (Pre-Season Funnel)</strong> ile işletmelerimizin kış ve ilkbahar aylarında bile rezervasyon depolamasını sağlıyoruz. Peki Didim'de bir turizm işletmesi sosyal medyada nasıl fark yaratır?</p>

      <h3>1. Atmosfer Satan 4K Sinematik Reels Prodüksiyonu</h3>
      <p>Müşteriler sadece bir otel odası veya şezlong kiralamaz; huzur, prestij, eğlence ve tatil anısı satın alır. Statik fotoğraf paylaşımları artık Instagram ve TikTok algoritmalarında geri planda kalmaktadır. Altun Medya ekibi olarak Sony FX6 sinema kameraları ve DJI Inspire 3 lisanslı drone filomuzla Didim kıyılarında şu kurguları üretiyoruz:</p>
      <ul>
        <li><strong>Golden Hour Kurguları:</strong> Gün batımında Altınkum veya Cennet Koyu fonunda hazırlanan imza kokteyller ve sahil ambiyansı.</li>
        <li><strong>Mekan Deneyimi (POV):</strong> Misafirin otele giriş anından havuz başına, özel süit balkonundan sabah kahvaltısına kadar uzanan birinci şahıs perspektifli video turları.</li>
        <li><strong>Ses ve Ritim Uyumu:</strong> Trend seslerle senkronize edilmiş, izleyicide hemen o anda orada olma arzusu uyandıran sinematik renk derecelendirmesi (Color Grading).</li>
      </ul>

      <h3>2. Meta Ads ile Yabancı ve Yerli Turist Ayrıştırması</h3>
      <p>Didim pazarında iki ana müşteri grubu bulunmaktadır: İngiltere ve Avrupa kaynaklı yabancı turistler ile İzmir, Ankara ve İstanbul kaynaklı yerli tatilciler. Bu iki kitlenin beklentileri ve rezervasyon alışkanlıkları tamamen farklıdır.</p>
      <p>İngiliz turistler genellikle kış aylarında uçuş ve tatil paketlerini araştırırken, yerli turistler bayram tatilleri, hafta sonu kaçamakları ve yıllık izin dönemlerine odaklanır. Bu nedenle reklam kampanyalarını coğrafi konuma, dil seçeneğine ve bütçe aralığına göre segmentlere ayırarak yayınlıyoruz.</p>

      <h3>3. Doğrulanmış Influencer Davetleri ve Sezon Açılışı</h3>
      <p>Sezon başında Ege ve Türkiye genelinde saygın seyahat ve lifestyle içerik üreticilerini ağırlamak, işletmenizin dijitalde kartopu etkisi yaratmasını sağlar. Doğru planlanmış bir influencer etkinliği, organik olarak milyonlarca görüntülenme ve binlerce yeni profil ziyareti kazandırır.</p>
    `,
  },
  {
    id: 'didim-villa-ve-gayrimenkul-cekimi-drone-video-produksiyonu',
    slug: 'didim-villa-ve-gayrimenkul-cekimi-drone-video-produksiyonu',
    title: 'Didim Villa ve Gayrimenkul Çekimlerinde Drone ile Satış Dönüşümü',
    excerpt: 'Lüks konut ve arsa projelerinde 8K hava çekimleri, iç mekan mimari stabilizasyonu ve yabancı alıcıları cezbeden çok dilli video prodüksiyon standartları.',
    category: 'Video Prodüksiyon & Drone',
    categorySlug: 'video-produksiyon',
    readTime: '5 dk okuma',
    publishedDate: '08 Ekim 2026',
    author: {
      name: 'Hasan Altun',
      role: 'Kreatif Direktör & Büyüme Stratejisti',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop',
    },
    featuredImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop',
    keywords: ['Didim Villa Çekimi', 'Didim Drone Çekimi', 'Didim Gayrimenkul Fotoğrafçısı', 'Akbük Lüks Konut Tanıtımı', 'Didim Emlak Video Prodüksiyon'],
    keyTakeaways: [
      'Kaliteli video prodüksiyonu yapılan villalar, sadece fotoğrafla listelenen ilanlara göre %68 daha hızlı satılmaktadır.',
      'Sivil Havacılık onaylı lisanslı pilotlarla yapılan 8K drone çekimleri, projenin denize ve marinaya olan gerçek mesafesini güvenle sunar.',
      'İç mekan çekimlerinde geniş açı lens yerine sinema prime lensleri kullanılarak odaların doğal derinliği korunmalı, sahte perspektiften kaçınılmalıdır.',
      'İngilizce ve Almanca altyazılı 9:16 dikey sunumlar, yurt dışı yatırımcıları doğrudan WhatsApp hattına çeker.'
    ],
    content: `
      <h2>Didim Gayrimenkul Pazarında Görsel Prestij Neden Satışın %80'idir?</h2>
      <p>Didim, Akbük ve çevresi son yıllarda lüks villa projeleri ve yabancı yatırımcı ilgisiyle Ege'nin en dinamik gayrimenkul merkezlerinden biri haline geldi. Ancak 10 milyon TL ile 40 milyon TL arasında değişen lüks bir villayı akıllı telefon fotoğraflarıyla satmaya çalışmak, hem portföyün değerini düşürmekte hem de alıcı güvenini zedelemektedir.</p>

      <p>Yurt dışındaki veya metropollerdeki bir alıcı, Didim'e gelmeden önce villanın mimarisini, çevresel konumunu ve malzeme kalitesini tüm detaylarıyla hissetmek ister. İşte tam bu noktada Altun Medya'nın mimari prodüksiyon standartları devreye girer.</p>

      <h3>1. Lisanslı Drone ile Çevre ve Manzara Haritalaması</h3>
      <p>Alıcılar sadece binayı değil, arsanın konumunu da satın alır. Akbük Koyu'na, Altınkum sahiline veya Didim D-Marin'e olan kuş uçuşu mesafe, drone çekimleriyle net şekilde belgelenir. Altun Medya SHGM lisanslı pilotları, günün en doğru ışık saatlerinde (mavi saatler ve altın saatler) hava çekimlerini tamamlar.</p>

      <h3>2. İç Mekanda Gimbal Stabilizasyonu ve Akıcı Tur Kurgusu</h3>
      <p>İç mimari çekimlerimizde DJI Ronin RS3 Pro gimbal sistemleri ve Zeiss CP.3 sinema lensleri kullanarak kesintisiz, akıcı bir yürüyüş deneyimi sunuyoruz. Kapı girişinden akıllı ev sistemine, ebeveyn banyosundan özel havuza kadar her detay yüksek renk derinliğiyle kaydedilir.</p>

      <h3>3. Global Alıcılara Yönelik Çok Dilli Reklam Kurgusu</h3>
      <p>Video materyallerini sadece YouTube için değil; Instagram Reels, TikTok ve YouTube Shorts için 9:16 dikey formatta optimize ediyoruz. Videonun alt kısmına eklenen profesyonel İngilizce ve Almanca metinler, Avrupa'daki potansiyel yatırımcıların anında mesaj atmasını sağlar.</p>
    `,
  },
  {
    id: 'google-haritalar-didim-yerel-seo-siralama-optimizasyonu',
    slug: 'google-haritalar-didim-yerel-seo-siralama-optimizasyonu',
    title: 'Google Haritalar Didim ve Akbük Yerel SEO İlk Sıra Rehberi',
    excerpt: 'Didim’de hizmet veren restoranlar, klinikler, teknik servisler ve emlak firmaları için Google Harita kayıtlarında ilk 3’e (Local 3-Pack) girme ve telefon trafiğini artırma formülü.',
    category: 'Yerel SEO & Haritalar',
    categorySlug: 'yerel-seo',
    readTime: '7 dk okuma',
    publishedDate: '05 Ekim 2026',
    author: {
      name: 'Hasan Altun',
      role: 'Kreatif Direktör & Büyüme Stratejisti',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop',
    },
    featuredImage: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1200&auto=format&fit=crop',
    keywords: ['Google Haritalar Didim', 'Didim Yerel SEO', 'Didim Google Benim İşletmem', 'Akbük Harita Kaydı', 'Didim SEO Uzmanı'],
    keyTakeaways: [
      'Didim’e gelen yerli ve yabancı misafirlerin %87’si restoran, mekan ve hizmet aramasını doğrudan Google Haritalar üzerinden yapar.',
      'Google İşletme Profilinde (GBP) kategori optimizasyonu, doğru çalışma saatleri ve profesyonel fotoğraf galerisi ilk 3 sıraya girmenin temel kuralıdır.',
      'Yorumlara verilen anahtar kelime destekli profesyonel yanıtlar, Google algoritmasında sıralamayı doğrudan yükseltir.',
      'Web sitesi ile Google İşletme Profili arasındaki NAP (İsim, Adres, Telefon) tutarlılığı sıralama otoritesini pekiştirir.'
    ],
    content: `
      <h2>Didim'de Google Haritalar Aramalarında Neden İlk 3'te (Local 3-Pack) Olmalısınız?</h2>
      <p>Bir turist Altınkum sahilinde yürürken telefonunu çıkarıp <em>"en iyi balık restoranı"</em>, <em>"Didim oto kiralama"</em> veya <em>"Didim diş kliniği"</em> yazdığında, Google ona ilk olarak Harita 3-Pack kutusunu gösterir. Bu ilk üç işletme, arama yapan kullanıcıların %70'inden fazlasının telefon aramasını veya yol tarifini alır.</p>

      <p>Eğer işletmeniz bu ilk 3 sırada yer almıyorsa, her gün yüzlerce potansiyel müşterinizi doğrudan rakiplerinize kaptırıyorsunuz demektir. Altun Medya Yerel SEO ekibi olarak Didim işletmelerini haritada zirveye taşıyan adımları uyguluyoruz.</p>

      <h3>1. Google İşletme Profili (GBP) Eksiksiz Yapılandırması</h3>
      <p>Profilinizin %100 oranında tamamlanması şarttır. İşletme adı spam anahtar kelimelerle doldurulmamalı, ancak birincil ve ikincil kategoriler bölgenin arama alışkanlıklarına göre kusursuz seçilmelidir.</p>

      <h3>2. Bölgesel Fotoğraf ve 360° Sanal Tur Entegrasyonu</h3>
      <p>Google, düzenli olarak yüksek kaliteli mekan fotoğrafları yüklenen profilleri daha aktif ve güvenilir bulur. Altun Medya stüdyosu tarafından çekilen profesyonel iç ve dış mekan görselleri harita profilinize yüklenerek tıklanma oranı (CTR) 4 katına çıkarılır.</p>

      <h3>3. Yorum ve İtibar Yönetimi Algoritması</h3>
      <p>Müşteri yorumları sadece sosyal kanıt değildir; yorumların içinde geçen kelimeler Google algoritması tarafından dizine eklenir. Memnun müşterilerden doğal anahtar kelimeler içeren yorumlar toplama ve her yoruma profesyonel yanıt verme stratejisi uyguluyoruz.</p>
    `,
  },
  {
    id: 'didim-restoran-ve-gastronomi-viral-reels-pazarlamasi',
    slug: 'didim-restoran-ve-gastronomi-viral-reels-pazarlamasi',
    title: 'Didim Restoran ve Gastronomi İşletmeleri İçin Viral Reels ve İnfluencer Çekimleri',
    excerpt: 'Didim ve Ege gastronomi sektöründe masaları dolduran yüksek tempolu yemek kurguları, şef arkası hikaye anlatımı ve gurme influencer iş birlikleri.',
    category: 'Gastronomi & Restoran',
    categorySlug: 'gastronomi',
    readTime: '5 dk okuma',
    publishedDate: '01 Ekim 2026',
    author: {
      name: 'Hasan Altun',
      role: 'Kreatif Direktör & Büyüme Stratejisti',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop',
    },
    featuredImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop',
    keywords: ['Didim Restoran Reklamı', 'Didim Yemek Çekimi', 'Didim Gastronomi Sosyal Medya', 'Didim Menü Çekimi', 'Ege Gurme Reels'],
    keyTakeaways: [
      'Yemek videolarında ilk 1.5 saniyedeki makro doku ve ses (ASMR) izleyicinin videoda kalmasını sağlar.',
      'Sadece tabağı göstermek yerine; ateş, sos dökümü ve servis anının enerjisi iştah uyandırır.',
      'Instagram profil bio’sunda güncel dijital menü ve tek tıkla WhatsApp masa rezervasyonu bulunmalıdır.',
      'Didim ve Aydın bölgesindeki onaylı gurme influencer paylaşımları aynı gün masalarda yoğunluk yaratır.'
    ],
    content: `
      <h2>Gastronomide Görsel İştah: Bir Video Nasıl Masaları Tıkım Tıkım Doldurur?</h2>
      <p>Gastronomi sektöründe pazarlamanın tek bir kuralı vardır: İnsanın önce gözü doymalı, damağında o lezzetin beklentisi oluşmalıdır. Didim Marina'daki lüks bir balık restoranından Altınkum'daki ocakbaşına kadar tüm lezzet duraklarında doğru video kurgusu satış patlaması yaratır.</p>

      <h3>1. Makro Çekimler ve Yüksek Kare (Slow-Motion) Lezzet Detayları</h3>
      <p>Eti keserken çıkan buhar, taze sıkılmış limonun ızgara balık üzerindeki parıltısı veya tatlının üzerine dökülen sıcak çikolata sosu... Sony FX6 kameralarımızla 120fps ultra ağır çekim yaparak izleyicide karşı konulamaz bir tatma dürtüsü oluşturuyoruz.</p>

      <h3>2. Şefin Hikayesi ve Mutfak Hijyeni</h3>
      <p>Günümüz tüketicisi yemeğin nasıl hazırlandığını, malzemelerin nereden geldiğini görmek istiyor. Yerel Ege zeytinyağlarının, taze deniz ürünlerinin mutfaktaki serüvenini anlatan mini belgesel tarzı Reels kurguları müşteri sadakatini zirveye taşır.</p>
    `,
  },
  {
    id: 'didim-kurumsal-web-tasarim-nextjs-ve-hiz-donusum-rehberi',
    slug: 'didim-kurumsal-web-tasarim-nextjs-ve-hiz-donusum-rehberi',
    title: 'Didim Kurumsal Web Tasarım: Neden Next.js 14 ve Hız Doğrudan Satış Getirir?',
    excerpt: 'Eski nesil hantal WordPress sitelerinin devri kapandı. Didim işletmeleri için milisaniyelik açılış hızı, Google Core Web Vitals tam puanı ve mobil dönüşüm mimarisi.',
    category: 'Web Tasarım & Hız',
    categorySlug: 'web-tasarim',
    readTime: '6 dk okuma',
    publishedDate: '28 Eylül 2026',
    author: {
      name: 'Hasan Altun',
      role: 'Kreatif Direktör & Büyüme Stratejisti',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop',
    },
    featuredImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
    keywords: ['Didim Web Tasarım', 'Didim Web Tasarım Ajansı', 'Next.js Web Tasarım Didim', 'Hızlı Web Sitesi Didim', 'Didim Yazılım Ajansı'],
    keyTakeaways: [
      'Bir web sitesi 3 saniyeden geç açıldığında ziyaretçilerin %53’ü siteyi terk etmektedir.',
      'Next.js 14 Server-Side Rendering (SSR) teknolojisi Google robotlarına içeriği anında sunarak SEO sıralamasını katlar.',
      'Mobil cihazlarda kolayca tıklanabilen WhatsApp ve Arama butonları dönüşüm oranını 3 kat artırır.',
      'Modern tipografi ve karanlık mod (Dark/Light tonlama) kurumsal prestiji uluslararası seviyeye yükseltir.'
    ],
    content: `
      <h2>Eski Nesil Siteler Satışınızı Nasıl Baltalıyor?</h2>
      <p>Birçok işletme web sitesini sadece bir <em>"kartvizit"</em> olarak görür ve yıllar önce yaptırdığı yavaş, güvenlik açıklarıyla dolu siteleri kullanmaya devam eder. Oysa bir müşteri adayının markanızla karşılaştığı ilk dijital temas noktası web sitenizdir.</p>
      
      <p>Altun Medya olarak sıradan şablon siteler yapmıyoruz. Dünyanın önde gelen teknoloji devlerinin tercih ettiği <strong>Next.js 14, React ve Tailwind CSS</strong> mimarisiyle, milisaniyeler içinde yüklenen ve doğrudan müşteri kazandıran web platformları inşa ediyoruz.</p>
    `,
  },
  {
    id: 'ege-bolgesi-turizm-reklam-butcesi-ve-meta-ads-yonetimi',
    slug: 'ege-bolgesi-turizm-reklam-butcesi-ve-meta-ads-yonetimi',
    title: 'Ege Bölgesi Turizm İşletmeleri İçin Meta Ads ve Instagram Reklam Bütçesi Yönetimi',
    excerpt: 'Didim, Kuşadası ve Bodrum hattındaki işletmeler için harcanan her 1 TL’nin karşılığını ölçen ROAS odaklı reklam hunisi ve yapay zeka destekli kitle hedefleme.',
    category: 'Turizm & Otelcilik',
    categorySlug: 'turizm',
    readTime: '6 dk okuma',
    publishedDate: '24 Eylül 2026',
    author: {
      name: 'Hasan Altun',
      role: 'Kreatif Direktör & Büyüme Stratejisti',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop',
    },
    featuredImage: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop',
    keywords: ['Didim Meta Ads', 'Didim Instagram Reklamı', 'Ege Turizm Reklam Bütçesi', 'Didim Reklam Yönetimi', 'Didim Dijital Pazarlama Ajansı'],
    keyTakeaways: [
      'Instagram’daki "Gönderiyi Öne Çıkar" butonu stratejisiz bütçe yakar; profesyonel Meta Ads Manager kullanılmalıdır.',
      'Meta Conversions API (CAPI) entegrasyonu ile iOS 14+ kısıtlamaları aşılır ve net satış dönüşümü ölçülür.',
      'A/B kreatif testleriyle en çok tıklanan video kurgusu belirlenerek reklam maliyetleri %40 düşürülür.',
      'Retargeting (Yeniden Pazarlama) ile sitenizi ziyaret edip satın almayanlara özel fırsat teklifleri sunulmalıdır.'
    ],
    content: `
      <h2>Paranızı Boşa Harcamayın: Veri Odaklı Dijital Reklamcılık</h2>
      <p>Bölgedeki pek çok işletme sahibi <em>"Instagram'da reklam verdim ama hiç müşteri gelmedi"</em> şikayetinde bulunur. Bunun temel sebebi, reklamın bir hedef kitle hunisine (Funnel) değil, sadece rastgele bir gönderi öne çıkarmaya dayanmasıdır.</p>
      
      <p>Altun Medya performans pazarlama uzmanları, reklam bütçenizi bir yatırım aracı olarak ele alır. Soğuk kitleye marka farkındalığı sunarken, sıcak kitleye doğrudan rezervasyon ve satış teklifi götürür.</p>
    `,
  },
];
