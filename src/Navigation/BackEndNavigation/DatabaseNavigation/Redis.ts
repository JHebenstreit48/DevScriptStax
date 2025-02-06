import { Subpage } from "@/Navigation/NavigationTypes";

const RedisNavigation: Subpage = {
  name: "Redis",
  subpages: [
    {
      name: "Redis Fundamentals",
      subpages: [
        { name: "What is Redis?", path: "/databases/redis/intro/overview" },
        { name: "Features & Use Cases", path: "/databases/redis/intro/features-usecases" },
        { name: "Installing & Setting Up Redis", path: "/databases/redis/intro/setup" },
        { name: "Basic Configuration & Optimization", path: "/databases/redis/intro/configuration" },
      ],
    },
    {
      name: "Data Structures in Redis",
      subpages: [
        { name: "String Data Type", path: "/databases/redis/datastructures/strings" },
        { name: "List Data Type", path: "/databases/redis/datastructures/lists" },
        { name: "Set & Sorted Set Data Types", path: "/databases/redis/datastructures/sets" },
        { name: "Hashes & Bitmaps", path: "/databases/redis/datastructures/hashes-bitmaps" },
        { name: "HyperLogLogs & Streams", path: "/databases/redis/datastructures/hyperlogs-streams" },
      ],
    },
    {
      name: "Persistence & Durability",
      subpages: [
        { name: "RDB (Snapshotting)", path: "/databases/redis/persistence/rdb" },
        { name: "AOF (Append-Only File)", path: "/databases/redis/persistence/aof" },
        { name: "Hybrid Persistence Strategies", path: "/databases/redis/persistence/hybrid" },
        { name: "Performance Trade-offs", path: "/databases/redis/persistence/performance" },
      ],
    },
    {
      name: "Pub/Sub & Messaging",
      subpages: [
        { name: "Understanding Pub/Sub", path: "/databases/redis/pubsub/overview" },
        { name: "Implementing Pub/Sub in Applications", path: "/databases/redis/pubsub/implementation" },
        { name: "Performance Considerations", path: "/databases/redis/pubsub/performance" },
      ],
    },
    {
      name: "Clustering & Scaling Redis",
      subpages: [
        { name: "Master-Slave Replication", path: "/databases/redis/clustering/master-slave" },
        { name: "Redis Sentinel for High Availability", path: "/databases/redis/clustering/sentinel" },
        { name: "Sharding & Partitioning", path: "/databases/redis/clustering/sharding" },
        { name: "Scaling Strategies & Best Practices", path: "/databases/redis/clustering/scaling-strategies" },
      ],
    },
  ],
};

export default RedisNavigation;
