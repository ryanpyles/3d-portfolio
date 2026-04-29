import React from "react";
import type { Metadata } from "next";
import SiteLayout from "@/components/SiteLayout";
import Section from "@/components/Section";
import BookCard from "@/components/BookCard";
import { formaetrixBooks } from "@/content/books";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Works",
  description:
    "The complete works published under FORMÆTRIX — including Elian Voigt's Declensions of Dark Water, Babel Threshold, and Liminal 6:17.",
  keywords: [
    "Elian Voigt books",
    "Formaetrix works",
    "experimental fiction",
    "literary horror novels",
    "speculative fiction",
  ],
};

export default function FormaetrixWorksPage() {
  return (
    <SiteLayout domain="formaetrix">
      <Section>
        <header className={styles.header}>
          <span className={styles.label}>Works</span>
          <h1 className={styles.title}>The Catalog</h1>
          <p className={styles.intro}>
            Fiction that operates at the threshold of its own form.
          </p>
        </header>

        <div className={styles.list}>
          {formaetrixBooks.map((book) => (
            <BookCard key={book.slug} book={book} buyLabel="Acquire" byLabel="—" />
          ))}
        </div>
      </Section>
    </SiteLayout>
  );
}
