import { Subpage } from "@/Navigation/NavigationTypes";

const DjangoNavigation: Subpage = {
  name: "Django",
  subpages: [
    {
      name: "Django Fundamentals",
      subpages: [
        { name: "Overview", path: "/frameworks/django/fundamentals/overview" },
        { name: "Django vs Other Frameworks", path: "/frameworks/django/fundamentals/comparison" },
        { name: "Installation & Setup", path: "/frameworks/django/fundamentals/setup" },
        { name: "Project Structure", path: "/frameworks/django/fundamentals/project-structure" },
      ],
    },
    {
      name: "Models & Database",
      subpages: [
        { name: "Defining Models", path: "/frameworks/django/database/models" },
        { name: "Model Relationships", path: "/frameworks/django/database/relationships" },
        { name: "Migrations & Schema Changes", path: "/frameworks/django/database/migrations" },
        { name: "Django ORM & QuerySets", path: "/frameworks/django/database/orm-querysets" },
      ],
    },
    {
      name: "Views & Templates",
      subpages: [
        { name: "Views in Django", path: "/frameworks/django/views/overview" },
        { name: "Django Template Engine", path: "/frameworks/django/views/templates" },
        { name: "Class-Based vs Function-Based Views", path: "/frameworks/django/views/class-vs-function" },
        { name: "Rendering HTML with Context", path: "/frameworks/django/views/rendering" },
      ],
    },
    {
      name: "Forms & User Input",
      subpages: [
        { name: "Working with Forms", path: "/frameworks/django/forms/creating" },
        { name: "Model Forms", path: "/frameworks/django/forms/model-forms" },
        { name: "Form Validation & Error Handling", path: "/frameworks/django/forms/validation" },
        { name: "Handling File Uploads", path: "/frameworks/django/forms/file-uploads" },
      ],
    },
    {
      name: "Django REST Framework (DRF)",
      subpages: [
        { name: "Introduction to DRF", path: "/frameworks/django/rest-framework/intro" },
        { name: "Serializers", path: "/frameworks/django/rest-framework/serializers" },
        { name: "Viewsets & Routers", path: "/frameworks/django/rest-framework/viewsets" },
        { name: "API Authentication & Permissions", path: "/frameworks/django/rest-framework/auth-permissions" },
      ],
    },
    {
      name: "Deployment & Scaling",
      subpages: [
        { name: "Deploying Django with Gunicorn", path: "/frameworks/django/deployment/gunicorn" },
        { name: "Scaling Django Applications", path: "/frameworks/django/deployment/scaling" },
      ],
    },
  ],
};

export default DjangoNavigation;
