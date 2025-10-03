import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Scalability",
      subpages: [
        {
          name: "Intro to Load Balancing",
          path: "/servers-general/advanced/scalability/intro-to-load-balancing"
        },
        {
          name: "Load Balancer Types",
          path: "/servers-general/advanced/scalability/load-balancer-types"
        },
        {
          name: "Horizontal vs Vertical Scaling",
          path: "/servers-general/advanced/scalability/horizontal-vs-vertical-scaling"
        },
        {
          name: "High Availability Patterns",
          path: "/servers-general/advanced/scalability/high-availability-patterns"
        },
        {
          name: "Auto-Scaling Strategies",
          path: "/servers-general/advanced/scalability/auto-scaling-strategies"
        }
      ]
    },
    {
      name: "Performance & Hardening",
      subpages: [
        {
          name: "Workers, Threads & Concurrency",
          path: "/servers-general/advanced/performance-hardening/workers-threads-concurrency"
        },
        {
          name: "Caching & Compression",
          path: "/servers-general/advanced/performance-hardening/caching-and-compression"
        },
        {
          name: "TLS Certificates Management",
          path: "/servers-general/advanced/performance-hardening/tls-certificates-management"
        },
        {
          name: "Least Privilege & OS Hardening",
          path: "/servers-general/advanced/performance-hardening/least-privilege-os-hardening"
        },
        {
          name: "Secrets & Environment Config",
          path: "/servers-general/advanced/performance-hardening/secrets-and-env-config"
        }
      ]
    },
    {
      name: "Observability",
      subpages: [
        {
          name: "Access & Error Logs",
          path: "/servers-general/advanced/observability/access-and-error-logs"
        },
        {
          name: "Metrics & Exporters",
          path: "/servers-general/advanced/observability/metrics-and-exporters"
        },
        {
          name: "Tracing Basics",
          path: "/servers-general/advanced/observability/tracing-basics"
        },
        {
          name: "Backups & Restore",
          path: "/servers-general/advanced/observability/backups-and-restore"
        }
      ]
    }
  ]
};

export default Advanced;