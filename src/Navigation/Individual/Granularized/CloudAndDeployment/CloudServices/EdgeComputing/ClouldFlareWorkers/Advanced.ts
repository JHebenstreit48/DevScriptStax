import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Performance",
      subpages: [
        {
          name: "Caching Strategies",
          path: "/cloudflare-workers/advanced/performance/caching-strategies"
        },
        {
          name: "CPU Time & Optimization",
          path: "/cloudflare-workers/advanced/performance/cpu-optimization"
        }
      ]
    },
    {
      name: "Security & Access",
      subpages: [
        {
          name: "Zero Trust Access",
          path: "/cloudflare-workers/advanced/security-access/zero-trust-access"
        },
        {
          name: "Secrets & Permissions",
          path: "/cloudflare-workers/advanced/security-access/secrets-permissions"
        }
      ]
    },
    {
      name: "Durable Objects",
      subpages: [
        {
          name: "Patterns",
          path: "/cloudflare-workers/advanced/durable-objects/patterns"
        },
        {
          name: "Alarms & Coordination",
          path: "/cloudflare-workers/advanced/durable-objects/alarms-coordination"
        }
      ]
    },
    {
      name: "Integrations",
      subpages: [
        {
          name: "Pages Integration",
          path: "/cloudflare-workers/advanced/integrations/pages-integration"
        },
        {
          name: "R2 & D1",
          path: "/cloudflare-workers/advanced/integrations/r2-d1"
        }
      ]
    },
    {
      name: "Cost & Scaling",
      subpages: [
        {
          name: "Limits & Quotas",
          path: "/cloudflare-workers/advanced/cost-scaling/limits-quotas"
        },
        {
          name: "Cost Controls",
          path: "/cloudflare-workers/advanced/cost-scaling/cost-controls"
        }
      ]
    }
  ]
};

export default Advanced;