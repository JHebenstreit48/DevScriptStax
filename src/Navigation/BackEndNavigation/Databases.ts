import { Subpage } from "@/Navigation/FrontEndNavigation/NavigationTypes";

const DatabasesNavigation: Subpage = {
  name: "Databases",
  subpages: [
    {
      name: "Firebase",
      subpages: [
        { name: "Introduction to Firebase", path: "/databases/firebase/intro" },
        { name: "Authentication", path: "/databases/firebase/authentication" },
        { name: "Realtime Database", path: "/databases/firebase/realtime" },
        { name: "Firestore", path: "/databases/firebase/firestore" },
        { name: "Firebase Storage", path: "/databases/firebase/storage" },
      ],
    },
    {
      name: "MongoDB",
      subpages: [
        { name: "Introduction to MongoDB", path: "/databases/mongodb/intro" },
        { name: "CRUD Operations", path: "/databases/mongodb/crud" },
        { name: "Indexes in MongoDB", path: "/databases/mongodb/indexes" },
        { name: "Aggregation Framework", path: "/databases/mongodb/aggregation" },
        { name: "Replica Sets and Sharding", path: "/databases/mongodb/replicasets" },
      ],
    },
    {
      name: "MySQL",
      subpages: [
        { name: "Introduction to MySQL", path: "/databases/mysql/intro" },
        { name: "SQL Basics", path: "/databases/mysql/sqlbasics" },
        { name: "Joins in MySQL", path: "/databases/mysql/joins" },
        { name: "Indexes and Optimization", path: "/databases/mysql/optimization" },
        { name: "Stored Procedures and Triggers", path: "/databases/mysql/procedures" },
      ],
    },
    {
      name: "PostgreSQL",
      subpages: [
        { name: "Introduction to PostgreSQL", path: "/databases/postgresql/intro" },
        { name: "Advanced SQL", path: "/databases/postgresql/advancedsql" },
        { name: "Views and Materialized Views", path: "/databases/postgresql/views" },
        { name: "JSON and JSONB", path: "/databases/postgresql/json" },
        { name: "Extensions and Tools", path: "/databases/postgresql/extensions" },
      ],
    },
    {
      name: "Redis",
      subpages: [
        { name: "Introduction to Redis", path: "/databases/redis/intro" },
        { name: "Data Structures in Redis", path: "/databases/redis/datastructures" },
        { name: "Persistence in Redis", path: "/databases/redis/persistence" },
        { name: "Pub/Sub in Redis", path: "/databases/redis/pubsub" },
        { name: "Clustering and Scaling", path: "/databases/redis/clustering" },
      ],
    },
    {
      name: "SQLite",
      subpages: [
        { name: "Introduction to SQLite", path: "/databases/sqlite/intro" },
        { name: "SQLite Features", path: "/databases/sqlite/features" },
        { name: "Using SQLite in Applications", path: "/databases/sqlite/usage" },
        { name: "Performance Considerations", path: "/databases/sqlite/performance" },
        { name: "Common SQLite Use Cases", path: "/databases/sqlite/usecases" },
      ],
    },
  ],
};

export default DatabasesNavigation;
