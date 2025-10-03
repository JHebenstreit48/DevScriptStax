import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Introduction",
          path: "/apache/basics/fundamentals/introduction"
        },
        {
          name: "How Apache Works",
          path: "/apache/basics/fundamentals/how-apache-works"
        },
        {
          name: "Apache vs Nginx",
          path: "/apache/basics/fundamentals/apache-vs-nginx"
        },
        {
          name: "Common Use Cases",
          path: "/apache/basics/fundamentals/common-use-cases"
        }
      ]
    },
    {
      name: "Configuration",
      subpages: [
        {
          name: "Basic Configuration",
          path: "/apache/basics/configuration/basic-configuration"
        },
        {
          name: "Virtual Hosts",
          path: "/apache/basics/configuration/virtual-hosts"
        },
        {
          name: ".htaccess Guide",
          path: "/apache/basics/configuration/htaccess-guide"
        }
      ]
    }
  ]
};

export default Basics;