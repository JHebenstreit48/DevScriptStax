import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Schema Design",
      subpages: [
        {
          name: "Custom Scalars",
          path: "/graphql/advanced/schema-design/custom-scalars"
        },
        {
          name: "Interfaces & Unions",
          path: "/graphql/advanced/schema-design/interfaces-unions"
        }
      ]
    },
    {
      name: "Directives",
      subpages: [
        {
          name: "Built-in Directives",
          path: "/graphql/advanced/directives/built-in"
        },
        {
          name: "Custom Directives",
          path: "/graphql/advanced/directives/custom"
        }
      ]
    },
    {
      name: "Performance",
      subpages: [
        {
          name: "N+1 and DataLoader Pattern",
          path: "/graphql/advanced/performance/n-plus-one-dataloader"
        },
        {
          name: "Caching Concepts",
          path: "/graphql/advanced/performance/caching-concepts"
        }
      ]
    },
    {
      name: "Composition",
      subpages: [
        {
          name: "Federation Concepts",
          path: "/graphql/advanced/composition/federation-concepts"
        },
        {
          name: "Schema Stitching Concepts",
          path: "/graphql/advanced/composition/schema-stitching"
        }
      ]
    }
  ]
};

export default Advanced;