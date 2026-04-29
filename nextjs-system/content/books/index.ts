import type { Book } from "./types";

import gideons from "./ryan/gideons-inferno";
import terms from "./ryan/terms-of-unbeing";
import quietMetrics from "./ryan/quiet-metrics";
import declensions from "./formaetrix/declensions-of-dark-water";
import glassBees from "./formaetrix/glass-bees";
import whatSurvives from "./formaetrix/what-survives";
import broadcastSaints from "./formaetrix/broadcast-saints";
import liminal from "./formaetrix/liminal-617";
import babel from "./formaetrix/babel-threshold";

export const ryanBooks: Book[] = [gideons, terms, quietMetrics];

export const formaetrixBooks: Book[] = [
  declensions,
  glassBees,
  whatSurvives,
  broadcastSaints,
  liminal,
  babel,
];

export const allBooks: Book[] = [...ryanBooks, ...formaetrixBooks];

export function getBookBySlug(slug: string): Book | undefined {
  return allBooks.find((b) => b.slug === slug);
}

export function getAllSlugs(): string[] {
  return allBooks.map((b) => b.slug);
}

export type { Book };
