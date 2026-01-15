import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Architecture",
      subpages: [
        {
          name: "Monorepos & Workspaces",
          path: "/mern/advanced/architecture/monorepos-and-workspaces"
        },
        {
          name: "Shared Packages",
          path: "/mern/advanced/architecture/shared-packages"
        }
      ]
    },
    {
      name: "Security",
      subpages: [
        {
          name: "Token Rotation",
          path: "/mern/advanced/security/token-rotation"
        },
        {
          name: "Cookies & CSRF",
          path: "/mern/advanced/security/cookies-and-csrf"
        }
      ]
    },
    {
      name: "Performance",
      subpages: [
        {
          name: "Client Caching Patterns",
          path: "/mern/advanced/performance/client-caching-patterns"
        },
        {
          name: "API Pagination & Filters",
          path: "/mern/advanced/performance/api-pagination-and-filters"
        }
      ]
    },
    {
      name: "Realtime & Files",
      subpages: [
        {
          name: "Socket.IO Integration",
          path: "/mern/advanced/realtime-and-files/socket-io-integration"
        },
        {
          name: "File Uploads Pipeline",
          path: "/mern/advanced/realtime-and-files/file-uploads-pipeline"
        }
      ]
    },
    {
      name: "CI/CD & Ops",
      subpages: [
        {
          name: "Build/Test/Deploy",
          path: "/mern/advanced/ci-cd-and-ops/build-test-deploy"
        },
        {
          name: "Logs & Monitoring",
          path: "/mern/advanced/ci-cd-and-ops/logs-and-monitoring"
        }
      ]
    }
  ]
};

export default Advanced;