// src/components/Footer.tsx
"use client";

import React from "react";
import { Facebook, X, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12 px-4 sm:px-6 border-t border-gray-700">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-8">
        {/* Logo/Brand */}
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">Vapora</span>
          <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded-full">PRO</span>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6">
          <a href="#" aria-label="Facebook" className="p-3 bg-gray-800 hover:bg-blue-600 rounded-full transition-all duration-300 group">
            <Facebook className="w-5 h-5 text-gray-300 group-hover:text-white" />
          </a>
          <a href="#" aria-label="Twitter" className="p-3 bg-gray-800 hover:bg-sky-500 rounded-full transition-all duration-300 group">
            <X className="w-5 h-5 text-gray-300 group-hover:text-white" />
          </a>
          <a href="#" aria-label="Instagram" className="p-3 bg-gray-800 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 rounded-full transition-all duration-300 group">
            <Instagram className="w-5 h-5 text-gray-300 group-hover:text-white" />
          </a>
          <a href="#" aria-label="LinkedIn" className="p-3 bg-gray-800 hover:bg-blue-700 rounded-full transition-all duration-300 group">
            <Linkedin className="w-5 h-5 text-gray-300 group-hover:text-white" />
          </a>
        </div>

        {/* Legal Links */}
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            Privacy Policy
          </a>
          <span className="text-gray-600">|</span>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            Terms of Service
          </a>
          <span className="text-gray-600">|</span>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            Cookie Policy
          </a>
          <span className="text-gray-600">|</span>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            GDPR
          </a>
        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-sm text-center">
          &copy; {currentYear} Vapora. All rights reserved. <Link className="border-b text-white" href="https://github.com/sawnedcom">sawnedcom</Link>
        </p>

        {/* Back to Top */}
        <button onClick={scrollToTop} className="mt-4 text-xs text-gray-400 hover:text-white flex items-center gap-1 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 15l-6-6-6 6" />
          </svg>
          Back to Top
        </button>
      </div>
    </footer>
  );
}
