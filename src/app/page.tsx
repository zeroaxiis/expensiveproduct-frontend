"use client";

import Header from "../pages/LandingPage/Header";
import LandingPage from "../pages/LandingPage";
import { BackgroundProvider } from "../pages/LandingPage/Components/ChangeBackground";

export default function Home() {
  return (
    <BackgroundProvider>
      <Header />
      <LandingPage />
    </BackgroundProvider>
  );
}
