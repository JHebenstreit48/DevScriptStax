import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Introduction",
          path: "/chrome-devtools/basics/fundamentals/introduction"
        },
        {
          name: "Setup & Shortcuts",
          path: "/chrome-devtools/basics/fundamentals/setup-and-shortcuts"
        }
      ]
    },
    {
      name: "Panels",
      subpages: [
        {
          name: "Elements & Styles",
          path: "/chrome-devtools/basics/panels/elements-and-styles"
        },
        {
          name: "Console & Sources",
          path: "/chrome-devtools/basics/panels/console-and-sources"
        }
      ]
    },
    {
      name: "Network",
      subpages: [
        {
          name: "Requests & Throttling",
          path: "/chrome-devtools/basics/network/requests-and-throttling"
        },
        {
          name: "Caching & Storage",
          path: "/chrome-devtools/basics/network/caching-and-storage"
        }
      ]
    }
  ]
};

export default Basics;