import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Account Setup",
          path: "/cloud-providers/hyperscalers/alibaba-cloud/basics/fundamentals/account-setup"
        },
        {
          name: "Console Overview",
          path: "/cloud-providers/hyperscalers/alibaba-cloud/basics/fundamentals/console-overview"
        }
      ]
    },
    {
      name: "Core Services",
      subpages: [
        {
          name: "ECS (Elastic Compute)",
          path: "/cloud-providers/hyperscalers/alibaba-cloud/basics/core-services/ecs"
        },
        {
          name: "OSS (Object Storage)",
          path: "/cloud-providers/hyperscalers/alibaba-cloud/basics/core-services/oss"
        },
        {
          name: "ApsaraDB (RDS)",
          path: "/cloud-providers/hyperscalers/alibaba-cloud/basics/core-services/apsaradb-rds"
        }
      ]
    },
    {
      name: "Networking & IAM Basics",
      subpages: [
        {
          name: "VPC & Security Groups",
          path: "/cloud-providers/hyperscalers/alibaba-cloud/basics/networking-iam/vpc-and-security-groups"
        },
        {
          name: "RAM (IAM)",
          path: "/cloud-providers/hyperscalers/alibaba-cloud/basics/networking-iam/ram-iam"
        }
      ]
    }
  ]
};

export default Basics;