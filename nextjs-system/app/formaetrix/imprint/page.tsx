import React from "react";
import type { Metadata } from "next";
import SiteLayout from "@/components/SiteLayout";
import Section from "@/components/Section";
import { buildPageMetadata } from "@/lib/metadata";
import styles from "./page.module.css";

export const metadata: Metadata = buildPageMetadata("formaetrix", {
  title: "Imprint",
  description:
    "FORMÆTRIX is an imprint for fiction that resists categorical assignment — experimental, literary, speculative. Founded to publish work that produces language-bound realities.",
  path: "/formaetrix/imprint",
});

export default function ImprintPage() {
  return (
    <SiteLayout domain="formaetrix">
      <Section narrow>
        <header className={styles.header}>
          <span className={styles.label}>Imprint</span>
          <h1 className={styles.title}>FORMÆTRIX</h1>
        </header>

        <div className={styles.body}>
          <p>
            FORMÆTRIX was founded on the premise that some fiction cannot be
            adequately described before it is read. The imprint publishes work
            that operates at the limits of its own form — novels that propose a
            structure and then discover, through that structure, something the
            structure alone could not have contained.
          </p>

          <p>
            The name is not a brand. It is a descriptor. A matrix is both a
            medium in which something forms and the mold that gives it shape.
            FORMÆTRIX is both.
          </p>

          <p>
            The imprint currently publishes one author: Elian Voigt. His work
            spans what is imprecisely called literary horror, experimental
            fiction, and speculative literature. It spans these categories not
            because it is genre-fluid but because it is prior to those
            distinctions.
          </p>

          <h2 className={styles.subheading}>Editorial Position</h2>

          <p>
            We publish fiction that uses constraint as a generative force. The
            constraint may be formal (a grammar of grief), structural (a field
            report that becomes impossible to write), or conceptual (a language
            with no speaker). In each case, the constraint is not decoration —
            it is the mechanism through which the work produces what it could
            not have produced otherwise.
          </p>

          <p>
            We do not publish work that treats strangeness as atmosphere. We
            publish work in which the strangeness is structural.
          </p>

          <h2 className={styles.subheading}>Submissions</h2>

          <p>
            FORMÆTRIX is not currently open to unsolicited submissions.
          </p>
        </div>
      </Section>
    </SiteLayout>
  );
}
