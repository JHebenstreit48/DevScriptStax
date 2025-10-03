import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Introduction",
          path: "/environment/basics/fundamentals/what-are-env-vars"
        },
        {
          name: "File Conventions",
          path: "/environment/basics/fundamentals/file-conventions"
        },
        {
          name: "Naming & Prefixes",
          path: "/environment/basics/fundamentals/naming-and-prefixes"
        }
      ]
    },
    {
      name: "Loading",
      subpages: [
        {
          name: "OS & Shell",
          path: "/environment/basics/loading/os-and-shell"
        },
        {
          name: ".env Files",
          path: "/environment/basics/loading/dotenv-files"
        }
      ]
    },
    {
      name: "Scopes",
      subpages: [
        {
          name: "Build vs Runtime",
          path: "/environment/basics/scopes/build-vs-runtime"
        },
        {
          name: "Client vs Server",
          path: "/environment/basics/scopes/client-vs-server"
        }
      ]
    }
  ]
};

export default Basics;