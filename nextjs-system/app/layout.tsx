import React from "react";
import type { Metadata } from "next";
import { LanguageProvider } from "@/lib/LanguageContext";
import "@/styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ryanpyles.com"),
  title: {
    default: "Ryan J. Pyles — Author & Developer",
    template: "%s | Ryan J. Pyles",
  },
  description:
    "Ryan J. Pyles — author of experimental fiction, web developer, and brand designer based in Chicago. Writing that holds up under scrutiny.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&family=IBM+Plex+Mono:wght@300;400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
