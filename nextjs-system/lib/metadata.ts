import type { Metadata } from "next";
import type { Book } from "@/content/books/types";

const siteBase = {
  ryan: {
    name: "Ryan J. Pyles",
    url: "https://ryanpyles.com",
    description:
      "Ryan J. Pyles — author of experimental fiction, web developer, and brand designer based in Chicago.",
    twitterHandle: "@ryanpyles",
  },
  formaetrix: {
    name: "FORMÆTRIX",
    url: "https://formaetrix.com",
    description:
      "FORMÆTRIX is an imprint publishing language-bound realities. Home of Elian Voigt.",
    twitterHandle: "@formaetrix",
  },
};

export function buildPageMetadata(
  domain: "ryan" | "formaetrix",
  overrides: {
    title: string;
    description: string;
    path?: string;
    ogImage?: string;
  }
): Metadata {
  const site = siteBase[domain];
  const fullTitle = `${overrides.title} | ${site.name}`;
  const url = `${site.url}${overrides.path ?? ""}`;
  const ogImage = overrides.ogImage ?? `/og/${domain}-default.jpg`;

  return {
    title: fullTitle,
    description: overrides.description,
    metadataBase: new URL(site.url),
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description: overrides.description,
      url,
      siteName: site.name,
      locale: "en_US",
      type: "website",
      images: [{ url: ogImage, width: 1200, height: 630, alt: fullTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: overrides.description,
      site: site.twitterHandle,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
  };
}

export function buildBookMetadata(book: Book): Metadata {
  const domain = book.theme;
  const site = siteBase[domain];
  const fullTitle = `${book.title} by ${book.author} | ${site.name}`;
  const url = `${site.url}/books/${book.slug}`;

  return {
    title: fullTitle,
    description: book.description,
    metadataBase: new URL(site.url),
    keywords: book.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description: book.description,
      url,
      siteName: site.name,
      locale: "en_US",
      type: "book",
      images: [
        {
          url: book.coverImage,
          width: 800,
          height: 1200,
          alt: `${book.title} cover`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: book.description,
      site: site.twitterHandle,
      images: [book.coverImage],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function buildBookJsonLd(book: Book): string {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Book",
    name: book.title,
    author: {
      "@type": "Person",
      name: book.author,
    },
    datePublished: book.publishDate,
    description: book.description,
    image: book.coverImage,
    ...(book.isbn ? { isbn: book.isbn } : {}),
    publisher: {
      "@type": "Organization",
      name: book.theme === "ryan" ? "Ryan J. Pyles" : "FORMÆTRIX",
    },
    inLanguage: "en",
    genre: book.keywords[0] ?? "Literary Fiction",
  };
  return JSON.stringify(schema);
}

export function buildPersonJsonLd(): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ryan J. Pyles",
    url: "https://ryanpyles.com",
    sameAs: [],
    jobTitle: "Author & Web Developer",
    description:
      "Ryan J. Pyles is an experimental fiction author and web developer based in Chicago, Illinois.",
    knowsAbout: [
      "Experimental Fiction",
      "Web Development",
      "Brand Design",
      "Systems Thinking",
    ],
  });
}

export function buildOrganizationJsonLd(): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "FORMÆTRIX",
    url: "https://formaetrix.com",
    description:
      "FORMÆTRIX is an imprint dedicated to publishing language-bound realities and experimental literary fiction.",
    founder: {
      "@type": "Person",
      name: "Ryan J. Pyles",
    },
  });
}
