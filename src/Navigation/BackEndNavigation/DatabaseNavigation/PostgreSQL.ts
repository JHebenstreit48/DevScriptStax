import { Subpage } from "@/Navigation/NavigationTypes";

const PostgreSQLNavigation: Subpage = {
  name: "PostgreSQL",
  subpages: [
    {
      name: "Introduction to PostgreSQL",
      path: "/databases/postgresql/intro",
    },
    { name: "Advanced SQL", path: "/databases/postgresql/advancedsql" },
    {
      name: "Views and Materialized Views",
      path: "/databases/postgresql/views",
    },
    { name: "JSON and JSONB", path: "/databases/postgresql/json" },
    {
      name: "Extensions and Tools",
      path: "/databases/postgresql/extensions",
    },
  ],
};

export default PostgreSQLNavigation;
