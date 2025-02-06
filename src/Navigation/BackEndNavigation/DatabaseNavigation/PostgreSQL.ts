import { Subpage } from "@/Navigation/NavigationTypes";

const PostgreSQLNavigation: Subpage = {
  name: "PostgreSQL",
  subpages: [
    {
      name: "PostgreSQL Fundamentals",
      subpages: [
        { name: "What is PostgreSQL?", path: "/databases/postgresql/intro/overview" },
        { name: "Features & Use Cases", path: "/databases/postgresql/intro/features-usecases" },
        { name: "Installing & Setting Up PostgreSQL", path: "/databases/postgresql/intro/setup" },
        { name: "Basic Configuration & Optimization", path: "/databases/postgresql/intro/configuration" },
      ],
    },
    {
      name: "Advanced SQL in PostgreSQL",
      subpages: [
        { name: "Common Table Expressions (CTEs)", path: "/databases/postgresql/advancedsql/ctes" },
        { name: "Window Functions", path: "/databases/postgresql/advancedsql/window-functions" },
        { name: "Recursive Queries", path: "/databases/postgresql/advancedsql/recursive-queries" },
        { name: "Full-Text Search in PostgreSQL", path: "/databases/postgresql/advancedsql/full-text-search" },
      ],
    },
    {
      name: "Views & Materialized Views",
      subpages: [
        { name: "Understanding Views", path: "/databases/postgresql/views/overview" },
        { name: "Creating & Using Views", path: "/databases/postgresql/views/creating-using" },
        { name: "Materialized Views & Performance", path: "/databases/postgresql/views/materialized-views" },
        { name: "Refreshing & Indexing Views", path: "/databases/postgresql/views/refreshing-indexing" },
      ],
    },
    {
      name: "JSON & JSONB in PostgreSQL",
      subpages: [
        { name: "Introduction to JSON & JSONB", path: "/databases/postgresql/json/overview" },
        { name: "Storing & Querying JSON Data", path: "/databases/postgresql/json/storing-querying" },
        { name: "Performance Considerations", path: "/databases/postgresql/json/performance" },
        { name: "Indexing JSON Fields", path: "/databases/postgresql/json/indexing" },
      ],
    },
    {
      name: "PostgreSQL Extensions & Tools",
      subpages: [
        { name: "Popular PostgreSQL Extensions", path: "/databases/postgresql/extensions/overview" },
        { name: "Using PostGIS for Geospatial Data", path: "/databases/postgresql/extensions/postgis" },
        { name: "pg_stat_statements for Query Analysis", path: "/databases/postgresql/extensions/query-analysis" },
        { name: "Foreign Data Wrappers (FDW)", path: "/databases/postgresql/extensions/fdw" },
      ],
    },
  ],
};

export default PostgreSQLNavigation;
