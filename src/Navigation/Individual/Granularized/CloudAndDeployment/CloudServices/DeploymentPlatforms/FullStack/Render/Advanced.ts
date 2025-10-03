import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Blueprints",
      subpages: [
        {
          name: "render.yaml",
          path: "/render/advanced/blueprints/intro"
        },
        {
          name: "Monorepos & Multi-Service",
          path: "/render/advanced/blueprints/monorepos"
        }
      ]
    },
    {
      name: "Security & Networking",
      subpages: [
        {
          name: "SSL/TLS & HTTPS",
          path: "/render/advanced/security-networking/ssl-tls-https"
        },
        {
          name: "Firewall Rules",
          path: "/render/advanced/security-networking/firewall"
        },
        {
          name: "Private Networking",
          path: "/render/advanced/security-networking/private-networking"
        }
      ]
    },
    {
      name: "Scaling & Reliability",
      subpages: [
        {
          name: "Scaling",
          path: "/render/advanced/scaling-reliability/scaling"
        },
        {
          name: "Health Checks",
          path: "/render/advanced/scaling-reliability/health-checks"
        },
        {
          name: "Zero-Downtime Deploys",
          path: "/render/advanced/scaling-reliability/zero-downtime"
        }
      ]
    },
    {
      name: "Observability",
      subpages: [
        {
          name: "Logs & Metrics",
          path: "/render/advanced/observability/logs-metrics"
        },
        {
          name: "Debugging",
          path: "/render/advanced/observability/debugging"
        },
        {
          name: "Alerts & Notifications",
          path: "/render/advanced/observability/alerts"
        }
      ]
    },
    {
      name: "CI/CD & Previews",
      subpages: [
        {
          name: "Git Integrations",
          path: "/render/advanced/ci-cd/git-integrations"
        },
        {
          name: "Preview Environments",
          path: "/render/advanced/ci-cd/preview-environments"
        }
      ]
    },
    {
      name: "Advanced Topics",
      subpages: [
        {
          name: "Docker Images",
          path: "/render/advanced/advanced-topics/docker-images"
        },
        {
          name: "WebSockets (Render)",
          path: "/render/advanced/advanced-topics/websockets"
        },
        {
          name: "Backups",
          path: "/render/advanced/advanced-topics/backups"
        }
      ]
    }
  ]
};

export default Advanced;