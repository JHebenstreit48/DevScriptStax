import { Subpage } from "@/Navigation/NavigationTypes";

const ServersGeneralNavigation: Subpage = {
  name: "Servers General Notes",
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

export default ServersGeneralNavigation;
