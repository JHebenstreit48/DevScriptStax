import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const ApolloServerBasics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Introduction",
      path: "/apolloserver/basics/introduction"
    },
    {
      name: "Setup",
      path: "/apolloserver/basics/setup"
    },
    {
      name: "Resolvers",
      path: "/apolloserver/basics/resolvers"
    },
    {
      name: "Middleware",
      path: "/apolloserver/basics/middleware"
    }
  ]
};

export default ApolloServerBasics;
