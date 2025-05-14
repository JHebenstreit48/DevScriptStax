import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const AngularCoreConceptsNavigation: Subpage = {
  name: "Core Concepts",
  subpages: [
    {
      name: "Components",
      subpages: [
        {
          name: "Introduction to Components",
          path: "/angular/coreconcepts/components/intro"
        },
        {
          name: "Reusable Component Design",
          path: "/angular/coreconcepts/components/reusable-design"
        },
        {
          name: "Smart vs. Dumb Components",
          path: "/angular/coreconcepts/components/smart-dumb"
        }, // Basics
        {
          name: "Component Communication",
          path: "/angular/coreconcepts/components/communication"
        },
        {
          name: "Avoiding Overuse of Inputs & Outputs",
          path: "/angular/coreconcepts/components/inputsoutputs"
        },
      ],
    },
    {
      name: "Modules",
      subpages: [
        {
          name: "Understanding Angular Modules",
          path: "/angular/coreconcepts/modules"
        }, // NgModules, feature modules
        {
          name: "Lazy Loading Modules",
          path: "/angular/coreconcepts/lazy-modules"
        }, // Splitting apps for performance
      ],
    },
    {
      name: "Services & Dependency Injection",
      subpages: [
        {
          name: "Understanding Services",
          path: "/angular/coreconcepts/services"
        }, // Creating services
        {
          name: "Dependency Injection (DI)",
          path: "/angular/coreconcepts/di"
        }, // DI providers and hierarchy
      ],
    },
    {
      name: "Routing",
      subpages: [
        {
          name: "Angular Routing Basics",
          path: "/angular/coreconcepts/routing"
        }, // RouterModule, router-outlet
        {
          name: "Route Guards & Resolvers",
          path: "/angular/coreconcepts/route-guards"
        }, // Protecting routes
        {
          name: "Lazy Loading Routes",
          path: "/angular/coreconcepts/lazy-loading-routes"
        }, // Performance-focused lazy loading
      ],
    },
  ],
};

export default AngularCoreConceptsNavigation;
