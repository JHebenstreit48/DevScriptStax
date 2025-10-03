import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Introduction",
          path: "/firefox-devtools/basics/fundamentals/introduction"
        },
        {
          name: "Setup & Shortcuts",
          path: "/firefox-devtools/basics/fundamentals/setup-and-shortcuts"
        }
      ]
    },
    {
      name: "Panels",
      subpages: [
        {
          name: "Inspector & Layout",
          path: "/firefox-devtools/basics/panels/inspector-and-layout"
        },
        {
          name: "Console & Debugger",
          path: "/firefox-devtools/basics/panels/console-and-debugger"
        }
      ]
    },
    {
      name: "Network",
      subpages: [
        {
          name: "Requests & Throttling",
          path: "/firefox-devtools/basics/network/requests-and-throttling"
        },
        {
          name: "Caching & Storage",
          path: "/firefox-devtools/basics/network/caching-and-storage"
        }
      ]
    },
    {
      name: "Layout Tools",
      subpages: [
        {
          name: "Grid Inspector",
          path: "/firefox-devtools/basics/layout-tools/grid-inspector"
        },
        {
          name: "Flexbox Inspector",
          path: "/firefox-devtools/basics/layout-tools/flexbox-inspector"
        }
      ]
    }
  ]
};

export default Basics;