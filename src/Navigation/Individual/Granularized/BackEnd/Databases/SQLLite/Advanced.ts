import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Storage & Journaling",
      subpages: [
        {
          name: "File Format",
          path: "/sqlite/advanced/storage-and-journaling/file-format"
        },
        {
          name: "Journals & WAL",
          path: "/sqlite/advanced/storage-and-journaling/journals-and-wal"
        },
        {
          name: "Transactions & Locking",
          path: "/sqlite/advanced/storage-and-journaling/transactions-and-locking"
        }
      ]
    },
    {
      name: "Indexes & Planning",
      subpages: [
        {
          name: "Index Basics",
          path: "/sqlite/advanced/indexes-and-planning/index-basics"
        },
        {
          name: "EXPLAIN & Planner",
          path: "/sqlite/advanced/indexes-and-planning/explain-and-planner"
        },
        {
          name: "ANALYZE & Stats",
          path: "/sqlite/advanced/indexes-and-planning/analyze-and-stats"
        }
      ]
    },
    {
      name: "Extensions",
      subpages: [
        {
          name: "FTS5",
          path: "/sqlite/advanced/extensions/fts5"
        },
        {
          name: "JSON1",
          path: "/sqlite/advanced/extensions/json1"
        },
        {
          name: "R*Tree",
          path: "/sqlite/advanced/extensions/rtree"
        }
      ]
    },
    {
      name: "Performance & Ops",
      subpages: [
        {
          name: "PRAGMAs & Tuning",
          path: "/sqlite/advanced/performance-and-ops/pragmas-and-tuning"
        },
        {
          name: "VACUUM & Maintenance",
          path: "/sqlite/advanced/performance-and-ops/vacuum-and-maintenance"
        },
        {
          name: "Backup & Integrity",
          path: "/sqlite/advanced/performance-and-ops/backup-and-integrity"
        }
      ]
    }
  ]
};

export default Advanced;