import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Introduction",
          path: "/render/basics/fundamentals/introduction"
        },
        {
          name: "Render vs Others",
          path: "/render/basics/fundamentals/comparison"
        },
        {
          name: "Pricing & Plans",
          path: "/render/basics/fundamentals/pricing"
        }
      ]
    },
    {
      name: "Setup",
      subpages: [
        {
          name: "Account",
          path: "/render/basics/setup/account"
        },
        {
          name: "First Deployment",
          path: "/render/basics/setup/first-deployment"
        },
        {
          name: "Custom Domain",
          path: "/render/basics/setup/custom-domain"
        },
        {
          name: "CLI",
          path: "/render/basics/setup/cli"
        }
      ]
    },
    {
      name: "Services",
      subpages: [
        {
          name: "Static Sites",
          path: "/render/basics/services/static-sites"
        },
        {
          name: "Web Services",
          path: "/render/basics/services/web-services"
        },
        {
          name: "Background Workers",
          path: "/render/basics/services/background-workers"
        },
        {
          name: "Cron Jobs",
          path: "/render/basics/services/cron-jobs"
        }
      ]
    },
    {
      name: "Config",
      subpages: [
        {
          name: "Env Variables & Secrets",
          path: "/render/basics/config/env-variables"
        },
        {
          name: "Build & Start",
          path: "/render/basics/config/build-start"
        }
      ]
    },
    {
      name: "Data",
      subpages: [
        {
          name: "Managed PostgreSQL",
          path: "/render/basics/data/postgresql-managed"
        },
        {
          name: "External Databases",
          path: "/render/basics/data/external-databases"
        },
        {
          name: "Persistent Storage",
          path: "/render/basics/data/persistent-storage"
        }
      ]
    }
  ]
};

export default Basics;