"use client";

import Header from "../components/Header";
import LandingPage from "../features/LandingPage";
import { BackgroundProvider } from "./components/ChangeBackground";

export default function Home() {
  return (
    <BackgroundProvider>
      <Header />
      <LandingPage />
    </BackgroundProvider>
  );
}
