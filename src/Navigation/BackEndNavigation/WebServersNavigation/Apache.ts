import { Subpage } from "@/Navigation/NavigationTypes";

const ApacheNavigation: Subpage = {
  name: "Apache",
  subpages: [
    {
      name: "Introduction to Apache",
      path: "/servers/apache/intro",
    },
    {
      name: "Apache Configuration",
      path: "/servers/apache/configuration",
    },
    {
      name: "Modules in Apache",
      path: "/servers/apache/modules",
    },
    {
      name: "Apache Virtual Hosts",
      path: "/servers/apache/virtualhosts",
    },
    {
      name: "Apache Security Best Practices",
      path: "/servers/apache/security",
    },
  ],
};

export default ApacheNavigation;
