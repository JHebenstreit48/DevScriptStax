import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Introduction",
          path: "/azure-functions/basics/fundamentals/introduction"
        },
        {
          name: "Pricing & Limits",
          path: "/azure-functions/basics/fundamentals/pricing-limits"
        }
      ]
    },
    {
      name: "Setup",
      subpages: [
        {
          name: "Azure CLI & Auth",
          path: "/azure-functions/basics/setup/azure-cli-auth"
        },
        {
          name: "First Function",
          path: "/azure-functions/basics/setup/first-function"
        }
      ]
    },
    {
      name: "Runtime & Config",
      subpages: [
        {
          name: "Runtimes",
          path: "/azure-functions/basics/runtime-config/runtimes"
        },
        {
          name: "Env Vars (Functions)",
          path: "/azure-functions/basics/runtime-config/env-vars-functions"
        }
      ]
    },
    {
      name: "Triggers",
      subpages: [
        {
          name: "HTTP & Timer",
          path: "/azure-functions/basics/triggers/http-timer"
        },
        {
          name: "Queue & Service Bus",
          path: "/azure-functions/basics/triggers/queue-service-bus"
        }
      ]
    },
    {
      name: "Deploys",
      subpages: [
        {
          name: "Core Tools & VS Code",
          path: "/azure-functions/basics/deploys/core-tools-vscode"
        },
        {
          name: "Regions & Scaling",
          path: "/azure-functions/basics/deploys/regions-scaling"
        }
      ]
    },
    {
      name: "Observability",
      subpages: [
        {
          name: "Logs & Metrics",
          path: "/azure-functions/basics/observability/logs-metrics"
        },
        {
          name: "App Insights & Traces",
          path: "/azure-functions/basics/observability/app-insights-traces"
        }
      ]
    }
  ]
};

export default Basics;