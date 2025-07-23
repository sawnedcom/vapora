import styles from './Header.module.css';
import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          {/* Anda bisa mengganti ini dengan komponen Image dari next/image untuk logo asli */}
          ProdukX
        </Link>
      </div>
      <nav className={styles.nav}>
        <a href="#fitur" className={styles.navLink}>Fitur</a>
        <a href="#testimonial" className={styles.navLink}>Testimonial</a>
        <a href="#harga" className={styles.navLink}>Harga</a>
        <button className={styles.ctaButton}>Dapatkan Sekarang</button>
      </nav>
    </header>
  );
}