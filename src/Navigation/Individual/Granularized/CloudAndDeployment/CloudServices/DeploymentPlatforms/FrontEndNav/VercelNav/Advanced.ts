import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Functions & Edge",
      subpages: [
        {
          name: "Edge Functions",
          path: "/vercel/advanced/functions-edge/edge-functions"
        },
        {
          name: "Serverless Functions",
          path: "/vercel/advanced/functions-edge/serverless-functions"
        }
      ]
    },
    {
      name: "Performance",
      subpages: [
        {
          name: "Image Optimization",
          path: "/vercel/advanced/performance/image-optimization"
        },
        {
          name: "Caching Strategies",
          path: "/vercel/advanced/performance/caching-strategies"
        }
      ]
    },
    {
      name: "Monorepos",
      subpages: [
        {
          name: "Repo Layouts",
          path: "/vercel/advanced/monorepos/repo-layouts"
        },
        {
          name: "Turborepo",
          path: "/vercel/advanced/monorepos/turborepo"
        }
      ]
    },
    {
      name: "Workflows",
      subpages: [
        {
          name: "Deploy Hooks",
          path: "/vercel/advanced/workflows/deploy-hooks"
        },
        {
          name: "Git Integrations",
          path: "/vercel/advanced/workflows/git-integrations"
        }
      ]
    },
    {
      name: "Security",
      subpages: [
        {
          name: "Security Headers & CSP",
          path: "/vercel/advanced/security/security-headers-csp"
        },
        {
          name: "Protected Routes",
          path: "/vercel/advanced/security/protected-routes"
        }
      ]
    },
    {
      name: "Teams & SSO",
      subpages: [
        {
          name: "Teams & Roles",
          path: "/vercel/advanced/teams-sso/teams-roles"
        },
        {
          name: "Audit & SSO",
          path: "/vercel/advanced/teams-sso/audit-sso"
        }
      ]
    }
  ]
};

export default Advanced;