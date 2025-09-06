import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const SQLiteNavigation: Subpage = {
  name: "SQLite",
  subpages: [
    {
      name: "SQLite Fundamentals",
      subpages: [
        { name: "What is SQLite?", path: "/sqlite/intro/overview" },
        { name: "Why Use SQLite?", path: "/sqlite/intro/why-use" },
        { name: "SQLite vs Other Databases", path: "/sqlite/intro/comparison" },
        { name: "Installing & Setting Up SQLite", path: "/sqlite/intro/setup" },
      ],
    },
    {
      name: "SQLite Features & Architecture",
      subpages: [
        { name: "Lightweight Database Engine", path: "/sqlite/features/lightweight" },
        { name: "Self-Contained & Serverless", path: "/sqlite/features/self-contained" },
        { name: "ACID Compliance", path: "/sqlite/features/acid-compliance" },
        { name: "Data Storage & File Format", path: "/sqlite/features/storage-format" },
      ],
    },
    {
      name: "Using SQLite in Applications",
      subpages: [
        { name: "Connecting to SQLite", path: "/sqlite/usage/connecting" },
        { name: "Executing Queries", path: "/sqlite/usage/queries" },
        { name: "Using SQLite with Python", path: "/sqlite/usage/python" },
        { name: "Using SQLite with Node.js", path: "/sqlite/usage/nodejs" },
      ],
    },
    {
      name: "Performance Considerations",
      subpages: [
        { name: "Indexing for Performance", path: "/sqlite/performance/indexing" },
        { name: "Query Optimization Techniques", path: "/sqlite/performance/query-optimization" },
        { name: "Write-Ahead Logging (WAL)", path: "/sqlite/performance/wal" },
        { name: "Memory & Disk Usage", path: "/sqlite/performance/memory-disk" },
      ],
    },
    {
      name: "Common SQLite Use Cases",
      subpages: [
        { name: "Mobile & Embedded Systems", path: "/sqlite/usecases/mobile" },
        { name: "Web Applications", path: "/sqlite/usecases/web-apps" },
        { name: "Configuration Storage", path: "/sqlite/usecases/config-storage" },
        { name: "File-Based Databases", path: "/sqlite/usecases/file-databases" },
      ],
    },
  ],
};

export default SQLiteNavigation;
