"use client";

import { ReactNode } from "react";
import { BackgroundProvider } from "./ChangeBackground";
import Header from "../../components/Header";

interface AppWrapperProps {
  children: ReactNode;
}

export default function AppWrapper({ children }: AppWrapperProps) {
  return (
    <BackgroundProvider>
      <Header />
      {children}
    </BackgroundProvider>
  );
}
