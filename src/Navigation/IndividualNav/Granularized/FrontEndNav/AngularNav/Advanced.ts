import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const AngularAdvanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Change Detection",
      subpages: [
        {
          name: "Basics",
          path: "/angular/advanced/changedetection/basics",
        },
        {
          name: "Optimizing",
          path: "/angular/advanced/changedetection/optimizing",
        },
        {
          name: "Template Rendering Optimization",
          path: "/angular/advanced/changedetection/templateoptimization",
        },
      ],
    },
    {
      name: "Performance",
      subpages: [
        {
          name: "Bundle Optimization",
          path: "/angular/advanced/performance/bundleoptimization",
        },
        {
          name: "Budgets & Profiling",
          path: "/angular/advanced/performance/budgetsprofiling",
        },
      ],
    },
    {
      name: "RxJS/Reactive Programming",
      subpages: [
        {
          name: "Observables Basics",
          path: "/angular/advanced/rxjs/observables",
        },
        {
          name: "Subjects/Behavior",
          path: "/angular/advanced/rxjs/subjects",
        },
        {
          name: "RxJS Operators",
          path: "/angular/advanced/rxjs/operators",
        },
      ],
    },
    {
      name: "Animations",
      subpages: [
        {
          name: "Basics",
          path: "/angular/advanced/animations/basics",
        },
        {
          name: "Triggers",
          path: "/angular/advanced/animations/triggers",
        },
      ],
    },
    {
      name: "TypeScript Integration",
      subpages: [
        {
          name: "Path Aliases",
          path: "/angular/advanced/tsconfig/path-aliases",
        },
        {
          name: "Advanced Aliases",
          path: "/angular/advanced/tsconfig/advanced-aliases",
        },
      ],
    },
    {
      name: "Security",
      subpages: [
        {
          name: "Basics",
          path: "/angular/advanced/security/overview",
        },
        {
          name: "XSS Protection",
          path: "/angular/advanced/security/xss",
        },
        {
          name: "CSRF Protection",
          path: "/angular/advanced/security/csrf",
        },
        {
          name: "Authentication & Authorization",
          subpages: [
            {
              name: "Implementing Authentication",
              path: "/angular/security/authentication",
            }, // JWT, OAuth
            {
              name: "Role-Based Access Control (RBAC)",
              path: "/angular/security/rbac",
            }, // Guards, interceptors
          ],
        },
      ],
    },
  ],
};

export default AngularAdvanced;