import React from "react";
import styles from "./ProjectCard.module.css";

export interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  href?: string;
  year: string;
}

interface ProjectCardProps {
  project: Project;
}

function CardBody({ project }: { project: Project }) {
  return (
    <>
      <header className={styles.header}>
        <span className={styles.year}>{project.year}</span>
        <h3 className={styles.title}>{project.title}</h3>
      </header>
      <p className={styles.description}>{project.description}</p>
      <footer className={styles.footer}>
        <ul className={styles.tags} role="list">
          {project.tags.map((tag) => (
            <li key={tag} className={styles.tag}>
              {tag}
            </li>
          ))}
        </ul>
        {project.href && (
          <span className={styles.arrow} aria-hidden>
            →
          </span>
        )}
      </footer>
    </>
  );
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className={styles.card}>
      {project.href ? (
        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.inner}
        >
          <CardBody project={project} />
        </a>
      ) : (
        <div className={styles.inner}>
          <CardBody project={project} />
        </div>
      )}
    </article>
  );
}
