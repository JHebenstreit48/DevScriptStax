import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Performance",
      subpages: [
        {
          name: "Cold Starts & Min Instances",
          path: "/firebase-functions/advanced/performance/cold-starts-min-instances"
        },
        {
          name: "Concurrency & Timeouts",
          path: "/firebase-functions/advanced/performance/concurrency-timeouts"
        }
      ]
    },
    {
      name: "Security",
      subpages: [
        {
          name: "IAM & Roles",
          path: "/firebase-functions/advanced/security/iam-roles"
        },
        {
          name: "App Check & Auth",
          path: "/firebase-functions/advanced/security/app-check-auth"
        }
      ]
    },
    {
      name: "Integrations",
      subpages: [
        {
          name: "Hosting Rewrites",
          path: "/firebase-functions/advanced/integrations/hosting-rewrites"
        },
        {
          name: "Cloud Tasks & Workflows",
          path: "/firebase-functions/advanced/integrations/cloud-tasks-workflows"
        }
      ]
    },
    {
      name: "Architecture",
      subpages: [
        {
          name: "Background vs Blocking",
          path: "/firebase-functions/advanced/architecture/background-vs-blocking"
        },
        {
          name: "Idempotency & Retries",
          path: "/firebase-functions/advanced/architecture/idempotency-retries"
        }
      ]
    },
    {
      name: "Cost & Quotas",
      subpages: [
        {
          name: "Budgets & Quotas",
          path: "/firebase-functions/advanced/cost-quotas/budgets-quotas"
        },
        {
          name: "Optimization",
          path: "/firebase-functions/advanced/cost-quotas/optimization"
        }
      ]
    }
  ]
};

export default Advanced;