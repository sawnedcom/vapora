import React from 'react';
import Image from 'next/image'; // PASTIKAN IMPORT INI BENAR
import styles from './TestimonialSection.module.css';

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  avatar: string; // Path ke gambar avatar
}

const testimonials: Testimonial[] = [
  {
    // Menggunakan backticks untuk string agar tanda kutip tidak perlu di-escape
    // Atau bisa juga mengganti " menjadi &quot;
    quote: 'ProdukX benar-benar mengubah cara saya bekerja. Antarmuka yang intuitif dan fiturnya sangat powerful!',
    name: 'Sarah Chen',
    title: 'Creative Director',
    avatar: '/images/avatar-1.jpg', // Ganti dengan path avatar asli di public/images
  },
  {
    quote: 'Saya tidak pernah menyangka sebuah platform bisa seefisien ini. ProdukX adalah game changer!',
    name: 'David Lee',
    title: 'Product Manager',
    avatar: '/images/avatar-2.jpg', // Ganti dengan path avatar asli di public/images
  },
  {
    quote: 'Dukungan pelanggan yang responsif dan fitur-fitur yang terus berkembang. Sangat direkomendasikan!',
    name: 'Maria Garcia',
    title: 'Freelancer',
    avatar: '/images/avatar-3.jpg', // Ganti dengan path avatar asli di public/images
  },
];

export default function TestimonialSection() {
  return (
    <section id="testimonial" className={styles.testimonials}>
      <h2 className={styles.sectionTitle}>Apa Kata Mereka Tentang <span className={styles.highlight}>ProdukX</span>?</h2>
      <p className={styles.sectionSubtitle}>Dengarkan pengalaman nyata dari pengguna kami yang telah merasakan manfaatnya.</p>
      <div className={styles.testimonialGrid}>
        {testimonials.map((testi, index) => (
          <div key={index} className={styles.testimonialCard}>
            {/* Menggunakan backticks untuk quote agar tanda kutip di dalamnya tidak memicu error */}
            <p className={styles.quote}>&quot;{testi.quote}&quot;</p>
            <div className={styles.authorInfo}>
              {/* Gunakan komponen Image dari next/image */}
              <Image
                src={testi.avatar}
                alt={testi.name}
                width={60} // Tentukan lebar
                height={60} // Tentukan tinggi
                className={styles.avatar}
              />
              <div>
                <p className={styles.authorName}>{testi.name}</p>
                <p className={styles.authorTitle}>{testi.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}