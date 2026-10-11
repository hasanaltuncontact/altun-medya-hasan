// ==================================================
// ALTUN MEDYA CLIENT PORTAL / AGENCY OPERATING SYSTEM
// CENTRALIZED DATA SCHEMAS & MOCK DATABASE
// ==================================================

export interface ClientUser {
  id: string;
  name: string;
  companyName: string;
  email: string;
  phone: string;
  avatar: string;
  role: 'client';
  memberSince: string;
  contractStatus: 'Aktif' | 'Yenilenecek';
}

export interface ProjectWorkflowStep {
  name: string;
  status: 'completed' | 'active' | 'upcoming';
  date?: string;
}

export interface Project {
  id: string;
  clientId: string;
  title: string;
  category: string;
  status: 'Planlama' | 'Üretimde' | 'Kurguda' | 'Müşteri Onayında' | 'Revizyonda' | 'Tamamlandı';
  progress: number; // 0 - 100
  dueDate: string;
  nextStep: string;
  workflow: ProjectWorkflowStep[];
  coverImage: string;
  description: string;
  assignedTeam: { name: string; role: string; avatar: string }[];
}

export interface ActionItem {
  id: string;
  clientId: string;
  projectId: string;
  projectTitle: string;
  title: string;
  type: 'approval' | 'brief' | 'payment' | 'contract';
  dueDate: string;
  status: 'pending' | 'completed';
  actionLabel: string;
}

export interface FileVersionItem {
  version: string;
  uploadDate: string;
  uploadedBy: string;
  fileSize: string;
  url: string;
  note: string;
  isFinal?: boolean;
  isApproved?: boolean;
}

export interface MediaAsset {
  id: string;
  clientId: string;
  projectId?: string;
  title: string;
  type: 'video' | 'design' | 'photo' | 'logo' | 'document';
  category: string;
  fileSize: string;
  uploadDate: string;
  downloadUrl: string;
  previewUrl: string;
  status: 'Onay Bekliyor' | 'Onaylandı' | 'Revizede';
  currentVersion: string;
  versions: FileVersionItem[];
  isLocked?: boolean;
}

export interface TimestampComment {
  id: string;
  timestamp: string; // e.g. "00:13"
  comment: string;
  author: string;
  date: string;
}

export interface ApprovalItem {
  id: string;
  clientId: string;
  projectId: string;
  projectTitle: string;
  title: string;
  version: string;
  type: 'video' | 'design';
  mediaUrl: string;
  thumbnailUrl: string;
  uploadDate: string;
  status: 'Onay Bekliyor' | 'Onaylandı' | 'Revizyon İstendi';
  revisionQuotaUsed: number;
  revisionQuotaTotal: number;
  comments: TimestampComment[];
  revisionNotes?: { revisionNo: string; date: string; note: string; comments: TimestampComment[] }[];
}

export interface ContentCalendarItem {
  id: string;
  clientId: string;
  title: string;
  platform: 'Instagram' | 'TikTok' | 'Facebook' | 'YouTube';
  contentType: 'Reels' | 'Carousel' | 'Post' | 'Story';
  scheduledDate: string; // YYYY-MM-DD
  scheduledTime: string;
  status: 'Taslak' | 'Üretimde' | 'Onay Bekliyor' | 'Onaylandı' | 'Yayınlandı';
  caption: string;
  hashtags: string[];
  mediaPreview: string;
}

export interface BrandAsset {
  id: string;
  clientId: string;
  title: string;
  category: 'logo' | 'guideline' | 'palette' | 'document' | 'social';
  fileUrl: string;
  previewUrl: string;
  fileSize: string;
  format: string;
  metaInfo?: string;
}

export interface Invoice {
  id: string;
  clientId: string;
  invoiceNo: string;
  description: string;
  date: string;
  dueDate: string;
  netAmount: number;
  taxAmount: number;
  totalAmount: number;
  status: 'Ödendi' | 'Bekliyor' | 'Gecikmiş';
  downloadPdfUrl: string;
}

export interface ContractItem {
  id: string;
  clientId: string;
  title: string;
  type: 'Sözleşme' | 'Teklif' | 'KVKK' | 'NDA';
  startDate: string;
  endDate: string;
  status: '✓ İmzalandı' | 'Onay Bekliyor' | 'Süresi Doldu';
  version: string;
  fileUrl: string;
  fileSize: string;
}

