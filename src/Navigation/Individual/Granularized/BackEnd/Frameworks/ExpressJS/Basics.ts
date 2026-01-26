import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Introduction",
          path: '/frameworks/express/basics/fundamentals/introduction'
        },
        {
          name: "Install & Setup",
          path: '/frameworks/express/basics/fundamentals/install-setup'
        },
        {
          name: "Project Structure",
          path: '/frameworks/express/basics/fundamentals/project-structure'
        }
      ]
    },
    {
      name: "Routing",
      subpages: [
        {
          name: "Routes",
          path: '/frameworks/express/basics/routing/routes'
        },
        {
          name: "Params & Query",
          path: '/frameworks/express/basics/routing/params-query'
        },
        {
          name: "Error Handling",
          path: '/frameworks/express/basics/routing/error-handling'
        }
      ]
    },
    {
      name: "Middleware",
      subpages: [
        {
          name: "Core Middleware",
          path: '/frameworks/express/basics/middleware/core'
        },
        {
          name: "Custom Middleware",
          path: '/frameworks/express/basics/middleware/custom'
        }
      ]
    },
    {
      name: "Data Handling",
      subpages: [
        {
          name: "JSON & urlencoded",
          path: '/frameworks/express/basics/data/json-urlencoded'
        },
        {
          name: "File Uploads",
          path: '/frameworks/express/basics/data/file-uploads'
        }
      ]
    },
    {
      name: "Views & Static",
      subpages: [
        {
          name: "Static Files",
          path: '/frameworks/express/basics/views-static/static-files'
        },
        {
          name: "EJS",
          path: '/frameworks/express/basics/views-static/ejs'
        },
        {
          name: "Handlebars",
          path: '/frameworks/express/basics/views-static/handlebars'
        }
      ]
    }
  ]
};

export default Basics;