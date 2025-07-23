import React from 'react';
import styles from './PricingSection.module.css';

interface PricingPlan {
  name: string;
  price: string;
  frequency: string;
  features: string[];
  isFeatured: boolean;
}

const pricingPlans: PricingPlan[] = [
  {
    name: 'Gratis',
    price: 'Rp0',
    frequency: '/bulan',
    features: [
      'Akses Dasar',
      '1 Proyek Aktif',
      'Dukungan Komunitas',
      'Penyimpanan 500MB',
      'Laporan Dasar',
    ],
    isFeatured: false
  },
  {
    name: 'Premium',
    price: 'Rp99.000',
    frequency: '/bulan',
    features: [
      'Semua Fitur Gratis',
      '5 Proyek Aktif',
      'Dukungan Prioritas 24/7',
      'Penyimpanan 10GB',
      'Laporan Lanjut',
      'Fitur Kolaborasi',
    ],
    isFeatured: true
  },
  {
    name: 'Bisnis',
    price: 'Rp299.000',
    frequency: '/bulan',
    features: [
      'Semua Fitur Premium',
      'Proyek Tanpa Batas',
      'Manajer Akun Khusus',
      'Penyimpanan 100GB',
      'Laporan Eksekutif',
      'Integrasi API Penuh',
      'Pelatihan Tim',
    ],
    isFeatured: false
  }
];

export default function PricingSection() {
  return (
    <section id="harga" className={styles.pricing}>
      <h2 className={styles.sectionTitle}>Pilih Paket yang Sesuai Untukmu</h2>
      <p className={styles.sectionSubtitle}>Temukan fleksibilitas dan fitur yang Anda butuhkan dengan harga terbaik.</p>
      <div className={styles.pricingGrid}>
        {pricingPlans.map((plan, index) => (
          <div key={index} className={`${styles.priceCard} ${plan.isFeatured ? styles.featured : ''}`}>
            <h3 className={styles.planName}>{plan.name}</h3>
            <p className={styles.price}>{plan.price}<span className={styles.frequency}>{plan.frequency}</span></p>
            <ul className={styles.featureList}>
              {plan.features.map((feature, i) => (
                <li key={i}>
                  <span className={styles.checkIcon}>✓</span> {feature}
                </li>
              ))}
            </ul>
            <button className={styles.chooseButton}>Pilih Paket Ini</button>
          </div>
        ))}
      </div>
    </section>
  );
}