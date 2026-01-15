import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Introduction",
          path: "/google-cloud-functions/basics/fundamentals/introduction"
        },
        {
          name: "Pricing & Limits",
          path: "/google-cloud-functions/basics/fundamentals/pricing-limits"
        }
      ]
    },
    {
      name: "Setup",
      subpages: [
        {
          name: "gcloud & Auth",
          path: "/google-cloud-functions/basics/setup/gcloud-auth"
        },
        {
          name: "First Deploy",
          path: "/google-cloud-functions/basics/setup/first-deploy"
        }
      ]
    },
    {
      name: "Runtime & Config",
      subpages: [
        {
          name: "Runtimes",
          path: "/google-cloud-functions/basics/runtime-config/runtimes"
        },
        {
          name: "Env Vars (Functions)",
          path: "/google-cloud-functions/basics/runtime-config/env-vars-functions"
        }
      ]
    },
    {
      name: "Triggers",
      subpages: [
        {
          name: "HTTP & Events",
          path: "/google-cloud-functions/basics/triggers/http-events"
        },
        {
          name: "Pub/Sub & Storage",
          path: "/google-cloud-functions/basics/triggers/pubsub-storage"
        }
      ]
    },
    {
      name: "Deploys",
      subpages: [
        {
          name: "Source & Build",
          path: "/google-cloud-functions/basics/deploys/source-build"
        },
        {
          name: "Regions & Scaling",
          path: "/google-cloud-functions/basics/deploys/regions-scaling"
        }
      ]
    },
    {
      name: "Observability",
      subpages: [
        {
          name: "Logs & Metrics",
          path: "/google-cloud-functions/basics/observability/logs-metrics"
        },
        {
          name: "Error Reporting & Traces",
          path: "/google-cloud-functions/basics/observability/error-traces"
        }
      ]
    }
  ]
};

export default Basics;