import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const ApolloNavigation: Subpage = {
  name: "Apollo",
  subpages: [
    {
      name: "Apollo Server",
      subpages: [
        { name: "Introduction to Apollo Server", path: "/apolloserver/intro" },
        { name: "Setting Up Apollo Server", path: "/apolloserver/setup" },
        { name: "Resolvers", path: "/apolloserver/resolvers" },
        { name: "Apollo Middleware", path: "/apolloserver/middleware" },
        {
          name: "Authentication with Apollo",
          path: "/apolloserver/authentication",
        },
      ],
    },
    {
      name: "Apollo Client",
      subpages: [
        { name: "Introduction to Apollo Client", path: "/apolloclient/intro" },
        { name: "Fetching Data", path: "/apolloclient/fetching" },
        { name: "State Management", path: "/apolloclient/statemanagement" },
        { name: "Error Handling", path: "/apolloclient/errorhandling" },
      ],
    },
  ],
};

export default ApolloNavigation;
