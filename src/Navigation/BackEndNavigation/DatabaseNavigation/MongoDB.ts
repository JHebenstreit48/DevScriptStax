import { Subpage } from "@/Navigation/NavigationTypes";

const MongoDBNavigation: Subpage = {
  name: "MongoDB",
  subpages: [
    { name: "Introduction to MongoDB", path: "/databases/mongodb/intro" },
    { name: "CRUD Operations", path: "/databases/mongodb/crud" },
    { name: "Indexes in MongoDB", path: "/databases/mongodb/indexes" },
    {
      name: "Aggregation Framework",
      path: "/databases/mongodb/aggregation",
    },
    {
      name: "Replica Sets and Sharding",
      path: "/databases/mongodb/replicasets",
    },
  ],
};

export default MongoDBNavigation;
