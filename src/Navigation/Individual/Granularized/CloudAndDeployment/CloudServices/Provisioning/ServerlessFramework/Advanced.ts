import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Plugins",
      subpages: [
        {
          name: "Using Plugins",
          path: "/serverless-framework/advanced/plugins/using-plugins"
        },
        {
          name: "Author Plugins",
          path: "/serverless-framework/advanced/plugins/author-plugins"
        }
      ]
    },
    {
      name: "Packaging",
      subpages: [
        {
          name: "Layers",
          path: "/serverless-framework/advanced/packaging/layers"
        },
        {
          name: "Custom Build",
          path: "/serverless-framework/advanced/packaging/custom-build"
        }
      ]
    },
    {
      name: "Workflows",
      subpages: [
        {
          name: "CI/CD",
          path: "/serverless-framework/advanced/workflows/ci-cd"
        },
        {
          name: "Monorepos",
          path: "/serverless-framework/advanced/workflows/monorepos"
        }
      ]
    },
    {
      name: "Security",
      subpages: [
        {
          name: "IAM & Policies",
          path: "/serverless-framework/advanced/security/iam-policies"
        },
        {
          name: "Secrets",
          path: "/serverless-framework/advanced/security/secrets"
        }
      ]
    },
    {
      name: "Observability",
      subpages: [
        {
          name: "Logs & Metrics",
          path: "/serverless-framework/advanced/observability/logs-metrics"
        },
        {
          name: "Tracing",
          path: "/serverless-framework/advanced/observability/tracing"
        }
      ]
    }
  ]
};

export default Advanced;