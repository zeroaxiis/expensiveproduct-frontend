"use client";

import Header from "../common/components/Header";
import LandingPage from "../pages/LandingPage";
import { BackgroundProvider } from "../common/components/ChangeBackground";

export default function Home() {
  return (
    <BackgroundProvider>
      <Header />
      <LandingPage />
    </BackgroundProvider>
  );
}
