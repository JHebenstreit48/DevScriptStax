import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Functions & Edge",
      subpages: [
        {
          name: "Edge Functions",
          path: "/netlify/advanced/functions-edge/edge-functions"
        },
        {
          name: "Serverless Patterns",
          path: "/netlify/advanced/functions-edge/serverless-patterns"
        }
      ]
    },
    {
      name: "Performance & Caching",
      subpages: [
        {
          name: "Image CDN & Optimization",
          path: "/netlify/advanced/performance-caching/image-optimization"
        },
        {
          name: "Caching Strategies",
          path: "/netlify/advanced/performance-caching/caching-strategies"
        }
      ]
    },
    {
      name: "Workflows & CI",
      subpages: [
        {
          name: "Deploy Contexts",
          path: "/netlify/advanced/workflows-ci/deploy-contexts"
        },
        {
          name: "Monorepos",
          path: "/netlify/advanced/workflows-ci/monorepos"
        }
      ]
    },
    {
      name: "Plugins & Extensibility",
      subpages: [
        {
          name: "Using Build Plugins",
          path: "/netlify/advanced/plugins-extensibility/using-plugins"
        },
        {
          name: "Authoring Plugins",
          path: "/netlify/advanced/plugins-extensibility/authoring-plugins"
        }
      ]
    },
    {
      name: "Security & Access",
      subpages: [
        {
          name: "Security Headers & CSP",
          path: "/netlify/advanced/security-access/security-headers-csp"
        },
        {
          name: "Protected Routes & Roles",
          path: "/netlify/advanced/security-access/protected-routes-roles"
        }
      ]
    },
    {
      name: "Enterprise & Teams",
      subpages: [
        {
          name: "Teams & Roles",
          path: "/netlify/advanced/enterprise-teams/teams-roles"
        },
        {
          name: "Audit & SSO",
          path: "/netlify/advanced/enterprise-teams/audit-sso"
        }
      ]
    }
  ]
};

export default Advanced;