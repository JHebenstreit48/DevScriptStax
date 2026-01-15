import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Introduction",
          path: "/nginx/basics/fundamentals/introduction"
        },
        {
          name: "How Nginx Works",
          path: "/nginx/basics/fundamentals/how-nginx-works"
        },
        {
          name: "Nginx vs Apache",
          path: "/nginx/basics/fundamentals/nginx-vs-apache"
        },
        {
          name: "Common Use Cases",
          path: "/nginx/basics/fundamentals/common-use-cases"
        }
      ]
    },
    {
      name: "Configuration",
      subpages: [
        {
          name: "Basic Configuration",
          path: "/nginx/basics/configuration/basic-configuration"
        },
        {
          name: "Server Blocks",
          path: "/nginx/basics/configuration/server-blocks"
        },
        {
          name: "Custom Error Pages",
          path: "/nginx/basics/configuration/custom-error-pages"
        }
      ]
    }
  ]
};

export default Basics;