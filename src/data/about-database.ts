export interface AboutPageData {
  slug: string;
  badge: string;
  title: string;
  subtitle: string;
  heroDescription: string;
  heroStats: { value: string; label: string }[];
  overviewTitle: string;
  overviewContent: string[];
  pillarsTitle: string;
  pillars: { title: string; desc: string; iconName: string }[];
  chronologyTitle?: string;
  timeline?: { year: string; title: string; desc: string }[];
  teamTitle?: string;
  teamMembers?: { name: string; role: string; bio: string; tags: string[] }[];
  callToActionTitle: string;
  callToActionDesc: string;
}

export const aboutDatabase: AboutPageData[] = [
  {
    slug: 'hakkimizda',
    badge: 'KURUMSAL MİMARİ',
    title: 'Didim & Ege Bölgesinin 360° Medya ve Dijital Dönüşüm Stüdyosu',
    subtitle: 'Markaları Dijital Çağda Geleceğe Taşıyan Stratejik Yaratıcı Güç',
    heroDescription: 'ALTUN MEDYA; Didim, Aydın, Bodrum ve Kuşadası merkezli markaların dijitaldeki tüm temas noktalarını tek çatı altında yöneten, yüksek performans odaklı 360° medya ve reklam stüdyosudur.',
    heroStats: [
      { value: '216+', label: 'Seçkin Marka Deneyimi' },
      { value: '6+ Yıl', label: 'Sektörel Liderlik' },
      { value: '48M+', label: 'Organik İzlenme & Erişim' },
      { value: '100%', label: 'Dönüşüm Odaklı Yaklaşım' },
    ],
    overviewTitle: 'Strateji, Prodüksiyon ve Yazılımın Mükemmel Uyumu',
    overviewContent: [
      'Geleneksel ajans kalıplarını kırarak, her markaya özel stratejik büyüme planları hazırlıyoruz. Sadece estetik videolar çekmekle kalmıyor, bu videoları yüksek dönüşüm sağlayan Meta & Google reklam stratejileriyle destekliyoruz.',
      'Next.js ve modern web teknolojileri ile hazırladığımız ışık hızındaki web siteleri, 4K sinematik prodüksiyonlarımız ve bölgenin en güçlü Creator Network ağı ile markanıza rakiplerinizin ötesinde bir prestij kazandırıyoruz.',
      'Şeffaf veri analitiği, haftalık ROAS raporlamaları ve kesintisiz iletişim prensibimizle işletmenizi Ege bölgesinin ve Türkiye\'nin öncü markası haline getiriyoruz.'
    ],
    pillarsTitle: 'Kurumsal Temel İlkelerimiz',
    pillars: [
      {
        title: 'Veri & Sonuç Odaklılık',
        desc: 'Tüm kreatif kararlarımızı gerçek kullanıcı verileri, A/B testleri ve dönüşüm oranlarıyla şekillendiriyoruz.',
        iconName: 'Target',
      },
      {
        title: 'Sinematik Kalite Standardı',
        desc: '4K dikey Reels kurguları, dron çekimleri ve renk derecelendirme (Color Grading) ile sinema standardı sunuyoruz.',
        iconName: 'Video',
      },
      {
        title: 'Modern Yazılım Mimarisi',
        desc: 'Hazır şablonlar yerine React/Next.js ve Tailwind CSS ile sıfırdan, SEO uyumlu ve ultra hızlı sistemler inşa ediyoruz.',
        iconName: 'Code',
      },
      {
        title: 'Bölgesel Hakimiyet & Ağı',
        desc: 'Didim ve Ege pazarına hakim yerel ve ulusal network bağlantılarımızla markanızı doğrudan hedef kitlesine ulaştırıyoruz.',
        iconName: 'MapPin',
      },
    ],
    callToActionTitle: 'Markanız İçin Yeni Bir Çağ Başlatın',
    callToActionDesc: 'Altun Medya\'nın stratejik vizyonuyla tanışın. Proje Biletinizi Keserek uzman ekibimizle stratejik bir görüşme planlayın.',
  },
  {
    slug: 'biz-kimiz',
    badge: 'KREATİF EKİP & KÜLTÜR',
    title: 'Fikirleri Tutkuya, Stratejileri Büyümeye Dönüştüren Tutkulu Ekip',
    subtitle: 'Yönetmenler, Yazılım Mimarları, Stratejistler ve İçerik Üreticileri',
    heroDescription: 'Bizler; dijital dünyanın dinamiklerini avucunun içi gibi bilen, yaratıcı kurgulardan veri analitiğine kadar disiplinler arası uzmanlığa sahip tutkulu bir stüdyo ekibiyiz.',
    heroStats: [
      { value: '12+', label: 'Disiplinler Arası Uzman' },
      { value: '360°', label: 'Tam Kapsamlı Hizmet Ağacı' },
      { value: '7/24', label: 'Kesintisiz Stüdyo & Reklam Takibi' },
      { value: '15+', label: 'Aktif Creator & Influencer Partneri' },
    ],
    overviewTitle: 'Stüdyo Kültürümüz ve Çalışma Felsefemiz',
    overviewContent: [
      'Altun Medya çatısı altında her projenin bir ruhu ve hikayesi olduğuna inanırız. Monoton ajans süreçleri yerine, markanızın bir parçası gibi çalışan esnek ve hızlı hareket eden bir ekibe sahibiz.',
      'Kreatif ekibimiz her lansman öncesinde derinlemesine pazar ve rakip analizi gerçekleştirir. Senaryo yazarımız, görüntü yönetmenimiz ve performans uzmanımız tek bir hedef için bir araya gelir: Markanıza maksimum ROI (Yatırım Getirisi) sağlamak.',
      'Sürekli gelişen sosyal medya algoritmalarını ve web teknolojilerini günü gününe takip ederek, markanıza daima en güncel ve en etkili çözümleri sunarız.'
    ],
    pillarsTitle: 'Ekip Departmanlarımız',
    pillars: [
      {
        title: 'Kreatif & Prodüksiyon Ekibi',
        desc: 'Yönetmenler, drone operatörleri, ses ve renk uzmanları ile 4K sinematik içerik üretimi.',
        iconName: 'Camera',
      },
      {
        title: 'Dijital Pazarlama & Medya Planlama',
        desc: 'Meta Ads, Google Ads ve TikTok reklam bütçelerini maksimum dönüşümle yöneten performans mimarları.',
        iconName: 'TrendingUp',
      },
      {
        title: 'Web & Mobil Yazılım Mühendisliği',
        desc: 'Next.js, UI/UX tasarımı ve arama motoru optimizasyonu (SEO) ile yüksek hızlı platformlar geliştiren geliştiriciler.',
        iconName: 'Cpu',
      },
      {
        title: 'Creator & Influencer Koordinasyonu',
        desc: 'Ege ve Didim bölgesindeki seçkin içerik üreticilerini markalarla buluşturan strateji ekibi.',
        iconName: 'Users',
      },
    ],
    teamTitle: 'Kreatif Liderlik',
    teamMembers: [
      {
        name: 'Hasan Altun',
        role: 'Kurucu & Kreatif Direktör',
        bio: '6 yılı aşkın süredir Ege bölgesindeki 200\'den fazla markanın dijitalleşme sürecine ve görsel kimlik tasarımlarına liderlik ediyor.',
        tags: ['Strateji', 'Kreatif Yonetim', 'Prodüksiyon'],
      },
      {
        name: 'Altun Medya Prodüksiyon Takımı',
        role: 'Sinematografi & Kurgu Stüdyosu',
        bio: 'Social-first Reels kurguları, drone lansmanları ve reklam filmlerinde 4K çözünürlükte büyüleyici işlere imza atıyor.',
        tags: ['4K Video', 'Color Grading', 'VFX & Motion'],
      },
      {
        name: 'Altun Medya Yazılım & SEO Takımı',
        role: 'Frontend & Performans Mimarları',
        bio: 'Next.js mimarisiyle Google SEO standartlarında ışık hızında çalışan kullanıcı dostu web deneyimleri tasarlıyor.',
        tags: ['Next.js', 'SEO', 'UI/UX Design'],
      },
    ],
    callToActionTitle: 'Ekibimizle Tanışın & Projenizi Başlatın',
    callToActionDesc: 'İşletmeniz için özel bir medya ve yazılım stratejisi oluşturmak üzere stüdyomuzu ziyaret edin veya hemen proje talebinde bulunun.',
  },
  {
    slug: 'hikayemiz',
    badge: 'HİKAYEMİZ & YOLCULUĞUMUZ',
    title: 'Didim\'den Başlayıp Ege\'ye Yayılan Tutkulu Bir Başarı Hikayesi',
    subtitle: "2018'den Bu Yana Süregelen Dijital Tutku ve Sürekli İnovasyon",
    heroDescription: 'Tek bir kamera ve büyük bir vizyonla başlayan yolculuğumuz, bugün Ege bölgesinin en saygın kurumsal markalarına yön veren 360° medya stüdyosuna dönüştü.',
    heroStats: [
      { value: '2018', label: 'Kuruluş Yılımız' },
      { value: '500+', label: 'Tamamlanan Proje' },
      { value: '140+', label: 'Kurumsal Lansman' },
      { value: '4 Bölge', label: 'Didim • Aydın • Bodrum • Kuşadası' },
    ],
    overviewTitle: 'Hayalden Gerçeğe: Büyüme Serüvenimiz',
    overviewContent: [
      '2018 yılında Didim\'de kurulan Altun Medya, yerel işletmelerin dijital dünyadaki eksikliklerini ve potansiyellerini fark ederek yola çıktı. Amacımız çok netti: Anadolu ve Ege markalarına İstanbul ve dünya standartlarında reklam ve prodüksiyon kalitesi sunmak.',
      'Yıllar içinde bünyemize kattığımız yüksek çözünürlüklü sinema ekipmanları, drone filomuz ve yazılım stüdyomuz ile hizmet yelpazemizi 360° dereceye çıkardık. Turizm, gayrimenkul, gastronomi ve hizmet sektöründeki dev markaların birinci tercihi olduk.',
      'Bugün, yüz binlerce organik erişim, milyonlarca izlenme ve yüzlerce memnun müşteri ile yolumuza aynı tutku ve yenilikçi ruhla devam ediyoruz.'
    ],
    pillarsTitle: 'Değerlerimiz ve Yol Haritamız',
    pillars: [
      {
        title: 'Sürekli İnovasyon',
        desc: 'Yeni nesil dikey video formatları (Reels/TikTok) ve yapay zeka destekli tasarım araçlarını ilk uygulayan ajansız.',
        iconName: 'Zap',
      },
      {
        title: 'Yerel Güç & Global Standart',
        desc: 'Didim ve Ege bölgesini avucumuzun içi gibi bilirken, global tasarım ve kodlama standartlarından taviz vermeyiz.',
        iconName: 'Globe',
      },
      {
        title: 'Güvene Dayalı Ortaklık',
        desc: 'Müşterilerimizle sadece bir ajans ilişkisi değil, yıllar süren stratejik bir iş ortaklığı kurarız.',
        iconName: 'ShieldCheck',
      },
    ],
    chronologyTitle: 'Miladlarımız & Dönüm Noktalarımız',
    timeline: [
      {
        year: '2018',
        title: 'Stüdyonun Temelleri Atıldı',
        desc: 'Didim\'de fotoğraf ve sosyal medya yönetimi odağıyla Altun Medya kuruldu.',
      },
      {
        year: '2020',
        title: '4K Prodüksiyon & Reklam Dönemi',
        desc: 'Sinematik ekipman yatırımları ve Meta Ads lansman yönetimi ile bölgesel büyüme sağlandı.',
      },
      {
        year: '2022',
        title: 'Modern Web & Next.js Ekosistemi',
        desc: 'Özel yazılım ekibi kurularak yüksek hızlı React/Next.js web mimarileri geliştirilmeye başlandı.',
      },
      {
        year: '2024+',
        title: '360° Creator Network & Liderlik',
        desc: 'Creator Network ve 216+ markayla Ege bölgesinin en büyük 360° medya stüdyosu konumuna gelindi.',
      },
    ],
    callToActionTitle: 'Bu Hikayenin Bir Parçası Olun',
    callToActionDesc: 'Markanızın başarı hikayesini birlikte yazalım. Proje Biletini Keserek ilk adımı atın.',
  },
];
