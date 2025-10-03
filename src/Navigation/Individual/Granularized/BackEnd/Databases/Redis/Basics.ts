import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Introduction",
          path: "/redis/basics/fundamentals/introduction"  
        },
        {
          name: "Install & Setup",
          path: "/redis/basics/fundamentals/install-setup"
        },
        {
          name: "Use Cases",
          path: "/redis/basics/fundamentals/use-cases"
        }
      ]
    },
    {
      name: "Data Structures",
      subpages: [
        {
          name: "Strings",
          path: "/redis/basics/data-structures/strings"
        },
        {
          name: "Lists",
          path: "/redis/basics/data-structures/lists"
        },
        {
          name: "Sets & Sorted Sets",
          path: "/redis/basics/data-structures/sets-and-sorted-sets"
        },
        {
          name: "Hashes & Bitmaps",
          path: "/redis/basics/data-structures/hashes-and-bitmaps"
        },
        {
          name: "HyperLogLog & Streams",
          path: "/redis/basics/data-structures/hyperloglog-and-streams"
        }
      ]
    },
    {
      name: "Working With Data",
      subpages: [
        {
          name: "Keys & Expiration",
          path: "/redis/basics/working-with-data/keys-and-expiration"
        },
        {
          name: "SCAN & Patterns",
          path: "/redis/basics/working-with-data/scan-and-patterns"
        },
        {
          name: "Pipelining Basics",
          path: "/redis/basics/working-with-data/pipelining-basics"
        }
      ]
    }
  ]
};

export default Basics;