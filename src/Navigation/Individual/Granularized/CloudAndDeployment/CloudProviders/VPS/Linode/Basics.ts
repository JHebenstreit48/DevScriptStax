import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Account Setup",
          path: "/cloud-providers/vps/linode/basics/fundamentals/account-setup"
        },
        {
          name: "Cloud Manager Overview",
          path: "/cloud-providers/vps/linode/basics/fundamentals/cloud-manager-overview"
        }
      ]
    },
    {
      name: "Core Services",
      subpages: [
        {
          name: "Linodes (Compute)",
          path: "/cloud-providers/vps/linode/basics/core-services/linodes"
        },
        {
          name: "Object Storage",
          path: "/cloud-providers/vps/linode/basics/core-services/object-storage"
        },
        {
          name: "Managed Databases",
          path: "/cloud-providers/vps/linode/basics/core-services/managed-databases"
        }
      ]
    },
    {
      name: "Networking Basics",
      subpages: [
        {
          name: "VLANs & Firewalls",
          path: "/cloud-providers/vps/linode/basics/networking/vlans-and-firewalls"
        },
        {
          name: "NodeBalancers",
          path: "/cloud-providers/vps/linode/basics/networking/nodebalancers"
        }
      ]
    }
  ]
};

export default Basics;