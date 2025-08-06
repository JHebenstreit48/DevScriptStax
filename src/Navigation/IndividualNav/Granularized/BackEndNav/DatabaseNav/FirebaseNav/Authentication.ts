import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const Authentication: Subpage = {
  name: "Authentication",
  subpages: [
    {
      name: "Overview",
      path: "/databases/firebase/auth/overview",
    },
    {
      name: "Implementation",
      path: "/databases/firebase/auth/implementation",
    },
    {
      name: "OAuth & Social Logins",
      path: "/databases/firebase/auth/sociallogins",
    },
    {
      name: "Managing Users & Permissions",
      path: "/databases/firebase/auth/usermanagement",
    },
  ],
};

export default Authentication;