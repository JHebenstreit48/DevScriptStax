import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Django REST",
      subpages: [
        {
          name: "Intro to DRF",
          path: "/backend/frameworks/django/advanced/django-rest/intro"
        },
        {
          name: "Serializers",
          path: "/backend/frameworks/django/advanced/django-rest/serializers"
        },
        {
          name: "Viewsets & Routers",
          path: "/backend/frameworks/django/advanced/django-rest/viewsets-routers"
        },
        {
          name: "Auth & Permissions",
          path: "/backend/frameworks/django/advanced/django-rest/auth-permissions"
        }
      ]
    },
    {
      name: "Deployment",
      subpages: [
        {
          name: "Gunicorn",
          path: "/backend/frameworks/django/advanced/deployment/gunicorn"
        },
        {
          name: "Scaling",
          path: "/backend/frameworks/django/advanced/deployment/scaling"
        }
      ]
    }
  ]
};

export default Advanced;