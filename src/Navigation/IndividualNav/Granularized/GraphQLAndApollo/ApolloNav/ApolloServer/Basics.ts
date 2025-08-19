import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const ServerBasics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Introduction",
      path: "/graphqlandapollo/apollo/apolloserver/basics/introduction"
    },
    {
      name: "Setup",
      path: "/graphqlandapollo/apollo/apolloserver/basics/setup"
    },
    {
      name: "Resolvers",
      path: "/graphqlandapollo/apollo/apolloserver/basics/resolvers"
    },
    {
      name: "Middleware",
      path: "/graphqlandapollo/apollo/apolloserver/basics/middleware"
    }
  ]
};

export default ServerBasics;
