import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Introduction",
          path: "/railway/basics/fundamentals/introduction"
        },
        {
          name: "Pricing & Limits",
          path: "/railway/basics/fundamentals/pricing-limits"
        }
      ]
    },
    {
      name: "Setup",
      subpages: [
        {
          name: "Create Account",
          path: "/railway/basics/setup/create-account"
        },
        {
          name: "New Project & Deploy",
          path: "/railway/basics/setup/new-project-deploy"
        }
      ]
    },
    {
      name: "Services",
      subpages: [
        {
          name: "Web Services",
          path: "/railway/basics/services/web-services"
        },
        {
          name: "Provisioned DBs",
          path: "/railway/basics/services/provisioned-dbs"
        }
      ]
    },
    {
      name: "Env & Config",
      subpages: [
        {
          name: "Env Vars (Railway)",
          path: "/railway/basics/env-config/env-vars-railway"
        },
        {
          name: "Service Vars",
          path: "/railway/basics/env-config/service-vars"
        }
      ]
    },
    {
      name: "Deploys",
      subpages: [
        {
          name: "Buildpacks & Nixpacks",
          path: "/railway/basics/deploys/buildpacks-nixpacks"
        },
        {
          name: "Previews & Branches",
          path: "/railway/basics/deploys/previews-branches"
        }
      ]
    },
    {
      name: "Monitoring",
      subpages: [
        {
          name: "Logs & Metrics",
          path: "/railway/basics/monitoring/logs-metrics"
        },
        {
          name: "Debugging Deploys",
          path: "/railway/basics/monitoring/debugging-deploys"
        }
      ]
    }
  ]
};

export default Basics;