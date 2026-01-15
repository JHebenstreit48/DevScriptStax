import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Rendering",
      subpages: [
        {
          name: "SSR & DSG",
          path: "/gatsby/advanced/rendering/ssr-and-dsg"
        },
        {
          name: "Client-Only Routes",
          path: "/gatsby/advanced/rendering/client-only-routes"
        }
      ]
    },
    {
      name: "Performance",
      subpages: [
        {
          name: "Performance Optimization",
          path: "/gatsby/advanced/performance/performance-optimization"
        },
        {
          name: "Caching & Incremental Builds",
          path: "/gatsby/advanced/performance/caching-and-incremental-builds"
        }
      ]
    },
    {
      name: "Plugins & Extensibility",
      subpages: [
        {
          name: "Custom Plugins",
          path: "/gatsby/advanced/plugins-extensibility/custom-plugins"
        },
        {
          name: "Node APIs (gatsby-node.js)",
          path: "/gatsby/advanced/plugins-extensibility/node-apis"
        }
      ]
    },
    {
      name: "Security & SEO",
      subpages: [
        {
          name: "Security",
          path: "/gatsby/advanced/security-seo/security"
        },
        {
          name: "SEO & Metadata",
          path: "/gatsby/advanced/security-seo/seo-and-metadata"
        }
      ]
    },
    {
      name: "Deployment",
      subpages: [
        {
          name: "Hosting Options",
          path: "/gatsby/advanced/deployment/hosting-options"
        },
        {
          name: "Build & Deploy",
          path: "/gatsby/advanced/deployment/build-and-deploy"
        },
        {
          name: "Preview & Env Vars",
          path: "/gatsby/advanced/deployment/preview-and-env-vars"
        }
      ]
    }
  ]
};

export default Advanced;