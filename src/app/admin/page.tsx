'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { 
  Users, Upload, Plus, DollarSign, FileText, CheckCircle2, 
  Clock, LogOut, ShieldAlert, Cpu, Film, TrendingUp, Sparkles, Building2, Trash2 
} from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { 
  demoClients, initialMediaAssets, initialProjectTasks, initialInvoices, 
  ClientUser, MediaAsset, ProjectTask, InvoiceRecord 
} from '@/data/portal-database';

export default function AdminDashboardPage() {
  const router = useRouter();
  const [isAdmin, setIsAdmin] = useState(false);
  const [activeTab, setActiveTab] = useState<'clients' | 'upload' | 'tasks' | 'accounting'>('clients');

  // State arrays
  const [clients, setClients] = useState<(ClientUser & { password: string })[]>(demoClients);
  const [mediaList, setMediaList] = useState<MediaAsset[]>(initialMediaAssets);
  const [taskList, setTaskList] = useState<ProjectTask[]>(initialProjectTasks);
  const [invoiceList, setInvoiceList] = useState<InvoiceRecord[]>(initialInvoices);

  // Form inputs for new client
  const [newClientCompany, setNewClientCompany] = useState('');
  const [newClientName, setNewClientName] = useState('');
  const [newClientEmail, setNewClientEmail] = useState('');
  const [newClientPassword, setNewClientPassword] = useState('123456');

  // Form inputs for new media asset
  const [mediaClientId, setMediaClientId] = useState('cli-1');
  const [mediaTitle, setMediaTitle] = useState('');
  const [mediaCategory, setMediaCategory] = useState('Reels Prodüksiyon');
  const [mediaDownloadUrl, setMediaDownloadUrl] = useState('');
  const [mediaFileSize, setMediaFileSize] = useState('250 MB');

  // Form inputs for new task
  const [taskClientId, setTaskClientId] = useState('cli-1');
  const [taskTitle, setTaskTitle] = useState('');
  const [taskCategory, setTaskCategory] = useState('Dijital Pazarlama');
  const [taskStatus, setTaskStatus] = useState<'Planlama' | 'Prodüksiyon' | 'Kurgu & Montaj' | 'Yayında' | 'Tamamlandı'>('Planlama');

  // Form inputs for new invoice
  const [invoiceClientId, setInvoiceClientId] = useState('cli-1');
  const [invoiceDescription, setInvoiceDescription] = useState('');
  const [invoiceAmount, setInvoiceAmount] = useState<number>(30000);

  useEffect(() => {
    const adminAuth = localStorage.getItem('altun_admin_auth');
    if (!adminAuth) {
      // Auto authorize for demo testing if direct visit
      localStorage.setItem('altun_admin_auth', JSON.stringify({ role: 'admin', email: 'admin@altunmedya.com' }));
    }
    setIsAdmin(true);
  }, []);

  const handleAdminLogout = () => {
    localStorage.removeItem('altun_admin_auth');
    router.push('/admingiris');
  };

  // Add new client handler
  const handleAddClient = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newClientCompany || !newClientEmail) return;

    const newCli: ClientUser & { password: string } = {
      id: `cli-${Date.now()}`,
      companyName: newClientCompany,
      name: newClientName || newClientCompany,
      email: newClientEmail,
      password: newClientPassword || '123456',
      phone: '+90 544 555 0909',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
      role: 'client',
      memberSince: 'Ekim 2026',
      contractStatus: 'Aktif',
    };

    setClients([...clients, newCli]);
    setNewClientCompany('');
    setNewClientName('');
    setNewClientEmail('');
    alert(`Yeni Müşteri "${newCli.companyName}" hesabı açıldı! Giriş E-Posta: ${newCli.email}`);
  };

  // Add new media asset handler
  const handleAddMedia = (e: React.FormEvent) => {
    e.preventDefault();
    if (!mediaTitle) return;

    const newMed: MediaAsset = {
      id: `med-${Date.now()}`,
      clientId: mediaClientId,
      title: mediaTitle,
      type: 'video',
      category: mediaCategory,
      fileSize: mediaFileSize,
      uploadDate: new Date().toISOString().split('T')[0],
      downloadUrl: mediaDownloadUrl || 'https://assets.mixkit.co/videos/preview/mixkit-fashion-model-posing-in-neon-light-40114-large.mp4',
      previewUrl: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=600&auto=format&fit=crop',
      status: 'Onaylandı',
      currentVersion: 'v1.0',
      versions: [
        {
          version: 'v1.0',
          uploadDate: new Date().toISOString().split('T')[0],
          uploadedBy: 'Altun Medya Admin',
          fileSize: mediaFileSize,
          url: mediaDownloadUrl || 'https://assets.mixkit.co/videos/preview/mixkit-fashion-model-posing-in-neon-light-40114-large.mp4',
          note: 'İlk yükleme sürümü.',
          isFinal: true,
          isApproved: true,
        },
      ],
    };

    setMediaList([newMed, ...mediaList]);
    setMediaTitle('');
    alert(`"${newMed.title}" medya dosyası başarıyla yüklendi!`);
  };

  // Add new task handler
  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!taskTitle) return;

    const newTask: ProjectTask = {
      id: `tsk-${Date.now()}`,
      clientId: taskClientId,
      title: taskTitle,
      category: taskCategory,
      status: 'Planlama',
      progress: 30,
      dueDate: '2026-11-01',
      nextStep: 'Ön prodüksiyon hazırlıkları',
      workflow: [
        { name: 'Planlama', status: 'completed' },
        { name: 'Üretim', status: 'active' },
        { name: 'Kurgu', status: 'upcoming' },
        { name: 'Onay', status: 'upcoming' },
      ],
      coverImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800&auto=format&fit=crop',
      description: `${taskCategory} hizmeti kapsamında yürütülen kurumsal proje.`,
      assignedTeam: [
        { name: 'Hasan Altun', role: 'Kreatif Direktör', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop' }
      ],
    };

    setTaskList([newTask, ...taskList]);
    setTaskTitle('');
    alert(`Yeni iş görevi "${newTask.title}" atandı!`);
  };

  // Add new invoice handler
  const handleAddInvoice = (e: React.FormEvent) => {
    e.preventDefault();
    if (!invoiceDescription) return;

    const total = invoiceAmount * 1.2;
    const newInv: InvoiceRecord = {
      id: `inv-${Date.now()}`,
      clientId: invoiceClientId,
      invoiceNo: `ALT-2026-00${invoiceList.length + 50}`,
      description: invoiceDescription,
      netAmount: invoiceAmount,
      taxAmount: invoiceAmount * 0.2,
      totalAmount: total,
      date: new Date().toISOString().split('T')[0],
      dueDate: '2026-10-30',
      status: 'Bekliyor',
      downloadPdfUrl: '#',
    };

    setInvoiceList([newInv, ...invoiceList]);
    setInvoiceDescription('');
    alert(`Fatura ${newInv.invoiceNo} oluşturuldu! Toplam: ₺${total.toLocaleString('tr-TR')}`);
  };

  if (!isAdmin) return null;

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#B33A06] selection:text-white font-sans antialiased">
      
      <Header
        onOpenBrief={() => {}}
        onToggleMobileMenu={() => {}}
        isMobileMenuOpen={false}
      />

      <main className="pt-28 pb-20 px-5 sm:px-10 lg:px-14">
        <div className="max-w-7xl mx-auto space-y-8">

          {/* ADMIN BANNER */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#0E0E0E] via-[#141414] to-[#0A0A0A] border border-[#B33A06]/30 shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#B33A06]/[0.08] rounded-full blur-[140px] pointer-events-none" />

            <div className="flex items-center gap-5 relative z-10">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#B33A06] text-white font-black flex items-center justify-center shadow-xl flex-shrink-0">
                <Cpu className="w-8 h-8" />
              </div>
              <div>
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[#B33A06]/10 border border-[#B33A06]/30 text-[10px] font-mono text-[#B33A06] mb-1 font-bold">
                  <ShieldAlert className="w-3 h-3" />
                  <span>AJANS İÇ OPERASYON &amp; MUHASEBE PANELİ</span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
                  ALTUN MEDYA Stüdyo Yönetimi
                </h1>
                <p className="text-xs text-white/60 font-mono mt-0.5">
                  Müşteri Girişleri • Medya Yükleme • İş Takibi • Finans Raporu
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 relative z-10">
              <Link
                href="/admin/seo-engine"
                className="px-5 py-3 text-xs font-mono font-extrabold tracking-wider uppercase bg-[#B33A06] text-white rounded-xl hover:bg-[#C84408] transition-all flex items-center gap-2 shadow-[0_0_25px_rgba(179,58,6,0.4)] active:scale-95 border border-[#B33A06]"
              >
                <Cpu className="w-4 h-4" />
                <span>🚀 SEO CONTENT ENGINE</span>
              </Link>

              <Link
                href="/admin/editor"
                className="px-4 py-3 text-xs font-mono font-bold tracking-wider uppercase bg-white/10 text-white rounded-xl hover:bg-white/20 transition-all flex items-center gap-2 border border-white/15"
              >
                <Sparkles className="w-4 h-4 text-[#B33A06]" />
                <span>Görsel Editör (Elementor)</span>
              </Link>

              <button
                onClick={handleAdminLogout}
                className="px-4 py-3 text-xs font-mono font-bold bg-white/10 hover:bg-white/20 text-white rounded-xl transition-all flex items-center gap-2 border border-white/10"
              >
                <LogOut className="w-4 h-4" />
                <span>Admin Çıkış</span>
              </button>
            </div>
          </div>

          {/* ADMIN STATS SUMMARY */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="p-5 rounded-2xl bg-[#0A0A0A] border border-white/10">
              <div className="flex items-center justify-between text-white/50 mb-2">
                <span className="text-xs font-mono font-bold">KAYITLI MÜŞTERİLER</span>
                <Users className="w-4 h-4 text-[#B33A06]" />
              </div>
              <div className="text-2xl sm:text-3xl font-black text-white font-heading">{clients.length} Firma</div>
              <div className="text-[10px] font-mono text-[#8E8E93] mt-1">Özel Müşteri Portalı</div>
            </div>

            <div className="p-5 rounded-2xl bg-[#0A0A0A] border border-white/10">
              <div className="flex items-center justify-between text-white/50 mb-2">
                <span className="text-xs font-mono font-bold">YÜKLENEN MEDYALAR</span>
                <Film className="w-4 h-4 text-[#B33A06]" />
              </div>
              <div className="text-2xl sm:text-3xl font-black text-white font-heading">{mediaList.length} Dosya</div>
              <div className="text-[10px] font-mono text-[#8E8E93] mt-1">4K Video & Tasarım</div>
            </div>

            <div className="p-5 rounded-2xl bg-[#0A0A0A] border border-white/10">
              <div className="flex items-center justify-between text-white/50 mb-2">
                <span className="text-xs font-mono font-bold">AKTİF İŞ GÖREVLERİ</span>
                <Clock className="w-4 h-4 text-[#B33A06]" />
              </div>
              <div className="text-2xl sm:text-3xl font-black text-white font-heading">{taskList.length} Görev</div>
              <div className="text-[10px] font-mono text-[#8E8E93] mt-1">Canlı Takip Tahtası</div>
            </div>

            <div className="p-5 rounded-2xl bg-[#0A0A0A] border border-white/10">
              <div className="flex items-center justify-between text-white/50 mb-2">
                <span className="text-xs font-mono font-bold">TOPLAM CİRO (FATURA)</span>
                <TrendingUp className="w-4 h-4 text-[#B33A06]" />
              </div>
              <div className="text-2xl sm:text-3xl font-black text-[#B33A06] font-heading">
                ₺{invoiceList.reduce((a, b) => a + b.totalAmount, 0).toLocaleString('tr-TR')}
              </div>
              <div className="text-[10px] font-mono text-[#8E8E93] mt-1">Muhasebe Kayıtları</div>
            </div>
          </div>

          {/* ADMIN NAVIGATION TABS */}
          <div className="flex border-b border-white/15 space-x-6 text-sm font-semibold overflow-x-auto scrollbar-none">
            <button
              onClick={() => setActiveTab('clients')}
              className={`pb-4 transition-colors relative flex items-center gap-2 font-mono ${
                activeTab === 'clients' ? 'text-[#B33A06] font-bold' : 'text-white/60 hover:text-white'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>Müşteri Yönetimi ({clients.length})</span>
              {activeTab === 'clients' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#B33A06]" />}
            </button>

            <button
              onClick={() => setActiveTab('upload')}
              className={`pb-4 transition-colors relative flex items-center gap-2 font-mono ${
                activeTab === 'upload' ? 'text-[#B33A06] font-bold' : 'text-white/60 hover:text-white'
              }`}
            >
              <Upload className="w-4 h-4" />
              <span>Medya / Video Yükle</span>
              {activeTab === 'upload' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#B33A06]" />}
            </button>

            <button
              onClick={() => setActiveTab('tasks')}
              className={`pb-4 transition-colors relative flex items-center gap-2 font-mono ${
                activeTab === 'tasks' ? 'text-[#B33A06] font-bold' : 'text-white/60 hover:text-white'
              }`}
            >
              <Clock className="w-4 h-4" />
              <span>İş Takip Tahtası</span>
              {activeTab === 'tasks' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#B33A06]" />}
            </button>

            <button
              onClick={() => setActiveTab('accounting')}
              className={`pb-4 transition-colors relative flex items-center gap-2 font-mono ${
                activeTab === 'accounting' ? 'text-[#B33A06] font-bold' : 'text-white/60 hover:text-white'
              }`}
            >
              <DollarSign className="w-4 h-4" />
              <span>Muhasebe & Fatura Kes</span>
              {activeTab === 'accounting' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#B33A06]" />}
            </button>
          </div>

          {/* TAB 1: CLIENT MANAGEMENT & CREATE NEW */}
          {activeTab === 'clients' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* NEW CLIENT FORM */}
              <div className="lg:col-span-5 p-7 rounded-3xl bg-[#0D0D0D] border border-white/10 space-y-4">
                <div className="flex items-center gap-2 text-[#B33A06]">
                  <Plus className="w-5 h-5" />
                  <h2 className="text-lg font-bold text-white font-heading">Yeni Müşteri Tanımla</h2>
                </div>

                <form onSubmit={handleAddClient} className="space-y-3">
                  <div>
                    <label className="block text-[11px] font-mono text-white/60 mb-1">Firma / Marka Adı</label>
                    <input
                      type="text"
                      required
                      value={newClientCompany}
                      onChange={(e) => setNewClientCompany(e.target.value)}
                      placeholder="Örn: Didim Bay Otel & Beach"
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-[#B33A06] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-white/60 mb-1">Yetkili Adı</label>
                    <input
                      type="text"
                      value={newClientName}
                      onChange={(e) => setNewClientName(e.target.value)}
                      placeholder="Örn: Mehmet Can"
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-[#B33A06] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-white/60 mb-1">Giriş E-Postası</label>
                    <input
                      type="email"
                      required
                      value={newClientEmail}
                      onChange={(e) => setNewClientEmail(e.target.value)}
                      placeholder="musteri@marka.com"
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-[#B33A06] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-white/60 mb-1">Giriş Şifresi</label>
                    <input
                      type="text"
                      value={newClientPassword}
                      onChange={(e) => setNewClientPassword(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-[#B33A06] focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 text-xs font-bold uppercase tracking-wider bg-[#B33A06] text-white rounded-xl hover:bg-[#C84408] transition-colors"
                  >
                    + Müşteri Hesabını Aç
                  </button>
                </form>
              </div>

              {/* CLIENT LIST */}
              <div className="lg:col-span-7 space-y-4">
                <h2 className="text-lg font-bold text-white font-heading">Kayıtlı Müşteri Portföyü</h2>
                
                <div className="space-y-3">
                  {clients.map((cli) => (
                    <div key={cli.id} className="p-5 rounded-2xl bg-[#0D0D0D] border border-white/10 flex items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <img src={cli.avatar} className="w-12 h-12 rounded-xl object-cover" />
                        <div>
                          <div className="text-sm font-bold text-white font-heading">{cli.companyName}</div>
                          <div className="text-xs font-mono text-white/50">{cli.name} • {cli.email}</div>
                          <div className="text-[10px] font-mono text-[#B33A06] mt-0.5 font-bold">Şifre: {cli.password}</div>
                        </div>
                      </div>

                      <div className="text-right">
                        <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-mono font-bold border border-emerald-500/30">
                          Aktif Portal Access
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: UPLOAD MEDIA */}
          {activeTab === 'upload' && (
            <div className="max-w-2xl mx-auto p-8 rounded-3xl bg-[#0D0D0D] border border-white/10 space-y-6">
              <div>
                <h2 className="text-xl font-bold text-white font-heading">Müşteriye Özel Medya / Video Yükle</h2>
                <p className="text-xs font-mono text-white/60">Yüklenen dosyalar müşterinin paneline anında düşer ve 1-tıkla indirmesine açılır.</p>
              </div>

              <form onSubmit={handleAddMedia} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-white/70 mb-1">Hedef Müşteri</label>
                  <select
                    value={mediaClientId}
                    onChange={(e) => setMediaClientId(e.target.value)}
                    className="w-full px-4 py-3 text-xs rounded-xl bg-white/5 border border-white/10 text-white focus:border-[#B33A06] focus:outline-none"
                  >
                    {clients.map((c) => (
                      <option key={c.id} value={c.id} className="bg-[#0A0A0A] text-white">
                        {c.companyName} ({c.name})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-white/70 mb-1">Medya Başlığı / Açıklama</label>
                  <input
                    type="text"
                    required
                    value={mediaTitle}
                    onChange={(e) => setMediaTitle(e.target.value)}
                    placeholder="Örn: 4K Restoran Lansman Filmi (Final Kurgu)"
                    className="w-full px-4 py-3 text-xs rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-[#B33A06] focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-white/70 mb-1">Kategori</label>
                    <select
                      value={mediaCategory}
                      onChange={(e) => setMediaCategory(e.target.value)}
                      className="w-full px-4 py-3 text-xs rounded-xl bg-white/5 border border-white/10 text-white focus:border-[#B33A06] focus:outline-none"
                    >
                      <option value="Sinematik Video" className="bg-[#0A0A0A]">Sinematik Video (4K)</option>
                      <option value="Reels Prodüksiyon" className="bg-[#0A0A0A]">Reels Prodüksiyon</option>
                      <option value="Sosyal Medya Tasarımı" className="bg-[#0A0A0A]">Sosyal Medya Tasarımı</option>
                      <option value="Kurumsal Kimlik" className="bg-[#0A0A0A]">Kurumsal Kimlik</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-white/70 mb-1">Tahmini Boyut</label>
                    <input
                      type="text"
                      value={mediaFileSize}
                      onChange={(e) => setMediaFileSize(e.target.value)}
                      placeholder="Örn: 1.2 GB"
                      className="w-full px-4 py-3 text-xs rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-[#B33A06] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-white/70 mb-1">Video / İndirme URL Bağlantısı</label>
                  <input
                    type="text"
                    value={mediaDownloadUrl}
                    onChange={(e) => setMediaDownloadUrl(e.target.value)}
                    placeholder="https://..."
                    className="w-full px-4 py-3 text-xs rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-[#B33A06] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 text-xs font-extrabold uppercase tracking-wider bg-[#B33A06] text-white rounded-xl hover:bg-[#C84408] transition-colors flex items-center justify-center gap-2"
                >
                  <Upload className="w-4 h-4" />
                  <span>Medya Dosyasını Müşteriye Yayınla</span>
                </button>
              </form>
            </div>
          )}

          {/* TAB 3: TASK MANAGEMENT */}
          {activeTab === 'tasks' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* CREATE TASK FORM */}
              <div className="lg:col-span-5 p-7 rounded-3xl bg-[#0D0D0D] border border-white/10 space-y-4">
                <h2 className="text-lg font-bold text-white font-heading">Yeni İş / Görev Ekle</h2>

                <form onSubmit={handleAddTask} className="space-y-3">
                  <div>
                    <label className="block text-[11px] font-mono text-white/60 mb-1">Müşteri</label>
                    <select
                      value={taskClientId}
                      onChange={(e) => setTaskClientId(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-white/5 border border-white/10 text-white"
                    >
                      {clients.map((c) => (
                        <option key={c.id} value={c.id} className="bg-[#0A0A0A]">{c.companyName}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-white/60 mb-1">Görev Adı</label>
                    <input
                      type="text"
                      required
                      value={taskTitle}
                      onChange={(e) => setTaskTitle(e.target.value)}
                      placeholder="Örn: Drone Çekimi & Kurgu"
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-white/5 border border-white/10 text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-white/60 mb-1">Aşama</label>
                    <select
                      value={taskStatus}
                      onChange={(e: any) => setTaskStatus(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-white/5 border border-white/10 text-white"
                    >
                      <option value="Planlama" className="bg-[#0A0A0A]">Planlama</option>
                      <option value="Prodüksiyon" className="bg-[#0A0A0A]">Prodüksiyon</option>
                      <option value="Kurgu & Montaj" className="bg-[#0A0A0A]">Kurgu & Montaj</option>
                      <option value="Yayında" className="bg-[#0A0A0A]">Yayında</option>
                      <option value="Tamamlandı" className="bg-[#0A0A0A]">Tamamlandı</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 text-xs font-bold uppercase tracking-wider bg-[#B33A06] text-white rounded-xl hover:bg-[#C84408]"
                  >
                    + Görevi Atave Yayınla
                  </button>
                </form>
              </div>

              {/* TASK LIST */}
              <div className="lg:col-span-7 space-y-4">
                <h2 className="text-lg font-bold text-white font-heading">Aktif İş Süreçleri</h2>
                
                <div className="space-y-3">
                  {taskList.map((tsk) => (
                    <div key={tsk.id} className="p-5 rounded-2xl bg-[#0D0D0D] border border-white/10 space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-mono font-bold text-[#B33A06]">{tsk.category}</span>
                        <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-[10px] font-mono font-bold">{tsk.status}</span>
                      </div>
                      <div className="text-sm font-bold text-white font-heading">{tsk.title}</div>
                      <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-[#B33A06]" style={{ width: `${tsk.progress}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: ACCOUNTING & INVOICING */}
          {activeTab === 'accounting' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* CREATE INVOICE FORM */}
              <div className="lg:col-span-5 p-7 rounded-3xl bg-[#0D0D0D] border border-white/10 space-y-4">
                <h2 className="text-lg font-bold text-white font-heading">Fatura / Makbuz Kes</h2>

                <form onSubmit={handleAddInvoice} className="space-y-3">
                  <div>
                    <label className="block text-[11px] font-mono text-white/60 mb-1">Müşteri</label>
                    <select
                      value={invoiceClientId}
                      onChange={(e) => setInvoiceClientId(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-white/5 border border-white/10 text-white"
                    >
                      {clients.map((c) => (
                        <option key={c.id} value={c.id} className="bg-[#0A0A0A]">{c.companyName}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-white/60 mb-1">Hizmet / Proje Açıklaması</label>
                    <input
                      type="text"
                      required
                      value={invoiceDescription}
                      onChange={(e) => setInvoiceDescription(e.target.value)}
                      placeholder="Örn: 4K Video Prodüksiyon & Sosyal Medya"
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-white/5 border border-white/10 text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-white/60 mb-1">Net Tutar (TL)</label>
                    <input
                      type="number"
                      required
                      value={invoiceAmount}
                      onChange={(e) => setInvoiceAmount(Number(e.target.value))}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-white/5 border border-white/10 text-white"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 text-xs font-bold uppercase tracking-wider bg-[#B33A06] text-white rounded-xl hover:bg-[#C84408]"
                  >
                    + Faturayı Düzenle & İlet
                  </button>
                </form>
              </div>

              {/* INVOICE LIST */}
              <div className="lg:col-span-7 space-y-4">
                <h2 className="text-lg font-bold text-white font-heading">Kayıtlı Muhasebe Hareketleri</h2>

                <div className="space-y-3">
                  {invoiceList.map((inv) => (
                    <div key={inv.id} className="p-5 rounded-2xl bg-[#0D0D0D] border border-white/10 flex justify-between items-center">
                      <div>
                        <div className="text-xs font-mono font-bold text-[#B33A06]">{inv.invoiceNo}</div>
                        <div className="text-xs font-bold text-white mt-0.5">{inv.description}</div>
                        <div className="text-[10px] font-mono text-white/50">{inv.date}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-extrabold text-white font-heading">₺{inv.totalAmount.toLocaleString('tr-TR')}</div>
                        <span className="text-[10px] font-mono font-bold text-emerald-400">{inv.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

        </div>
      </main>

      <Footer />
    </div>
  );
}
