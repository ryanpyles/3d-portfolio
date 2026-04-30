import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://formaetrix.com"),
  title: {
    default: "FORMÆTRIX",
    template: "%s | FORMÆTRIX",
  },
  description:
    "FORMÆTRIX is an imprint publishing language-bound realities. Home of Elian Voigt.",
};

export default function FormaetrixLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
