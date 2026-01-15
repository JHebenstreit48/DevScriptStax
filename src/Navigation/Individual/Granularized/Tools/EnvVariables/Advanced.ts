import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Security & Secrets",
      subpages: [
        {
          name: "Secrets Storage",
          path: "/environment/advanced/security-and-secrets/secrets-storage"
        },
        {
          name: "Rotation & Exposure",
          path: "/environment/advanced/security-and-secrets/rotation-and-exposure"
        }
      ]
    },
    {
      name: "CI/CD & Deploy",
      subpages: [
        {
          name: "CI Providers",
          path: "/environment/advanced/ci-and-deploy/ci-providers"
        },
        {
          name: "Per-Environment Config",
          path: "/environment/advanced/ci-and-deploy/per-environment-config"
        }
      ]
    },
    {
      name: "Validation & Types",
      subpages: [
        {
          name: "Schema Validation",
          path: "/environment/advanced/validation-and-types/schema-validation"
        },
        {
          name: "Runtime Guards",
          path: "/environment/advanced/validation-and-types/runtime-guards"
        }
      ]
    },
    {
      name: "Patterns",
      subpages: [
        {
          name: "Twelve-Factor Config",
          path: "/environment/advanced/patterns/twelve-factor-config"
        },
        {
          name: "Runtime Injection",
          path: "/environment/advanced/patterns/runtime-injection"
        }
      ]
    }
  ]
};

export default Advanced;