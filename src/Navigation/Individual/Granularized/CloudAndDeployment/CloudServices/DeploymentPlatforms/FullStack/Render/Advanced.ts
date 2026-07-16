import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Blueprints",
      subpages: [
        {
          name: "render.yaml",
          path: "/render/advanced/blueprints/render-yaml"
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
          name: "Firewall & Private Networking",
          path: "/render/advanced/security-networking/firewall-and-private"
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
          name: "Health Checks & Zero-Downtime",
          path: "/render/advanced/scaling-reliability/health-and-zero-downtime"
        }
      ]
    },
    {
      name: "Observability",
      subpages: [
        {
          name: "Logs, Metrics & Debugging",
          path: "/render/advanced/observability/logs-metrics-debugging"
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
          name: "Docker & WebSockets",
          path: "/render/advanced/advanced-topics/docker-and-websockets"
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