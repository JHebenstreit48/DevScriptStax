import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Overview",
          path: "/backend/frameworks/koa/basics/fundamentals/overview"
        },
        {
          name: "Install & Setup",
          path: "/backend/frameworks/koa/basics/fundamentals/install-setup"
        },
        {
          name: "App Structure",
          path: "/backend/frameworks/koa/basics/fundamentals/app-structure"
        },
        {
          name: "App & Context",
          path: "/backend/frameworks/koa/basics/fundamentals/app-context"
        }
      ]
    },
    {
      name: "Routing",
      subpages: [
        {
          name: "Basics",
          path: "/backend/frameworks/koa/basics/routing/basics"
        },
        {
          name: "Koa Router",
          path: "/backend/frameworks/koa/basics/routing/koa-router"
        },
        {
          name: "Params & Query",
          path: "/backend/frameworks/koa/basics/routing/params-query"
        }
      ]
    },
    {
      name: "Middleware",
      subpages: [
        {
          name: "Core Middleware",
          path: "/backend/frameworks/koa/basics/middleware/core"
        },
        {
          name: "Custom Middleware",
          path: "/backend/frameworks/koa/basics/middleware/custom"
        },
        {
          name: "Error Handling",
          path: "/backend/frameworks/koa/basics/middleware/error-handling"
        }
      ]
    },
    {
      name: "Data & Body",
      subpages: [
        {
          name: "JSON & urlencoded",
          path: "/backend/frameworks/koa/basics/data-body/json-urlencoded"
        },
        {
          name: "File Uploads",
          path: "/backend/frameworks/koa/basics/data-body/file-uploads"
        }
      ]
    },
    {
      name: "Templates & Static",
      subpages: [
        {
          name: "Static Files",
          path: "/backend/frameworks/koa/basics/templates-static/static-files"
        },
        {
          name: "Templating (koa-views)",
          path: "/backend/frameworks/koa/basics/templates-static/templating"
        }
      ]
    }
  ]
};

export default Basics;