import { Subpage } from "@/Navigation/NavigationTypes";

const AngularNavigation: Subpage = {
  name: "Angular",
  subpages: [
    {
      name: "Basics",
      subpages: [
        {
          name: "Getting Started",
          path: "/frontendpages/angularpages/gettingstarted", // Combines Overview, Creating an Angular App, and Angular CLI
        },
        {
          name: "Project Structure",
          path: "/frontendpages/angularpages/projectstructure", // Shortened
        },
      ],
    },
    {
      name: "Core Concepts",
      subpages: [
        {
          name: "Components",
          path: "/angular/components",
        },
        {
          name: "Modules",
          path: "/angular/modules",
        },
        {
          name: "Services & DI", // Shortened
          path: "/angular/services",
        },
        {
          name: "Routing", // Shortened
          path: "/angular/routing",
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
