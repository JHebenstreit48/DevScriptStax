import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Account Setup",
          path: "/cloud-providers/vps/digitalocean/basics/fundamentals/account-setup"
        },
        {
          name: "Control Panel Overview",
          path: "/cloud-providers/vps/digitalocean/basics/fundamentals/control-panel-overview"
        }
      ]
    },
    {
      name: "Core Services",
      subpages: [
        {
          name: "Droplets (Compute)",
          path: "/cloud-providers/vps/digitalocean/basics/core-services/droplets"
        },
        {
          name: "Spaces (Object Storage)",
          path: "/cloud-providers/vps/digitalocean/basics/core-services/spaces"
        },
        {
          name: "Managed Databases",
          path: "/cloud-providers/vps/digitalocean/basics/core-services/managed-databases"
        }
      ]
    },
    {
      name: "Networking Basics",
      subpages: [
        {
          name: "VPC & Firewalls",
          path: "/cloud-providers/vps/digitalocean/basics/networking/vpc-and-firewalls"
        },
        {
          name: "Load Balancers",
          path: "/cloud-providers/vps/digitalocean/basics/networking/load-balancers"
        }
      ]
    }
  ]
};

export default Basics;