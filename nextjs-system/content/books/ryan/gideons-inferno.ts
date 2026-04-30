import type { Book } from "../types";

const book: Book = {
  slug: "gideons-inferno",
  title: "Gideon's Inferno",
  author: "Ryan J. Pyles",
  description:
    "A descent into fractured identity told through layered prose and recursive structure. Gideon must navigate a collapsing inner world before the outer one follows.",
  fullDescription: `Gideon Marsh has spent thirty-two years constructing a self. Now the scaffolding is failing.

Set across four overlapping timelines, *Gideon's Inferno* follows a man whose past selves begin appearing — not as memory, but as presence. Each version of Gideon carries a grievance. Each demands recognition. The novel unfolds as a controlled unraveling: precise, uncomfortable, and finally unavoidable.

Pyles writes with the restraint of someone who knows exactly how much damage a single sentence can carry. This is literary horror by another name — the kind that doesn't announce itself until it's already inside.`,
  keywords: [
    "Ryan J. Pyles author",
    "experimental fiction novel",
    "literary horror",
    "psychological fiction",
    "identity collapse novel",
    "speculative fiction book",
    "debut literary novel",
  ],
  isbn: "978-0-000000-00-0",
  publishDate: "2024-03-15",
  coverImage: "/images/books/gideons-inferno.jpg",
  theme: "ryan",
  amazon: {
    subtitle: "A Novel of Fractured Identity and Recursive Memory",
    backendKeywords:
      "literary fiction, psychological horror, identity, experimental novel, speculative literary fiction, debut fiction, literary horror novel, mind fracture, consciousness fiction",
    categories: [
      "Literary Fiction",
      "Psychological Horror",
      "Experimental Fiction",
    ],
    blurbHTML: `<p>A man's past selves return—not as memory, but as presence. Gideon Marsh must confront each version of himself before there is no self left to confront.</p>
<p><em>Gideon's Inferno</em> is a precisely structured descent into fractured identity, told across four overlapping timelines. Pyles delivers literary horror that operates below the threshold of announcement—felt before it is understood.</p>
<p>For readers of Paul Tremblay, Carmen Maria Machado, and Joshua Cohen.</p>`,
  },
};

export default book;
