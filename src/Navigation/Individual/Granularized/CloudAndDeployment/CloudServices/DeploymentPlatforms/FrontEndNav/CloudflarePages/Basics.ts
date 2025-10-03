import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Introduction",
          path: "/cloudflare-pages/basics/fundamentals/introduction"
        },
        {
          name: "Pricing & Limits",
          path: "/cloudflare-pages/basics/fundamentals/pricing-limits"
        }
      ]
    },
    {
      name: "Setup",
      subpages: [
        {
          name: "Create Account",
          path: "/cloudflare-pages/basics/setup/create-account"
        },
        {
          name: "Connect Repo & Deploy",
          path: "/cloudflare-pages/basics/setup/connect-repo-deploy"
        }
      ]
    },
    {
      name: "Builds & Config",
      subpages: [
        {
          name: "Project Settings",
          path: "/cloudflare-pages/basics/builds-config/project-settings"
        },
        {
          name: "Env Vars (Pages)",
          path: "/cloudflare-pages/basics/builds-config/env-vars-pages"
        }
      ]
    },
    {
      name: "Routing",
      subpages: [
        {
          name: "Redirects",
          path: "/cloudflare-pages/basics/routing/redirects"
        },
        {
          name: "Headers & CORS",
          path: "/cloudflare-pages/basics/routing/headers-cors"
        }
      ]
    },
    {
      name: "Deploys",
      subpages: [
        {
          name: "Previews & Branches",
          path: "/cloudflare-pages/basics/deploys/previews-branches"
        },
        {
          name: "Rollbacks",
          path: "/cloudflare-pages/basics/deploys/rollbacks"
        }
      ]
    },
    {
      name: "Monitoring",
      subpages: [
        {
          name: "Logs & Analytics",
          path: "/cloudflare-pages/basics/monitoring/logs-analytics"
        },
        {
          name: "Debugging Deploys",
          path: "/cloudflare-pages/basics/monitoring/debugging-deploys"
        }
      ]
    }
  ]
};

export default Basics;