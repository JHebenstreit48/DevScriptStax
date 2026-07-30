import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Account Setup & Always Free Tier",
          path: "/cloud-providers/enterprise/oracle-cloud/basics/fundamentals/account-setup"
        },
        {
          name: "Console Overview",
          path: "/cloud-providers/enterprise/oracle-cloud/basics/fundamentals/console-overview"
        }
      ]
    },
    {
      name: "Core Services",
      subpages: [
        {
          name: "Compute Instances",
          path: "/cloud-providers/enterprise/oracle-cloud/basics/core-services/compute-instances"
        },
        {
          name: "Object Storage",
          path: "/cloud-providers/enterprise/oracle-cloud/basics/core-services/object-storage"
        },
        {
          name: "Autonomous Database",
          path: "/cloud-providers/enterprise/oracle-cloud/basics/core-services/autonomous-database"
        }
      ]
    },
    {
      name: "Networking & IAM Basics",
      subpages: [
        {
          name: "VCN & Subnets",
          path: "/cloud-providers/enterprise/oracle-cloud/basics/networking-iam/vcn-and-subnets"
        },
        {
          name: "IAM Policies & Compartments",
          path: "/cloud-providers/enterprise/oracle-cloud/basics/networking-iam/iam-policies-and-compartments"
        }
      ]
    }
  ]
};

export default Basics;