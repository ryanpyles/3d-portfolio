import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import SiteLayout from "@/components/SiteLayout";
import Section from "@/components/Section";
import { getBookBySlug, getAllSlugs } from "@/content/books";
import { buildBookMetadata, buildBookJsonLd } from "@/lib/metadata";
import styles from "./page.module.css";

interface Params {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const book = getBookBySlug(params.slug);
  if (!book) return {};
  return buildBookMetadata(book);
}

export default function BookPage({ params }: Params) {
  const book = getBookBySlug(params.slug);
  if (!book) notFound();

  const jsonLd = buildBookJsonLd(book);
  const domain = book.theme;

  return (
    <SiteLayout domain={domain}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />

      <Section>
        <div className={styles.back}>
          <Link href="/books" className={styles.backLink}>
            ← All books
          </Link>
        </div>

        <article className={[styles.article, styles[domain]].join(" ")}>
          <div className={styles.coverCol}>
            <div className={styles.coverWrap}>
              <Image
                src={book.coverImage}
                alt={`${book.title} — cover`}
                fill
                sizes="(max-width: 640px) 80vw, 360px"
                className={styles.cover}
                priority
              />
            </div>
          </div>

          <div className={styles.textCol}>
            <header className={styles.header}>
              <h1 className={styles.title}>{book.title}</h1>
              <p className={styles.author}>
                by <span>{book.author}</span>
              </p>
              {book.publishDate && (
                <p className={styles.date}>
                  <time dateTime={book.publishDate}>
                    {new Date(book.publishDate).getFullYear()}
                  </time>
                </p>
              )}
            </header>

            <div className={styles.description}>
              {book.fullDescription.split("\n\n").map((para, i) => (
                <p key={i}>{para.replace(/\*/g, "")}</p>
              ))}
            </div>

            <div className={styles.actions}>
              <a
                href={`https://www.amazon.com/s?k=${encodeURIComponent(book.title + " " + book.author)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaPrimary}
              >
                Buy on Amazon
              </a>
              <Link href="/books" className={styles.ctaSecondary}>
                Browse all titles
              </Link>
            </div>

            {book.isbn && (
              <p className={styles.isbn}>ISBN: {book.isbn}</p>
            )}

            {book.amazon.blurbHTML && (
              <details className={styles.blurbDetails}>
                <summary className={styles.blurbSummary}>Publisher description</summary>
                <div
                  className={styles.blurbContent}
                  dangerouslySetInnerHTML={{ __html: book.amazon.blurbHTML }}
                />
              </details>
            )}
          </div>
        </article>
      </Section>
    </SiteLayout>
  );
}
