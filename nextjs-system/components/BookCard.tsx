import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Book } from "@/content/books/types";
import styles from "./BookCard.module.css";

interface BookCardProps {
  book: Book;
  buyLabel?: string;
  byLabel?: string;
}

export default function BookCard({
  book,
  buyLabel = "Buy now",
  byLabel = "by",
}: BookCardProps) {
  return (
    <article className={[styles.card, styles[book.theme]].join(" ")}>
      <Link href={`/books/${book.slug}`} className={styles.coverLink} tabIndex={-1} aria-hidden>
        <div className={styles.coverWrap}>
          <Image
            src={book.coverImage}
            alt={`${book.title} — cover`}
            fill
            sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 280px"
            className={styles.cover}
            priority={false}
          />
        </div>
      </Link>

      <div className={styles.body}>
        <header>
          <h3 className={styles.title}>
            <Link href={`/books/${book.slug}`}>{book.title}</Link>
          </h3>
          <p className={styles.author}>
            {byLabel} <span>{book.author}</span>
          </p>
        </header>

        <p className={styles.description}>{book.description}</p>

        <div className={styles.actions}>
          <Link href={`/books/${book.slug}`} className={styles.cta}>
            {buyLabel}
          </Link>
        </div>
      </div>
    </article>
  );
}
