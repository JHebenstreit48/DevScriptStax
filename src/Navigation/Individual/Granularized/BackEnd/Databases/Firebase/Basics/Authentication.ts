import type { Subpage } from '@/types/navigation';

const Authentication: Subpage = {
  name: "Authentication",
  subpages: [
    {
      name: "Introduction",
      path: "/firebase/basics/authentication/introduction",
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