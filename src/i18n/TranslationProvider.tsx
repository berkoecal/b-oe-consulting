"use client";

import { createContext, useContext } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Dictionary = any; // Simplify for now, could type it cleanly based on json

const TranslationContext = createContext<{ dict: Dictionary, lang: string } | null>(null);

export function TranslationProvider({ 
  children, 
  dictionary,
  lang 
}: { 
  children: React.ReactNode, 
  dictionary: Dictionary,
  lang: string
}) {
  return (
    <TranslationContext.Provider value={{ dict: dictionary, lang }}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
}
