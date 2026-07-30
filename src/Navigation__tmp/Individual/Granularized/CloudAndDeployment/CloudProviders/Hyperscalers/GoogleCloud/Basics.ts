import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Account Setup & Free Tier",
          path: "/cloud-providers/hyperscalers/google-cloud/basics/fundamentals/account-setup"
        },
        {
          name: "Console & Cloud Shell",
          path: "/cloud-providers/hyperscalers/google-cloud/basics/fundamentals/console-and-cloud-shell"
        },
        {
          name: "gcloud CLI Setup",
          path: "/cloud-providers/hyperscalers/google-cloud/basics/fundamentals/gcloud-cli-setup"
        }
      ]
    },
    {
      name: "Core Services",
      subpages: [
        {
          name: "Compute Engine",
          path: "/cloud-providers/hyperscalers/google-cloud/basics/core-services/compute-engine"
        },
        {
          name: "Cloud Storage",
          path: "/cloud-providers/hyperscalers/google-cloud/basics/core-services/cloud-storage"
        },
        {
          name: "Cloud SQL",
          path: "/cloud-providers/hyperscalers/google-cloud/basics/core-services/cloud-sql"
        },
        {
          name: "VPC & Networking",
          path: "/cloud-providers/hyperscalers/google-cloud/basics/core-services/vpc-and-networking"
        }
      ]
    },
    {
      name: "IAM & Security Basics",
      subpages: [
        {
          name: "IAM Roles & Members",
          path: "/cloud-providers/hyperscalers/google-cloud/basics/iam/roles-and-members"
        },
        {
          name: "Service Accounts",
          path: "/cloud-providers/hyperscalers/google-cloud/basics/iam/service-accounts"
        }
      ]
    },
    {
      name: "Billing",
      subpages: [
        {
          name: "Billing Accounts & Budgets",
          path: "/cloud-providers/hyperscalers/google-cloud/basics/billing/accounts-and-budgets"
        },
        {
          name: "Cost Management Tools",
          path: "/cloud-providers/hyperscalers/google-cloud/basics/billing/cost-management-tools"
        }
      ]
    }
  ]
};

export default Basics;