import { Subpage } from "@/Navigation/NavigationTypes";

const AngularCoreConceptsNavigation: Subpage = {
  name: "Angular Core Concepts",
  subpages: [
    {
      name: "Components",
      subpages: [
        { name: "Introduction to Components", path: "/angular/coreconcepts/components" }, // Basics
        { name: "Component Communication", path: "/angular/coreconcepts/component-communication" }, // @Input, @Output, EventEmitter
      ],
    },
    {
      name: "Modules",
      subpages: [
        { name: "Understanding Angular Modules", path: "/angular/coreconcepts/modules" }, // NgModules, feature modules
        { name: "Lazy Loading Modules", path: "/angular/coreconcepts/lazy-modules" }, // Splitting apps for performance
      ],
    },
    {
      name: "Services & Dependency Injection",
      subpages: [
        { name: "Understanding Services", path: "/angular/coreconcepts/services" }, // Creating services
        { name: "Dependency Injection (DI)", path: "/angular/coreconcepts/di" }, // DI providers and hierarchy
      ],
    },
    {
      name: "Routing",
      subpages: [
        { name: "Angular Routing Basics", path: "/angular/coreconcepts/routing" }, // RouterModule, router-outlet
        { name: "Route Guards & Resolvers", path: "/angular/coreconcepts/route-guards" }, // Protecting routes
        { name: "Lazy Loading Routes", path: "/angular/coreconcepts/lazy-loading-routes" }, // Performance-focused lazy loading
      ],
    },
  ],
};

export default AngularCoreConceptsNavigation;
