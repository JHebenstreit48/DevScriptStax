import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Introduction",
          path: "/aws-lambda/basics/fundamentals/introduction"
        },
        {
          name: "Pricing & Limits",
          path: "/aws-lambda/basics/fundamentals/pricing-limits"
        }
      ]
    },
    {
      name: "Setup",
      subpages: [
        {
          name: "IAM & CLI",
          path: "/aws-lambda/basics/setup/iam-cli"
        },
        {
          name: "First Function",
          path: "/aws-lambda/basics/setup/first-function"
        }
      ]
    },
    {
      name: "Runtime & Config",
      subpages: [
        {
          name: "Runtimes",
          path: "/aws-lambda/basics/runtime-config/runtimes"
        },
        {
          name: "Env Vars (Lambda)",
          path: "/aws-lambda/basics/runtime-config/env-vars-lambda"
        }
      ]
    },
    {
      name: "Invocations",
      subpages: [
        {
          name: "Sync vs Async",
          path: "/aws-lambda/basics/invocations/sync-vs-async"
        },
        {
          name: "Event Sources",
          path: "/aws-lambda/basics/invocations/event-sources"
        }
      ]
    },
    {
      name: "Packaging & Deploy",
      subpages: [
        {
          name: "Zip & Layers",
          path: "/aws-lambda/basics/packaging-deploy/zip-layers"
        },
        {
          name: "Container Images",
          path: "/aws-lambda/basics/packaging-deploy/container-images"
        }
      ]
    },
    {
      name: "Observability",
      subpages: [
        {
          name: "Logs & Metrics",
          path: "/aws-lambda/basics/observability/logs-metrics"
        },
        {
          name: "X-Ray Tracing",
          path: "/aws-lambda/basics/observability/xray-tracing"
        }
      ]
    }
  ]
};

export default Basics;