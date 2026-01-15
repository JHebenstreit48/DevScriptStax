import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Introduction",
          path: "/fly/basics/fundamentals/introduction"
        },
        {
          name: "Pricing & Limits",
          path: "/fly/basics/fundamentals/pricing-limits"
        }
      ]
    },
    {
      name: "Setup",
      subpages: [
        {
          name: "Install flyctl",
          path: "/fly/basics/setup/install-flyctl"
        },
        {
          name: "Launch App",
          path: "/fly/basics/setup/launch-app"
        }
      ]
    },
    {
      name: "Deploys",
      subpages: [
        {
          name: "Docker & Nixpacks",
          path: "/fly/basics/deploys/docker-nixpacks"
        },
        {
          name: "Scaling Basics",
          path: "/fly/basics/deploys/scaling-basics"
        }
      ]
    },
    {
      name: "Networking",
      subpages: [
        {
          name: "Regions & Anycast",
          path: "/fly/basics/networking/regions-anycast"
        },
        {
          name: "Domains & TLS",
          path: "/fly/basics/networking/domains-tls"
        }
      ]
    },
    {
      name: "Storage & Env",
      subpages: [
        {
          name: "Volumes",
          path: "/fly/basics/storage-env/volumes"
        },
        {
          name: "Secrets & Env Vars (Fly)",
          path: "/fly/basics/storage-env/secrets-env-vars-fly"
        }
      ]
    },
    {
      name: "Monitoring",
      subpages: [
        {
          name: "Logs & Metrics",
          path: "/fly/basics/monitoring/logs-metrics"
        },
        {
          name: "Troubleshooting",
          path: "/fly/basics/monitoring/troubleshooting"
        }
      ]
    }
  ]
};

export default Basics;