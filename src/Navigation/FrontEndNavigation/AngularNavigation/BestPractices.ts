import { Subpage } from "@/Navigation/NavigationTypes";

const AngularBestPracticesNavigation: Subpage = {
  name: "Angular Best Practices",
  subpages: [
    {
      name: "Code Organization",
      subpages: [
        { name: "Project Structure Best Practices", path: "/angular/best-practices/project-structure" }, // Organizing modules, services, components
        { name: "Folder & File Naming Conventions", path: "/angular/best-practices/naming-conventions" }, // Best naming standards
        { name: "Lazy Loading & Module Organization", path: "/angular/best-practices/lazy-loading" }, // Best practices for scalability
      ],
    },
    {
      name: "Performance Optimization",
      subpages: [
        { name: "Change Detection Strategies", path: "/angular/best-practices/change-detection" }, // OnPush, async pipe
        { name: "Optimizing Template Rendering", path: "/angular/best-practices/template-optimization" }, // Avoid unnecessary bindings
        { name: "Reducing Bundle Size", path: "/angular/best-practices/bundle-size" }, // Tree shaking, lazy loading
      ],
    },
    {
      name: "State Management",
      subpages: [
        { name: "Using Services for State", path: "/angular/best-practices/services-state" }, // Service-based state management
        { name: "NgRx Best Practices", path: "/angular/best-practices/ngrx" }, // Best practices for NgRx
        { name: "Reactive Forms vs Template-Driven Forms", path: "/angular/best-practices/forms-best-practices" }, // Choosing the right form approach
      ],
    },
    {
      name: "Component Best Practices",
      subpages: [
        { name: "Reusable Component Design", path: "/angular/best-practices/reusable-components" }, // Designing for reusability
        { name: "Avoiding Overuse of Inputs & Outputs", path: "/angular/best-practices/inputs-outputs" }, // Alternatives to excessive Input/Output decorators
        { name: "Smart vs. Dumb Components", path: "/angular/best-practices/smart-dumb-components" }, // Separation of concerns
      ],
    },
    {
      name: "Security & Maintainability",
      subpages: [
        { name: "Handling Security Risks", path: "/angular/best-practices/security" }, // Preventing XSS, CSRF, securing APIs
        { name: "Error Handling & Logging", path: "/angular/best-practices/error-handling" }, // Using interceptors, logging errors
        { name: "Testing Best Practices", path: "/angular/best-practices/testing" }, // Unit, integration, and end-to-end testing
      ],
    },
  ],
};

export default AngularBestPracticesNavigation;
