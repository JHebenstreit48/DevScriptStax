import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const Netlify: Subpage = {
  name: "Netlify",
  subpages: [
    {
      name: "Introduction",
      subpages: [
        { name: "What is Netlify?", path: "/cloud/netlify/intro/whatis" },
        { name: "Netlify vs Other Platforms", path: "/cloud/netlify/intro/comparison" },
        { name: "Pricing & Plans", path: "/cloud/netlify/intro/pricing" },
      ],
    },
    {
      name: "Getting Started",
      subpages: [
        { name: "Creating a Netlify Account", path: "/cloud/netlify/setup/account" },
        { name: "Deploying Your First Site", path: "/cloud/netlify/setup/first-deployment" },
        { name: "Connecting a Custom Domain", path: "/cloud/netlify/setup/custom-domain" },
        { name: "Using Netlify CLI", path: "/cloud/netlify/setup/cli" },
      ],
    },
    {
      name: "Deployment & Hosting",
      subpages: [
        { name: "Deploying Static Sites", path: "/cloud/netlify/deployment/static-sites" },
        { name: "Deploying React, Vue, & Svelte Apps", path: "/cloud/netlify/deployment/spa-frameworks" },
        { name: "Serverless Functions with Netlify", path: "/cloud/netlify/deployment/serverless-functions" },
        { name: "Environment Variables & Secrets", path: "/cloud/netlify/deployment/env-variables" },
        { name: "Continuous Deployment & Git Integration", path: "/cloud/netlify/deployment/ci-cd" },
      ],
    },
    {
      name: "Netlify Features",
      subpages: [
        { name: "Netlify Forms", path: "/cloud/netlify/features/forms" },
        { name: "Netlify Identity & Authentication", path: "/cloud/netlify/features/identity" },
        { name: "Netlify Edge Functions", path: "/cloud/netlify/features/edge-functions" },
        { name: "Netlify Image Optimization", path: "/cloud/netlify/features/image-optimization" },
        { name: "Using Netlify Plugins", path: "/cloud/netlify/features/plugins" },
      ],
    },
    {
      name: "Security & Performance",
      subpages: [
        { name: "SSL/TLS & HTTPS", path: "/cloud/netlify/security/ssl-tls" },
        { name: "Custom Headers & Redirects", path: "/cloud/netlify/security/headers-redirects" },
        { name: "DDoS Protection & Firewalls", path: "/cloud/netlify/security/firewall" },
      ],
    },
    {
      name: "Monitoring & Debugging",
      subpages: [
        { name: "Netlify Logs & Metrics", path: "/cloud/netlify/monitoring/logs-metrics" },
        { name: "Debugging Deployments", path: "/cloud/netlify/monitoring/debugging" },
        { name: "Performance Optimization", path: "/cloud/netlify/monitoring/performance" },
      ],
    },
    {
      name: "Advanced Topics",
      subpages: [
        { name: "Using Netlify with Headless CMS", path: "/cloud/netlify/advanced/headless-cms" },
        { name: "Automated Backups & Rollbacks", path: "/cloud/netlify/advanced/backups" },
        { name: "Netlify A/B Testing & Split Testing", path: "/cloud/netlify/advanced/split-testing" },
        { name: "Integrating Netlify with CI/CD Pipelines", path: "/cloud/netlify/advanced/ci-cd-integration" },
      ],
    },
  ],
};

export default Netlify;
