import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const Intermediate: Subpage = {
  name: "Intermediate",
  subpages: [
    {
      name: "Web APIs (Go)",
      subpages: [
        {
          name: "net/http Server",
          path: "/go/intermediate/web/net-http-server"
        },
        {
          name: "Routing & Middleware",
          path: "/go/intermediate/web/routing-middleware"
        },
        {
          name: "JSON (encoding/json)",
          path: "/go/intermediate/web/encoding-json"
        }
      ]
    },
    {
      name: "Data & I/O (Go)",
      subpages: [
        {
          name: "File I/O",
          path: "/go/intermediate/data/file-io"
        },
        {
          name: "Streams & Bufio",
          path: "/go/intermediate/data/streams-bufio"
        }
      ]
    },
    {
      name: "Database (Go)",
      subpages: [
        {
          name: "database/sql Basics",
          path: "/go/intermediate/database/sql-basics"
        },
        {
          name: "Drivers & ORM",
          path: "/go/intermediate/database/drivers-orm"
        }
      ]
    },
    {
      name: "Config (Go)",
      subpages: [
        {
          name: "Env Vars (os, flag)",
          path: "/go/intermediate/config/env-vars"
        },
        {
          name: "Config Files (viper)",
          path: "/go/intermediate/config/config-files"
        }
      ]
    }
  ]
};

export default Intermediate;