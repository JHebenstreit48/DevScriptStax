import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Orbs & Reuse",
      subpages: [
        {
          name: "Using Orbs for Reusability",
          path: "/ci-cd/circle-ci/advanced/orbs-and-reuse/orbs"
        },
        {
          name: "Reusable Commands",
          path: "/ci-cd/circle-ci/advanced/orbs-and-reuse/reusable-commands"
        }
      ]
    },
    {
      name: "Runners & Executors",
      subpages: [
        {
          name: "Executors (Docker/Machine)",
          path: "/ci-cd/circle-ci/advanced/runners-and-executors/executors"
        },
        {
          name: "Self-Hosted Runners",
          path: "/ci-cd/circle-ci/advanced/runners-and-executors/runners"
        }
      ]
    },
    {
      name: "Performance & Scale",
      subpages: [
        {
          name: "Caching & Performance Tuning",
          path: "/ci-cd/circle-ci/advanced/performance-and-scale/caching"
        },
        {
          name: "Parallelism & Test Splitting",
          path: "/ci-cd/circle-ci/advanced/performance-and-scale/parallelism"
        },
        {
          name: "Optimizing CI/CD Workflows",
          path: "/ci-cd/circle-ci/advanced/performance-and-scale/optimization"
        }
      ]
    },
    {
      name: "Security",
      subpages: [
        {
          name: "Security & Compliance in CircleCI",
          path: "/ci-cd/circle-ci/advanced/security/security"
        },
        {
          name: "Contexts & Secrets",
          path: "/ci-cd/circle-ci/advanced/security/contexts-secrets"
        }
      ]
    }
  ]
};

export default Advanced;