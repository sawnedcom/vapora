import React from 'react';
import styles from './FeaturesSection.module.css';

interface Feature {
  icon: string; // Bisa berupa path SVG atau emoji placeholder
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: '🚀', // Contoh: Ganti dengan <svg> ikon atau komponen ikon
    title: 'Performa Ultra Cepat',
    description: 'Rasakan kecepatan luar biasa dalam setiap interaksi, tanpa jeda yang mengganggu produktivitas Anda.'
  },
  {
    icon: '💡',
    title: 'Desain Intuitif',
    description: 'Antarmuka yang bersih dan mudah digunakan, dirancang untuk pengalaman pengguna yang mulus dari awal.'
  },
  {
    icon: '🔒',
    title: 'Keamanan Data Terdepan',
    description: 'Data Anda terlindungi dengan enkripsi mutakhir dan protokol keamanan standar industri.'
  },
  {
    icon: '🛠️',
    title: 'Kustomisasi Fleksibel',
    description: 'Sesuaikan pengaturan dan tampilan sesuai kebutuhan unik Anda untuk hasil maksimal.'
  },
  {
    icon: '🤝',
    title: 'Dukungan Pelanggan Prioritas',
    description: 'Tim ahli kami siap membantu Anda kapan saja, memastikan pengalaman tanpa hambatan.'
  },
  {
    icon: '📈',
    title: 'Analisis Mendalam',
    description: 'Dapatkan wawasan berharga dari data Anda dengan alat analisis yang kuat dan mudah dipahami.'
  }
];

export default function FeaturesSection() {
  return (
    <section id="fitur" className={styles.features}>
      <h2 className={styles.sectionTitle}>Mengapa Memilih <span className={styles.highlight}>ProdukX</span>?</h2>
      <p className={styles.sectionSubtitle}>Fitur-fitur unggulan yang akan mengubah cara Anda bekerja dan berkreasi.</p>
      <div className={styles.featureGrid}>
        {features.map((feature, index) => (
          <div key={index} className={styles.featureCard}>
            <div className={styles.iconContainer}>{feature.icon}</div>
            <h3 className={styles.featureTitle}>{feature.title}</h3>
            <p className={styles.featureDescription}>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}