import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Introduction",
          path: "/cloudflare-workers/basics/fundamentals/introduction"
        },
        {
          name: "Pricing & Limits",
          path: "/cloudflare-workers/basics/fundamentals/pricing-limits"
        }
      ]
    },
    {
      name: "Setup",
      subpages: [
        {
          name: "Wrangler & Auth",
          path: "/cloudflare-workers/basics/setup/wrangler-auth"
        },
        {
          name: "Init Project",
          path: "/cloudflare-workers/basics/setup/init-project"
        }
      ]
    },
    {
      name: "Runtime & Config",
      subpages: [
        {
          name: "Workers Runtime",
          path: "/cloudflare-workers/basics/runtime-config/workers-runtime"
        },
        {
          name: "Env Vars (Workers)",
          path: "/cloudflare-workers/basics/runtime-config/env-vars-workers"
        }
      ]
    },
    {
      name: "Data & Bindings",
      subpages: [
        {
          name: "KV Basics",
          path: "/cloudflare-workers/basics/data-bindings/kv-basics"
        },
        {
          name: "Durable Objects",
          path: "/cloudflare-workers/basics/data-bindings/durable-objects"
        }
      ]
    },
    {
      name: "Routing",
      subpages: [
        {
          name: "Routes & Zones",
          path: "/cloudflare-workers/basics/routing/routes-zones"
        },
        {
          name: "Custom Domains",
          path: "/cloudflare-workers/basics/routing/custom-domains"
        }
      ]
    },
    {
      name: "Deploys",
      subpages: [
        {
          name: "Dev & Preview",
          path: "/cloudflare-workers/basics/deploys/dev-preview"
        },
        {
          name: "Production Deploys",
          path: "/cloudflare-workers/basics/deploys/production-deploys"
        }
      ]
    },
    {
      name: "Observability",
      subpages: [
        {
          name: "Logs & Metrics",
          path: "/cloudflare-workers/basics/observability/logs-metrics"
        },
        {
          name: "Traces & Errors",
          path: "/cloudflare-workers/basics/observability/traces-errors"
        }
      ]
    }
  ]
};

export default Basics;