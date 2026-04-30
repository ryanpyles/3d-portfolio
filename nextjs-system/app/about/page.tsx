import React from "react";
import type { Metadata } from "next";
import SiteLayout from "@/components/SiteLayout";
import Section from "@/components/Section";
import { buildPageMetadata } from "@/lib/metadata";
import styles from "./page.module.css";

export const metadata: Metadata = buildPageMetadata("ryan", {
  title: "About",
  description:
    "Ryan J. Pyles — experimental fiction author and web developer based in Chicago. Writing systems, building with constraint, designing for clarity.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <SiteLayout domain="ryan">
      <Section narrow>
        <header className={styles.header}>
          <h1>About</h1>
        </header>

        <div className={styles.body}>
          <p>
            Ryan J. Pyles writes experimental fiction and builds web systems. The
            work — across both disciplines — starts from the same premise: what
            is the minimum necessary to make something hold?
          </p>

          <p>
            His novels operate through formal constraint. Each book proposes a
            structure — a legal brief, a grammar of declensions, an archive of
            measurement — and then inhabits that structure until it produces
            something the structure alone could not predict. The result is fiction
            that is precise without being cold, and strange without being
            ornamental.
          </p>

          <p>
            On the web side, he works at the intersection of identity, language,
            and system design. His practice is editorial rather than decorative —
            built on the conviction that good design is the absence of everything
            that isn't load-bearing.
          </p>

          <p>
            He is based in Chicago.
          </p>

          <h2 className={styles.subheading}>FORMÆTRIX</h2>

          <p>
            FORMÆTRIX is an imprint Ryan founded for work that operates at the
            edge of what publishing categories can hold. It is the home of
            novelist Elian Voigt, whose books refuse the distinction between
            literary and genre fiction.
          </p>

          <p>
            The relationship between Ryan and FORMÆTRIX is not explained here.
            It is felt in the work.
          </p>
        </div>

        <div className={styles.contact}>
          <p>For inquiries:</p>
          <a href="mailto:ryan@ryanpyles.com" className={styles.email}>
            ryan@ryanpyles.com
          </a>
        </div>
      </Section>
    </SiteLayout>
  );
}
