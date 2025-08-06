import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const Firestore: Subpage = {
  name: "Firestore",
  subpages: [
    {
      name: "Overview",
      path: "/databases/firebase/firestore/overview",
    },
    {
      name: "Firestore vs Realtime",
      path: "/databases/firebase/firestore/comparison",
    },
    {
      name: "Document & Collection Model",
      path: "/databases/firebase/firestore/model",
    },
    {
      name: "Querying & Indexing Data",
      path: "/databases/firebase/firestore/querying",
    },
  ],
};

export default Firestore;