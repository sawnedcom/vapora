"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

export default function HeroSection() {
  // Definisikan variants dengan tipe eksplisit untuk menghindari error
  const textVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 overflow-hidden">
      {/* Background dekoratif */}
      <div className="absolute inset-0 bg-[url('/images/hero-pattern.svg')] bg-cover bg-center opacity-10" />

      <div className="container mx-auto px-6 py-16 lg:py-24 max-w-7xl flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        {/* Bagian Teks */}
        <motion.div className="flex-1 text-center lg:text-left z-10" initial="hidden" animate="visible" variants={textVariants}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900 tracking-tight">
            Revolutionize Your Learning with <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Vapora</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
            Discover an innovative platform crafted to <strong className="text-gray-800">skyrocket your productivity</strong> and <strong className="text-gray-800">deepen your understanding</strong> like never before.
          </p>
          <div className="mt-8 flex justify-center lg:justify-start gap-4">
            <Link href="#cta">
              <motion.button className="cursor-pointer px-3 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                Try It Free Now
              </motion.button>
            </Link>
            <Link href="#learn-more">
              <motion.button className="cursor-pointer px-3 py-3 border-2 border-blue-600 text-blue-600 text-sm font-semibold rounded-xl hover:bg-blue-50 transition-all duration-300" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                Learn More
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Bagian Gambar */}
        <motion.div className="flex-1 relative" initial="hidden" animate="visible" variants={imageVariants}>
          <div className="relative w-full max-w-[600px] mx-auto">
            <Image src="/images/herosection.png" alt="Vapora Dashboard Illustration" width={600} height={400} priority className="rounded-2xl shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-500" />
            {/* Overlay dekoratif */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-blue-200 rounded-full opacity-50 blur-xl" />
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-indigo-200 rounded-full opacity-50 blur-xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
