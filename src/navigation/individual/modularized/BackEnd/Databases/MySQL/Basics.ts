import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Introduction",
          path: "/mysql/basics/fundamentals/introduction"
        },
        {
          name: "Install & Setup",
          path: "/mysql/basics/fundamentals/install-setup"
        },
        {
          name: "Use Cases",
          path: "/mysql/basics/fundamentals/use-cases"
        }
      ]
    },
    {
      name: "SQL Basics",
      subpages: [
        {
          name: "Data Types",
          path: "/mysql/basics/sql-basics/data-types"
        },
        {
          name: "Tables",
          path: "/mysql/basics/sql-basics/tables"
        },
        {
          name: "CRUD",
          path: "/mysql/basics/sql-basics/crud"
        }
      ]
    },
    {
      name: "Querying",
      subpages: [
        {
          name: "Filtering & Sorting",
          path: "/mysql/basics/querying/filtering-sorting"
        },
        {
          name: "Aggregations & GROUP BY",
          path: "/mysql/basics/querying/aggregations-group-by"
        }
      ]
    },
    {
      name: "Joins",
      subpages: [
        {
          name: "INNER JOIN",
          path: "/mysql/basics/joins/inner-join"
        },
        {
          name: "LEFT JOIN",
          path: "/mysql/basics/joins/left-join"
        },
        {
          name: "RIGHT JOIN",
          path: "/mysql/basics/joins/right-join"
        },
        {
          name: "Outer Join Patterns",
          path: "/mysql/basics/joins/outer-join-patterns"
        },
        {
          name: "CROSS & SELF",
          path: "/mysql/basics/joins/cross-self"
        }
      ]
    }
  ]
};

export default Basics;