export interface ChatMessage {
  id: string;
  clientId: string;
  projectId?: string;
  senderName: string;
  senderAvatar: string;
  isAgency: boolean;
  message: string;
  timestamp: string;
  attachment?: { title: string; url: string; type: string };
}

export interface ActivityLog {
  id: string;
  clientId: string;
  timestamp: string;
  date: string;
  user: string;
  action: string;
  iconType: 'upload' | 'approval' | 'invoice' | 'project' | 'message';
}

export interface NotificationItem {
  id: string;
  clientId: string;
  title: string;
  description: string;
  time: string;
  read: boolean;
  type: 'approval' | 'media' | 'invoice' | 'message' | 'project';
  targetSection: string;
}

export interface PerformanceKPI {
  period: '7 Gün' | '30 Gün' | '90 Gün';
  reach: { value: string; growth: string };
  impressions: { value: string; growth: string };
  engagement: { value: string; growth: string };
  followers: { value: string; growth: string };
  profileVisits: { value: string; growth: string };
  chartData: { label: string; reach: number; engagement: number }[];
}

// ==================================================
// INITIAL MOCK DATABASE CONTENT
// ==================================================

export const initialClients: (ClientUser & { password: string })[] = [
  {
    id: 'cli-1',
    name: 'Ahmet Yılmaz',
    companyName: 'Didim Palace Resort & Spa',
    email: 'musteri@altunmedya.com',
    password: '123456',
    phone: '+90 532 100 2030',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop',
    role: 'client',
    memberSince: 'Ocak 2024',
    contractStatus: 'Aktif',
  },
  {
    id: 'cli-2',
    name: 'Selin Arslan',
    companyName: 'Ege Marin Restaurant & Beach',
    email: 'selin@egemarin.com',
    password: '123456',
    phone: '+90 533 400 5060',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop',
    role: 'client',
    memberSince: 'Mart 2024',
    contractStatus: 'Aktif',
  },
];

