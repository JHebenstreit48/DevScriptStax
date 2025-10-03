import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Introduction",
          path: "/sqlite/basics/fundamentals/introduction"
        },
        {
          name: "Install & Setup",
          path: "/sqlite/basics/fundamentals/install-setup"
        },
        {
          name: "Why SQLite?",
          path: "/sqlite/basics/fundamentals/why-sqlite"
        }
      ]
    },
    {
      name: "SQL Basics",
      subpages: [
        {
          name: "Data Types",
          path: "/sqlite/basics/sql-basics/data-types"
        },
        {
          name: "Tables & Schema",
          path: "/sqlite/basics/sql-basics/tables-and-schema"
        },
        {
          name: "CRUD",
          path: "/sqlite/basics/sql-basics/crud"
        },
        {
          name: "Filtering & Sorting",
          path: "/sqlite/basics/sql-basics/filtering-and-sorting"
        },
        {
          name: "Joins (Intro)",
          path: "/sqlite/basics/sql-basics/joins-intro"
        }
      ]
    },
    {
      name: "Using SQLite",
      subpages: [
        {
          name: "sqlite3 CLI",
          path: "/sqlite/basics/using/sqlite3-cli"
        },
        {
          name: "Python",
          path: "/sqlite/basics/using/python"
        },
        {
          name: "Node.js",
          path: "/sqlite/basics/using/nodejs"
        }
      ]
    }
  ]
};

export default Basics;