import { Subpage } from "@/Navigation/NavigationTypes";

const MySQLNavigation: Subpage = {
  name: "MySQL",
  subpages: [
    { name: "Introduction to MySQL", path: "/databases/mysql/intro" },
    { name: "SQL Basics", path: "/databases/mysql/sqlbasics" },
    { name: "Joins in MySQL", path: "/databases/mysql/joins" },
    {
      name: "Indexes and Optimization",
      path: "/databases/mysql/optimization",
    },
    {
      name: "Stored Procedures and Triggers",
      path: "/databases/mysql/procedures",
    },
  ],
};

export default MySQLNavigation;
