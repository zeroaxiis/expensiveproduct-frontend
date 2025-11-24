"use client";

import React from "react";
import HeroSection from "./Components/HeroSection";
import BenefitsSection from "./Components/BenifitsSection";
import { BackgroundProvider } from "@/src/common/components/ChangeBackground";

const LandingPage = () => {
  return (
    <BackgroundProvider>
      <HeroSection />
      <BenefitsSection />
    </BackgroundProvider>
  );
};

export default LandingPage;
