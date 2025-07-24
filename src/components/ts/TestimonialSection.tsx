"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

interface Testimonial {
  quote: string;
  name: string;
  title: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "ProdukX completely transformed how I work. The intuitive interface and powerful features are incredible!",
    name: "Sarah Chen",
    title: "Creative Director",
  },
  {
    quote: "I never imagined a platform could be this efficient. ProdukX is a total game changer!",
    name: "David Lee",
    title: "Product Manager",
  },
  {
    quote: "Responsive customer support and constantly evolving features. Highly recommended!",
    name: "Maria Garcia",
    title: "Freelancer",
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: index * 0.2 },
  }),
};

const TestimonialCard: React.FC<{ testimonial: Testimonial; index: number }> = ({ testimonial, index }) => {
  return (
    <motion.div custom={index} initial="hidden" animate="visible" variants={cardVariants} className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:scale-105" whileHover={{ scale: 1.03 }}>
      {/* Quote Icon */}
      <p className="text-gray-700 text-base italic leading-relaxed mb-6 pr-4">“{testimonial.quote}”</p>
      <div className="flex items-center gap-4 justify-center">
        <div className="relative">
          <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-blue-400 to-indigo-400 opacity-20" />
        </div>
        <div className="text-center">
          <p className="font-semibold text-gray-900">{testimonial.name}</p>
          <p className="text-sm text-gray-500">{testimonial.title}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default function TestimonialSection() {
  return (
    <section id="testimonial" className="px-6 py-20 bg-gradient-to-b from-white to-blue-50 max-w-7xl mx-auto text-center">
      <motion.h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
        What People Are Saying About <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">ProdukX</span>
      </motion.h2>
      <motion.p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}>
        Hear real stories from users who have experienced the true benefits of using ProdukX.
      </motion.p>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testi, index) => (
          <TestimonialCard key={index} testimonial={testi} index={index} />
        ))}
      </div>
    </section>
  );
}
