import type { Subpage } from '@/types/navigation';

const Firestore: Subpage = {
  name: "Firestore",
  subpages: [
    {
      name: "Overview",
      path: "/firebase/basics/firestore/overview",
    },
    {
      name: "Firestore vs Realtime",
      path: "/firebase/basics/firestore/comparison",
    },
    {
      name: "Document & Collection Model",
      path: "/firebase/basics/firestore/model",
    },
    {
      name: "Querying & Indexing Data",
      path: "/firebase/basics/firestore/querying",
    },
  ],
};

export default Firestore;