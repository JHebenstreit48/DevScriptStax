import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";
import ChangeDetection from "@/Navigation/IndividualNav/Granularized/FrontEndNav/AngularNav/Advanced/ChangeDetection";
import Performance from "@/Navigation/IndividualNav/Granularized/FrontEndNav/AngularNav/Advanced/Performance";
import RxJSAndReactive from "@/Navigation/IndividualNav/Granularized/FrontEndNav/AngularNav/Advanced/RxJSAndReactiveProgram";

const AngularAdvanced: Subpage = {
  name: "Advanced",
  subpages: [
    ChangeDetection,
    Performance,
    RxJSAndReactive,
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