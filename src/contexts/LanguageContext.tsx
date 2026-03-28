import React, { createContext, useContext, useState, useCallback } from 'react';

export type Language = 'en' | 'ru' | 'gr';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
};

// Import translations
import { translations } from '@/i18n/translations';

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>('en');

  const t = useCallback((key: string): string => {
    const keys = key.split('.');
    let result: any = translations[lang];
    for (const k of keys) {
      result = result?.[k];
    }
    if (typeof result === 'string') return result;
    // Fallback to English
    let fallback: any = translations['en'];
    for (const k of keys) {
      fallback = fallback?.[k];
    }
    return typeof fallback === 'string' ? fallback : key;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
