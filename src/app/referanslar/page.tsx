import { Metadata } from 'next';
import ReferencesClient from './ReferencesClient';

export const metadata: Metadata = {
  title: 'Referanslarımız — Kime Ne İş Yaptık?',
  description:
    "Didim, Bodrum, İstanbul ve Ege'de ALTUN MEDYA'nın çalıştığı markalar: reels prodüksiyonu, drone çekimi, web tasarım, marka kimliği ve dijital pazarlama vaka çalışmaları.",
  alternates: { canonical: 'https://altunmedya.com/referanslar' },
};

export default function ReferencesPage() {
  return <ReferencesClient />;
}
