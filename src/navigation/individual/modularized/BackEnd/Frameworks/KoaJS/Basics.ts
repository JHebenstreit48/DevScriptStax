import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Overview",
          path: '/frameworks/koa/basics/fundamentals/overview'
        },
        {
          name: "Install & Setup",
          path: '/frameworks/koa/basics/fundamentals/install-setup'
        },
        {
          name: "App Structure",
          path: '/frameworks/koa/basics/fundamentals/app-structure'
        },
        {
          name: "App & Context",
          path: '/frameworks/koa/basics/fundamentals/app-context'
        }
      ]
    },
    {
      name: "Routing",
      subpages: [
        {
          name: "Basics",
          path: '/frameworks/koa/basics/routing/basics'
        },
        {
          name: "Koa Router",
          path: '/frameworks/koa/basics/routing/koa-router'
        },
        {
          name: "Params & Query",
          path: '/frameworks/koa/basics/routing/params-query'
        }
      ]
    },
    {
      name: "Middleware",
      subpages: [
        {
          name: "Core Middleware",
          path: '/frameworks/koa/basics/middleware/core'
        },
        {
          name: "Custom Middleware",
          path: '/frameworks/koa/basics/middleware/custom'
        },
        {
          name: "Error Handling",
          path: '/frameworks/koa/basics/middleware/error-handling'
        }
      ]
    },
    {
      name: "Data & Body",
      subpages: [
        {
          name: "JSON & urlencoded",
          path: '/frameworks/koa/basics/data-body/json-urlencoded'
        },
        {
          name: "File Uploads",
          path: '/frameworks/koa/basics/data-body/file-uploads'
        }
      ]
    },
    {
      name: "Templates & Static",
      subpages: [
        {
          name: "Static Files",
          path: '/frameworks/koa/basics/templates-static/static-files'
        },
        {
          name: "Templating (koa-views)",
          path: '/frameworks/koa/basics/templates-static/templating'
        }
      ]
    }
  ]
};

export default Basics;