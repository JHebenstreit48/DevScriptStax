import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Overview",
          path: "/backend/frameworks/django/basics/fundamentals/overview"
        },
        {
          name: "Django vs Other Frameworks",
          path: "/backend/frameworks/django/basics/fundamentals/comparison"
        },
        {
          name: "Install & Setup",
          path: "/backend/frameworks/django/basics/fundamentals/install-setup"
        },
        {
          name: "Project Structure",
          path: "/backend/frameworks/django/basics/fundamentals/project-structure"
        }
      ]
    },
    {
      name: "Models & DB",
      subpages: [
        {
          name: "Defining Models",
          path: "/backend/frameworks/django/basics/models-db/defining-models"
        },
        {
          name: "Model Relationships",
          path: "/backend/frameworks/django/basics/models-db/relationships"
        },
        {
          name: "Migrations",
          path: "/backend/frameworks/django/basics/models-db/migrations"
        },
        {
          name: "ORM & QuerySets",
          path: "/backend/frameworks/django/basics/models-db/orm-querysets"
        }
      ]
    },
    {
      name: "Views & Templates",
      subpages: [
        {
          name: "Views",
          path: "/backend/frameworks/django/basics/views-templates/views"
        },
        {
          name: "Template Engine",
          path: "/backend/frameworks/django/basics/views-templates/templates"
        },
        {
          name: "Class vs Function",
          path: "/backend/frameworks/django/basics/views-templates/class-vs-function"
        },
        {
          name: "Rendering Context",
          path: "/backend/frameworks/django/basics/views-templates/rendering-context"
        }
      ]
    },
    {
      name: "Forms",
      subpages: [
        {
          name: "Working with Forms",
          path: "/backend/frameworks/django/basics/forms/working"
        },
        {
          name: "Model Forms",
          path: "/backend/frameworks/django/basics/forms/model-forms"
        },
        {
          name: "Validation & Errors",
          path: "/backend/frameworks/django/basics/forms/validation-errors"
        },
        {
          name: "File Uploads",
          path: "/backend/frameworks/django/basics/forms/file-uploads"
        }
      ]
    }
  ]
};

export default Basics;