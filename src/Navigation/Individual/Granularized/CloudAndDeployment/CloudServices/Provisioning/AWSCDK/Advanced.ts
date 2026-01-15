import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Architecture",
      subpages: [
        {
          name: "App Structure",
          path: "/aws-cdk/advanced/architecture/app-structure"
        },
        {
          name: "Cross-Stack Refs",
          path: "/aws-cdk/advanced/architecture/cross-stack-refs"
        }
      ]
    },
    {
      name: "Security",
      subpages: [
        {
          name: "IAM & Policies",
          path: "/aws-cdk/advanced/security/iam-policies"
        },
        {
          name: "Secrets & KMS",
          path: "/aws-cdk/advanced/security/secrets-kms"
        }
      ]
    },
    {
      name: "Optimization",
      subpages: [
        {
          name: "Construct Libraries",
          path: "/aws-cdk/advanced/optimization/construct-libraries"
        },
        {
          name: "Reusable Patterns",
          path: "/aws-cdk/advanced/optimization/reusable-patterns"
        }
      ]
    },
    {
      name: "Testing",
      subpages: [
        {
          name: "Assertions",
          path: "/aws-cdk/advanced/testing/assertions"
        },
        {
          name: "Snapshot Tests",
          path: "/aws-cdk/advanced/testing/snapshot-tests"
        }
      ]
    },
    {
      name: "Multi-Env",
      subpages: [
        {
          name: "Accounts & Regions",
          path: "/aws-cdk/advanced/multi-env/accounts-regions"
        },
        {
          name: "Parameters & Context",
          path: "/aws-cdk/advanced/multi-env/parameters-context"
        }
      ]
    }
  ]
};

export default Advanced;