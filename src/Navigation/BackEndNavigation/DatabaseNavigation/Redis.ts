import { Subpage } from "@/Navigation/NavigationTypes";

const RedisNavigation: Subpage = {
  name: "Redis",
  subpages: [
    { name: "Introduction to Redis", path: "/databases/redis/intro" },
    {
      name: "Data Structures in Redis",
      path: "/databases/redis/datastructures",
    },
    { name: "Persistence in Redis", path: "/databases/redis/persistence" },
    { name: "Pub/Sub in Redis", path: "/databases/redis/pubsub" },
    { name: "Clustering and Scaling", path: "/databases/redis/clustering" },
  ],
};

export default RedisNavigation;
