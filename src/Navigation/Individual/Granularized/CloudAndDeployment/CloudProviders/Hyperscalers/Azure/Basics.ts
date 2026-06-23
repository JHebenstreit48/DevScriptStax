import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Account Setup & Free Tier",
          path: "/cloud-providers/hyperscalers/azure/basics/fundamentals/account-setup"
        },
        {
          name: "Portal Overview",
          path: "/cloud-providers/hyperscalers/azure/basics/fundamentals/portal-overview"
        },
        {
          name: "Azure CLI Setup",
          path: "/cloud-providers/hyperscalers/azure/basics/fundamentals/cli-setup"
        }
      ]
    },
    {
      name: "Core Services",
      subpages: [
        {
          name: "Virtual Machines",
          path: "/cloud-providers/hyperscalers/azure/basics/core-services/virtual-machines"
        },
        {
          name: "Blob Storage",
          path: "/cloud-providers/hyperscalers/azure/basics/core-services/blob-storage"
        },
        {
          name: "Azure SQL",
          path: "/cloud-providers/hyperscalers/azure/basics/core-services/azure-sql"
        },
        {
          name: "Virtual Networks",
          path: "/cloud-providers/hyperscalers/azure/basics/core-services/virtual-networks"
        }
      ]
    },
    {
      name: "IAM & Security Basics",
      subpages: [
        {
          name: "Azure AD & RBAC",
          path: "/cloud-providers/hyperscalers/azure/basics/iam/azure-ad-and-rbac"
        },
        {
          name: "Managed Identities",
          path: "/cloud-providers/hyperscalers/azure/basics/iam/managed-identities"
        }
      ]
    },
    {
      name: "Billing",
      subpages: [
        {
          name: "Cost Management & Budgets",
          path: "/cloud-providers/hyperscalers/azure/basics/billing/cost-management-and-budgets"
        },
        {
          name: "Pricing Calculator",
          path: "/cloud-providers/hyperscalers/azure/basics/billing/pricing-calculator"
        }
      ]
    }
  ]
};

export default Basics;