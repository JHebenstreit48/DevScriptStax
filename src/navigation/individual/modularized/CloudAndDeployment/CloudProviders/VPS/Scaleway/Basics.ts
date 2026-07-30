import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Account Setup",
          path: "/cloud-providers/vps/scaleway/basics/fundamentals/account-setup"
        },
        {
          name: "Console Overview",
          path: "/cloud-providers/vps/scaleway/basics/fundamentals/console-overview"
        }
      ]
    },
    {
      name: "Core Services",
      subpages: [
        {
          name: "Instances (Compute)",
          path: "/cloud-providers/vps/scaleway/basics/core-services/instances"
        },
        {
          name: "Object Storage",
          path: "/cloud-providers/vps/scaleway/basics/core-services/object-storage"
        },
        {
          name: "Managed Databases",
          path: "/cloud-providers/vps/scaleway/basics/core-services/managed-databases"
        }
      ]
    },
    {
      name: "Networking Basics",
      subpages: [
        {
          name: "Private Networks & Security Groups",
          path: "/cloud-providers/vps/scaleway/basics/networking/private-networks-and-security-groups"
        },
        {
          name: "Load Balancers",
          path: "/cloud-providers/vps/scaleway/basics/networking/load-balancers"
        }
      ]
    }
  ]
};

export default Basics;