import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';

export type Language = 'en' | 'ru';

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

import { translations } from '@/i18n/translations';
import { ruDictionary } from '@/i18n/runtimeDictionary';

// ---- Runtime DOM translator -------------------------------------------------
// Pages like Vietnam / KiteSafari / Brazil contain large amounts of hardcoded
// English strings. Instead of refactoring thousands of JSX nodes, we walk all
// text nodes after each render and swap any node whose trimmed text matches
// an entry in the EN→RU dictionary.

const ORIGINAL_ATTR = 'data-en-original';

function applyTranslation(target: 'ru' | 'en') {
  if (typeof document === 'undefined') return;

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = (node as Text).parentElement;
      if (!parent) return NodeFilter.FILTER_REJECT;
      // Skip script/style/code blocks and editable inputs
      const tag = parent.tagName;
      if (tag === 'SCRIPT' || tag === 'STYLE' || tag === 'NOSCRIPT' || tag === 'TEXTAREA') {
        return NodeFilter.FILTER_REJECT;
      }
      if (parent.isContentEditable) return NodeFilter.FILTER_REJECT;
      const value = (node as Text).nodeValue;
      if (!value || !value.trim()) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    },
  });

  const nodes: Text[] = [];
  let n: Node | null;
  while ((n = walker.nextNode())) nodes.push(n as Text);

  for (const node of nodes) {
    const parent = node.parentElement!;
    const original = parent.getAttribute(ORIGINAL_ATTR);
    const raw = node.nodeValue ?? '';
    const trimmed = raw.trim();

    if (target === 'ru') {
      const translation = ruDictionary[trimmed];
      if (translation && translation !== trimmed) {
        if (!original) parent.setAttribute(ORIGINAL_ATTR, raw);
        // Preserve surrounding whitespace
        const leading = raw.match(/^\s*/)?.[0] ?? '';
        const trailing = raw.match(/\s*$/)?.[0] ?? '';
        node.nodeValue = leading + translation + trailing;
      }
    } else {
      // Restore English if we previously swapped
      if (original) {
        node.nodeValue = original;
        parent.removeAttribute(ORIGINAL_ATTR);
      }
    }
  }
}

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>(() => {
    if (typeof window === 'undefined') return 'en';
    const saved = window.localStorage.getItem('ogo-lang');
    if (saved === 'en' || saved === 'ru') return saved;
    if (saved === 'gr') window.localStorage.setItem('ogo-lang', 'en');
    return 'en';
  });

  const setLang = useCallback((l: Language) => {
    setLangState(l);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('ogo-lang', l);
    }
    if (typeof document !== 'undefined') {
      document.documentElement.lang = l;
    }
  }, []);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  // Apply runtime translation whenever language changes, AND on every DOM
  // mutation (route change, lazy content, accordions opening, etc.).
  useEffect(() => {
    if (typeof window === 'undefined') return;

    let raf = 0;
    const schedule = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => applyTranslation(lang === 'ru' ? 'ru' : 'en'));
    };

    schedule();

    const observer = new MutationObserver(schedule);
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true,
    });

    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [lang]);

  const t = useCallback((key: string): string => {
    const keys = key.split('.');
    let result: any = translations[lang];
    for (const k of keys) result = result?.[k];
    if (typeof result === 'string') return result;
    let fallback: any = translations['en'];
    for (const k of keys) fallback = fallback?.[k];
    return typeof fallback === 'string' ? fallback : key;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
