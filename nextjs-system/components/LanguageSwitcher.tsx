"use client";

import React, { useRef, useState, useEffect } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import type { LangCode } from "@/lib/LanguageContext";
import styles from "./LanguageSwitcher.module.css";

interface LangOption {
  code: LangCode;
  label: string;
  native: string;
}

const LANGUAGES: LangOption[] = [
  { code: "en", label: "English",    native: "English" },
  { code: "fr", label: "French",     native: "Français" },
  { code: "es", label: "Spanish",    native: "Español" },
  { code: "it", label: "Italian",    native: "Italiano" },
  { code: "pt", label: "Portuguese", native: "Português" },
  { code: "de", label: "German",     native: "Deutsch" },
  { code: "sv", label: "Scandinavian", native: "Svenska" },
  { code: "sc", label: "Mandarin SC", native: "中文(简)" },
  { code: "tc", label: "Mandarin TC", native: "中文(繁)" },
  { code: "ja", label: "Japanese",   native: "日本語" },
  { code: "ar", label: "Arabic",     native: "العربية" },
  { code: "he", label: "Hebrew",     native: "עברית" },
];

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const current = LANGUAGES.find((l) => l.code === lang) ?? LANGUAGES[0];

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  return (
    <div className={styles.root} ref={ref}>
      <button
        className={styles.trigger}
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`Language: ${current.label}`}
      >
        <span className={styles.globe} aria-hidden>
          ◎
        </span>
        <span className={styles.currentCode}>{current.code.toUpperCase()}</span>
      </button>

      {open && (
        <ul
          className={styles.dropdown}
          role="listbox"
          aria-label="Select language"
        >
          {LANGUAGES.map((l) => (
            <li
              key={l.code}
              role="option"
              aria-selected={l.code === lang}
              className={[styles.option, l.code === lang ? styles.selected : ""].join(" ")}
            >
              <button
                onClick={() => {
                  setLang(l.code);
                  setOpen(false);
                }}
              >
                <span className={styles.native}>{l.native}</span>
                <span className={styles.label}>{l.label}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
