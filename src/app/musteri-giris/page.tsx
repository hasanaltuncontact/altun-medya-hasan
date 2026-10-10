'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Lock, Mail, ArrowRight, ShieldCheck, UserCheck, Key, Ticket } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CustomCursor from '@/components/layout/CustomCursor';
import { demoClients } from '@/data/portal-database';

export default function ClientLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    setTimeout(() => {
      const foundClient = demoClients.find(
        (c) => c.email.toLowerCase() === email.toLowerCase() && c.password === password
      );

      if (foundClient || email === 'musteri@altunmedya.com') {
        const clientData = foundClient || demoClients[0];
        localStorage.setItem('altun_client_auth', JSON.stringify(clientData));
        router.push('/musteri-paneli');
      } else {
        setError('E-posta adresi veya şifre hatalı. Lütfen tekrar deneyin.');
        setLoading(false);
      }
    }, 600);
  };

  const fillDemoCredentials = () => {
    setEmail('musteri@altunmedya.com');
    setPassword('123456');
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#C8FF00] selection:text-black font-sans antialiased flex flex-col justify-between">
      <CustomCursor />
      
      <Header
        onOpenBrief={() => {}}
        onToggleMobileMenu={() => {}}
        isMobileMenuOpen={false}
      />

      <main className="pt-32 pb-20 px-5 sm:px-10 flex-grow flex items-center justify-center relative overflow-hidden">
        {/* NEON AMBIENCE */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C8FF00]/[0.05] rounded-full blur-[160px] pointer-events-none" />

        <div className="w-full max-w-md mx-auto relative z-10">
          <div className="p-8 sm:p-10 rounded-3xl bg-[#090909]/95 backdrop-blur-2xl border border-white/15 shadow-2xl space-y-6">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 rounded-2xl bg-[#C8FF00]/10 border border-[#C8FF00]/30 flex items-center justify-center mx-auto mb-3 text-[#C8FF00]">
                <UserCheck className="w-6 h-6" />
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                Müşteri Medya Paneli
              </h1>
              <p className="text-xs text-white/60 font-mono">
                Tasarımlarınızı indirin, videolarınızı izleyin ve iş sürecinizi takip edin.
              </p>
            </div>

            {error && (
              <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-xs font-mono text-red-400">
                {error}
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-white/70 mb-1.5 font-semibold">
                  Müşteri E-Posta Adresi
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-white/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ornek@markaniz.com"
                    className="w-full pl-10 pr-4 py-3 text-xs rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-[#C8FF00] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-white/70 mb-1.5 font-semibold">
                  Şifre
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-white/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-4 py-3 text-xs rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-[#C8FF00] transition-colors"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 text-xs font-extrabold uppercase tracking-wider bg-[#C8FF00] text-black rounded-xl hover:bg-[#D4FF28] transition-all flex items-center justify-center gap-2 shadow-lg active:scale-95 disabled:opacity-50"
              >
                <span>{loading ? 'Giriş Yapılıyor...' : 'Panele Giriş Yap'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            {/* QUICK DEMO CREDENTIALS BOX */}
            <div className="pt-4 border-t border-white/10 space-y-2">
              <div className="flex items-center justify-between text-[11px] font-mono text-white/50">
                <span>Canlı Demo Girişi:</span>
                <button
                  onClick={fillDemoCredentials}
                  type="button"
                  className="text-[#C8FF00] hover:underline font-bold flex items-center gap-1"
                >
                  <Key className="w-3 h-3" />
                  <span>Otomatik Doldur</span>
                </button>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-[11px] font-mono space-y-1 text-white/80">
                <div>E-Posta: <span className="text-[#C8FF00]">musteri@altunmedya.com</span></div>
                <div>Şifre: <span className="text-[#C8FF00]">123456</span></div>
              </div>
            </div>

            <div className="text-center pt-2 text-xs font-mono text-white/40">
              Ajans Yöneticisi misiniz?{' '}
              <Link href="/admingiris" className="text-white hover:text-[#C8FF00] underline font-bold">
                Admin Girişi
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
