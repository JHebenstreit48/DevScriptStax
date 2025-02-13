import { Subpage } from "@/Navigation/NavigationTypes";

const FSLargeScaleAppsNavigation: Subpage = {
  name: "Handling Large-Scale Applications",
  subpages: [
    {
      name: "Optimizing Large Data Sets",
      path: "/react/fullstack/large-data"
    }, // Virtualization, pagination, infinite scrolling
    {
      name: "WebSockets & Real-Time Updates",
      path: "/react/fullstack/websockets"
    }, // Real-time data handling
    {
      name: "Lazy Loading & Code Splitting",
      path: "/react/fullstack/lazy-loading"
    }, // Performance optimizations
  ],
};

export default FSLargeScaleAppsNavigation;
