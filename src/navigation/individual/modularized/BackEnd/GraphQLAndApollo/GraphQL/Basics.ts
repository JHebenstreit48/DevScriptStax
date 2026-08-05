import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Introduction",
          path: "/graphql/basics/fundamentals/introduction"
        },
        {
          name: "Key Concepts",
          path: "/graphql/basics/fundamentals/key-concepts"
        }
      ]
    },
    {
      name: "Operations",
      subpages: [
        {
          name: "Queries",
          path: "/graphql/basics/operations/queries"
        },
        {
          name: "Mutations",
          path: "/graphql/basics/operations/mutations"
        }
      ]
    },
    {
      name: "Schema & Execution",
      subpages: [
        {
          name: "Schema",
          path: "/graphql/basics/schema-execution/schema"
        },
        {
          name: "Resolvers",
          path: "/graphql/basics/schema-execution/resolvers"
        }
      ]
    },
    {
      name: "Real-Time",
      subpages: [
        {
          name: "Subscriptions",
          path: "/graphql/basics/real-time/subscriptions"
        },
        {
          name: "Variables & Fragments",
          path: "/graphql/basics/real-time/variables-fragments"
        }
      ]
    }
  ]
};

export default Basics;