"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import type { LangCode } from "@/content/translations";
import translations from "@/content/translations";
import type { Translations } from "@/content/translations";

const RTL_LANGS: LangCode[] = ["ar", "he"];
const CJK_LANGS: LangCode[] = ["sc", "tc", "ja"];

interface LanguageContextValue {
  lang: LangCode;
  setLang: (l: LangCode) => void;
  t: Translations;
  isRTL: boolean;
  isCJK: boolean;
  fontStack: string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function normalizeLang(raw: string): LangCode {
  const map: Record<string, LangCode> = {
    "zh-cn": "sc",
    "zh-hans": "sc",
    "zh-tw": "tc",
    "zh-hant": "tc",
    zh: "sc",
    "pt-br": "pt",
    pt: "pt",
    "sv-se": "sv",
    no: "sv",
    da: "sv",
  };
  const lower = raw.toLowerCase();
  if (lower in map) return map[lower];
  const base = lower.split("-")[0] as LangCode;
  const valid: LangCode[] = [
    "en","fr","es","it","pt","de","sv","sc","tc","ja","ar","he",
  ];
  return valid.includes(base) ? base : "en";
}

function getFontStack(lang: LangCode): string {
  if (RTL_LANGS.includes(lang)) {
    return lang === "ar"
      ? "'Noto Sans Arabic', 'Arabic UI Text', Tahoma, system-ui, sans-serif"
      : "'Noto Sans Hebrew', 'Arial Hebrew', system-ui, sans-serif";
  }
  if (lang === "ja") {
    return "'Noto Sans JP', 'Hiragino Kaku Gothic Pro', 'Meiryo', system-ui, sans-serif";
  }
  if (lang === "sc") {
    return "'Noto Sans SC', 'PingFang SC', 'Microsoft YaHei', system-ui, sans-serif";
  }
  if (lang === "tc") {
    return "'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', system-ui, sans-serif";
  }
  return "'Inter', system-ui, -apple-system, sans-serif";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<LangCode>("en");

  useEffect(() => {
    const stored = localStorage.getItem("preferred-lang");
    if (stored) {
      setLangState(normalizeLang(stored));
    } else {
      const browser = navigator.language;
      setLangState(normalizeLang(browser));
    }
  }, []);

  const setLang = (l: LangCode) => {
    setLangState(l);
    localStorage.setItem("preferred-lang", l);
  };

  const isRTL = RTL_LANGS.includes(lang);
  const isCJK = CJK_LANGS.includes(lang);
  const fontStack = getFontStack(lang);

  useEffect(() => {
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
    document.documentElement.lang = lang;
    document.documentElement.style.setProperty("--font-body", fontStack);
  }, [lang, isRTL, fontStack]);

  const value: LanguageContextValue = {
    lang,
    setLang,
    t: translations[lang],
    isRTL,
    isCJK,
    fontStack,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}

export type { LangCode };
