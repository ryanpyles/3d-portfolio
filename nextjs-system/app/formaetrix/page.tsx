import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import type { Metadata } from "next";
import SiteLayout from "@/components/SiteLayout";
import Section from "@/components/Section";
import BookCard from "@/components/BookCard";
import { formaetrixBooks } from "@/content/books";
import { buildOrganizationJsonLd } from "@/lib/metadata";
import styles from "./page.module.css";

const BlobNav = dynamic(() => import("@/components/BlobNav"), {
  ssr: false,
  loading: () => null,
});
const BlobNavFallback = dynamic(
  () => import("@/components/BlobNav").then((m) => ({ default: m.BlobNavFallback })),
  { ssr: false }
);

export const metadata: Metadata = {
  title: "FORMÆTRIX — A System for Language-Bound Realities",
  description:
    "FORMÆTRIX is an imprint publishing experimental and literary fiction. Home of Elian Voigt — author of Declensions of Dark Water and Babel Threshold.",
  keywords: [
    "Elian Voigt books",
    "experimental fiction",
    "Formaetrix imprint",
    "literary horror",
    "speculative fiction novels",
    "language fiction",
  ],
};

export default function FormaetrixHomePage() {
  const jsonLd = buildOrganizationJsonLd();

  return (
    <SiteLayout domain="formaetrix">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>FORMÆTRIX</h1>
            <p className={styles.heroSub}>
              A system for producing language-bound realities.
            </p>
            <div className={styles.heroCtas}>
              <Link href="/formaetrix/works" className={styles.ctaPrimary}>
                Works
              </Link>
              <Link href="/formaetrix/imprint" className={styles.ctaSecondary}>
                Imprint
              </Link>
            </div>
          </div>

          <div className={styles.heroBlobWrap}>
            <BlobNav domain="formaetrix" />
            <div className={styles.heroBlobFallback}>
              <BlobNavFallback domain="formaetrix" />
            </div>
          </div>
        </div>
      </section>

      {/* Works */}
      <Section id="works">
        <header className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Works</h2>
          <Link href="/formaetrix/works" className={styles.sectionLink}>
            All works →
          </Link>
        </header>
        <div className={styles.bookList}>
          {formaetrixBooks.slice(0, 3).map((book) => (
            <BookCard key={book.slug} book={book} buyLabel="Acquire" byLabel="—" />
          ))}
        </div>
      </Section>
    </SiteLayout>
  );
}
