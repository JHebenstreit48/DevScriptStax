import { Subpage } from "@/Navigation/NavigationTypes";

const NginxNavigation: Subpage = {
  name: "Nginx",
  subpages: [
    { name: "Introduction to Nginx", path: "/servers/nginx/intro" },
    { name: "Nginx Configuration", path: "/servers/nginx/configuration" },
    {
      name: "Reverse Proxy with Nginx",
      path: "/servers/nginx/reverseproxy",
    },
    { name: "Nginx Caching", path: "/servers/nginx/caching" },
    {
      name: "Nginx Performance Optimization",
      path: "/servers/nginx/performance",
    },
  ],
};

export default NginxNavigation;
