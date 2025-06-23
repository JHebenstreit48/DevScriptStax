import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const GraphQLBasics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Introduction",
      path: "/graphql/basics/introduction"
    },
    {
      name: "Queries",
      path: "/graphql/basics/queries"
    },
    {
      name: "Mutations",
      path: "/graphql/basics/mutations"
    },
    {
      name: "Subscriptions",
      path: "/graphql/basics/subscriptions"
    },
    {
      name: "Schema",
      path: "/graphql/basics/schema"
    }
  ]
};

export default GraphQLBasics;
