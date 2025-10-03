import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Orbs & Reuse",
      subpages: [
        {
          name: "Using Orbs for Reusability",
          path: "/tools/cicd/circleci/advanced/orbs-and-reuse/orbs"
        },
        {
          name: "Reusable Commands",
          path: "/tools/cicd/circleci/advanced/orbs-and-reuse/reusable-commands"
        }
      ]
    },
    {
      name: "Runners & Executors",
      subpages: [
        {
          name: "Executors (Docker/Machine)",
          path: "/tools/cicd/circleci/advanced/runners-and-executors/executors"
        },
        {
          name: "Self-Hosted Runners",
          path: "/tools/cicd/circleci/advanced/runners-and-executors/runners"
        }
      ]
    },
    {
      name: "Performance & Scale",
      subpages: [
        {
          name: "Caching & Performance Tuning",
          path: "/tools/cicd/circleci/advanced/performance-and-scale/caching"
        },
        {
          name: "Parallelism & Test Splitting",
          path: "/tools/cicd/circleci/advanced/performance-and-scale/parallelism"
        },
        {
          name: "Optimizing CI/CD Workflows",
          path: "/tools/cicd/circleci/advanced/performance-and-scale/optimization"
        }
      ]
    },
    {
      name: "Security",
      subpages: [
        {
          name: "Security & Compliance in CircleCI",
          path: "/tools/cicd/circleci/advanced/security/security"
        },
        {
          name: "Contexts & Secrets",
          path: "/tools/cicd/circleci/advanced/security/contexts-secrets"
        }
      ]
    }
  ]
};

export default Advanced;