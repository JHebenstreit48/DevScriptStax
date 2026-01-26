import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Intro",
          path: '/frameworks/ruby-on-rails/basics/fundamentals/intro'
        },
        {
          name: "Install & Setup",
          path: '/frameworks/ruby-on-rails/basics/fundamentals/install-setup'
        },
        {
          name: "Project Structure",
          path: '/frameworks/ruby-on-rails/basics/fundamentals/project-structure'
        },
        {
          name: "MVC",
          path: '/frameworks/ruby-on-rails/basics/fundamentals/mvc'
        }
      ]
    },
    {
      name: "Routing & Controllers",
      subpages: [
        {
          name: "Routing",
          path: '/frameworks/ruby-on-rails/basics/routing-controllers/routing'
        },
        {
          name: "Controllers",
          path: '/frameworks/ruby-on-rails/basics/routing-controllers/controllers'
        },
        {
          name: "Params & Strong Params",
          path: '/frameworks/ruby-on-rails/basics/routing-controllers/params-strong'
        }
      ]
    },
    {
      name: "Models & AR",
      subpages: [
        {
          name: "Models & Migrations",
          path: '/frameworks/ruby-on-rails/basics/models-ar/models-migrations'
        },
        {
          name: "Associations",
          path: '/frameworks/ruby-on-rails/basics/models-ar/associations'
        },
        {
          name: "Validations",
          path: '/frameworks/ruby-on-rails/basics/models-ar/validations'
        }
      ]
    },
    {
      name: "Views & Forms",
      subpages: [
        {
          name: "ERB & Layouts",
          path: '/frameworks/ruby-on-rails/basics/views-forms/erb-layouts'
        },
        {
          name: "Partials & Helpers",
          path: '/frameworks/ruby-on-rails/basics/views-forms/partials-helpers'
        },
        {
          name: "Forms & CSRF",
          path: '/frameworks/ruby-on-rails/basics/views-forms/forms-csrf'
        }
      ]
    },
    {
      name: "Assets & Config",
      subpages: [
        {
          name: "Asset Pipeline / Importmap",
          path: '/frameworks/ruby-on-rails/basics/assets-config/asset-pipeline-importmap'
        },
        {
          name: "Environments",
          path: '/frameworks/ruby-on-rails/basics/assets-config/environments'
        }
      ]
    }
  ]
};

export default Basics;