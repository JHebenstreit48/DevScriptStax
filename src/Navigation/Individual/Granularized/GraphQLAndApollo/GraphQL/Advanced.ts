import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Custom Scalars",
      path: "/graphql/advanced/customscalars"
    },
    {
      name: "Directives",
      path: "/graphql/advanced/directives"
    },
    {
      name: "Performance",
      path: "/graphql/advanced/performance"
    },
    {
      name: "Federation",
      path: "/graphql/advanced/federation"
    }
  ]
};

export default Advanced;
