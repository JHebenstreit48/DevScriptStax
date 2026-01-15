import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Introduction",
          path: "/firebase-functions/basics/fundamentals/introduction"
        },
        {
          name: "Pricing & Limits",
          path: "/firebase-functions/basics/fundamentals/pricing-limits"
        }
      ]
    },
    {
      name: "Setup",
      subpages: [
        {
          name: "Firebase CLI & Project",
          path: "/firebase-functions/basics/setup/firebase-cli-project"
        },
        {
          name: "Init Functions",
          path: "/firebase-functions/basics/setup/init-functions"
        }
      ]
    },
    {
      name: "Runtime & Config",
      subpages: [
        {
          name: "Runtimes",
          path: "/firebase-functions/basics/runtime-config/runtimes"
        },
        {
          name: "Env & Secrets",
          path: "/firebase-functions/basics/runtime-config/env-secrets"
        }
      ]
    },
    {
      name: "Triggers",
      subpages: [
        {
          name: "HTTP & Callable",
          path: "/firebase-functions/basics/triggers/http-callable"
        },
        {
          name: "Firestore & Storage",
          path: "/firebase-functions/basics/triggers/firestore-storage"
        }
      ]
    },
    {
      name: "Deploys",
      subpages: [
        {
          name: "Regions & Min Instances",
          path: "/firebase-functions/basics/deploys/regions-min-instances"
        },
        {
          name: "Local Emulators",
          path: "/firebase-functions/basics/deploys/local-emulators"
        }
      ]
    },
    {
      name: "Observability",
      subpages: [
        {
          name: "Logs & Metrics",
          path: "/firebase-functions/basics/observability/logs-metrics"
        },
        {
          name: "Error Reporting",
          path: "/firebase-functions/basics/observability/error-reporting"
        }
      ]
    }
  ]
};

export default Basics;