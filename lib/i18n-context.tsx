"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { translations, Locale } from "./translations";

type TranslationType = typeof translations.fr;

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: TranslationType;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

const STORAGE_KEY = "marie-pneu-locale";

function getBrowserLocale(): Locale {
  if (typeof window === "undefined") return "fr";
  
  const browserLang = navigator.language.toLowerCase();
  
  if (browserLang.startsWith("de")) return "de";
  if (browserLang.startsWith("en")) return "en";
  return "fr"; // Default to French
}

function getStoredLocale(): Locale | null {
  if (typeof window === "undefined") return null;
  
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored && (stored === "fr" || stored === "de" || stored === "en")) {
    return stored as Locale;
  }
  return null;
}

function storeLocale(locale: Locale): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, locale);
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("fr");
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Check stored locale first, then browser preference
    const storedLocale = getStoredLocale();
    const detectedLocale = storedLocale || getBrowserLocale();
    setLocaleState(detectedLocale);
    setIsInitialized(true);
    
    // Update HTML lang attribute
    document.documentElement.lang = detectedLocale;
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    storeLocale(newLocale);
    document.documentElement.lang = newLocale;
  };

  const t = translations[locale];

  // Prevent flash of wrong language
  if (!isInitialized) {
    return null;
  }

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
}
