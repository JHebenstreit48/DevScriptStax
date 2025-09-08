import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const RedisNavigation: Subpage = {
  name: "Redis",
  subpages: [
    {
      name: "Redis Fundamentals",
      subpages: [
        { name: "What is Redis?", path: "/redis/intro/overview" },
        { name: "Features & Use Cases", path: "/redis/intro/features-usecases" },
        { name: "Installing & Setting Up Redis", path: "/redis/intro/setup" },
        { name: "Basic Configuration & Optimization", path: "/redis/intro/configuration" },
      ],
    },
    {
      name: "Data Structures in Redis",
      subpages: [
        { name: "String Data Type", path: "/redis/datastructures/strings" },
        { name: "List Data Type", path: "/redis/datastructures/lists" },
        { name: "Set & Sorted Set Data Types", path: "/redis/datastructures/sets" },
        { name: "Hashes & Bitmaps", path: "/redis/datastructures/hashes-bitmaps" },
        { name: "HyperLogLogs & Streams", path: "/redis/datastructures/hyperlogs-streams" },
      ],
    },
    {
      name: "Persistence & Durability",
      subpages: [
        { name: "RDB (Snapshotting)", path: "/redis/persistence/rdb" },
        { name: "AOF (Append-Only File)", path: "/redis/persistence/aof" },
        { name: "Hybrid Persistence Strategies", path: "/redis/persistence/hybrid" },
        { name: "Performance Trade-offs", path: "/redis/persistence/performance" },
      ],
    },
    {
      name: "Pub/Sub & Messaging",
      subpages: [
        { name: "Understanding Pub/Sub", path: "/redis/pubsub/overview" },
        { name: "Implementing Pub/Sub in Applications", path: "/redis/pubsub/implementation" },
        { name: "Performance Considerations", path: "/redis/pubsub/performance" },
      ],
    },
    {
      name: "Clustering & Scaling Redis",
      subpages: [
        { name: "Master-Slave Replication", path: "/redis/clustering/master-slave" },
        { name: "Redis Sentinel for High Availability", path: "/redis/clustering/sentinel" },
        { name: "Sharding & Partitioning", path: "/redis/clustering/sharding" },
        { name: "Scaling Strategies & Best Practices", path: "/redis/clustering/scaling-strategies" },
      ],
    },
  ],
};

export default RedisNavigation;
