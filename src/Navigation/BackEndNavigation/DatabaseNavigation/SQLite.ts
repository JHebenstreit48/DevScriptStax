import { Subpage } from "@/Navigation/NavigationTypes";

const SQLiteNavigation: Subpage = {
  name: "SQLite",
  subpages: [
    {
      name: "SQLite Fundamentals",
      subpages: [
        { name: "What is SQLite?", path: "/databases/sqlite/intro/overview" },
        { name: "Why Use SQLite?", path: "/databases/sqlite/intro/why-use" },
        { name: "SQLite vs Other Databases", path: "/databases/sqlite/intro/comparison" },
        { name: "Installing & Setting Up SQLite", path: "/databases/sqlite/intro/setup" },
      ],
    },
    {
      name: "SQLite Features & Architecture",
      subpages: [
        { name: "Lightweight Database Engine", path: "/databases/sqlite/features/lightweight" },
        { name: "Self-Contained & Serverless", path: "/databases/sqlite/features/self-contained" },
        { name: "ACID Compliance", path: "/databases/sqlite/features/acid-compliance" },
        { name: "Data Storage & File Format", path: "/databases/sqlite/features/storage-format" },
      ],
    },
    {
      name: "Using SQLite in Applications",
      subpages: [
        { name: "Connecting to SQLite", path: "/databases/sqlite/usage/connecting" },
        { name: "Executing Queries", path: "/databases/sqlite/usage/queries" },
        { name: "Using SQLite with Python", path: "/databases/sqlite/usage/python" },
        { name: "Using SQLite with Node.js", path: "/databases/sqlite/usage/nodejs" },
      ],
    },
    {
      name: "Performance Considerations",
      subpages: [
        { name: "Indexing for Performance", path: "/databases/sqlite/performance/indexing" },
        { name: "Query Optimization Techniques", path: "/databases/sqlite/performance/query-optimization" },
        { name: "Write-Ahead Logging (WAL)", path: "/databases/sqlite/performance/wal" },
        { name: "Memory & Disk Usage", path: "/databases/sqlite/performance/memory-disk" },
      ],
    },
    {
      name: "Common SQLite Use Cases",
      subpages: [
        { name: "Mobile & Embedded Systems", path: "/databases/sqlite/usecases/mobile" },
        { name: "Web Applications", path: "/databases/sqlite/usecases/web-apps" },
        { name: "Configuration Storage", path: "/databases/sqlite/usecases/config-storage" },
        { name: "File-Based Databases", path: "/databases/sqlite/usecases/file-databases" },
      ],
    },
  ],
};

export default SQLiteNavigation;
