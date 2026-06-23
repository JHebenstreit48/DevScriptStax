import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Account Setup & Lite Tier",
          path: "/cloud-providers/enterprise/ibm-cloud/basics/fundamentals/account-setup"
        },
        {
          name: "Dashboard Overview",
          path: "/cloud-providers/enterprise/ibm-cloud/basics/fundamentals/dashboard-overview"
        }
      ]
    },
    {
      name: "Core Services",
      subpages: [
        {
          name: "Virtual Servers",
          path: "/cloud-providers/enterprise/ibm-cloud/basics/core-services/virtual-servers"
        },
        {
          name: "Cloud Object Storage",
          path: "/cloud-providers/enterprise/ibm-cloud/basics/core-services/cloud-object-storage"
        },
        {
          name: "IBM Db2",
          path: "/cloud-providers/enterprise/ibm-cloud/basics/core-services/ibm-db2"
        }
      ]
    },
    {
      name: "IAM & Networking Basics",
      subpages: [
        {
          name: "IAM Users & Access Groups",
          path: "/cloud-providers/enterprise/ibm-cloud/basics/iam-networking/iam-users-and-access-groups"
        },
        {
          name: "VPC & Security Groups",
          path: "/cloud-providers/enterprise/ibm-cloud/basics/iam-networking/vpc-and-security-groups"
        }
      ]
    }
  ]
};

export default Basics;