import { Subpage } from "@/Navigation/NavigationTypes";

const RenderNavigation: Subpage = {
  name: "Render",
  subpages: [
    {
      name: "Introduction",
      subpages: [
        { name: "What is Render?", path: "/cloud/render/intro/whatis" },
        { name: "Render vs Other Platforms", path: "/cloud/render/intro/comparison" },
        { name: "Pricing & Plans", path: "/cloud/render/intro/pricing" },
      ],
    },
    {
      name: "Getting Started",
      subpages: [
        { name: "Setting Up an Account", path: "/cloud/render/setup/account" },
        { name: "Deploying Your First App", path: "/cloud/render/setup/first-deployment" },
        { name: "Connecting a Custom Domain", path: "/cloud/render/setup/custom-domain" },
        { name: "Using Render CLI", path: "/cloud/render/setup/cli" },
      ],
    },
    {
      name: "Deployment & Hosting",
      subpages: [
        { name: "Deploying Static Sites", path: "/cloud/render/deployment/static-sites" },
        { name: "Deploying Web Services", path: "/cloud/render/deployment/web-services" },
        { name: "Deploying Background Workers", path: "/cloud/render/deployment/background-workers" },
        { name: "Docker & Custom Images", path: "/cloud/render/deployment/docker" },
        { name: "Environment Variables", path: "/cloud/render/deployment/env-variables" },
        { name: "Scaling Applications", path: "/cloud/render/deployment/scaling" },
      ],
    },
    {
      name: "Databases & Storage",
      subpages: [
        { name: "Using Managed PostgreSQL", path: "/cloud/render/databases/postgresql" },
        { name: "Connecting External Databases", path: "/cloud/render/databases/external" },
        { name: "Persistent Storage Options", path: "/cloud/render/databases/storage" },
      ],
    },
    {
      name: "Security & Networking",
      subpages: [
        { name: "SSL/TLS & HTTPS", path: "/cloud/render/security/ssl-tls" },
        { name: "Custom Firewall Rules", path: "/cloud/render/security/firewall" },
        { name: "Private Networking", path: "/cloud/render/security/private-networking" },
      ],
    },
    {
      name: "Monitoring & Debugging",
      subpages: [
        { name: "Logs & Metrics", path: "/cloud/render/monitoring/logs-metrics" },
        { name: "Debugging Deployments", path: "/cloud/render/monitoring/debugging" },
        { name: "Health Checks", path: "/cloud/render/monitoring/health-checks" },
      ],
    },
    {
      name: "Advanced Topics",
      subpages: [
        { name: "Deploying Full-Stack Apps", path: "/cloud/render/advanced/full-stack" },
        { name: "CI/CD Integrations", path: "/cloud/render/advanced/ci-cd" },
        { name: "Using WebSockets", path: "/cloud/render/advanced/websockets" },
        { name: "Automated Backups", path: "/cloud/render/advanced/backups" },
      ],
    },
  ],
};

export default RenderNavigation;
