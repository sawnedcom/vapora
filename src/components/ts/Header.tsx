"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Rocket, Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 group">
              <Rocket className="w-6 h-6 text-blue-600 group-hover:text-blue-700 transition-colors" />
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Vapora</span>
              <span className="hidden sm:inline-block text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full ml-2">PRO</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-gray-600 hover:text-blue-600 transition-colors font-medium text-sm uppercase tracking-wider">
              Features
            </Link>
            <Link href="#testimonials" className="text-gray-600 hover:text-blue-600 transition-colors font-medium text-sm uppercase tracking-wider">
              Testimonials
            </Link>
            <Link href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors font-medium text-sm uppercase tracking-wider">
              Pricing
            </Link>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 transition-colors">Sign In</button>
            <button className="items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-sm transition-all">Get Started</button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none">
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${mobileMenuOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
          <Link href="#features" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50" onClick={() => setMobileMenuOpen(false)}>
            Features
          </Link>
          <Link href="#testimonials" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50" onClick={() => setMobileMenuOpen(false)}>
            Testimonials
          </Link>
          <Link href="#pricing" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50" onClick={() => setMobileMenuOpen(false)}>
            Pricing
          </Link>
          <div className="pt-4 pb-2 border-t border-gray-200">
            <button className="w-full flex justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 mb-2">Sign In</button>
            <button className="w-full flex justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-sm">Get Started</button>
          </div>
        </div>
      </div>
    </header>
  );
}
