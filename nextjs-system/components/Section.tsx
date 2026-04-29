import React from "react";
import styles from "./Section.module.css";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  narrow?: boolean;
  id?: string;
}

export default function Section({ children, className, narrow, id }: SectionProps) {
  return (
    <section
      id={id}
      className={[
        styles.section,
        narrow ? styles.narrow : "",
        className ?? "",
      ].join(" ")}
    >
      {children}
    </section>
  );
}
