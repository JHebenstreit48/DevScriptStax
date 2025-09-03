import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const Intermediate: Subpage = {
  name: "Intermediate",
  subpages: [
    {
      name: "Indexes & Performance",
      subpages: [
        {
          name: "Index Types (B-tree, Hash, GIN, GIST)",
          path: "/databases/postgresql/intermediate/indexes-perf/index-types"
        },
        {
          name: "Query Plans & EXPLAIN",
          path: "/databases/postgresql/intermediate/indexes-perf/explain"
        }
      ]
    },
    {
      name: "Transactions & Locking",
      subpages: [
        {
          name: "ACID & MVCC",
          path: "/databases/postgresql/intermediate/tx-locking/acid-mvcc"
        },
        {
          name: "Isolation Levels & Locks",
          path: "/databases/postgresql/intermediate/tx-locking/isolation-locks"
        }
      ]
    }
  ]
};

export default Intermediate;