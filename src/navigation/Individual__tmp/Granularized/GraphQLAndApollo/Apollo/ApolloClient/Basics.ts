import type { Subpage } from '@/types/navigation';

const ClientBasics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Introduction",
          path: "/apollo/client/basics/fundamentals/introduction"
        },
        {
          name: "Install & Setup",
          path: "/apollo/client/basics/fundamentals/install-setup"
        }
      ]
    },
    {
      name: "Queries",
      subpages: [
        {
          name: "useQuery",
          path: "/apollo/client/basics/queries/usequery"
        },
        {
          name: "Variables & Headers",
          path: "/apollo/client/basics/queries/variables-headers"
        }
      ]
    },
    {
      name: "Mutations",
      subpages: [
        {
          name: "useMutation",
          path: "/apollo/client/basics/mutations/usemutation"
        },
        {
          name: "Optimistic UI",
          path: "/apollo/client/basics/mutations/optimistic-ui"
        }
      ]
    },
    {
      name: "Cache Basics",
      subpages: [
        {
          name: "Store",
          path: "/apollo/client/basics/cache/store"
        },
        {
          name: "Normalization",
          path: "/apollo/client/basics/cache/normalization"
        }
      ]
    }
  ]
};

export default ClientBasics;