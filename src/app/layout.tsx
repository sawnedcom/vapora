import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./css/globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vapora - Revolutionize Your Learning",
  description: "An innovative platform designed to boost your productivity and understanding.",
  keywords: ["ProdukX", "learning", "innovation", "productivity", "platform"],
  authors: [{ name: "ProdukX Team" }],
  creator: "Your Name or Company",
  publisher: "Your Name or Company",
  openGraph: {
    title: "Vapora - Revolutionize Your Learning",
    description: "An innovative platform designed to boost your productivity and understanding.",
    url: "https://www.yourdomain.com",
    siteName: "ProdukX",
    images: [
      {
        url: "https://www.yourdomain.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ProdukX Landing Page",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vapora - Revolutionize Your Learning",
    description: "An innovative platform designed to boost your productivity and understanding.",
    creator: "@yourtwitterhandle",
    images: ["https://www.yourdomain.com/twitter-image.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
