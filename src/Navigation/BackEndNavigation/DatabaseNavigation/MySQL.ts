import { Subpage } from "@/Navigation/NavigationTypes";

const MySQLNavigation: Subpage = {
  name: "MySQL",
  subpages: [
    {
      name: "MySQL Fundamentals",
      subpages: [
        { name: "What is MySQL?", path: "/databases/mysql/intro/overview" },
        { name: "Relational Databases vs NoSQL", path: "/databases/mysql/intro/relational-vs-nosql" },
        { name: "Installing & Setting Up MySQL", path: "/databases/mysql/intro/setup" },
        { name: "MySQL Use Cases", path: "/databases/mysql/intro/use-cases" },
      ],
    },
    {
      name: "SQL Basics",
      subpages: [
        { name: "Data Types in MySQL", path: "/databases/mysql/sqlbasics/data-types" },
        { name: "Creating & Managing Tables", path: "/databases/mysql/sqlbasics/tables" },
        { name: "Inserting & Querying Data", path: "/databases/mysql/sqlbasics/crud" },
        { name: "Filtering & Sorting Data", path: "/databases/mysql/sqlbasics/filtering-sorting" },
        { name: "Aggregations & Group By", path: "/databases/mysql/sqlbasics/aggregations" },
      ],
    },
    {
      name: "Joins in MySQL",
      subpages: [
        { name: "Introduction to Joins", path: "/databases/mysql/joins/overview" },
        { name: "INNER JOIN", path: "/databases/mysql/joins/inner-join" },
        { name: "LEFT JOIN", path: "/databases/mysql/joins/left-join" },
        { name: "RIGHT JOIN", path: "/databases/mysql/joins/right-join" },
        { name: "FULL OUTER JOIN", path: "/databases/mysql/joins/full-join" },
        { name: "Cross Joins & Self Joins", path: "/databases/mysql/joins/cross-self" },
      ],
    },
    {
      name: "Indexes & Performance Optimization",
      subpages: [
        { name: "What are Indexes?", path: "/databases/mysql/optimization/indexes" },
        { name: "Creating & Managing Indexes", path: "/databases/mysql/optimization/managing-indexes" },
        { name: "Query Optimization Techniques", path: "/databases/mysql/optimization/query-tuning" },
        { name: "Using EXPLAIN for Performance Tuning", path: "/databases/mysql/optimization/explain" },
      ],
    },
    {
      name: "Stored Procedures & Triggers",
      subpages: [
        { name: "Introduction to Stored Procedures", path: "/databases/mysql/procedures/overview" },
        { name: "Creating & Using Stored Procedures", path: "/databases/mysql/procedures/usage" },
        { name: "Understanding Triggers", path: "/databases/mysql/procedures/triggers" },
        { name: "Best Practices for Procedures & Triggers", path: "/databases/mysql/procedures/best-practices" },
      ],
    },
  ],
};

export default MySQLNavigation;
