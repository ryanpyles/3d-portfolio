export type LangCode =
  | "en"
  | "fr"
  | "es"
  | "it"
  | "pt"
  | "de"
  | "sv"
  | "sc"
  | "tc"
  | "ja"
  | "ar"
  | "he";

export interface Translations {
  nav: {
    books: string;
    projects: string;
    about: string;
    contact: string;
    works: string;
    imprint: string;
    system: string;
  };
  home: {
    ryanHero: string;
    ryanSub: string;
    ryanCta1: string;
    ryanCta2: string;
    formaetrixHero: string;
    formaetrixSub: string;
  };
  books: {
    heading: string;
    buyNow: string;
    learnMore: string;
    by: string;
    allBooks: string;
  };
  footer: {
    builtBy: string;
    rights: string;
  };
}

const translations: Record<LangCode, Translations> = {
  en: {
    nav: {
      books: "Books",
      projects: "Projects",
      about: "About",
      contact: "Contact",
      works: "Works",
      imprint: "Imprint",
      system: "System",
    },
    home: {
      ryanHero: "Ryan J. Pyles",
      ryanSub: "Writing. Systems. Design.",
      ryanCta1: "Work with me",
      ryanCta2: "View books",
      formaetrixHero: "FORMÆTRIX",
      formaetrixSub: "A system for producing language-bound realities.",
    },
    books: {
      heading: "Books",
      buyNow: "Buy now",
      learnMore: "Learn more",
      by: "by",
      allBooks: "All books",
    },
    footer: {
      builtBy: "Built by Ryan J. Pyles",
      rights: "All rights reserved.",
    },
  },
  fr: {
    nav: {
      books: "Livres",
      projects: "Projets",
      about: "À propos",
      contact: "Contact",
      works: "Œuvres",
      imprint: "Imprint",
      system: "Système",
    },
    home: {
      ryanHero: "Ryan J. Pyles",
      ryanSub: "Écriture. Systèmes. Design.",
      ryanCta1: "Travailler avec moi",
      ryanCta2: "Voir les livres",
      formaetrixHero: "FORMÆTRIX",
      formaetrixSub:
        "Un système pour produire des réalités liées au langage.",
    },
    books: {
      heading: "Livres",
      buyNow: "Acheter maintenant",
      learnMore: "En savoir plus",
      by: "par",
      allBooks: "Tous les livres",
    },
    footer: {
      builtBy: "Conçu par Ryan J. Pyles",
      rights: "Tous droits réservés.",
    },
  },
  es: {
    nav: {
      books: "Libros",
      projects: "Proyectos",
      about: "Sobre mí",
      contact: "Contacto",
      works: "Obras",
      imprint: "Sello",
      system: "Sistema",
    },
    home: {
      ryanHero: "Ryan J. Pyles",
      ryanSub: "Escritura. Sistemas. Diseño.",
      ryanCta1: "Trabaja conmigo",
      ryanCta2: "Ver libros",
      formaetrixHero: "FORMÆTRIX",
      formaetrixSub: "Un sistema para producir realidades ligadas al lenguaje.",
    },
    books: {
      heading: "Libros",
      buyNow: "Comprar ahora",
      learnMore: "Más información",
      by: "de",
      allBooks: "Todos los libros",
    },
    footer: {
      builtBy: "Creado por Ryan J. Pyles",
      rights: "Todos los derechos reservados.",
    },
  },
  it: {
    nav: {
      books: "Libri",
      projects: "Progetti",
      about: "Chi sono",
      contact: "Contatto",
      works: "Opere",
      imprint: "Imprint",
      system: "Sistema",
    },
    home: {
      ryanHero: "Ryan J. Pyles",
      ryanSub: "Scrittura. Sistemi. Design.",
      ryanCta1: "Lavora con me",
      ryanCta2: "Vedi i libri",
      formaetrixHero: "FORMÆTRIX",
      formaetrixSub: "Un sistema per produrre realtà legate al linguaggio.",
    },
    books: {
      heading: "Libri",
      buyNow: "Acquista ora",
      learnMore: "Scopri di più",
      by: "di",
      allBooks: "Tutti i libri",
    },
    footer: {
      builtBy: "Realizzato da Ryan J. Pyles",
      rights: "Tutti i diritti riservati.",
    },
  },
  pt: {
    nav: {
      books: "Livros",
      projects: "Projetos",
      about: "Sobre",
      contact: "Contato",
      works: "Obras",
      imprint: "Imprint",
      system: "Sistema",
    },
    home: {
      ryanHero: "Ryan J. Pyles",
      ryanSub: "Escrita. Sistemas. Design.",
      ryanCta1: "Trabalhe comigo",
      ryanCta2: "Ver livros",
      formaetrixHero: "FORMÆTRIX",
      formaetrixSub: "Um sistema para produzir realidades ligadas à linguagem.",
    },
    books: {
      heading: "Livros",
      buyNow: "Comprar agora",
      learnMore: "Saiba mais",
      by: "por",
      allBooks: "Todos os livros",
    },
    footer: {
      builtBy: "Criado por Ryan J. Pyles",
      rights: "Todos os direitos reservados.",
    },
  },
  de: {
    nav: {
      books: "Bücher",
      projects: "Projekte",
      about: "Über mich",
      contact: "Kontakt",
      works: "Werke",
      imprint: "Impressum",
      system: "System",
    },
    home: {
      ryanHero: "Ryan J. Pyles",
      ryanSub: "Schreiben. Systeme. Design.",
      ryanCta1: "Mit mir arbeiten",
      ryanCta2: "Bücher ansehen",
      formaetrixHero: "FORMÆTRIX",
      formaetrixSub:
        "Ein System zur Erzeugung sprachgebundener Wirklichkeiten.",
    },
    books: {
      heading: "Bücher",
      buyNow: "Jetzt kaufen",
      learnMore: "Mehr erfahren",
      by: "von",
      allBooks: "Alle Bücher",
    },
    footer: {
      builtBy: "Erstellt von Ryan J. Pyles",
      rights: "Alle Rechte vorbehalten.",
    },
  },
  sv: {
    nav: {
      books: "Böcker",
      projects: "Projekt",
      about: "Om",
      contact: "Kontakt",
      works: "Verk",
      imprint: "Imprint",
      system: "System",
    },
    home: {
      ryanHero: "Ryan J. Pyles",
      ryanSub: "Skrivande. System. Design.",
      ryanCta1: "Arbeta med mig",
      ryanCta2: "Se böcker",
      formaetrixHero: "FORMÆTRIX",
      formaetrixSub: "Ett system för att producera språkbundna verkligheter.",
    },
    books: {
      heading: "Böcker",
      buyNow: "Köp nu",
      learnMore: "Läs mer",
      by: "av",
      allBooks: "Alla böcker",
    },
    footer: {
      builtBy: "Byggd av Ryan J. Pyles",
      rights: "Alla rättigheter förbehållna.",
    },
  },
  sc: {
    nav: {
      books: "书籍",
      projects: "项目",
      about: "关于",
      contact: "联系",
      works: "作品",
      imprint: "印记",
      system: "系统",
    },
    home: {
      ryanHero: "瑞恩·派尔斯",
      ryanSub: "写作。系统。设计。",
      ryanCta1: "与我合作",
      ryanCta2: "查看书籍",
      formaetrixHero: "FORMÆTRIX",
      formaetrixSub: "一个生产语言绑定现实的系统。",
    },
    books: {
      heading: "书籍",
      buyNow: "立即购买",
      learnMore: "了解更多",
      by: "著",
      allBooks: "所有书籍",
    },
    footer: {
      builtBy: "由 Ryan J. Pyles 构建",
      rights: "版权所有。",
    },
  },
  tc: {
    nav: {
      books: "書籍",
      projects: "專案",
      about: "關於",
      contact: "聯絡",
      works: "作品",
      imprint: "印記",
      system: "系統",
    },
    home: {
      ryanHero: "瑞恩·派爾斯",
      ryanSub: "寫作。系統。設計。",
      ryanCta1: "與我合作",
      ryanCta2: "查看書籍",
      formaetrixHero: "FORMÆTRIX",
      formaetrixSub: "一個生產語言綁定現實的系統。",
    },
    books: {
      heading: "書籍",
      buyNow: "立即購買",
      learnMore: "了解更多",
      by: "著",
      allBooks: "所有書籍",
    },
    footer: {
      builtBy: "由 Ryan J. Pyles 構建",
      rights: "版權所有。",
    },
  },
  ja: {
    nav: {
      books: "書籍",
      projects: "プロジェクト",
      about: "について",
      contact: "お問い合わせ",
      works: "作品",
      imprint: "インプリント",
      system: "システム",
    },
    home: {
      ryanHero: "Ryan J. Pyles",
      ryanSub: "執筆。システム。デザイン。",
      ryanCta1: "一緒に働く",
      ryanCta2: "書籍を見る",
      formaetrixHero: "FORMÆTRIX",
      formaetrixSub: "言語に縛られた現実を生み出すシステム。",
    },
    books: {
      heading: "書籍",
      buyNow: "今すぐ購入",
      learnMore: "詳しく見る",
      by: "著：",
      allBooks: "すべての書籍",
    },
    footer: {
      builtBy: "Ryan J. Pyles 制作",
      rights: "無断複写・転載を禁じます。",
    },
  },
  ar: {
    nav: {
      books: "الكتب",
      projects: "المشاريع",
      about: "نبذة عني",
      contact: "تواصل",
      works: "الأعمال",
      imprint: "دار النشر",
      system: "النظام",
    },
    home: {
      ryanHero: "Ryan J. Pyles",
      ryanSub: "كتابة. أنظمة. تصميم.",
      ryanCta1: "اعمل معي",
      ryanCta2: "عرض الكتب",
      formaetrixHero: "FORMÆTRIX",
      formaetrixSub: "نظام لإنتاج حقائق مرتبطة باللغة.",
    },
    books: {
      heading: "الكتب",
      buyNow: "اشترِ الآن",
      learnMore: "اعرف أكثر",
      by: "بقلم",
      allBooks: "جميع الكتب",
    },
    footer: {
      builtBy: "من تصميم Ryan J. Pyles",
      rights: "جميع الحقوق محفوظة.",
    },
  },
  he: {
    nav: {
      books: "ספרים",
      projects: "פרויקטים",
      about: "אודות",
      contact: "צור קשר",
      works: "יצירות",
      imprint: "הוצאה לאור",
      system: "מערכת",
    },
    home: {
      ryanHero: "Ryan J. Pyles",
      ryanSub: "כתיבה. מערכות. עיצוב.",
      ryanCta1: "עבוד איתי",
      ryanCta2: "צפה בספרים",
      formaetrixHero: "FORMÆTRIX",
      formaetrixSub: "מערכת לייצור מציאויות הקשורות לשפה.",
    },
    books: {
      heading: "ספרים",
      buyNow: "קנה עכשיו",
      learnMore: "למידע נוסף",
      by: "מאת",
      allBooks: "כל הספרים",
    },
    footer: {
      builtBy: "נבנה על ידי Ryan J. Pyles",
      rights: "כל הזכויות שמורות.",
    },
  },
};

export default translations;
