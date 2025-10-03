import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Architecture",
      subpages: [
        {
          name: "APIs & Integrations",
          path: "/aws-sam/advanced/architecture/apis-integrations"
        },
        {
          name: "Event-Driven",
          path: "/aws-sam/advanced/architecture/event-driven"
        }
      ]
    },
    {
      name: "Security",
      subpages: [
        {
          name: "Secrets & KMS",
          path: "/aws-sam/advanced/security/secrets-kms"
        },
        {
          name: "Permissions",
          path: "/aws-sam/advanced/security/permissions"
        }
      ]
    },
    {
      name: "Pipelines",
      subpages: [
        {
          name: "CI/CD Pipelines",
          path: "/aws-sam/advanced/pipelines/ci-cd-pipelines"
        },
        {
          name: "Multi-Account",
          path: "/aws-sam/advanced/pipelines/multi-account"
        }
      ]
    },
    {
      name: "Observability",
      subpages: [
        {
          name: "Tracing & Logs",
          path: "/aws-sam/advanced/observability/tracing-logs"
        },
        {
          name: "Alarms",
          path: "/aws-sam/advanced/observability/alarms"
        }
      ]
    },
    {
      name: "Cost & Scaling",
      subpages: [
        {
          name: "Optimization",
          path: "/aws-sam/advanced/cost-scaling/optimization"
        },
        {
          name: "Quotas & Limits",
          path: "/aws-sam/advanced/cost-scaling/quotas-limits"
        }
      ]
    }
  ]
};

export default Advanced;