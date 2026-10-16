import { NextResponse } from 'next/server';

export interface LeadPayload {
  name: string;
  phone: string;
  email?: string;
  service?: string;
  message?: string;
  source?: string;
  company?: string;
  niche?: string;
}

export async function POST(request: Request) {
  try {
    const body: LeadPayload = await request.json();

    if (!body.name || !body.phone) {
      return NextResponse.json(
        { success: false, error: 'İsim ve telefon alanları zorunludur.' },
        { status: 400 }
      );
    }

    const timestamp = new Date().toISOString();
    const leadRecord = {
      id: `LEAD-${Date.now()}`,
      timestamp,
      name: body.name.trim(),
      phone: body.phone.trim(),
      email: body.email?.trim() || 'Belirtilmedi',
      service: body.service || 'Genel Medya & Yazılım',
      company: body.company || '-',
      message: body.message?.trim() || '-',
      source: body.source || 'Web Sitesi Brief Formu',
    };

    // Sunucu loguna structured lead yaz (CloudWatch, Vercel Logs veya Node console'da anında görünür)
    console.log('🔔 [YENİ MÜŞTERİ TALEBİ / LEAD]:', JSON.stringify(leadRecord, null, 2));

    // WhatsApp doğrudan mesaj bağlantısı üret (Müşteri veya ajans anında iletişim kurabilsin)
    const waText = `Merhaba Altun Medya! Web siteniz üzerinden form doldurdum.\n\nİsim / Firma: ${leadRecord.name}\nTelefon: ${leadRecord.phone}\nİlgilenilen Hizmet: ${leadRecord.service}${leadRecord.message !== '-' ? `\nNot: ${leadRecord.message}` : ''}`;
    const whatsappUrl = `https://wa.me/905443135557?text=${encodeURIComponent(waText)}`;

    // Resend veya harici webhook entegrasyonu için hazır yapı:
    if (process.env.RESEND_API_KEY) {
      try {
        await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: 'ALTUN MEDYA Web <onboarding@resend.dev>',
            to: ['info@altunmedya.com'],
            subject: `🔥 Yeni Müşteri Talebi: ${leadRecord.name} (${leadRecord.service})`,
            html: `
              <h2>Web Sitenizden Yeni Proje Talebi Geldi</h2>
              <p><strong>İsim / Firma:</strong> ${leadRecord.name}</p>
              <p><strong>Telefon:</strong> ${leadRecord.phone}</p>
              <p><strong>E-posta:</strong> ${leadRecord.email}</p>
              <p><strong>Hizmet:</strong> ${leadRecord.service}</p>
              <p><strong>Mesaj:</strong> ${leadRecord.message}</p>
              <p><strong>Kaynak:</strong> ${leadRecord.source}</p>
              <p><strong>Tarih:</strong> ${timestamp}</p>
            `,
          }),
        });
      } catch (err) {
        console.error('E-posta gönderim hatası:', err);
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Talebiniz başarıyla alındı. 24 saat içinde stüdyo ekibimiz sizinle iletişime geçecektir.',
      leadId: leadRecord.id,
      whatsappUrl,
    });
  } catch (error) {
    console.error('Lead API hatası:', error);
    return NextResponse.json(
      { success: false, error: 'Sunucu hatası oluştu, lütfen doğrudan WhatsApp üzerinden iletişime geçin.' },
      { status: 500 }
    );
  }
}
