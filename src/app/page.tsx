import React from "react";
import Header from "../components/ts/Header";
import HeroSection from "../components/ts/HeroSection";
import FeaturesSection from "../components/ts/FeaturesSection";
import TestimonialSection from "../components/ts/TestimonialSection";
import PricingSection from "../components/ts/PricingSection";
import Footer from "../components/ts/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <TestimonialSection />
        <PricingSection />
      </main>
      <Footer />
    </>
  );
}
