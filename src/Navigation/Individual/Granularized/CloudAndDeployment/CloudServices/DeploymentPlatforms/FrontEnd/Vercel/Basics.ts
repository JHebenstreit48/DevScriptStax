import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Introduction",
          path: "/vercel/basics/fundamentals/introduction"
        },
        {
          name: "Platform Model",
          path: "/vercel/basics/fundamentals/platform-model"
        }
      ]
    },
    {
      name: "Setup",
      subpages: [
        {
          name: "Create Account",
          path: "/vercel/basics/setup/create-account"
        },
        {
          name: "Connect Repo & Deploy",
          path: "/vercel/basics/setup/connect-repo-deploy"
        }
      ]
    },
    {
      name: "Projects & Env",
      subpages: [
        {
          name: "Environments",
          path: "/vercel/basics/projects-env/environments"
        },
        {
          name: "Env Vars (Vercel)",
          path: "/vercel/basics/projects-env/env-vars-vercel"
        }
      ]
    },
    {
      name: "Builds & Config",
      subpages: [
        {
          name: "vercel.json",
          path: "/vercel/basics/builds-config/vercel-json"
        },
        {
          name: "Framework Presets",
          path: "/vercel/basics/builds-config/framework-presets"
        }
      ]
    },
    {
      name: "Routing",
      subpages: [
        {
          name: "Rewrites & Redirects",
          path: "/vercel/basics/routing/rewrites-redirects"
        },
        {
          name: "Headers & CORS",
          path: "/vercel/basics/routing/headers-cors"
        }
      ]
    },
    {
      name: "Deploys",
      subpages: [
        {
          name: "Previews & Branches",
          path: "/vercel/basics/deploys/previews-branches"
        },
        {
          name: "Rollbacks & Aliases",
          path: "/vercel/basics/deploys/rollbacks-aliases"
        }
      ]
    },
    {
      name: "Monitoring",
      subpages: [
        {
          name: "Logs & Analytics",
          path: "/vercel/basics/monitoring/logs-analytics"
        },
        {
          name: "Debugging Deploys",
          path: "/vercel/basics/monitoring/debugging-deploys"
        }
      ]
    }
  ]
};

export default Basics;