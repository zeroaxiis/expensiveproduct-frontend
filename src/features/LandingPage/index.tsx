"use client";

import React from "react";
import HeroSection from "./Components/HeroSection";
import BenefitsSection from "./Components/BenifitsSection";
import FAQs from "./Components/FAQs";
import Footer from "@/src/components/Footer";

const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <BenefitsSection />
      <FAQs />
      <Footer />
    </>
  );
};

export default LandingPage;
