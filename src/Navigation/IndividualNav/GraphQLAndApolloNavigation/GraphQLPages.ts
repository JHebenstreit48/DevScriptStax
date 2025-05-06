import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const GraphQLNavigation: Subpage = {
  name: "GraphQL",
  subpages: [
    {
      name: "GraphQL Basics",
      subpages: [
        { name: "Introduction to GraphQL", path: "/graphql/intro" },
        { name: "GraphQL Queries", path: "/graphql/queries" },
        { name: "GraphQL Mutations", path: "/graphql/mutations" },
        { name: "GraphQL Subscriptions", path: "/graphql/subscriptions" },
        { name: "GraphQL Schema", path: "/graphql/schema" },
      ],
    },
    {
      name: "Advanced GraphQL",
      subpages: [
        { name: "Custom Scalars", path: "/graphql/advanced/customscalars" },
        { name: "Directives", path: "/graphql/advanced/directives" },
        {
          name: "GraphQL Performance Optimization",
          path: "/graphql/advanced/performance",
        },
        { name: "GraphQL Federation", path: "/graphql/advanced/federation" },
      ],
    },
  ],
};

export default GraphQLNavigation;
