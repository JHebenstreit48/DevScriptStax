import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Getting Started",
      subpages: [
        {
          name: "Intro",
          path: "/tools/api/postman/basics/getting-started/intro"
        },
        {
          name: "Install & Setup",
          path: "/tools/api/postman/basics/getting-started/install-setup"
        },
        {
          name: "UI Tour",
          path: "/tools/api/postman/basics/getting-started/ui-tour"
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