import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Introduction",
          path: "/safari-web-inspector/basics/fundamentals/introduction"
        },
        {
          name: "Enable & Setup",
          path: "/safari-web-inspector/basics/fundamentals/enable-and-setup"
        }
      ]
    },
    {
      name: "Panels",
      subpages: [
        {
          name: "Elements & Styles",
          path: "/safari-web-inspector/basics/panels/elements-and-styles"
        },
        {
          name: "Console & Sources",
          path: "/safari-web-inspector/basics/panels/console-and-sources"
        }
      ]
    },
    {
      name: "Network",
      subpages: [
        {
          name: "Requests & Throttling",
          path: "/safari-web-inspector/basics/network/requests-and-throttling"
        },
        {
          name: "Caching & Storage",
          path: "/safari-web-inspector/basics/network/caching-and-storage"
        }
      ]
    },
    {
      name: "Remote iOS",
      subpages: [
        {
          name: "Connect to iOS",
          path: "/safari-web-inspector/basics/remote-ios/connect-to-ios"
        },
        {
          name: "WKWebView Tips",
          path: "/safari-web-inspector/basics/remote-ios/wkwebview-tips"
        }
      ]
    }
  ]
};

export default Basics;