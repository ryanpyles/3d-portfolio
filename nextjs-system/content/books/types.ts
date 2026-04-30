export type BookTheme = "ryan" | "formaetrix";

export interface AmazonData {
  subtitle: string;
  backendKeywords: string;
  categories: string[];
  blurbHTML: string;
}

export interface Book {
  slug: string;
  title: string;
  author: string;
  description: string;
  fullDescription: string;
  keywords: string[];
  isbn?: string;
  publishDate: string;
  coverImage: string;
  theme: BookTheme;
  amazon: AmazonData;
}
