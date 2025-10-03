import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Intro",
          path: "/backend/frameworks/nodejs/basics/fundamentals/intro"
        },
        {
          name: "Event Loop & Async I/O",
          path: "/backend/frameworks/nodejs/basics/fundamentals/event-loop-async-io"
        },
        {
          name: "Runtime & Globals",
          path: "/backend/frameworks/nodejs/basics/fundamentals/runtime-globals"
        }
      ]
    },
    {
      name: "Modules & Packages",
      subpages: [
        {
          name: "CommonJS vs ESM",
          path: "/backend/frameworks/nodejs/basics/modules-packages/commonjs-vs-esm"
        },
        {
          name: "package.json & Scripts",
          path: "/backend/frameworks/nodejs/basics/modules-packages/package-json-scripts"
        },
        {
          name: "Lockfiles (npm)",
          path: "/backend/frameworks/nodejs/basics/modules-packages/lockfiles-npm"
        },
        {
          name: "node_modules & Resolution",
          path: "/backend/frameworks/nodejs/basics/modules-packages/node-modules-resolution"
        }
      ]
    },
    {
      name: "Tooling",
      subpages: [
        {
          name: "npm & npx",
          path: "/backend/frameworks/nodejs/basics/tooling/npm-npx"
        },
        {
          name: "Node Versions (nvm)",
          path: "/backend/frameworks/nodejs/basics/tooling/nvm-versions"
        }
      ]
    },
    {
      name: "Files & Streams",
      subpages: [
        {
          name: "File I/O",
          path: "/backend/frameworks/nodejs/basics/files-streams/file-io"
        },
        {
          name: "Streams Basics",
          path: "/backend/frameworks/nodejs/basics/files-streams/streams-basics"
        }
      ]
    },
    {
      name: "Networking (Core)",
      subpages: [
        {
          name: "HTTP Server",
          path: "/backend/frameworks/nodejs/basics/networking-core/http-server"
        },
        {
          name: "HTTP Client",
          path: "/backend/frameworks/nodejs/basics/networking-core/http-client"
        }
      ]
    }
  ]
};

export default Basics;