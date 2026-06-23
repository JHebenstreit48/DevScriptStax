import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Account Setup",
          path: "/cloud-providers/vps/hetzner-cloud/basics/fundamentals/account-setup"
        },
        {
          name: "Cloud Console Overview",
          path: "/cloud-providers/vps/hetzner-cloud/basics/fundamentals/cloud-console-overview"
        }
      ]
    },
    {
      name: "Core Services",
      subpages: [
        {
          name: "Servers (Compute)",
          path: "/cloud-providers/vps/hetzner-cloud/basics/core-services/servers"
        },
        {
          name: "Volumes (Block Storage)",
          path: "/cloud-providers/vps/hetzner-cloud/basics/core-services/volumes"
        },
        {
          name: "Object Storage",
          path: "/cloud-providers/vps/hetzner-cloud/basics/core-services/object-storage"
        }
      ]
    },
    {
      name: "Networking Basics",
      subpages: [
        {
          name: "Private Networks & Firewalls",
          path: "/cloud-providers/vps/hetzner-cloud/basics/networking/private-networks-and-firewalls"
        },
        {
          name: "Load Balancers",
          path: "/cloud-providers/vps/hetzner-cloud/basics/networking/load-balancers"
        }
      ]
    }
  ]
};

export default Basics;