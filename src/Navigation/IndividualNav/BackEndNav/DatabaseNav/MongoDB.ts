import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const MongoDBNavigation: Subpage = {
  name: "MongoDB",
  subpages: [
    {
      name: "MongoDB Fundamentals",
      subpages: [
        { name: "What is MongoDB?", path: "/databases/mongodb/intro/overview" },
        { name: "NoSQL vs SQL Databases", path: "/databases/mongodb/intro/nosql-vs-sql" },
        { name: "Installing & Setting Up MongoDB", path: "/databases/mongodb/intro/setup" },
        { name: "MongoDB Use Cases", path: "/databases/mongodb/intro/use-cases" },
      ],
    },
    {
      name: "CRUD Operations",
      subpages: [
        { name: "Create (Insert Documents)", path: "/databases/mongodb/crud/create" },
        { name: "Read (Find Documents)", path: "/databases/mongodb/crud/read" },
        { name: "Update Documents", path: "/databases/mongodb/crud/update" },
        { name: "Delete Documents", path: "/databases/mongodb/crud/delete" },
        { name: "Bulk Operations & Transactions", path: "/databases/mongodb/crud/bulk-operations" },
      ],
    },
    {
      name: "Indexes in MongoDB",
      subpages: [
        { name: "Introduction to Indexes", path: "/databases/mongodb/indexes/overview" },
        { name: "Types of Indexes", path: "/databases/mongodb/indexes/types" },
        { name: "Creating & Managing Indexes", path: "/databases/mongodb/indexes/management" },
        { name: "Index Performance Optimization", path: "/databases/mongodb/indexes/performance" },
      ],
    },
    {
      name: "Aggregation Framework",
      subpages: [
        { name: "What is Aggregation?", path: "/databases/mongodb/aggregation/overview" },
        { name: "Aggregation Pipelines", path: "/databases/mongodb/aggregation/pipelines" },
        { name: "Common Aggregation Operators", path: "/databases/mongodb/aggregation/operators" },
        { name: "Performance Optimization in Aggregation", path: "/databases/mongodb/aggregation/performance" },
      ],
    },
    {
      name: "Scalability & Replication",
      subpages: [
        { name: "Replica Sets Overview", path: "/databases/mongodb/replication/replica-sets" },
        { name: "Sharding in MongoDB", path: "/databases/mongodb/replication/sharding" },
        { name: "High Availability & Fault Tolerance", path: "/databases/mongodb/replication/high-availability" },
        { name: "Best Practices for Scaling MongoDB", path: "/databases/mongodb/replication/best-practices" },
      ],
    },
  ],
};

export default MongoDBNavigation;
