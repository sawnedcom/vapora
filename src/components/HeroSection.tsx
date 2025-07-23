import React from 'react';
import Image from 'next/image'; // Menggunakan komponen Image dari Next.js
import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.headline}>Revolusi Cara Anda Belajar dengan <span className={styles.highlight}>ProdukX</span></h1>
        <p className={styles.subHeadline}>Platform inovatif yang dirancang untuk **meningkatkan produktivitas** dan **pemahaman** Anda secara signifikan.</p>
        <button className={styles.mainCta}>Coba Gratis Sekarang</button>
      </div>
      <div className={styles.imageContainer}>
        {/* Contoh penggunaan komponen Image. Ganti src, alt, width, height sesuai gambar asli Anda */}
        <Image
          src="/images/hero-illustration.svg" // Pastikan gambar ini ada di folder public/images
          alt="ProdukX Dashboard Illustration"
          width={600}
          height={400}
          priority // Muat lebih awal karena ini bagian paling atas
          className={styles.heroImage}
        />
      </div>
    </section>
  );
}