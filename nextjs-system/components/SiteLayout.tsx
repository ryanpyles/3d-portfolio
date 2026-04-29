import React from "react";
import type { Domain } from "@/lib/domain";
import Navigation from "./Navigation";
import Footer from "./Footer";
import styles from "./SiteLayout.module.css";

interface SiteLayoutProps {
  domain: Domain;
  children: React.ReactNode;
}

export default function SiteLayout({ domain, children }: SiteLayoutProps) {
  return (
    <div
      className={styles.root}
      data-domain={domain}
    >
      <Navigation domain={domain} />
      <main className={styles.main}>{children}</main>
      <Footer domain={domain} />
    </div>
  );
}
