import type { Subpage } from '@/types/navigation';

const ServerBasics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Introduction",
          path: "/apollo/server/basics/fundamentals/introduction"
        },
        {
          name: "Install & Setup",
          path: "/apollo/server/basics/fundamentals/install-setup"
        }
      ]
    },
    {
      name: "Schema & Resolvers",
      subpages: [
        {
          name: "Schema",
          path: "/apollo/server/basics/schema-resolvers/schema"
        },
        {
          name: "Resolvers",
          path: "/apollo/server/basics/schema-resolvers/resolvers"
        }
      ]
    },
    {
      name: "Context & MW",
      subpages: [
        {
          name: "Context",
          path: "/apollo/server/basics/context-mw/context"
        },
        {
          name: "Middleware",
          path: "/apollo/server/basics/context-mw/middleware"
        }
      ]
    },
    {
      name: "Schema Delivery",
      subpages: [
        {
          name: "SDL Files",
          path: "/apollo/server/basics/schema-delivery/sdl-files"
        },
        {
          name: "Code-First",
          path: "/apollo/server/basics/schema-delivery/code-first"
        }
      ]
    }
  ]
};

export default ServerBasics;