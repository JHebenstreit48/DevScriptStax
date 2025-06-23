import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const AuthorizationNavigation: Subpage = {
  name: "Authorization",
  subpages: [
    {
      name: "Authorization Basics",
      subpages: [
        { name: "What is Authorization?", path: "/authz/basics/whatis" },
        { name: "Role-Based Access Control (RBAC)", path: "/authz/basics/rbac" },
        { name: "Permission-Based Access Control (PBAC)", path: "/authz/basics/permissions" },
        { name: "JWT Authorization & Claims", path: "/authz/basics/jwt" },
        { name: "OAuth Scopes & Roles", path: "/authz/basics/oauth-scopes" },
      ],
    },
    {
      name: "Advanced Authorization Concepts",
      subpages: [
        { name: "Authorization in Microservices", path: "/authz/advanced/microservices" },
        { name: "SSO & Federated Identity", path: "/authz/advanced/sso" },
        { name: "Custom Auth Providers", path: "/authz/advanced/custom-providers" },
        { name: "Scaling Authorization Systems", path: "/authz/advanced/scaling-authz" },
        { name: "Auditing & Logging for Access Control", path: "/authz/advanced/logging" },
      ],
    },
  ],
};

export default AuthorizationNavigation;
