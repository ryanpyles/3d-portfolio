"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Domain } from "@/lib/domain";
import { useLanguage } from "@/lib/LanguageContext";
import styles from "./Navigation.module.css";

interface NavigationProps {
  domain: Domain;
}

const ryanLinks = [
  { key: "books" as const, href: "/books" },
  { key: "projects" as const, href: "/projects" },
  { key: "about" as const, href: "/about" },
  { key: "contact" as const, href: "/contact" },
];

const formaetrixLinks = [
  { key: "works" as const, href: "/formaetrix/works" },
  { key: "imprint" as const, href: "/formaetrix/imprint" },
  { key: "system" as const, href: "/formaetrix/system" },
  { key: "contact" as const, href: "/formaetrix/contact" },
];

export default function Navigation({ domain }: NavigationProps) {
  const pathname = usePathname();
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const isFormaetrix = domain === "formaetrix";
  const links = isFormaetrix ? formaetrixLinks : ryanLinks;
  const homeHref = isFormaetrix ? "/formaetrix" : "/";
  const logoText = isFormaetrix ? "FORMÆTRIX" : "Ryan J. Pyles";

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <nav
      className={[
        styles.nav,
        scrolled ? styles.scrolled : "",
        isFormaetrix ? styles.formaetrix : styles.ryan,
      ].join(" ")}
      aria-label="Primary navigation"
    >
      <div className={styles.inner}>
        <Link href={homeHref} className={styles.logo} aria-label="Home">
          {logoText}
        </Link>

        <ul className={[styles.links, menuOpen ? styles.open : ""].join(" ")} role="list">
          {links.map(({ key, href }) => {
            const label = t.nav[key] ?? key;
            const active = pathname === href || pathname.startsWith(href + "/");
            return (
              <li key={key}>
                <Link
                  href={href}
                  className={[styles.link, active ? styles.active : ""].join(" ")}
                  aria-current={active ? "page" : undefined}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        <button
          className={styles.burger}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className={[styles.burgerLine, menuOpen ? styles.open : ""].join(" ")} />
          <span className={[styles.burgerLine, menuOpen ? styles.open : ""].join(" ")} />
          <span className={[styles.burgerLine, menuOpen ? styles.open : ""].join(" ")} />
        </button>
      </div>
    </nav>
  );
}
