export type FlashFictionEntry = {
  slug: string;
  title: string;
  timeToRead?: string;
  quote: string;
  published?: {
    link: string;
    source: string;
  } | null;
  content?: string;
  pdf?: string;
};

export const flashFiction: FlashFictionEntry[] = [
  {
    slug: "dinnertime-blues",
    title: "Dinnertime Blues",
    timeToRead: "sci-fi flash fiction; 5 minutes to read",
    quote: "‘Damn. Maybe tonight’s not salad night.’",
    published: {
      link: "https://www.scifishorts.co/premium/dinnertime-blues/5a7092c5-57db-4ee4-a172-f47c400fae9d",
      source: "scifishorts.co",
    },
  },
  {
    slug: "the-boot",
    title: "The Boot",
    timeToRead: "sci-fi flash fiction; 5 minutes to read",
    quote: "‘This place is just like home, and yet… he knows it can’t be.’",
    published: {
      link: "https://365tomorrows.com/2021/01/24/the-boot/",
      source: "365tomorrows.com",
    },
  },
  {
    slug: "tabula-rasa",
    title: "Tabula Rasa",
    timeToRead: "sci-fi flash fiction; 5 minutes to read",
    quote: "‘My dad’s trivia is now my defense.’",
    published: {
      link: "https://365tomorrows.com/2024/10/22/tabula-rasa-2/",
      source: "365tomorrows.com",
    },
  },
  {
    slug: "a-minus-b",
    title: "A Minus B",
    timeToRead: "short screenplay; 10 minutes to read",
    quote:
      "‘The first human FTL travel … was a timid step backwards to safety.’",
    pdf: "/stories/A_Minus_B_ws.pdf",
  },
  {
    slug: "twines",
    title: "Twine Collection",
    quote: "A few short works of interactive fiction exploring various themes.",
    published: {
      link: "https://itch.io/profile/j-wanders",
      source: "itch.io",
    },
  },
];
