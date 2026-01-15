import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Performance",
      subpages: [
        {
          name: "Timelines & Records",
          path: "/safari-web-inspector/advanced/performance/timelines-and-records"
        },
        {
          name: "Frames & Jank",
          path: "/safari-web-inspector/advanced/performance/frames-and-jank"
        }
      ]
    },
    {
      name: "Memory",
      subpages: [
        {
          name: "Allocations & Leaks",
          path: "/safari-web-inspector/advanced/memory/allocations-and-leaks"
        },
        {
          name: "JS Samples",
          path: "/safari-web-inspector/advanced/memory/js-samples"
        }
      ]
    },
    {
      name: "Network & Coverage",
      subpages: [
        {
          name: "Network Conditions",
          path: "/safari-web-inspector/advanced/network-and-coverage/network-conditions"
        },
        {
          name: "Coverage & Unused Code",
          path: "/safari-web-inspector/advanced/network-and-coverage/coverage-and-unused-code"
        }
      ]
    },
    {
      name: "Remote & Automation",
      subpages: [
        {
          name: "Remote Debugging iOS",
          path: "/safari-web-inspector/advanced/remote-and-automation/remote-debugging-ios"
        },
        {
          name: "WebKit Inspector Extras",
          path: "/safari-web-inspector/advanced/remote-and-automation/webkit-inspector-extras"
        }
      ]
    }
  ]
};

export default Advanced;