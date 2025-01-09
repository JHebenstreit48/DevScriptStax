import { Subpage } from "@/Navigation/FrontEndNavigation/NavigationTypes";

const GraphQLAndApolloNavigation: Subpage = {
  name: "GraphQL & Apollo",
  subpages: [
    {
      name: "GraphQL",
      subpages: [
        { name: "Introduction to GraphQL", path: "/graphql/intro" },
        { name: "GraphQL Queries", path: "/graphql/queries" },
        { name: "GraphQL Mutations", path: "/graphql/mutations" },
        { name: "GraphQL Subscriptions", path: "/graphql/subscriptions" },
        { name: "GraphQL Schema", path: "/graphql/schema" },
      ],
    },
    {
      name: "Apollo Server",
      subpages: [
        { name: "Introduction to Apollo Server", path: "/apolloserver/intro" },
        { name: "Setting Up Apollo Server", path: "/apolloserver/setup" },
        { name: "Resolvers", path: "/apolloserver/resolvers" },
        { name: "Apollo Middleware", path: "/apolloserver/middleware" },
        { name: "Authentication with Apollo", path: "/apolloserver/authentication" },
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
    {
      name: "Advanced GraphQL",
      subpages: [
        { name: "Custom Scalars", path: "/graphql/advanced/customscalars" },
        { name: "Directives", path: "/graphql/advanced/directives" },
        { name: "GraphQL Performance Optimization", path: "/graphql/advanced/performance" },
        { name: "GraphQL Federation", path: "/graphql/advanced/federation" },
      ],
    },
  ],
};

export default GraphQLAndApolloNavigation;
