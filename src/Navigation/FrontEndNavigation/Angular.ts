import { Subpage } from "@/Navigation/NavigationTypes";

const AngularNavigation: Subpage = {
  name: "Angular",
  subpages: [
    {
      name: "Basics",
      subpages: [
        {
          name: "Getting Started",
          path: "/angular/basics/gettingstarted", // Combines Overview, Creating an Angular App, and Angular CLI
        },
        {
          name: "Project Structure",
          path: "/angular/basics/projectstructure", // Shortened
        },
      ],
    },
    {
      name: "Core Concepts",
      subpages: [
        {
          name: "Components",
          path: "/angular/coreconcepts/components",
        },
        {
          name: "Modules",
          path: "/angular/coreconcepts/modules",
        },
        {
          name: "Services & DI", // Shortened
          path: "/angular/coreconcepts/services",
        },
        {
          name: "Routing", // Shortened
          path: "/angular/coreconcepts/routing",
        },
      ],
    },
    {
      name: "Advanced",
      subpages: [
        {
          name: "Change Detection",
          path: "/angular/change-detection",
        },
        {
          name: "RxJS",
          path: "/angular/rxjs",
        },
        {
          name: "Animations", // Shortened
          path: "/angular/animations",
        },
        {
          name: "Path Aliases",
          path: "/angular/path-aliases",
        },
      ],
    },
    {
      name: "Best Practices",
      subpages: [
        {
          name: "Best Practices", // Combined and shortened
          path: "/angular/best-practices",
        },
      ],
    },
  ],
};

export default AngularNavigation;
