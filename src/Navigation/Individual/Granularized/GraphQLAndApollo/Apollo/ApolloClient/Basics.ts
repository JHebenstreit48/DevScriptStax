import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const ClientBasics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Getting Started",
      subpages: [
        {
          name: "Introduction",
          path: "/graphqlandapollo/apollo/client/basics/getting-started/introduction"
        },
        {
          name: "Install & Setup",
          path: "/graphqlandapollo/apollo/client/basics/getting-started/install-setup"
        }
      ]
    },
    {
      name: "Queries",
      subpages: [
        {
          name: "useQuery",
          path: "/graphqlandapollo/apollo/client/basics/queries/usequery"
        },
        {
          name: "Variables & Headers",
          path: "/graphqlandapollo/apollo/client/basics/queries/variables-headers"
        }
      ]
    },
    {
      name: "Mutations",
      subpages: [
        {
          name: "useMutation",
          path: "/graphqlandapollo/apollo/client/basics/mutations/usemutation"
        },
        {
          name: "Optimistic UI",
          path: "/graphqlandapollo/apollo/client/basics/mutations/optimistic-ui"
        }
      ]
    },
    {
      name: "Cache Basics",
      subpages: [
        {
          name: "Store",
          path: "/graphqlandapollo/apollo/client/basics/cache/store"
        },
        {
          name: "Normalization",
          path: "/graphqlandapollo/apollo/client/basics/cache/normalization"
        }
      ]
    }
  ]
};

export default ClientBasics;