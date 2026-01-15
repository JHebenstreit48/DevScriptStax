import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Introduction",
          path: "/tools/api/insomnia/basics/fundamentals/introduction"
        },
        {
          name: "Install & Setup",
          path: "/tools/api/insomnia/basics/fundamentals/install-setup"
        },
        {
          name: "UI Tour",
          path: "/tools/api/insomnia/basics/fundamentals/ui-tour"
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