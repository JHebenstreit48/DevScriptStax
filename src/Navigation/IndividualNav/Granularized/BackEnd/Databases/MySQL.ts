import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const MySQLNavigation: Subpage = {
  name: "MySQL",
  subpages: [
    {
      name: "MySQL Fundamentals",
      subpages: [
        { name: "What is MySQL?", path: "/mysql/intro/overview" },
        { name: "Relational Databases vs NoSQL", path: "/mysql/intro/relational-vs-nosql" },
        { name: "Installing & Setting Up MySQL", path: "/mysql/intro/setup" },
        { name: "MySQL Use Cases", path: "/mysql/intro/use-cases" },
      ],
    },
    {
      name: "SQL Basics",
      subpages: [
        { name: "Data Types in MySQL", path: "/mysql/sqlbasics/data-types" },
        { name: "Creating & Managing Tables", path: "/mysql/sqlbasics/tables" },
        { name: "Inserting & Querying Data", path: "/mysql/sqlbasics/crud" },
        { name: "Filtering & Sorting Data", path: "/mysql/sqlbasics/filtering-sorting" },
        { name: "Aggregations & Group By", path: "/mysql/sqlbasics/aggregations" },
      ],
    },
    {
      name: "Joins in MySQL",
      subpages: [
        { name: "Introduction to Joins", path: "/mysql/joins/overview" },
        { name: "INNER JOIN", path: "/mysql/joins/inner-join" },
        { name: "LEFT JOIN", path: "/mysql/joins/left-join" },
        { name: "RIGHT JOIN", path: "/mysql/joins/right-join" },
        { name: "FULL OUTER JOIN", path: "/mysql/joins/full-join" },
        { name: "Cross Joins & Self Joins", path: "/mysql/joins/cross-self" },
      ],
    },
    {
      name: "Indexes & Performance Optimization",
      subpages: [
        { name: "What are Indexes?", path: "/mysql/optimization/indexes" },
        { name: "Creating & Managing Indexes", path: "/mysql/optimization/managing-indexes" },
        { name: "Query Optimization Techniques", path: "/mysql/optimization/query-tuning" },
        { name: "Using EXPLAIN for Performance Tuning", path: "/mysql/optimization/explain" },
      ],
    },
    {
      name: "Stored Procedures & Triggers",
      subpages: [
        { name: "Introduction to Stored Procedures", path: "/mysql/procedures/overview" },
        { name: "Creating & Using Stored Procedures", path: "/mysql/procedures/usage" },
        { name: "Understanding Triggers", path: "/mysql/procedures/triggers" },
        { name: "Best Practices for Procedures & Triggers", path: "/mysql/procedures/best-practices" },
      ],
    },
  ],
};

export default MySQLNavigation;
