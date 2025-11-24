"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface BackgroundContextType {
  backgroundColor: string;
  setBackgroundColor: (color: string) => void;
}

const BackgroundContext = createContext<BackgroundContextType | undefined>(
  undefined
);

export const useBackgroundColor = () => {
  const context = useContext(BackgroundContext);
  if (!context) {
    throw new Error(
      "useBackgroundColor must be used within BackgroundProvider"
    );
  }
  return context;
};

interface BackgroundProviderProps {
  children: ReactNode;
}

export const BackgroundProvider = ({ children }: BackgroundProviderProps) => {
  const [backgroundColor, setBackgroundColor] = useState("bg-white");

  return (
    <BackgroundContext.Provider value={{ backgroundColor, setBackgroundColor }}>
      <div
        className={`transition-colors duration-1000 ease-in-out ${backgroundColor}`}
      >
        {children}
      </div>
    </BackgroundContext.Provider>
  );
};
