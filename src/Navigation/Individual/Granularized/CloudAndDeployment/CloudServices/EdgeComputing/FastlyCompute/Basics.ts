import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Introduction",
          path: "/fastly-compute/basics/fundamentals/introduction"
        },
        {
          name: "Pricing & Limits",
          path: "/fastly-compute/basics/fundamentals/pricing-limits"
        }
      ]
    },
    {
      name: "Setup",
      subpages: [
        {
          name: "Fastly CLI & Auth",
          path: "/fastly-compute/basics/setup/fastly-cli-auth"
        },
        {
          name: "Service Setup",
          path: "/fastly-compute/basics/setup/service-setup"
        }
      ]
    },
    {
      name: "Runtime & Config",
      subpages: [
        {
          name: "Languages & SDKs",
          path: "/fastly-compute/basics/runtime-config/languages-sdks"
        },
        {
          name: "Env & Secrets",
          path: "/fastly-compute/basics/runtime-config/env-secrets"
        }
      ]
    },
    {
      name: "Routing",
      subpages: [
        {
          name: "Backends & Hosts",
          path: "/fastly-compute/basics/routing/backends-hosts"
        },
        {
          name: "Edge Dictionaries",
          path: "/fastly-compute/basics/routing/edge-dictionaries"
        }
      ]
    },
    {
      name: "Deploys",
      subpages: [
        {
          name: "Build & Deploy",
          path: "/fastly-compute/basics/deploys/build-deploy"
        },
        {
          name: "Versions & Activations",
          path: "/fastly-compute/basics/deploys/versions-activations"
        }
      ]
    },
    {
      name: "Observability",
      subpages: [
        {
          name: "Logs & Metrics",
          path: "/fastly-compute/basics/observability/logs-metrics"
        },
        {
          name: "Real-Time Analytics",
          path: "/fastly-compute/basics/observability/real-time-analytics"
        }
      ]
    }
  ]
};

export default Basics;