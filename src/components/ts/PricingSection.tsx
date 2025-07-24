"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

interface PricingPlan {
  name: string;
  price: string;
  frequency: string;
  features: string[];
  isFeatured: boolean;
}

const pricingPlans: PricingPlan[] = [
  {
    name: "Free",
    price: "$0",
    frequency: "/month",
    features: ["Basic Access", "1 Active Project", "Community Support", "500MB Storage", "Basic Reports"],
    isFeatured: false,
  },
  {
    name: "Premium",
    price: "$6.50",
    frequency: "/month",
    features: ["All Free Features", "5 Active Projects", "24/7 Priority Support", "10GB Storage", "Advanced Reports", "Collaboration Tools"],
    isFeatured: true,
  },
  {
    name: "Business",
    price: "$19.50",
    frequency: "/month",
    features: ["All Premium Features", "Unlimited Projects", "Dedicated Account Manager", "100GB Storage", "Executive Reports", "Full API Access", "Team Training"],
    isFeatured: false,
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

const PricingCard: React.FC<{ plan: PricingPlan; index: number }> = ({ plan, index }) => {
  return (
    <motion.div custom={index} initial="hidden" animate="visible" variants={cardVariants} className={`relative flex flex-col justify-between rounded-2xl p-6 sm:p-8 bg-white shadow-lg transition-all duration-300 ${plan.isFeatured ? "border-2 border-blue-600 scale-100 sm:scale-105 bg-gradient-to-b from-blue-50 to-white shadow-xl" : "border border-gray-200 hover:shadow-xl"}`} whileHover={{ scale: plan.isFeatured ? 1.06 : 1.03, transition: { duration: 0.3 } }}>
      {plan.isFeatured && <span className="absolute -top-2 sm:-top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs sm:text-sm font-semibold px-3 py-1 rounded-full">Most Popular</span>}
      <div>
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{plan.name}</h3>
        <p className="mt-3 sm:mt-4 text-3xl sm:text-4xl font-extrabold text-blue-600">
          {plan.price}
          <span className="text-sm sm:text-base font-medium text-gray-500">{plan.frequency}</span>
        </p>
        <ul className="mt-4 sm:mt-6 space-y-3 sm:space-y-4 text-gray-700 text-sm sm:text-base">
          {plan.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2 sm:gap-3">
              <span className="text-green-500 font-bold text-base sm:text-lg">✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <motion.button className={`mt-6 sm:mt-8 w-full px-4 sm:px-6 py-2 sm:py-3 rounded-xl text-white font-semibold text-base sm:text-lg transition-all duration-300 ${plan.isFeatured ? "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700" : "bg-gray-700 hover:bg-gray-800"} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} aria-label={`Choose the ${plan.name} plan`}>
        Choose This Plan
      </motion.button>
    </motion.div>
  );
};

export default function PricingSection() {
  return (
    <section id="pricing" className="px-4 sm:px-6 py-12 sm:py-20 bg-gradient-to-b from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
          Choose the Right Plan for You
        </motion.h2>
        <motion.p className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-12 max-w-xl sm:max-w-2xl mx-auto" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}>
          Find the flexibility and features you need at the best value.
        </motion.p>
        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} plan={plan} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
