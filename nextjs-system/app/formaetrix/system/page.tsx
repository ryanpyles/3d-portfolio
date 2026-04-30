import React from "react";
import type { Metadata } from "next";
import SiteLayout from "@/components/SiteLayout";
import Section from "@/components/Section";
import { buildPageMetadata } from "@/lib/metadata";
import styles from "./page.module.css";

export const metadata: Metadata = buildPageMetadata("formaetrix", {
  title: "System",
  description:
    "The conceptual architecture of FORMÆTRIX — how the imprint operates, what it produces, and the relationship between constraint and language.",
  path: "/formaetrix/system",
});

const systemNodes = [
  {
    id: "01",
    heading: "Input",
    body: "A writer. A constraint. An incompleteness that the constraint cannot resolve alone.",
  },
  {
    id: "02",
    heading: "Structure",
    body: "The constraint is applied. The structure begins to produce something. The something is not fully predicted by the structure.",
  },
  {
    id: "03",
    heading: "Threshold",
    body: "The point at which the structure must either fail or discover something it could not have contained before the discovery.",
  },
  {
    id: "04",
    heading: "Output",
    body: "A text. Not a document of the constraint. A thing the constraint made possible but did not determine.",
  },
  {
    id: "05",
    heading: "Publication",
    body: "The text enters a reader. The system is not closed. The reader is a new variable.",
  },
];

export default function SystemPage() {
  return (
    <SiteLayout domain="formaetrix">
      <Section>
        <header className={styles.header}>
          <span className={styles.label}>System</span>
          <h1 className={styles.title}>Operational Architecture</h1>
          <p className={styles.intro}>
            How FORMÆTRIX produces what it produces.
          </p>
        </header>

        <div className={styles.nodes}>
          {systemNodes.map((node) => (
            <div key={node.id} className={styles.node}>
              <span className={styles.nodeId}>{node.id}</span>
              <div className={styles.nodeContent}>
                <h2 className={styles.nodeHeading}>{node.heading}</h2>
                <p className={styles.nodeBody}>{node.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.coda}>
          <p>
            The system does not guarantee outcome. It guarantees that the
            outcome could not have been produced without the system.
          </p>
          <p>
            This is the only claim FORMÆTRIX makes on behalf of its catalog.
          </p>
        </div>
      </Section>
    </SiteLayout>
  );
}
