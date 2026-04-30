import React from "react";
import type { Metadata } from "next";
import SiteLayout from "@/components/SiteLayout";
import Section from "@/components/Section";
import { buildPageMetadata } from "@/lib/metadata";
import styles from "./page.module.css";

export const metadata: Metadata = buildPageMetadata("formaetrix", {
  title: "Contact",
  description:
    "Contact FORMÆTRIX for press inquiries, rights, and editorial questions.",
  path: "/formaetrix/contact",
});

export default function FormaetrixContactPage() {
  return (
    <SiteLayout domain="formaetrix">
      <Section narrow>
        <header className={styles.header}>
          <span className={styles.label}>Contact</span>
          <h1 className={styles.title}>Correspondence</h1>
        </header>

        <div className={styles.options}>
          <div className={styles.option}>
            <h2 className={styles.optionLabel}>Press</h2>
            <a href="mailto:press@formaetrix.com" className={styles.optionLink}>
              press@formaetrix.com
            </a>
          </div>

          <div className={styles.option}>
            <h2 className={styles.optionLabel}>Rights & Translation</h2>
            <a href="mailto:rights@formaetrix.com" className={styles.optionLink}>
              rights@formaetrix.com
            </a>
          </div>

          <div className={styles.option}>
            <h2 className={styles.optionLabel}>Editorial</h2>
            <p className={styles.optionText}>
              FORMÆTRIX is not open to unsolicited manuscripts. Correspondence
              about the catalog or imprint may be directed to the press address.
            </p>
          </div>
        </div>

        <p className={styles.note}>
          Response time varies. Unsolicited pitches receive no reply.
        </p>
      </Section>
    </SiteLayout>
  );
}