export const initialProjects: Project[] = [
  {
    id: 'proj-1',
    clientId: 'cli-1',
    title: 'Sezon Sonu Lansmanı & 4K Tanıtım Filmi',
    category: '4K Prodüksiyon & Meta Ads',
    status: 'Müşteri Onayında',
    progress: 78,
    dueDate: '15 Ekim 2026',
    nextStep: 'Müşteri Onayı & Revizyon',
    coverImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop',
    description: 'Didim Palace Resort için hazırlanan 4K sinematik reklam filmi ve 12 adet lansman Reels kurgusu.',
    workflow: [
      { name: 'Brief & Strateji', status: 'completed', date: '01 Eyl' },
      { name: 'Drone & Çekimler', status: 'completed', date: '15 Eyl' },
      { name: 'Kurgu & Montaj', status: 'completed', date: '28 Eyl' },
      { name: 'Müşteri Onayı', status: 'active', date: '07 Eki' },
      { name: 'Revizyon', status: 'upcoming' },
      { name: 'Final Teslim & Yayında', status: 'upcoming' },
    ],
    assignedTeam: [
      { name: 'Hasan Altun', role: 'Kreatif Direktör', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop' },
      { name: 'Erkan Güneş', role: 'Görüntü Yönetmeni', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop' },
    ],
  },
  {
    id: 'proj-2',
    clientId: 'cli-1',
    title: 'Next.js 14 Ultra Hızlı Rezervasyon Portalı',
    category: 'Web Tasarım & Yazılım Mimarisi',
    status: 'Üretimde',
    progress: 62,
    dueDate: '25 Ekim 2026',
    nextStep: 'Ödeme Entegrasyonu & Test',
    coverImage: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=800&auto=format&fit=crop',
    description: 'React/Next.js 14 mimarisiyle hazırlanan, ışık hızında çalışan doğrudan oda rezervasyon sistemi.',
    workflow: [
      { name: 'UI/UX Tasarımı', status: 'completed', date: '10 Eyl' },
      { name: 'Frontend Geliştirme', status: 'completed', date: '25 Eyl' },
      { name: 'Backend & API', status: 'active', date: '07 Eki' },
      { name: 'Müşteri Testi', status: 'upcoming' },
      { name: 'Lansman', status: 'upcoming' },
    ],
    assignedTeam: [
      { name: 'Caner Özkan', role: 'Kıdemli Yazılım Mimarı', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop' },
    ],
  },
  {
    id: 'proj-3',
    clientId: 'cli-1',
    title: 'Sonbahar Gastro Menü & Restoran Prodüksiyonu',
    category: 'Sosyal Medya & Prodüksiyon',
    status: 'Planlama',
    progress: 20,
    dueDate: '05 Kasım 2026',
    nextStep: 'Reçete Çekimleri & Moodboard',
    coverImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop',
    description: 'Executive Şef tabağı tanıtımları, Instagram Reels ve Michelin konseptli fotoğraf serisi.',
    workflow: [
      { name: 'Brief & Konsept', status: 'completed', date: '02 Eki' },
      { name: 'Moodboard Onayı', status: 'active', date: '08 Eki' },
      { name: 'Stüdyo Çekimi', status: 'upcoming' },
      { name: 'Kurgu & Yayın', status: 'upcoming' },
    ],
    assignedTeam: [
      { name: 'Zeynep Yıldız', role: 'Sosyal Medya Yöneticisi', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop' },
    ],
  },
];

export const initialActionItems: ActionItem[] = [
  {
    id: 'act-1',
    clientId: 'cli-1',
    projectId: 'proj-1',
    projectTitle: 'Sezon Sonu Lansmanı & 4K Tanıtım Filmi',
    title: '4K Tanıtım Filmi (v03) Onayı Bekleniyor',
    type: 'approval',
    dueDate: '09 Ekim 2026',
    status: 'pending',
    actionLabel: 'İncele & Onayla',
  },
  {
    id: 'act-2',
    clientId: 'cli-1',
    projectId: 'proj-2',
    projectTitle: 'Next.js 14 Ultra Hızlı Rezervasyon Portalı',
    title: 'Ödeme Altyapısı Brief Bilgileri Eksik',
    type: 'brief',
    dueDate: '12 Ekim 2026',
    status: 'pending',
    actionLabel: 'Briefi Tamamla',
  },
];

export const initialApprovals: ApprovalItem[] = [
  {
    id: 'app-1',
    clientId: 'cli-1',
    projectId: 'proj-1',
    projectTitle: 'Sezon Sonu Lansmanı',
    title: 'Instagram Reels — Havuz & Spa Konsepti',
    version: 'VERSİYON 03',
    type: 'video',
    mediaUrl: 'https://assets.mixkit.co/videos/preview/mixkit-fashion-model-posing-in-neon-light-40114-large.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=600&auto=format&fit=crop',
    uploadDate: '06 Ekim 2026 • 14:30',
    status: 'Onay Bekliyor',
    revisionQuotaUsed: 1,
    revisionQuotaTotal: 3,
    comments: [
      { id: 'c-1', timestamp: '00:13', comment: 'Bu sahnedeki renk geçişi biraz daha yavaş ve yumuşak olabilir.', author: 'Ahmet Yılmaz (Müşteri)', date: 'Dün, 16:40' },
      { id: 'c-2', timestamp: '00:27', comment: 'Otel logosu 1 saniye daha ekranda kalsın.', author: 'Ahmet Yılmaz (Müşteri)', date: 'Dün, 16:42' },
    ],
    revisionNotes: [
      {
        revisionNo: 'REVİZYON #01',
        date: '03 Ekim 2026',
        note: 'Müzik ritmi hızlandırıldı ve v02 kurgusu hazırlandı.',
        comments: [],
      },
    ],
  },
  {
    id: 'app-2',
    clientId: 'cli-1',
    projectId: 'proj-1',
    projectTitle: 'Sezon Sonu Lansmanı',
    title: 'Meta Ads Reklam Görselleri & Afiş Seti',
    version: 'VERSİYON 02',
    type: 'design',
    mediaUrl: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200&auto=format&fit=crop',
    thumbnailUrl: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=600&auto=format&fit=crop',
    uploadDate: '05 Ekim 2026 • 11:15',
    status: 'Onay Bekliyor',
    revisionQuotaUsed: 0,
    revisionQuotaTotal: 3,
    comments: [],
  },
];

export const initialMediaAssets: MediaAsset[] = [
  {
    id: 'med-1',
    clientId: 'cli-1',
    projectId: 'proj-1',
    title: '4K Otel Tanıtım Filmi (Master Kurgu)',
    type: 'video',
    category: 'Sinematik Video',
    fileSize: '1.4 GB',
    uploadDate: '2026-10-05',
    downloadUrl: 'https://assets.mixkit.co/videos/preview/mixkit-fashion-model-posing-in-neon-light-40114-large.mp4',
    previewUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=600&auto=format&fit=crop',
    status: 'Onaylandı',
    currentVersion: 'FINAL v4',
    isLocked: true,
    versions: [
      { version: 'FINAL v4', uploadDate: '05 Eki 2026', uploadedBy: 'Hasan Altun', fileSize: '1.4 GB', url: '#', note: 'Final renk ve ses miksajı yapıldı.', isFinal: true, isApproved: true },
      { version: 'v3', uploadDate: '02 Eki 2026', uploadedBy: 'Hasan Altun', fileSize: '1.3 GB', url: '#', note: 'Müşteri revizyonu uygulandı.' },
      { version: 'v2', uploadDate: '28 Eyl 2026', uploadedBy: 'Erkan Güneş', fileSize: '1.2 GB', url: '#', note: 'İlk renk taslağı.' },
      { version: 'v1', uploadDate: '20 Eyl 2026', uploadedBy: 'Erkan Güneş', fileSize: '1.1 GB', url: '#', note: 'Ham kurgu montajı.' },
    ],
  },
  {
    id: 'med-2',
    clientId: 'cli-1',
    projectId: 'proj-1',
    title: 'Instagram Reels - Havuz & Spa Konsepti (9:16)',
    type: 'video',
    category: 'Reels Prodüksiyon',
    fileSize: '420 MB',
    uploadDate: '2026-10-04',
    downloadUrl: 'https://assets.mixkit.co/videos/preview/mixkit-model-walking-on-a-catwalk-41434-large.mp4',
    previewUrl: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=600&auto=format&fit=crop',
    status: 'Onay Bekliyor',
    currentVersion: 'v3',
    versions: [
      { version: 'v3', uploadDate: '04 Eki 2026', uploadedBy: 'Hasan Altun', fileSize: '420 MB', url: '#', note: 'Timestamp yorumları güncellendi.' },
      { version: 'v2', uploadDate: '01 Eki 2026', uploadedBy: 'Hasan Altun', fileSize: '410 MB', url: '#', note: 'Ses kurgusu değiştirildi.' },
      { version: 'v1', uploadDate: '25 Eyl 2026', uploadedBy: 'Hasan Altun', fileSize: '400 MB', url: '#', note: 'İlk dikey taslak.' },
    ],
  },
  {
    id: 'med-3',
    clientId: 'cli-1',
    projectId: 'proj-1',
    title: 'Sezon Sonu Lansman Afişleri & Meta Ads Tasarımları',
    type: 'design',
    category: 'Sosyal Medya Tasarımı',
    fileSize: '85 MB',
    uploadDate: '2026-10-02',
    downloadUrl: '#',
    previewUrl: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=600&auto=format&fit=crop',
    status: 'Onaylandı',
    currentVersion: 'FINAL v2',
    versions: [
      { version: 'FINAL v2', uploadDate: '02 Eki 2026', uploadedBy: 'Zeynep Yıldız', fileSize: '85 MB', url: '#', note: 'Typography & renk düzenlendi.', isFinal: true, isApproved: true },
    ],
  },
  {
    id: 'med-4',
    clientId: 'cli-1',
    title: 'Vektörel Kurumsal Logo Paketi (.AI .SVG .PNG .PDF)',
    type: 'logo',
    category: 'Kurumsal Kimlik',
    fileSize: '24 MB',
    uploadDate: '2026-09-28',
    downloadUrl: '#',
    previewUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop',
    status: 'Onaylandı',
    currentVersion: 'FINAL',
    versions: [
      { version: 'FINAL', uploadDate: '28 Eyl 2026', uploadedBy: 'Hasan Altun', fileSize: '24 MB', url: '#', note: 'Tüm format varyasyonları dahil.', isFinal: true, isApproved: true },
    ],
  },
];

export const initialContentCalendar: ContentCalendarItem[] = [
  {
    id: 'cal-1',
    clientId: 'cli-1',
    title: 'Havuz Keyfi & Gece Işıkları Reels Video',
    platform: 'Instagram',
    contentType: 'Reels',
    scheduledDate: '2026-10-10',
    scheduledTime: '19:30',
    status: 'Onaylandı',
    caption: 'Didim’in büyüleyici gün batımında spa ve özel havuz paketlerimizle ruhunuzu dinlendirin. 🍸✨ #DidimPalace #Luxurystay',
    hashtags: ['#DidimPalace', '#DidimHotel', '#EgeVacation', '#LuxuryResort'],
    mediaPreview: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=500&auto=format&fit=crop',
  },
  {
    id: 'cal-2',
    clientId: 'cli-1',
    title: 'Executive Şef Özel İtalyan Menüsü Carousel',
    platform: 'Instagram',
    contentType: 'Carousel',
    scheduledDate: '2026-10-12',
    scheduledTime: '12:00',
    status: 'Onay Bekliyor',
    caption: 'Bu hafta sonu lezzet şölenine davetlisiniz! Şefimizin özel trüf mantarlı makarnasını denediniz mi? 🍝',
    hashtags: ['#GourmetDidim', '#EgeRestoran', '#LuxuryDining'],
    mediaPreview: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=500&auto=format&fit=crop',
  },
  {
    id: 'cal-3',
    clientId: 'cli-1',
    title: 'Sonbahar Erken Rezervasyon Kampanyası TikTok',
    platform: 'TikTok',
    contentType: 'Reels',
    scheduledDate: '2026-10-15',
    scheduledTime: '21:00',
    status: 'Üretimde',
    caption: 'Sonbaharda Ege’nin tadı bir başka! %25 Erken Rezervasyon fırsatını kaçırmayın. 🔥',
    hashtags: ['#TikTokTravel', '#DidimOtel', '#FırsatOtel'],
    mediaPreview: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=500&auto=format&fit=crop',
  },
];

export const initialBrandAssets: BrandAsset[] = [
  {
    id: 'ba-1',
    clientId: 'cli-1',
    title: 'Primary Logo Set (Dark / Light / PNG / Vector)',
    category: 'logo',
    fileUrl: '#',
    previewUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400&auto=format&fit=crop',
    fileSize: '12.4 MB',
    format: 'AI, SVG, PNG',
    metaInfo: 'Vektörel & Yüksek Çözünürlük',
  },
  {
    id: 'ba-2',
    clientId: 'cli-1',
    title: 'Kurumsal Kimlik Rehberi & Brand Guidelines PDF',
    category: 'guideline',
    fileUrl: '#',
    previewUrl: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=400&auto=format&fit=crop',
    fileSize: '18.2 MB',
    format: 'PDF',
    metaInfo: 'Logo Kullanımı, Renkler & Font Standartları',
  },
  {
    id: 'ba-3',
    clientId: 'cli-1',
    title: 'Didim Palace Marka Renk Paleti (Hex & RGB)',
    category: 'palette',
    fileUrl: '#',
    previewUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=400&auto=format&fit=crop',
    fileSize: '1.1 MB',
    format: 'ASE, PAL',
    metaInfo: '#050505, #B33A06, #D9D0C1, #FFFFFF',
  },
  {
    id: 'ba-4',
    clientId: 'cli-1',
    title: 'Yüksek Çözünürlüklü Otel & Odalar Fotoğraf Arşivi',
    category: 'social',
    fileUrl: '#',
    previewUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=400&auto=format&fit=crop',
    fileSize: '2.8 GB',
    format: 'ZIP (RAW / JPG)',
    metaInfo: '45 Adet 4K Profesyonel Fotoğraf',
  },
];

export const initialInvoices: Invoice[] = [
  {
    id: 'inv-101',
    clientId: 'cli-1',
    invoiceNo: 'ALT-2026-0042',
    description: '4K Otel Tanıtım Filmi & 12 Adet High-Retention Reels Prodüksiyonu',
    date: '01 Ekim 2026',
    dueDate: '10 Ekim 2026',
    netAmount: 85000,
    taxAmount: 17000,
    totalAmount: 102000,
    status: 'Ödendi',
    downloadPdfUrl: '#',
  },
  {
    id: 'inv-102',
    clientId: 'cli-1',
    invoiceNo: 'ALT-2026-0058',
    description: 'Ekim Ayı Meta Ads & Google Ads Yönetimi Danışmanlığı',
    date: '05 Ekim 2026',
    dueDate: '15 Ekim 2026',
    netAmount: 25000,
    taxAmount: 5000,
    totalAmount: 30000,
    status: 'Bekliyor',
    downloadPdfUrl: '#',
  },
];

export const initialContracts: ContractItem[] = [
  {
    id: 'cnt-1',
    clientId: 'cli-1',
    title: '360° Medya & Stratejik Büyüme Hizmet Sözleşmesi',
    type: 'Sözleşme',
    startDate: '01.01.2026',
    endDate: '31.12.2026',
    status: '✓ İmzalandı',
    version: 'v1.2 Final',
    fileUrl: '#',
    fileSize: '3.4 MB',
  },
  {
    id: 'cnt-2',
    clientId: 'cli-1',
    title: 'Gizlilik ve Veri Güvenliği Anlaşması (NDA & KVKK)',
    type: 'NDA',
    startDate: '01.01.2026',
    endDate: 'Süresiz',
    status: '✓ İmzalandı',
    version: 'v1.0',
    fileUrl: '#',
    fileSize: '1.8 MB',
  },
];

export const initialChatMessages: ChatMessage[] = [
  {
    id: 'm-1',
    clientId: 'cli-1',
    senderName: 'Hasan Altun',
    senderAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop',
    isAgency: true,
    message: 'Merhaba Ahmet Bey, Didim Palace 4K reklam filminin v03 kurgusunu Onay Merkezi\'ne yükledik. İstediğiniz saniye bazlı revizyon notlarını orada görebilirsiniz.',
    timestamp: 'Dün, 15:30',
  },
  {
    id: 'm-2',
    clientId: 'cli-1',
    senderName: 'Ahmet Yılmaz',
    senderAvatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=150&auto=format&fit=crop',
    isAgency: false,
    message: 'Harika görünüyor Hasan Bey! Yalnızca 00:13 saniyesindeki renk geçişini incelemenizi istemiştim. Onay merkezinde not olarak bıraktım.',
    timestamp: 'Dün, 16:45',
  },
  {
    id: 'm-3',
    clientId: 'cli-1',
    senderName: 'Hasan Altun',
    senderAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop',
    isAgency: true,
    message: 'Notunuz alındı! Ekibimiz renk gradyanını biraz daha yumuşatıyor, akşam v04 olarak güncel halini yayınlayacağız.',
    timestamp: 'Bugün, 09:15',
  },
];

export const initialActivities: ActivityLog[] = [
  { id: 'act-1', clientId: 'cli-1', timestamp: '05:14', date: 'Bugün', user: 'Hasan Altun (Kreatif Direktör)', action: 'yeni v03 video kurgusunu Onay Merkezi\'ne yükledi.', iconType: 'upload' },
  { id: 'act-2', clientId: 'cli-1', timestamp: '04:52', date: 'Bugün', user: 'Ahmet Yılmaz (Müşteri)', action: 'Meta Ads Reklam Afiş Setini onayladı.', iconType: 'approval' },
  { id: 'act-3', clientId: 'cli-1', timestamp: '03:18', date: 'Bugün', user: 'Muhasebe Takımı', action: 'Invoice #ALT-2026-0058 faturasını oluşturdu.', iconType: 'invoice' },
  { id: 'act-4', clientId: 'cli-1', timestamp: '16:20', date: 'Dün', user: 'Zeynep Yıldız', action: 'Ekim ayı içerik takvimine 3 yeni paylaşım ekledi.', iconType: 'project' },
];

export const initialNotifications: NotificationItem[] = [
  { id: 'n-1', clientId: 'cli-1', title: 'Yeni Video Onayı Bekleniyor', description: 'Instagram Reels - Havuz & Spa Konsepti v03 yayında.', time: '10 dk önce', read: false, type: 'approval', targetSection: '03 Onay Merkezi' },
  { id: 'n-2', clientId: 'cli-1', title: 'Yeni Fatura Tanımlandı', description: 'ALT-2026-0058 numaralı fatura hesabınıza yansıtıldı.', time: '2 saat önce', read: false, type: 'invoice', targetSection: '08 Finans & Faturalar' },
  { id: 'n-3', clientId: 'cli-1', title: 'Stüdyodan Yeni Mesaj', description: 'Hasan Altun revizyon süreciyle ilgili not gönderdi.', time: 'Dün', read: true, type: 'message', targetSection: '10 Mesajlar' },
];

export const initialPerformanceKPI: PerformanceKPI = {
  period: '30 Gün',
  reach: { value: '48.2K', growth: '+28.7%' },
  impressions: { value: '184.6K', growth: '+34.1%' },
  engagement: { value: '14.2K', growth: '+18.2%' },
  followers: { value: '2.8K', growth: '+12.4%' },
  profileVisits: { value: '9.4K', growth: '+22.5%' },
  chartData: [
    { label: 'Hafta 1', reach: 8400, engagement: 2100 },
    { label: 'Hafta 2', reach: 11200, engagement: 3400 },
    { label: 'Hafta 3', reach: 14600, engagement: 4200 },
    { label: 'Hafta 4', reach: 14000, engagement: 4500 },
  ],
};

// Aliases for admin & login compatibility
export const demoClients = initialClients;
export const initialProjectTasks = initialProjects;
export type ProjectTask = Project;
export type InvoiceRecord = Invoice;

