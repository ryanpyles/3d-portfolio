import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import type { Metadata } from "next";
import SiteLayout from "@/components/SiteLayout";
import Section from "@/components/Section";
import BookCard from "@/components/BookCard";
import ProjectCard from "@/components/ProjectCard";
import { ryanBooks } from "@/content/books";
import { buildPersonJsonLd } from "@/lib/metadata";
import styles from "./page.module.css";
import type { Project } from "@/components/ProjectCard";

const BlobNav = dynamic(() => import("@/components/BlobNav"), {
  ssr: false,
  loading: () => null,
});
const BlobNavFallback = dynamic(
  () => import("@/components/BlobNav").then((m) => ({ default: m.BlobNavFallback })),
  { ssr: false }
);
const LanguageSwitcher = dynamic(() => import("@/components/LanguageSwitcher"), {
  ssr: false,
});

export const metadata: Metadata = {
  title: "Ryan J. Pyles — Author & Web Developer",
  description:
    "Ryan J. Pyles is an experimental fiction author and web developer based in Chicago. Writing, systems, and design that hold up under scrutiny.",
  keywords: [
    "Ryan J. Pyles author",
    "experimental fiction",
    "web developer Chicago",
    "brand design",
    "literary fiction",
  ],
};

const featuredProjects: Project[] = [
  {
    slug: "dual-domain-system",
    title: "Dual-Domain Identity System",
    description:
      "A single Next.js codebase serving two distinct brand identities — ryanpyles.com and formaetrix.com — via domain-based rendering and shared design tokens.",
    tags: ["Next.js", "TypeScript", "CSS Modules"],
    year: "2025",
  },
  {
    slug: "language-engine",
    title: "Multi-Language Typography Engine",
    description:
      "RTL support, CJK font stacks, and localized typography across eleven languages with localStorage persistence and browser detection.",
    tags: ["React", "i18n", "Typography"],
    year: "2025",
  },
  {
    slug: "blob-navigation",
    title: "3D Identity Navigation",
    description:
      "WebGL blob interface using Three.js and React Three Fiber. Cursor-reactive organic deformation with region-mapped navigation.",
    tags: ["Three.js", "R3F", "WebGL"],
    year: "2025",
  },
];

export default function HomePage() {
  const jsonLd = buildPersonJsonLd();

  return (
    <SiteLayout domain="ryan">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>Ryan J. Pyles</h1>
            <p className={styles.heroSub}>Writing. Systems. Design.</p>
            <p className={styles.heroCopy}>
              I build things that hold up under scrutiny.
            </p>
            <div className={styles.heroCtas}>
              <Link href="/contact" className={styles.ctaPrimary}>
                Work with me
              </Link>
              <Link href="/books" className={styles.ctaSecondary}>
                View books
              </Link>
            </div>
          </div>

          <div className={styles.heroBlobWrap}>
            <BlobNav domain="ryan" />
            <div className={styles.heroBlobFallback}>
              <BlobNavFallback domain="ryan" />
            </div>
          </div>
        </div>

        <div className={styles.langWrap}>
          <LanguageSwitcher />
        </div>
      </section>

      {/* Books */}
      <Section id="books">
        <header className={styles.sectionHeader}>
          <h2>Books</h2>
          <Link href="/books" className={styles.sectionLink}>
            All titles →
          </Link>
        </header>
        <div className={styles.bookList}>
          {ryanBooks.map((book) => (
            <BookCard key={book.slug} book={book} />
          ))}
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects">
        <header className={styles.sectionHeader}>
          <h2>Selected Work</h2>
          <Link href="/projects" className={styles.sectionLink}>
            All projects →
          </Link>
        </header>
        <div className={styles.projectGrid}>
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Section>
    </SiteLayout>
  );
}
