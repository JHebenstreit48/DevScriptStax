import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Account Setup & Free Tier",
          path: "/cloud-providers/hyperscalers/aws/basics/fundamentals/account-setup"
        },
        {
          name: "Console Overview",
          path: "/cloud-providers/hyperscalers/aws/basics/fundamentals/console-overview"
        },
        {
          name: "AWS CLI Setup",
          path: "/cloud-providers/hyperscalers/aws/basics/fundamentals/cli-setup"
        }
      ]
    },
    {
      name: "Core Services",
      subpages: [
        {
          name: "EC2 (Compute)",
          path: "/cloud-providers/hyperscalers/aws/basics/core-services/ec2"
        },
        {
          name: "S3 (Storage)",
          path: "/cloud-providers/hyperscalers/aws/basics/core-services/s3"
        },
        {
          name: "RDS (Databases)",
          path: "/cloud-providers/hyperscalers/aws/basics/core-services/rds"
        },
        {
          name: "VPC & Networking",
          path: "/cloud-providers/hyperscalers/aws/basics/core-services/vpc-and-networking"
        }
      ]
    },
    {
      name: "IAM & Security Basics",
      subpages: [
        {
          name: "Users, Groups & Roles",
          path: "/cloud-providers/hyperscalers/aws/basics/iam/users-groups-roles"
        },
        {
          name: "Policies & Permissions",
          path: "/cloud-providers/hyperscalers/aws/basics/iam/policies-and-permissions"
        }
      ]
    },
    {
      name: "Billing & Support",
      subpages: [
        {
          name: "Cost Explorer & Budgets",
          path: "/cloud-providers/hyperscalers/aws/basics/billing/cost-explorer-and-budgets"
        },
        {
          name: "Support Plans",
          path: "/cloud-providers/hyperscalers/aws/basics/billing/support-plans"
        }
      ]
    }
  ]
};

export default Basics;