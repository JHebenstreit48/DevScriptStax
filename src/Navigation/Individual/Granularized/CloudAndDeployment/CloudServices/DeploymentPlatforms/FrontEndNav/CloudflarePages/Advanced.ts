import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Pages Functions",
      subpages: [
        {
          name: "Functions Basics",
          path: "/cloudflare-pages/advanced/pages-functions/functions-basics"
        },
        {
          name: "Wrangler & Local Dev",
          path: "/cloudflare-pages/advanced/pages-functions/wrangler-local-dev"
        }
      ]
    },
    {
      name: "Workers & DO",
      subpages: [
        {
          name: "Workers Integration",
          path: "/cloudflare-pages/advanced/workers-do/workers-integration"
        },
        {
          name: "Durable Objects",
          path: "/cloudflare-pages/advanced/workers-do/durable-objects"
        }
      ]
    },
    {
      name: "Performance",
      subpages: [
        {
          name: "Cache Rules",
          path: "/cloudflare-pages/advanced/performance/cache-rules"
        },
        {
          name: "Image Resizing",
          path: "/cloudflare-pages/advanced/performance/image-resizing"
        }
      ]
    },
    {
      name: "Security",
      subpages: [
        {
          name: "Zero Trust Access",
          path: "/cloudflare-pages/advanced/security/zero-trust-access"
        },
        {
          name: "Security Headers & CSP",
          path: "/cloudflare-pages/advanced/security/security-headers-csp"
        }
      ]
    },
    {
      name: "Workflows",
      subpages: [
        {
          name: "Deploy Hooks",
          path: "/cloudflare-pages/advanced/workflows/deploy-hooks"
        },
        {
          name: "Monorepos",
          path: "/cloudflare-pages/advanced/workflows/monorepos"
        }
      ]
    }
  ]
};

export default Advanced;