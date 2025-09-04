import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Getting Started",
      subpages: [
        {
          name: "Intro",
          path: "/tools/api/insomnia/basics/getting-started/intro"
        },
        {
          name: "Install & Setup",
          path: "/tools/api/insomnia/basics/getting-started/install-setup"
        },
        {
          name: "UI Tour",
          path: "/tools/api/insomnia/basics/getting-started/ui-tour"
        }
      ]
    },
    {
      name: "Requests",
      subpages: [
        {
          name: "Build Requests",
          path: "/tools/api/insomnia/basics/requests/build"
        },
        {
          name: "Params & Headers",
          path: "/tools/api/insomnia/basics/requests/params-headers"
        },
        {
          name: "Bodies & Files",
          path: "/tools/api/insomnia/basics/requests/bodies-files"
        }
      ]
    },
    {
      name: "Workspaces",
      subpages: [
        {
          name: "Structure",
          path: "/tools/api/insomnia/basics/workspaces/structure"
        },
        {
          name: "Sharing",
          path: "/tools/api/insomnia/basics/workspaces/sharing"
        }
      ]
    },
    {
      name: "Debugging",
      subpages: [
        {
          name: "Timeline & Console",
          path: "/tools/api/insomnia/basics/debugging/timeline-console"
        },
        {
          name: "Troubleshoot",
          path: "/tools/api/insomnia/basics/debugging/troubleshoot"
        }
      ]
    }
  ]
};

export default Basics;