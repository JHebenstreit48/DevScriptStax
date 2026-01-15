import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Customization",
      subpages: [
        {
          name: "Custom Rules",
          path: "/eslint/advanced/customization/custom-rules"
        },
        {
          name: "Shareable Configs",
          path: "/eslint/advanced/customization/shareable-configs"
        }
      ]
    },
    {
      name: "Performance",
      subpages: [
        {
          name: "Performance Tuning",
          path: "/eslint/advanced/performance/performance-tuning"
        },
        {
          name: "Caching Strategies",
          path: "/eslint/advanced/performance/caching-strategies"
        }
      ]
    },
    {
      name: "CI & Automation",
      subpages: [
        {
          name: "CI/CD Pipelines",
          path: "/eslint/advanced/ci-automation/ci-cd-pipelines"
        },
        {
          name: "Monorepos",
          path: "/eslint/advanced/ci-automation/monorepos"
        }
      ]
    },
    {
      name: "Quality & Security",
      subpages: [
        {
          name: "Warnings & Errors",
          path: "/eslint/advanced/quality-security/warnings-errors"
        },
        {
          name: "Security Practices",
          path: "/eslint/advanced/quality-security/security-practices"
        }
      ]
    }
  ]
};

export default Advanced;