'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Lock, Mail, ArrowRight, ShieldCheck, Key, Cpu, Building2 } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    setTimeout(() => {
      if (email.toLowerCase() === 'admin@altunmedya.com' && password === 'admin123') {
        localStorage.setItem('altun_admin_auth', JSON.stringify({ role: 'admin', email }));
        router.push('/admin');
      } else {
        setError('Admin e-posta adresi veya şifre hatalı.');
        setLoading(false);
      }
    }, 600);
  };

  const fillDemoAdmin = () => {
    setEmail('admin@altunmedya.com');
    setPassword('admin123');
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#B33A06] selection:text-white font-sans antialiased flex flex-col justify-between">
      
      <Header
        onOpenBrief={() => {}}
        onToggleMobileMenu={() => {}}
        isMobileMenuOpen={false}
      />

      <main className="pt-32 pb-20 px-5 sm:px-10 flex-grow flex items-center justify-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#B33A06]/[0.05] rounded-full blur-[160px] pointer-events-none" />

        <div className="w-full max-w-md mx-auto relative z-10">
          <div className="p-8 sm:p-10 rounded-3xl bg-[#090909]/95 backdrop-blur-2xl border border-white/15 shadow-2xl space-y-6">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 rounded-2xl bg-[#B33A06] text-white font-black flex items-center justify-center mx-auto mb-3 shadow-[0_0_20px_rgba(179,58,6,0.4)]">
                <Cpu className="w-6 h-6" />
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                Ajans Yönetim Paneli
              </h1>
              <p className="text-xs text-white/60 font-mono">
                ALTUN MEDYA İç Operasyon, Müşteri & Muhasebe Portalı
              </p>
            </div>

            {error && (
              <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-xs font-mono text-red-400">
                {error}
              </div>
            )}

            <form onSubmit={handleAdminLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-white/70 mb-1.5 font-semibold">
                  Admin E-Posta
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-white/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="admin@altunmedya.com"
                    className="w-full pl-10 pr-4 py-3 text-xs rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-[#B33A06] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-white/70 mb-1.5 font-semibold">
                  Yönetici Şifresi
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-white/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-4 py-3 text-xs rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-[#B33A06] transition-colors"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 text-xs font-extrabold uppercase tracking-wider bg-[#B33A06] text-white rounded-xl hover:bg-[#C84408] transition-all flex items-center justify-center gap-2 shadow-lg active:scale-95 disabled:opacity-50"
              >
                <span>{loading ? 'Yetki Doğrulanıyor...' : 'Yönetici Girişi Yap'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            <div className="pt-4 border-t border-white/10 space-y-2">
              <div className="flex items-center justify-between text-[11px] font-mono text-white/50">
                <span>Admin Test Bilgileri:</span>
                <button
                  onClick={fillDemoAdmin}
                  type="button"
                  className="text-[#B33A06] hover:underline font-bold flex items-center gap-1"
                >
                  <Key className="w-3 h-3" />
                  <span>Otomatik Doldur</span>
                </button>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-[11px] font-mono space-y-1 text-white/80">
                <div>E-Posta: <span className="text-[#B33A06]">admin@altunmedya.com</span></div>
                <div>Şifre: <span className="text-[#B33A06]">admin123</span></div>
              </div>
            </div>

            <div className="text-center pt-2 text-xs font-mono text-white/40">
              Müşteri misiniz?{' '}
              <Link href="/musteri-giris" className="text-white hover:text-[#B33A06] underline font-bold">
                Müşteri Girişi Yapın
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
