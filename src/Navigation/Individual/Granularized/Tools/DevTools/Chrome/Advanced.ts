import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Performance",
      subpages: [
        {
          name: "Record & Analyze",
          path: "/chrome-devtools/advanced/performance/record-and-analyze"
        },
        {
          name: "Frames & Jank",
          path: "/chrome-devtools/advanced/performance/frames-and-jank"
        }
      ]
    },
    {
      name: "Memory",
      subpages: [
        {
          name: "Heap & Leaks",
          path: "/chrome-devtools/advanced/memory/heap-and-leaks"
        },
        {
          name: "Allocation Timeline",
          path: "/chrome-devtools/advanced/memory/allocation-timeline"
        }
      ]
    },
    {
      name: "Coverage & Audits",
      subpages: [
        {
          name: "CSS/JS Coverage",
          path: "/chrome-devtools/advanced/coverage-and-audits/css-js-coverage"
        },
        {
          name: "Lighthouse Integration",
          path: "/chrome-devtools/advanced/coverage-and-audits/lighthouse-integration"
        }
      ]
    },
    {
      name: "Debug Workflow",
      subpages: [
        {
          name: "Blackboxing & Ignore",
          path: "/chrome-devtools/advanced/debug-workflow/blackboxing-and-ignore"
        },
        {
          name: "Breakpoints & Watch",
          path: "/chrome-devtools/advanced/debug-workflow/breakpoints-and-watch"
        }
      ]
    }
  ]
};

export default Advanced;