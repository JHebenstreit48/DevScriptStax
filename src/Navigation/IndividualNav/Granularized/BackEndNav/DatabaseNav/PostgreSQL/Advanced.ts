import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Advanced SQL",
      subpages: [
        {
          name: "Common Table Expressions (CTEs)",
          path: "/databases/postgresql/advanced/sql/ctes"
        },
        {
          name: "Window Functions",
          path: "/databases/postgresql/advanced/sql/window-functions"
        },
        {
          name: "Recursive Queries",
          path: "/databases/postgresql/advanced/sql/recursive-queries"
        },
        {
          name: "Full-Text Search",
          path: "/databases/postgresql/advanced/sql/full-text-search"
        }
      ]
    },
    {
      name: "Views & Materialized Views",
      subpages: [
        {
          name: "Understanding Views",
          path: "/databases/postgresql/advanced/views/overview"
        },
        {
          name: "Creating & Using Views",
          path: "/databases/postgresql/advanced/views/creating-using"
        },
        {
          name: "Materialized Views & Performance",
          path: "/databases/postgresql/advanced/views/materialized-views"
        },
        {
          name: "Refreshing & Indexing Views",
          path: "/databases/postgresql/advanced/views/refreshing-indexing"
        }
      ]
    },
    {
      name: "JSON/JSONB",
      subpages: [
        {
          name: "Intro to JSON & JSONB",
          path: "/databases/postgresql/advanced/json/overview"
        },
        {
          name: "Storing & Querying",
          path: "/databases/postgresql/advanced/json/storing-querying"
        },
        {
          name: "Performance Considerations",
          path: "/databases/postgresql/advanced/json/performance"
        },
        {
          name: "Indexing JSON Fields",
          path: "/databases/postgresql/advanced/json/indexing"
        }
      ]
    },
    {
      name: "Extensions & FDW",
      subpages: [
        {
          name: "Popular Extensions",
          path: "/databases/postgresql/advanced/extensions/overview"
        },
        {
          name: "PostGIS (Geospatial)",
          path: "/databases/postgresql/advanced/extensions/postgis"
        },
        {
          name: "pg_stat_statements",
          path: "/databases/postgresql/advanced/extensions/pg-stat-statements"
        },
        {
          name: "Foreign Data Wrappers (FDW)",
          path: "/databases/postgresql/advanced/extensions/fdw"
        }
      ]
    }
  ]
};

export default Advanced;