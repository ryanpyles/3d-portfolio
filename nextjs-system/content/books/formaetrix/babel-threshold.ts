import type { Book } from "../types";

const book: Book = {
  slug: "babel-threshold",
  title: "Babel Threshold",
  author: "Elian Voigt",
  description:
    "A computational linguist discovers that a constructed language she designed for a dead client has begun generating novel utterances. The language is evolving without a speaker. A novel about authorship, inheritance, and what language does when left alone.",
  fullDescription: `Dr. Leila Haroun built the language for a client who died before he could speak it. It was meant to be her last commission — a private idiom for a single person, now archived.

Three years later, the language's grammar engine is producing utterances she did not write. The patterns are consistent. The semantics are coherent. There is no speaker.

*Babel Threshold* is built from alternating registers: Leila's first-person account, transcripts of the language's output, and Voigt's own notes on the constructed grammar — which become increasingly difficult to distinguish from the novel itself.

A novel about authorship and its limits, written from inside the problem.`,
  keywords: [
    "Elian Voigt books",
    "experimental fiction novel",
    "linguistics fiction",
    "literary horror",
    "Formaetrix imprint",
    "constructed language novel",
    "speculative fiction",
  ],
  isbn: "978-1-000000-15-8",
  publishDate: "2025-09-15",
  coverImage: "/images/books/babel-threshold.jpg",
  theme: "formaetrix",
  amazon: {
    subtitle: "A Novel of Language Without a Speaker",
    backendKeywords:
      "experimental fiction, Elian Voigt, Formaetrix, linguistics fiction, conlang novel, literary horror, authorship fiction, speculative fiction, language evolution, constructed language",
    categories: [
      "Experimental Fiction",
      "Speculative Fiction",
      "Literary Fiction",
    ],
    blurbHTML: `<p>The language was built for a man who died before he could speak it. Three years later, it is generating utterances she didn't write. There is no speaker.</p>
<p><em>Babel Threshold</em> is built from alternating registers—a linguist's account, transcripts of the language's output, and notes on the grammar that become impossible to attribute. A novel about authorship written from inside its own problem.</p>
<p>For readers of Samuel R. Delany, China Miéville, and Ursula K. Le Guin.</p>`,
  },
};

export default book;
