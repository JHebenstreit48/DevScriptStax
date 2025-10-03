import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const Authentication: Subpage = {
  name: "Authentication",
  subpages: [
    {
      name: "Overview",
      path: "/firebase/basics/authentication/overview",
    },
    {
      name: "Implementation",
      path: "/firebase/basics/authentication/implementation",
    },
    {
      name: "OAuth & Social Logins",
      path: "/firebase/basics/authentication/social-logins",
    },
    {
      name: "Managing Users & Permissions",
      path: "/firebase/basics/authentication/user-management",
    },
  ],
};

export default Authentication;