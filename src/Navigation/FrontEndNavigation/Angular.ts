import { Subpage } from "@/Navigation/FrontEndNavigation/NavigationTypes";

const AngularNavigation: Subpage = {
  name: "Angular",
  subpages: [
    {
      name: "Angular Basics",
      subpages: [
        { name: "Overview", path: "/angular/overview" },
        { name: "Creating an Angular App", path: "/angular/creating-app" },
        { name: "Angular CLI", path: "/angular/cli" },
        {
          name: "Angular Project Structure",
          path: "/angular/project-structure",
        },
      ],
    },
    {
      name: "Core Concepts",
      subpages: [
        { name: "Components", path: "/angular/components" },
        { name: "Modules", path: "/angular/modules" },
        {
          name: "Services and Dependency Injection",
          path: "/angular/services",
        },
        { name: "Routing and Navigation", path: "/angular/routing" },
      ],
    },
    {
      name: "Advanced Topics",
      subpages: [
        { name: "Change Detection", path: "/angular/change-detection" },
        { name: "RxJS and Observables", path: "/angular/rxjs" },
        { name: "Angular Animations", path: "/angular/animations" },
        { name: "Path Aliases", path: "/angular/path-aliases" },
      ],
    },
    {
      name: "Best Practices",
      subpages: [
        { name: "Coding Standards", path: "/angular/coding-standards" },
        { name: "Performance Optimization", path: "/angular/performance" },
        { name: "Scalability Tips", path: "/angular/scalability" },
      ],
    },
  ],
};

export default AngularNavigation;
