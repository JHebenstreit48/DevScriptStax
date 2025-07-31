import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const Security: Subpage = {
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
};

export default Security;