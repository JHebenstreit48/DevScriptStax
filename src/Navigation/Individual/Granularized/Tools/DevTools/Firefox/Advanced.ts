import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Performance",
      subpages: [
        {
          name: "Profiler (Record & Analyze)",
          path: "/firefox-devtools/advanced/performance/profiler-record-and-analyze"
        },
        {
          name: "Frames & Markers",
          path: "/firefox-devtools/advanced/performance/frames-and-markers"
        }
      ]
    },
    {
      name: "Memory",
      subpages: [
        {
          name: "Heap Snapshots",
          path: "/firefox-devtools/advanced/memory/heap-snapshots"
        },
        {
          name: "Allocation Tracking",
          path: "/firefox-devtools/advanced/memory/allocation-tracking"
        }
      ]
    },
    {
      name: "CSS & A11y",
      subpages: [
        {
          name: "Shapes & Fonts",
          path: "/firefox-devtools/advanced/css-and-a11y/shapes-and-fonts"
        },
        {
          name: "Accessibility Inspector",
          path: "/firefox-devtools/advanced/css-and-a11y/accessibility-inspector"
        }
      ]
    },
    {
      name: "Remote & Add-ons",
      subpages: [
        {
          name: "about:debugging (Remote Targets)",
          path: "/firefox-devtools/advanced/remote-and-add-ons/about-debugging-remote-targets"
        },
        {
          name: "Toolbox Add-ons",
          path: "/firefox-devtools/advanced/remote-and-add-ons/toolbox-add-ons"
        }
      ]
    }
  ]
};

export default Advanced;