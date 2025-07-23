import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p className={styles.copyright}>&copy; {currentYear} ProdukX. Hak Cipta Dilindungi Undang-undang.</p>
        <div className={styles.socialIcons}>
          <a href="#" aria-label="Facebook" className={styles.socialLink}>
            <i className="fab fa-facebook-f">FB</i> {/* Ganti dengan ikon SVG/Font Awesome */}
          </a>
          <a href="#" aria-label="Twitter" className={styles.socialLink}>
            <i className="fab fa-twitter">TW</i> {/* Ganti dengan ikon SVG/Font Awesome */}
          </a>
          <a href="#" aria-label="Instagram" className={styles.socialLink}>
            <i className="fab fa-instagram">IG</i> {/* Ganti dengan ikon SVG/Font Awesome */}
          </a>
          <a href="#" aria-label="LinkedIn" className={styles.socialLink}>
            <i className="fab fa-linkedin-in">LI</i> {/* Ganti dengan ikon SVG/Font Awesome */}
          </a>
        </div>
        <div className={styles.legalLinks}>
          <a href="#" className={styles.legalLink}>Kebijakan Privasi</a>
          <span className={styles.separator}>|</span>
          <a href="#" className={styles.legalLink}>Syarat & Ketentuan</a>
        </div>
      </div>
    </footer>
  );
}