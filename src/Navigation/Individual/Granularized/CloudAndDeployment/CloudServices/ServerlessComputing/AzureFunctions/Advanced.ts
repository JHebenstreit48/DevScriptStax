import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Performance",
      subpages: [
        {
          name: "Cold Starts & Premium",
          path: "/azure-functions/advanced/performance/cold-starts-premium"
        },
        {
          name: "Concurrency & Throughput",
          path: "/azure-functions/advanced/performance/concurrency-throughput"
        }
      ]
    },
    {
      name: "Networking & Security",
      subpages: [
        {
          name: "VNet Integration",
          path: "/azure-functions/advanced/networking-security/vnet-integration"
        },
        {
          name: "Managed Identity & RBAC",
          path: "/azure-functions/advanced/networking-security/managed-identity-rbac"
        }
      ]
    },
    {
      name: "Integrations",
      subpages: [
        {
          name: "API Management",
          path: "/azure-functions/advanced/integrations/api-management"
        },
        {
          name: "Event Grid & Storage",
          path: "/azure-functions/advanced/integrations/event-grid-storage"
        }
      ]
    },
    {
      name: "Architecture",
      subpages: [
        {
          name: "Durable Functions",
          path: "/azure-functions/advanced/architecture/durable-functions"
        },
        {
          name: "Retries & Poison Queues",
          path: "/azure-functions/advanced/architecture/retries-poison-queues"
        }
      ]
    },
    {
      name: "Cost & Scaling",
      subpages: [
        {
          name: "Plans & Budgets",
          path: "/azure-functions/advanced/cost-scaling/plans-budgets"
        },
        {
          name: "Scaling Controls",
          path: "/azure-functions/advanced/cost-scaling/scaling-controls"
        }
      ]
    }
  ]
};

export default Advanced;