import type { Book } from "../types";

const book: Book = {
  slug: "quiet-metrics",
  title: "The Quiet Metrics",
  author: "Ryan J. Pyles",
  description:
    "A systems thinker inherits his father's analog archive and discovers that the data tells a different story than the man he knew. A quiet novel about measurement, inheritance, and what numbers cannot hold.",
  fullDescription: `When Eli Strand inherits his father's archive — forty years of hand-recorded data on everything from daily temperature to the number of times he said his son's name — he expects nostalgia. What he finds is a system.

*The Quiet Metrics* follows Eli across six months of cataloguing, cross-referencing, and growing unease. His father was a man who believed that measurement was a form of love. The archive suggests he was right — and also that he was measuring the wrong things.

Pyles constructs a novel that is simultaneously a meditation on systems thinking and a quiet catastrophe of inheritance. The prose is deliberate, spare, and resistant to sentimentality. The grief arrives without permission.`,
  keywords: [
    "Ryan J. Pyles author",
    "literary fiction novel",
    "data and grief fiction",
    "systems thinking novel",
    "inheritance fiction",
    "quiet literary fiction",
    "contemporary fiction",
  ],
  isbn: "978-0-000000-02-4",
  publishDate: "2025-02-10",
  coverImage: "/images/books/quiet-metrics.jpg",
  theme: "ryan",
  amazon: {
    subtitle: "A Novel of Measurement, Inheritance, and What Data Cannot Hold",
    backendKeywords:
      "literary fiction, grief novel, data fiction, systems thinking, inheritance novel, father son relationship, contemporary fiction, quiet fiction, emotional literary novel",
    categories: ["Literary Fiction", "Contemporary Fiction"],
    blurbHTML: `<p>His father recorded everything. The frequency of rain. The price of bread. The number of times he said his son's name. When Eli Strand inherits the archive, he expects memory. What he finds is a system—and a different man than the one he knew.</p>
<p><em>The Quiet Metrics</em> is a restrained and precise novel about data, love, and the limits of measurement.</p>
<p>For readers of Kazuo Ishiguro, Richard Powers, and Toni Morrison.</p>`,
  },
};

export default book;
