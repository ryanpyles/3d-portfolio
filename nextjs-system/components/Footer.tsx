import React from "react";
import Link from "next/link";
import type { Domain } from "@/lib/domain";
import styles from "./Footer.module.css";

interface FooterProps {
  domain: Domain;
}

const year = new Date().getFullYear();

export default function Footer({ domain }: FooterProps) {
  const isFormaetrix = domain === "formaetrix";

  return (
    <footer className={[styles.footer, isFormaetrix ? styles.formaetrix : styles.ryan].join(" ")}>
      <div className={styles.inner}>
        {isFormaetrix ? (
          <div className={styles.formaetrixContent}>
            <p className={styles.imprint}>FORMÆTRIX</p>
            <p className={styles.sub}>
              A system for producing language-bound realities.
            </p>
            <p className={styles.credit}>
              <Link href="https://ryanpyles.com" className={styles.creditLink}>
                Built by Ryan J. Pyles
              </Link>
            </p>
          </div>
        ) : (
          <div className={styles.ryanContent}>
            <p className={styles.name}>Ryan J. Pyles</p>
            <p className={styles.sub}>Writing. Systems. Design.</p>
            <Link href="/?domain=formaetrix" className={styles.formaetrixLink}>
              FORMÆTRIX →
            </Link>
          </div>
        )}
        <p className={styles.copy}>
          © {year}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
