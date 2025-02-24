import { Subpage } from "@/Navigation/NavigationTypes";

const RNPerformanceNavigation: Subpage = {
  name: "Performance & Optimization",
  subpages: [
    {
      name: "Optimizing Performance",
      path: "/react/native/performanceandoptimization/optimizingperformance"
    },
    {
      name: "Handling Large Lists",
      path: "/react/native/performanceandoptimization/largelists"
    },
    {
      name: "Animations & Gestures",
      path: "/react/native/performanceandoptimization/animationsandgestures"
    },
    {
      name: "Advanced Concepts",
      subpages: [
        {
          name: "Advanced Performance Profiling",
          path: "/react/native/performanceandoptimization/advanced/profiling"
        }
      ]
    },
    {
      name: "Best Practices",
      subpages: [
        {
          name: "Performance Optimization Best Practices",
          path: "/react/native/performanceandoptimization/best-practices"
        }
      ]
    }
  ],
};

export default RNPerformanceNavigation;
