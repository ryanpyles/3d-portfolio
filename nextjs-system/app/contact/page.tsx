import React from "react";
import type { Metadata } from "next";
import SiteLayout from "@/components/SiteLayout";
import Section from "@/components/Section";
import { buildPageMetadata } from "@/lib/metadata";
import styles from "./page.module.css";

export const metadata: Metadata = buildPageMetadata("ryan", {
  title: "Contact",
  description:
    "Contact Ryan J. Pyles for web development, brand design, or speaking inquiries.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <SiteLayout domain="ryan">
      <Section narrow>
        <header className={styles.header}>
          <h1>Contact</h1>
          <p className={styles.intro}>
            For web development, brand design, or speaking inquiries.
          </p>
        </header>

        <div className={styles.options}>
          <div className={styles.option}>
            <h2 className={styles.optionLabel}>General</h2>
            <a href="mailto:ryan@ryanpyles.com" className={styles.optionLink}>
              ryan@ryanpyles.com
            </a>
          </div>

          <div className={styles.option}>
            <h2 className={styles.optionLabel}>Press & Rights</h2>
            <a href="mailto:press@ryanpyles.com" className={styles.optionLink}>
              press@ryanpyles.com
            </a>
          </div>

          <div className={styles.option}>
            <h2 className={styles.optionLabel}>Availability</h2>
            <p className={styles.optionText}>
              Currently available for selected web development and brand design
              engagements. Response time is typically two business days.
            </p>
          </div>
        </div>

        <p className={styles.note}>
          I do not respond to cold pitches, unsolicited manuscripts, or
          automated outreach.
        </p>
      </Section>
    </SiteLayout>
  );
}
