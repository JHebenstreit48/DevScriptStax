import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Overview",
          path: '/frameworks/flask/basics/fundamentals/overview'
        },
        {
          name: "Install & Setup",
          path: '/frameworks/flask/basics/fundamentals/install-setup'
        },
        {
          name: "App Structure",
          path: '/frameworks/flask/basics/fundamentals/app-structure'
        },
        {
          name: "App Factory",
          path: '/frameworks/flask/basics/fundamentals/app-factory'
        }
      ]
    },
    {
      name: "Routing",
      subpages: [
        {
          name: "Basics",
          path: '/frameworks/flask/basics/routing/basics'
        },
        {
          name: "Dynamic Routes",
          path: '/frameworks/flask/basics/routing/dynamic-routes'
        },
        {
          name: "Error Handling",
          path: '/frameworks/flask/basics/routing/error-handling'
        }
      ]
    },
    {
      name: "Middleware & Hooks",
      subpages: [
        {
          name: "Request Hooks",
          path: '/frameworks/flask/basics/middleware-hooks/request-hooks'
        },
        {
          name: "WSGI Middleware",
          path: '/frameworks/flask/basics/middleware-hooks/wsgi-middleware'
        }
      ]
    },
    {
      name: "Data & Forms",
      subpages: [
        {
          name: "JSON & Form Data",
          path: '/frameworks/flask/basics/data-forms/json-form-data'
        },
        {
          name: "File Uploads",
          path: '/frameworks/flask/basics/data-forms/file-uploads'
        }
      ]
    },
    {
      name: "Templates & Static",
      subpages: [
        {
          name: "Jinja2",
          path: '/frameworks/flask/basics/templates-static/jinja2'
        },
        {
          name: "Static Files",
          path: '/frameworks/flask/basics/templates-static/static-files'
        }
      ]
    }
  ]
};

export default Basics;