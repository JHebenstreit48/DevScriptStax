import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Overview",
          path: "/backend/frameworks/express/basics/fundamentals/overview"
        },
        {
          name: "Install & Setup",
          path: "/backend/frameworks/express/basics/fundamentals/install-setup"
        },
        {
          name: "Project Structure",
          path: "/backend/frameworks/express/basics/fundamentals/project-structure"
        }
      ]
    },
    {
      name: "Routing",
      subpages: [
        {
          name: "Routes",
          path: "/backend/frameworks/express/basics/routing/routes"
        },
        {
          name: "Params & Query",
          path: "/backend/frameworks/express/basics/routing/params-query"
        },
        {
          name: "Error Handling",
          path: "/backend/frameworks/express/basics/routing/error-handling"
        }
      ]
    },
    {
      name: "Middleware",
      subpages: [
        {
          name: "Core Middleware",
          path: "/backend/frameworks/express/basics/middleware/core"
        },
        {
          name: "Custom Middleware",
          path: "/backend/frameworks/express/basics/middleware/custom"
        }
      ]
    },
    {
      name: "Data Handling",
      subpages: [
        {
          name: "JSON & urlencoded",
          path: "/backend/frameworks/express/basics/data/json-urlencoded"
        },
        {
          name: "File Uploads",
          path: "/backend/frameworks/express/basics/data/file-uploads"
        }
      ]
    },
    {
      name: "Views & Static",
      subpages: [
        {
          name: "Static Files",
          path: "/backend/frameworks/express/basics/views-static/static-files"
        },
        {
          name: "EJS",
          path: "/backend/frameworks/express/basics/views-static/ejs"
        },
        {
          name: "Handlebars",
          path: "/backend/frameworks/express/basics/views-static/handlebars"
        }
      ]
    }
  ]
};

export default Basics;