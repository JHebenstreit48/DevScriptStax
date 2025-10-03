import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Intro",
          path: "/backend/frameworks/ruby-on-rails/basics/fundamentals/intro"
        },
        {
          name: "Install & Setup",
          path: "/backend/frameworks/ruby-on-rails/basics/fundamentals/install-setup"
        },
        {
          name: "Project Structure",
          path: "/backend/frameworks/ruby-on-rails/basics/fundamentals/project-structure"
        },
        {
          name: "MVC",
          path: "/backend/frameworks/ruby-on-rails/basics/fundamentals/mvc"
        }
      ]
    },
    {
      name: "Routing & Controllers",
      subpages: [
        {
          name: "Routing",
          path: "/backend/frameworks/ruby-on-rails/basics/routing-controllers/routing"
        },
        {
          name: "Controllers",
          path: "/backend/frameworks/ruby-on-rails/basics/routing-controllers/controllers"
        },
        {
          name: "Params & Strong Params",
          path: "/backend/frameworks/ruby-on-rails/basics/routing-controllers/params-strong"
        }
      ]
    },
    {
      name: "Models & AR",
      subpages: [
        {
          name: "Models & Migrations",
          path: "/backend/frameworks/ruby-on-rails/basics/models-ar/models-migrations"
        },
        {
          name: "Associations",
          path: "/backend/frameworks/ruby-on-rails/basics/models-ar/associations"
        },
        {
          name: "Validations",
          path: "/backend/frameworks/ruby-on-rails/basics/models-ar/validations"
        }
      ]
    },
    {
      name: "Views & Forms",
      subpages: [
        {
          name: "ERB & Layouts",
          path: "/backend/frameworks/ruby-on-rails/basics/views-forms/erb-layouts"
        },
        {
          name: "Partials & Helpers",
          path: "/backend/frameworks/ruby-on-rails/basics/views-forms/partials-helpers"
        },
        {
          name: "Forms & CSRF",
          path: "/backend/frameworks/ruby-on-rails/basics/views-forms/forms-csrf"
        }
      ]
    },
    {
      name: "Assets & Config",
      subpages: [
        {
          name: "Asset Pipeline / Importmap",
          path: "/backend/frameworks/ruby-on-rails/basics/assets-config/asset-pipeline-importmap"
        },
        {
          name: "Environments",
          path: "/backend/frameworks/ruby-on-rails/basics/assets-config/environments"
        }
      ]
    }
  ]
};

export default Basics;