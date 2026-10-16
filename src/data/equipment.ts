/**
 * KULLANDIĞIMIZ EKİPMANLAR
 * ------------------------------------------------------------
 * DÜZENLE: Bu liste profesyonel bir prodüksiyon stüdyosu için örnek olarak
 * hazırlanmıştır. Gerçek ekipman parkınızla güncelleyin. Firma sayfalarında
 * `equipment: ['fx3', 'mavic3pro', ...]` ile o işte kullanılanlar öne çıkar.
 */

export type EquipmentCategory = 'Kamera' | 'Lens' | 'Drone' | 'Stabilizasyon' | 'Işık' | 'Ses' | 'Kurgu';

export interface Equipment {
  id: string;
  name: string;
  category: EquipmentCategory;
  spec: string;
  use: string;
}

export const equipmentList: Equipment[] = [
  { id: 'fx3', name: 'Sony FX3', category: 'Kamera', spec: 'Full-frame sinema kamerası · 4K 120p · S-Cinetone', use: 'Reels, tanıtım filmi ve düşük ışıkta gece çekimleri' },
  { id: 'a7siii', name: 'Sony A7S III', category: 'Kamera', spec: '4K 10-bit · ISO 409.600 · S-Log3', use: 'Gece kulübü, etkinlik ve loş mekân çekimleri' },
  { id: 'a7iv', name: 'Sony A7 IV', category: 'Kamera', spec: '33 MP · 4K 60p', use: 'Ürün, mimari ve yemek fotoğrafçılığı' },
  { id: 'gm2470', name: 'Sony FE 24-70mm f/2.8 GM II', category: 'Lens', spec: 'Standart zoom · f/2.8', use: 'Mekân, etkinlik ve röportaj çekimleri' },
  { id: 'gm1635', name: 'Sony FE 16-35mm f/2.8 GM', category: 'Lens', spec: 'Geniş açı zoom', use: 'Otel odası, iç mekân ve mimari kadrajlar' },
  { id: 'gm90macro', name: 'Sony FE 90mm f/2.8 Macro G', category: 'Lens', spec: '1:1 makro', use: 'Mücevher, yemek ve ürün detay çekimleri' },
  { id: 'sigma35', name: 'Sigma 35mm f/1.4 DG DN Art', category: 'Lens', spec: 'Sabit odak · f/1.4', use: 'Sinematik sığ alan derinliği, portre ve atmosfer' },
  { id: 'mavic3pro', name: 'DJI Mavic 3 Pro', category: 'Drone', spec: 'Hasselblad üçlü kamera · 5.1K', use: 'Sahil, marina, otel ve mekân konumu havadan çekim' },
  { id: 'avata2', name: 'DJI Avata 2 (FPV)', category: 'Drone', spec: 'FPV · 4K 60p · 155° görüş', use: 'Mekân içinde uçan tek plan "fly-through" videolar' },
  { id: 'rs4pro', name: 'DJI RS 4 Pro', category: 'Stabilizasyon', spec: '3 eksen gimbal · 4.5 kg yük', use: 'Akıcı yürüyüş planları ve mekân turu' },
  { id: 'aputure600', name: 'Aputure LS 600d Pro', category: 'Işık', spec: '600W gün ışığı LED', use: 'Güçlü ana ışık, dış mekân dolgu' },
  { id: 'amaran200', name: 'Amaran 200x S (×2)', category: 'Işık', spec: 'Bi-color LED · 2700–6500K', use: 'Yemek, ürün ve röportaj ışığı' },
  { id: 'nanlite', name: 'Nanlite PavoTube II 15X', category: 'Işık', spec: 'RGB tüp ışık', use: 'Gece kulübü ve bar atmosferi, renkli efekt' },
  { id: 'rodewireless', name: 'RØDE Wireless PRO', category: 'Ses', spec: '32-bit float kablosuz yaka mikrofonu', use: 'Konuşmalı tanıtım ve röportaj' },
  { id: 'rodentg', name: 'RØDE NTG5', category: 'Ses', spec: 'Shotgun mikrofon', use: 'Ortam sesi ve yemek/ASMR sesleri' },
  { id: 'davinci', name: 'DaVinci Resolve Studio', category: 'Kurgu', spec: 'Kurgu · renk düzenleme', use: 'Sinematik renk ve marka LUT\'ları' },
  { id: 'premiere', name: 'Adobe Premiere Pro & After Effects', category: 'Kurgu', spec: 'Kurgu · motion graphics', use: 'Reels kurgusu, altyazı ve animasyon' },
];

export const equipmentById = (id: string) => equipmentList.find((e) => e.id === id);
