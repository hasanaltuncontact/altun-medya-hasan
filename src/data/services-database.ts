export interface SubService {
  name: string;
  slug: string;
  shortDesc: string;
}

export interface ServiceCategory {
  id: string;
  number: string;
  title: string;
  slug: string;
  tagline: string;
  description: string;
  badges: string[];
  subServices: SubService[];
  features: string[];
  faq: { question: string; answer: string }[];
  heroImage: string;
}

export interface SubService {
  name: string;
  slug: string;
  shortDesc: string;
}

export interface ServiceCategory {
  id: string;
  number: string;
  title: string;
  slug: string;
  tagline: string;
  description: string;
  badges: string[];
  subServices: SubService[];
  features: string[];
  faq: { question: string; answer: string }[];
  heroImage: string;
}

export const servicesDatabase: ServiceCategory[] = [
  {
    id: 'dijital-pazarlama',
    number: '01',
    title: 'Dijital Pazarlama & Sosyal Medya',
    slug: 'didim-dijital-pazarlama',
    tagline: 'Veri Odaklı Büyüme Hunileri, ROAS Algoritmaları ve Topluluk Mimarisi',
    description: 'Bölgesel ve ulusal pazarda markanızı görünür kılmanın ötesine geçiyoruz. Meta (Instagram/Facebook) Conversions API ve Google Ads Smart Bidding teknolojilerini kullanarak, harcanan her bir lirayı yüksek dönüşümlü satış ve müşteri adayı (Lead) trafiğine dönüştürüyoruz.',
    badges: [
      'Sosyal Medya Yönetimi',
      'Meta Ads (ROAS Odaklı)',
      'Google Ads & Haritalar',
      'Influencer Marketing',
      'Performans Pazarlaması'
    ],
    subServices: [
      { name: 'Didim Sosyal Medya Yönetimi', slug: 'didim-sosyal-medya', shortDesc: 'Aylık planlı editoryal görsel kurgu, dikey 9:16 video üretimi ve topluluk etkileşimi.' },
      { name: 'Didim Sosyal Medya Ajansı', slug: 'didim-sosyal-medya-ajansi', shortDesc: '360° marka iletişimi, görsel feed stratejisi ve dijital itibar yönetimi.' },
      { name: 'Didim Reklam Ajansı', slug: 'didim-reklam-ajansi', shortDesc: 'Dijital ve geleneksel mecralarda dönüşüm ve satış hedefli yüksek tempolu kampanyalar.' },
      { name: 'Didim Dijital Pazarlama', slug: 'didim-dijital-pazarlama', shortDesc: 'Büyüme hunisi (Sales Funnel), A/B kitle testleri ve dinamik retargeting kurgusu.' },
      { name: 'Meta Reklam Yönetimi', slug: 'meta-reklam-yonetimi', shortDesc: 'Instagram ve Facebook mecralarında Conversions API ve dinamik katalog reklamları.' },
      { name: 'Google Ads Yönetimi', slug: 'google-ads', shortDesc: 'Google Arama Ağı, Performance Max (PMax), YouTube ve Haritalar doğrudan müşteri yakalama.' },
      { name: 'Influencer Marketing', slug: 'influencer-marketing', shortDesc: 'Ege bölgesi ve Türkiye genelinde hedef kitlenize doğrudan dokunan creator işbirlikleri.' }
    ],
    features: [
      'ROAS (Reklam Harcamasının Geri Dönüşü) ve CPL (Müşteri Başına Maliyet) Optimizasyonu',
      'A/B Kreatif Testleri (Statik Görsel, Reels, Carousel & Metin Varyasyonları)',
      'Haftalık ve Aylık Veri Analitiği, Reklam Bütçesi Şeffaf Raporlaması',
      'Rakip Reklam Stratejileri Analizi ve Pazar Konumlandırması'
    ],
    faq: [
      {
        question: 'Sosyal medya yönetimi paketleriniz neleri kapsıyor?',
        answer: 'Profesyonel 4K stüdyo ve mekan çekimlerinden grafik tasarımlara, 9:16 dikey kurgulardan yayın takvimine, Meta reklam optimizasyonundan topluluk etkileşimlerine kadar tüm süreçleri uçtan uca yürütüyoruz.'
      },
      {
        question: 'Reklam bütçemizi nasıl optimize ediyorsunuz?',
        answer: 'Meta Pixel, Conversions API ve Google Tag Manager entegrasyonlarıyla reklam tıklamalarını veriye dönüştürüyor; düşük dönüşüm getiren kitle ve kreatifleri elerken, en yüksek performans veren kanallara bütçeyi aktarıyoruz.'
      },
      {
        question: 'Sosyal medya içeriklerimizi ne kadar süre önceden planlıyorsunuz?',
        answer: 'Her ayın başında onayınıza sunulan 30 günlük stratejik içerik ve reklam takvimi hazırlarız. Sezonel ivmelere ve anlık fırsatlara göre esnek içerik üretimini aksatmayız.'
      }
    ],
    heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'web-dijital',
    number: '02',
    title: 'Web & Dijital Yazılım',
    slug: 'didim-web-tasarim',
    tagline: 'Modern Next.js Mimarisi, Yıldırım Hızında Mobil Arayüz ve SEO Hakimiyeti',
    description: 'Şablon çözümlerin ve yavaş WordPress sitelerinin ötesinde; Next.js 14, React ve Tailwind CSS ile güçlendirilmiş, mobil uyumlu ve arama motorlarında üst sıralara oynayan yüksek hızlı kurumsal web sistemleri inşa ediyoruz.',
    badges: [
      'Next.js Kurumsal Web',
      'E-Ticaret Sistemleri',
      'Landing Page (Dönüşüm Odaklı)',
      'WordPress & CMS',
      'Lokal SEO & Google Haritalar'
    ],
    subServices: [
      { name: 'Didim Web Tasarım', slug: 'didim-web-tasarim', shortDesc: 'Özgün tipografi, karanlık mod/aydınlık mod seçenekli modern UI/UX web mimarisi.' },
      { name: 'Didim Kurumsal Web Tasarım', slug: 'didim-kurumsal-web-tasarim', shortDesc: 'Şirket prestijinizi küresel standartlarda yansıtan, çok dilli kurumsal web siteleri.' },
      { name: 'Didim E-Ticaret', slug: 'didim-e-ticaret', shortDesc: 'PayTR / İzyco ödeme altyapılı, ultra hızlı mobil alışveriş e-ticaret platformları.' },
      { name: 'Didim Landing Page', slug: 'landing-page-tasarimi', shortDesc: 'Reklam kampanyalarından gelen ziyaretçiyi müşteriye dönüştüren tek sayfa tasarımlar.' },
      { name: 'Didim WordPress Web Tasarım', slug: 'wordpress-web-tasarim', shortDesc: 'Yönetimi kolay, SEO altyapısı güçlendirilmiş WooCommerce ve kurumsal çözümler.' },
      { name: 'Didim Web Sitesi Yenileme', slug: 'web-sitesi-yenileme', shortDesc: 'Eski ve yavaş web sitenizi modern Next.js ve SEO standartlarına aktarma.' }
    ],
    features: [
      '%100 Mobil ve Tablet Uyumlu Responsive Mimarisi',
      'Google Lighthouse Hız ve SEO Skoru (%95+ Standart)',
      'Google İşletme Profili Entegrasyonu ve Lokal Aramalarda İlk Sıra Targetlama',
      'Güvenli SSL, KVKK Form Altyapısı ve WhatsApp Doğrudan İletişim Botu'
    ],
    faq: [
      {
        question: 'Web sitesi tasarımı ne kadar sürede tamamlanır?',
        answer: 'Kurumsal web siteleri ortalama 7 - 12 iş günü, kapsamlı e-ticaret projeleri ise 14 - 20 iş günü içerisinde tüm içerik ve testleriyle yayına alınır.'
      },
      {
        question: 'Web sitemize SEO desteği veriyor musunuz?',
        answer: 'Kodladığımız tüm web siteleri arama motoru standartlarına tam uyumlu Semantic HTML, Schema.org ve yerel SEO optimizasyonu dahil edilerek teslim edilir.'
      },
      {
        question: 'Sitemizi sonradan kendimiz güncelleyebilir miyiz?',
        answer: 'Evet, teslim sonrası sunduğumuz pratik panel eğitimi sayesinde metinlerinizi, görsellerinizi ve ürünlerinizi kolayca güncelleyebilirsiniz.'
      }
    ],
    heroImage: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'fotograf-video',
    number: '03',
    title: 'Fotoğraf & Video Prodüksiyon',
    slug: 'didim-video-cekimi',
    tagline: 'Sony Cine FX Kameralar, 4K Drone ve 9:16 Viral İçerik Mimarisi',
    description: 'Mekanınızın, otelinizin, restoranınızın veya ürünlerinizin tüm cazibesini gün yüzüne çıkarıyoruz. Sinematik 4K kameralar, DJI Air/Mavic 4K dronelar ve profesyonel Aputure/Godox stüdyo ışıkları ile yüksek estetikli görseller üretiyoruz.',
    badges: [
      '4K Sinematik Çekim',
      'Profesyonel Fotoğraf',
      '4K Drone Çekimi',
      '9:16 Reels & TikTok',
      'Mekan, Otel & Gastronomi'
    ],
    subServices: [
      { name: 'Didim Video Çekimi', slug: 'didim-video-cekimi', shortDesc: '4K sinematik kameralarla mekan, tanıtım ve etkinlik video kurguları.' },
      { name: 'Didim Fotoğraf Çekimi', slug: 'didim-fotograf-cekimi', shortDesc: 'Profesyonel ışık ve doğru açılarla mimari, ürün ve konsept fotoğraflar.' },
      { name: 'Didim Drone Çekimi', slug: 'didim-drone-cekimi', shortDesc: 'Sivil havacılık onaylı lisanslı pilotlar ile 4K havadan sinematik görüntüleme.' },
      { name: 'Didim Tanıtım Filmi', slug: 'didim-tanitim-filmi', shortDesc: 'Senaryolu, seslendirmeli ve özgün müzikli imaj ve vizyon filmleri.' },
      { name: 'Didim Reels Çekimi', slug: 'didim-reels-cekimi', shortDesc: 'Instagram ve TikTok algoritmalarına uygun high-retention dikey kurgular.' },
      { name: 'Didim Mekan Çekimi', slug: 'didim-mekan-cekimi', shortDesc: 'Restoran, kafe, beach club ve ticari alanlar için atmosferik kurgular.' },
      { name: 'Didim Otel Çekimi', slug: 'didim-otel-fotograf-cekimi', shortDesc: 'Tesis, oda, havuz ve mimari detay çekimleriyle turizm imaj görselleri.' },
      { name: 'Didim Ürün Çekimi', slug: 'didim-urun-fotograf-cekimi', shortDesc: 'Stüdyo fonunda veya konsept mekanlarda detay e-ticaret ürün fotoğrafları.' }
    ],
    features: [
      'Sony FX3 / FX6 Sinema Kameraları ve 4K 10-Bit Color Profile',
      'Sivil Havacılık Onaylı 4K Drone İnsansız Hava Araçları',
      'Sennheiser / Rode Kablosuz 32-Bit Float Ses Kayıt Sistemleri',
      'DaVinci Resolve Studio ile Profesyonel Color Grading (Renk Derecelendirme)'
    ],
    faq: [
      {
        question: 'Çekimlerde hangi ekipmanları kullanıyorsunuz?',
        answer: 'Sony FX serisi 4K sinema kameraları, DJI Mavic 3 Cine dronelar, Godox / Aputure COB LED ışık grupları ve kablosuz Sennheiser yaka mikrofonları kullanmaktayız.'
      },
      {
        question: 'Çekilen içerikler ne kadar sürede teslim edilir?',
        answer: 'Sosyal medya Reels/fotoğraf çekimleri 3 - 5 iş günü, kapsamlı kurumsal tanıtım ve otel filmleri 7 - 10 iş günü içerisinde renk ve ses düzenlemesi yapılmış olarak teslim edilir.'
      }
    ],
    heroImage: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'ozel-cekimler',
    number: '04',
    title: 'Özel Çekimler & Düğün Hikayesi',
    slug: 'didim-dugun-cekimi',
    tagline: 'Zamanın Ötesinde Sinematik Düğün Klipleri ve Doğal Dış Çekimler',
    description: 'Hayatınızın en unutulmaz gününü yapay pozlardan uzak, tamamen doğal, duygu dolu ve editoryal bir sinematik hikayeye dönüştürüyoruz. Didim, Akbük ve Bodrum sahillerinde gün batımı konsept çekimleri gerçekleştiriyoruz.',
    badges: [
      'Düğün Çekimi',
      'Editoryal Düğün Fotoğrafı',
      'Sinematik Düğün Hikayesi',
      'Save The Date',
      'Evlilik Teklifi'
    ],
    subServices: [
      { name: 'Didim Düğün Çekimi', slug: 'didim-dugun-cekimi', shortDesc: 'Tüm gün dış çekim, hazırlık hikayesi ve düğün klibi prodüksiyonu.' },
      { name: 'Didim Düğün Fotoğrafçısı', slug: 'didim-dugun-fotografcisi', shortDesc: 'Editoryal moda dergisi tadında doğal ve estetik kareler.' },
      { name: 'Didim Düğün Videosu', slug: 'didim-dugun-videosu', shortDesc: 'Duygu dolu sinematik düğün hikayesi ve 1 dakikalık sosyal medya fragmanı.' },
      { name: 'Didim Nişan Çekimi', slug: 'didim-nisan-cekimi', shortDesc: 'Nişan ve söz organizasyonlarına özel samimi konsept çekimleri.' },
      { name: 'Didim Save The Date Çekimi', slug: 'didim-save-the-date', shortDesc: 'Düğün tarihi duyurusu için sahil ve açık hava klipleri.' },
      { name: 'Didim Evlilik Teklifi Çekimi', slug: 'didim-evlilik-teklifi-cekimi', shortDesc: 'Sürpriz anların heyecanını ölümsüzleştiren gizli kamera ve drone kurguları.' }
    ],
    features: [
      'Doğal Işık, Sahil & Gün Batımı Konsept Çekimleri',
      'İthal Kadife / Deri Kaplamalı Özel Tasarım Panorama Fotoğraf Albümleri',
      'Sosyal Medya Paylaşımları İçin 9:16 Dikey Düğün Reels Klipleri',
      'Yüksek Çözünürlüklü Dijital Arşiv ve Bulut Teslimatı'
    ],
    faq: [
      {
        question: 'Düğün çekimi için ne kadar önce rezervasyon yapmalıyız?',
        answer: 'Özellikle Mayıs - Ekim arasındaki yoğun düğün sezonunda mağduriyet yaşamamak adına en az 1 - 2 ay öncesinden tarih konfirmasyonu yapmanızı öneririz.'
      },
      {
        question: 'Çekim lokasyonlarını kim belirliyor?',
        answer: 'Çiftlerimizin tarzına uygun olarak Didim Apollon Tapınağı, Akbük Sahili, Bafa Gölü veya Bodrum koyları gibi en estetik rotaları birlikte seçiyoruz.'
      }
    ],
    heroImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'marka-tasarim',
    number: '05',
    title: 'Marka Kimliği & Grafik Tasarım',
    slug: 'didim-grafik-tasarim',
    tagline: 'Zamansız Tipografi, Izgara Tabanlı Amblem Mimarisi ve Kurumsal Dokunuş',
    description: 'Markanızın ilk izlenimini kusursuz kılıyoruz. Vektörel amblem tasarımından marka kılavuzuna, menü tasarımlarından ambalaj ve matbu çözümlere kadar tüm görsel temas noktalarını editoryal standartlarda kurguluyoruz.',
    badges: [
      'Vektörel Logo Tasarımı',
      'Kurumsal Kimlik Kılavuzu',
      'Restoran & Kafe Menü',
      'Ambalaj & Etiket',
      'Sosyal Medya Grid'
    ],
    subServices: [
      { name: 'Didim Grafik Tasarım', slug: 'didim-grafik-tasarim', shortDesc: 'Sosyal medya, reklam, broşür ve matbu görsel çözümleri.' },
      { name: 'Didim Logo Tasarımı', slug: 'didim-logo-tasarimi', shortDesc: 'Grid tabanlı, vektörel, akılda kalıcı ve zamansız amblem tasarımları.' },
      { name: 'Didim Kurumsal Kimlik', slug: 'didim-kurumsal-kimlik', shortDesc: 'Kartvizit, antetli kağıt, diplomat zarf, cepli dosya ve kurumsal rehber.' },
      { name: 'Didim Marka Tasarımı', slug: 'didim-marka-tasarimi', shortDesc: 'Bütüncül marka konumlandırması, renk psikolojisi ve tipografi haritası.' },
      { name: 'Didim Menü Tasarımı', slug: 'didim-menu-tasarimi', shortDesc: 'Restoran ve kafeler için iştah açıcı, tipografik ve dayanıklı menü tasarımları.' },
      { name: 'Didim Sosyal Medya Tasarımı', slug: 'didim-sosyal-medya-tasarimi', shortDesc: 'Özel Instagram grid, hikaye şablonları ve kapak tasarımları.' }
    ],
    features: [
      'Vektörel (AI, EPS, SVG, PDF) ve Yüksek Çözünürlüklü Master Dosya Teslimi',
      'Tipografi, Kurumsal Renk Kodları (CMYK, RGB, Pantone) Standartlar Kitapçığı',
      'Matbaa ve Baskı Süreçlerinde Birebir Teknik Danışmanlık',
      'Telif Hakları Tam devredilen %100 Özgün Tasarımlar'
    ],
    faq: [
      {
        question: 'Logo tasarımı sürecinde kaç farklı konsept sunuyorsunuz?',
        answer: 'Markanızın sektör analizi doğrultusunda 3 farklı özgün vektörel konsept hazırlıyor; seçtiğiniz konsept üzerinden revizyonlar yaparak mükemmel sonuca ulaşıyoruz.'
      },
      {
        question: 'Tasarımların baskı takibini de yapıyor musunuz?',
        answer: 'Evet, hazırladığımız tüm kurumsal kimlik ve menü tasarımlarının baskı tekniklerine (lak, kabartma, bıçak izi) uygunluğunu kontrol edip matbaa sürecini yönetebiliyoruz.'
      }
    ],
    heroImage: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'reklam-produksiyon',
    number: '06',
    title: 'Reklam Prodüksiyonu & Tanıtım Filmi',
    slug: 'didim-reklam-filmi',
    tagline: 'Yüksek İmaj Değeri Yaratacak Senaryolu Reklam Prodüksiyonları',
    description: 'Televizyon, dijital platformlar (YouTube, Instagram) ve açıkhava LED ekranları için yaratıcı senaryolar üretiyoruz. Metin yazarlığından oyuncu seçimine, 4K sinematik çekimlerden kurumsal seslendirmeye kadar prestijinizi yükseltiyoruz.',
    badges: [
      'Senaryolu Reklam Filmi',
      'Kurumsal Tanıtım Filmi',
      'Televizyon & Dijital Reklam',
      'Cast & Seslendirme',
      'Color Grading'
    ],
    subServices: [
      { name: 'Didim Reklam Filmi', slug: 'didim-reklam-filmi', shortDesc: 'TV, sinema ve dijital mecralar için senaryolaştırılmış reklam prodüksiyonu.' },
      { name: 'Didim Tanıtım Filmi', slug: 'didim-tanitim-filmi', shortDesc: 'Şirket büyüklüğünüzü ve vizyonunuzu anlatan yüksek prestijli imaj filmleri.' },
      { name: 'Didim Video Prodüksiyon', slug: 'didim-video-produksiyon', shortDesc: 'A’dan Z’ye kurgu, montaj, ses tasarımı ve post-prodüksiyon süreçleri.' },
      { name: 'Didim Fotoğraf Prodüksiyon', slug: 'didim-fotograf-produksiyon', shortDesc: 'Kreatif stüdyo ve dış mekan modellik / ambalaj fotoğraf prodüksiyonu.' },
      { name: 'Didim Drone Prodüksiyon', slug: 'didim-drone-produksiyon', shortDesc: 'Endüstriyel tesisler, gayrimenkul ve turizm alanları için 4K hava filmleri.' },
      { name: 'Didim Açıkhava Reklam', slug: 'didim-acikhava-reklam', shortDesc: 'Billboard, raket ve dijital ekranlar için yüksek çözünürlüklü görsel kurgu.' }
    ],
    features: [
      'Kreatif Metin Yazarlığı, Storyboard ve Kurgu Senaryo Hizmeti',
      'Profesyonel Oyuncu ve Model Cast Temin Süreçleri',
      'Kurumsal Türkçe ve İngilizce Dublaj Sanatçıları (Voice-Over)',
      'DaVinci Resolve Studio İle Sinematik Atmosfer ve Renk Tasarımı'
    ],
    faq: [
      {
        question: 'Reklam filmi çekimleri ne kadar sürüyor?',
        answer: 'Senaryo ve mekan keşfi 2-3 gün, çekim aşaması 1-2 gün, kurgu, seslendirme ve renk derecelendirme ise 5-7 iş günü içerisinde tamamlanır.'
      },
      {
        question: 'Reklam filmlerinde müzik telif sorunu yaşanır mı?',
        answer: 'Hayır, tüm prodüksiyonlarımızda uluslararası lisanslı müzik kütüphanelerinden yasal hakları satın alınmış telifsiz sesler ve müzikler kullanılmaktadır.'
      }
    ],
    heroImage: 'https://images.unsplash.com/photo-1579632652768-6cb9dcf85912?q=80&w=1200&auto=format&fit=crop'
  }
];

