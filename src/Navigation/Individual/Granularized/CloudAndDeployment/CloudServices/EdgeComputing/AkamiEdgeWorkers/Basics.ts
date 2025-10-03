import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Introduction",
          path: "/akamai-edgeworkers/basics/fundamentals/introduction"
        },
        {
          name: "Pricing & Limits",
          path: "/akamai-edgeworkers/basics/fundamentals/pricing-limits"
        }
      ]
    },
    {
      name: "Setup",
      subpages: [
        {
          name: "Akamai CLI & Auth",
          path: "/akamai-edgeworkers/basics/setup/akamai-cli-auth"
        },
        {
          name: "Init Project",
          path: "/akamai-edgeworkers/basics/setup/init-project"
        }
      ]
    },
    {
      name: "Runtime & Config",
      subpages: [
        {
          name: "JS Runtime & APIs",
          path: "/akamai-edgeworkers/basics/runtime-config/js-runtime-apis"
        },
        {
          name: "Env & Secrets",
          path: "/akamai-edgeworkers/basics/runtime-config/env-secrets"
        }
      ]
    },
    {
      name: "Data & State",
      subpages: [
        {
          name: "EdgeKV Basics",
          path: "/akamai-edgeworkers/basics/data-state/edgekv-basics"
        },
        {
          name: "Namespaces & Limits",
          path: "/akamai-edgeworkers/basics/data-state/namespaces-limits"
        }
      ]
    },
    {
      name: "Routing",
      subpages: [
        {
          name: "Property Rules",
          path: "/akamai-edgeworkers/basics/routing/property-rules"
        },
        {
          name: "Edge Hostnames & Certs",
          path: "/akamai-edgeworkers/basics/routing/edge-hostnames-certs"
        }
      ]
    },
    {
      name: "Deploys",
      subpages: [
        {
          name: "Bundles & Activation",
          path: "/akamai-edgeworkers/basics/deploys/bundles-activation"
        },
        {
          name: "Sandbox & Staging",
          path: "/akamai-edgeworkers/basics/deploys/sandbox-staging"
        }
      ]
    },
    {
      name: "Observability",
      subpages: [
        {
          name: "Logs & Metrics",
          path: "/akamai-edgeworkers/basics/observability/logs-metrics"
        },
        {
          name: "Debugging & Validation",
          path: "/akamai-edgeworkers/basics/observability/debugging-validation"
        }
      ]
    }
  ]
};

export default Basics;