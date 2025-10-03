import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Introduction",
          path: "/tools/api/postman/basics/fundamentals/introduction"
        },
        {
          name: "Install & Setup",
          path: "/tools/api/postman/basics/fundamentals/install-setup"
        },
        {
          name: "UI Tour",
          path: "/tools/api/postman/basics/fundamentals/ui-tour"
        }
      ]
    },
    {
      name: "Requests",
      subpages: [
        {
          name: "Build Requests",
          path: "/tools/api/postman/basics/requests/build"
        },
        {
          name: "Params & Headers",
          path: "/tools/api/postman/basics/requests/params-headers"
        },
        {
          name: "Bodies & Files",
          path: "/tools/api/postman/basics/requests/bodies-files"
        }
      ]
    },
    {
      name: "Workspaces",
      subpages: [
        {
          name: "Collections",
          path: "/tools/api/postman/basics/workspaces/collections"
        },
        {
          name: "Sharing",
          path: "/tools/api/postman/basics/workspaces/sharing"
        }
      ]
    },
    {
      name: "Debugging",
      subpages: [
        {
          name: "Console",
          path: "/tools/api/postman/basics/debugging/console"
        },
        {
          name: "Troubleshoot",
          path: "/tools/api/postman/basics/debugging/troubleshoot"
        }
      ]
    }
  ]
};

export default Basics;