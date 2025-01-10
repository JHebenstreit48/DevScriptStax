import { Subpage } from "@/Navigation/NavigationTypes";

const ServersNavigation: Subpage = {
  name: "Servers",
  subpages: [
    {
      name: "General Server Concepts",
      subpages: [
        { name: "Introduction to Servers", path: "/servers/general/intro" },
        { name: "Server Architecture", path: "/servers/general/architecture" },
        { name: "Web Server Basics", path: "/servers/general/basics" },
        { name: "Load Balancing", path: "/servers/general/loadbalancing" },
        { name: "Server Security Basics", path: "/servers/general/security" },
      ],
    },
    {
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
    },
    {
      name: "Apache",
      subpages: [
        { name: "Introduction to Apache", path: "/servers/apache/intro" },
        { name: "Apache Configuration", path: "/servers/apache/configuration" },
        { name: "Modules in Apache", path: "/servers/apache/modules" },
        { name: "Apache Virtual Hosts", path: "/servers/apache/virtualhosts" },
        {
          name: "Apache Security Best Practices",
          path: "/servers/apache/security",
        },
      ],
    },
    {
      name: "Advanced Server Topics",
      subpages: [
        {
          name: "High Availability",
          path: "/servers/advanced/highavailability",
        },
        {
          name: "Scaling Server Infrastructure",
          path: "/servers/advanced/scaling",
        },
        {
          name: "Server Monitoring Tools",
          path: "/servers/advanced/monitoring",
        },
        { name: "Server Automation", path: "/servers/advanced/automation" },
      ],
    },
  ],
};

export default ServersNavigation;
