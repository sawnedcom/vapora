import type { Metadata } from 'next'; // Import type Metadata
import { Poppins } from 'next/font/google'; // Import Poppins dari next/font/google
import './css/globals.css'; // Import global CSS Anda

// Konfigurasi font Poppins
// Sesuaikan 'weight' sesuai kebutuhan Anda.
// 'subsets' 'latin' adalah yang paling umum.
const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'], // Pilih bobot font yang akan Anda gunakan
  subsets: ['latin'],
  display: 'swap', // 'swap' akan menampilkan font default dulu, lalu ganti ke Poppins setelah dimuat
});

// Metadata untuk SEO
// Ini akan muncul di <head> HTML
export const metadata: Metadata = {
  title: 'ProdukX - Revolusi Belajar Anda', // Judul utama situs Anda
  description: 'Platform inovatif yang dirancang untuk meningkatkan produktivitas dan pemahaman Anda.', // Deskripsi singkat situs Anda
  keywords: ['produkX', 'belajar', 'inovasi', 'produktivitas', 'platform'], // Kata kunci relevan
  authors: [{ name: 'Tim ProdukX' }], // Penulis atau tim
  creator: 'Nama Anda / Perusahaan Anda', // Pembuat situs
  publisher: 'Nama Anda / Perusahaan Anda', // Penerbit situs
  openGraph: {
    title: 'ProdukX - Revolusi Belajar Anda',
    description: 'Platform inovatif yang dirancang untuk meningkatkan produktivitas dan pemahaman Anda.',
    url: 'https://www.yourdomain.com', // Ganti dengan domain asli Anda
    siteName: 'ProdukX',
    images: [
      {
        url: 'https://www.yourdomain.com/og-image.jpg', // Ganti dengan URL gambar OG Anda
        width: 1200,
        height: 630,
        alt: 'ProdukX Landing Page',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ProdukX - Revolusi Belajar Anda',
    description: 'Platform inovatif yang dirancang untuk meningkatkan produktivitas dan pemahaman Anda.',
    creator: '@yourtwitterhandle', // Ganti dengan Twitter handle Anda
    images: ['https://www.yourdomain.com/twitter-image.jpg'], // Ganti dengan URL gambar Twitter Anda
  },
};

// RootLayout adalah komponen utama yang membungkus seluruh aplikasi Anda
export default function RootLayout({
  children, // children adalah komponen halaman Anda (misalnya page.tsx)
}: {
  children: React.ReactNode; // Tipe untuk children
}) {
  return (
    <html lang="id">
      {/* Menerapkan font Poppins ke seluruh body */}
      <body className={poppins.className}>{children}</body>
    </html>
  );
}