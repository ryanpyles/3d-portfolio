import React from "react";
import type { Metadata } from "next";
import SiteLayout from "@/components/SiteLayout";
import Section from "@/components/Section";
import BookCard from "@/components/BookCard";
import { ryanBooks } from "@/content/books";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Books",
  description:
    "Novels by Ryan J. Pyles — experimental and literary fiction including Gideon's Inferno, Terms of Unbeing, and The Quiet Metrics.",
  keywords: [
    "Ryan J. Pyles books",
    "experimental fiction novels",
    "literary fiction",
    "Gideon's Inferno",
    "Terms of Unbeing",
    "The Quiet Metrics",
  ],
};

export default function BooksPage() {
  return (
    <SiteLayout domain="ryan">
      <Section>
        <header className={styles.header}>
          <h1>Books</h1>
          <p className={styles.intro}>
            Novels that resist easy resolution. Fiction built from constraint.
          </p>
        </header>

        <div className={styles.list}>
          {ryanBooks.map((book) => (
            <BookCard key={book.slug} book={book} />
          ))}
        </div>
      </Section>
    </SiteLayout>
  );
}
