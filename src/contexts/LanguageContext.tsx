"use client";

import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

import {Language} from "@/src/types/Language";
import pt from "@/src/locales/pt.json";
import en from "@/src/locales/en.json";


interface LanguageContextType {
  language: Language;
  translations: typeof pt;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({
  children,
}: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>("PT");

  const translations = language === "PT" ? pt : en;

  const toggleLanguage = () => {
    setLanguage((currentLanguage) =>
      currentLanguage === "PT" ? "EN" : "PT"
    );
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        translations,
        toggleLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error(
      "useLanguage must be used inside a LanguageProvider"
    );
  }

  return context;
}