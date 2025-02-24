import { Subpage } from "@/Navigation/NavigationTypes";

const RNPerformanceNavigation: Subpage = {
  name: "Performance & Optimization",
  subpages: [
    {
      name: "Optimizing Performance",
      path: "/react/native/performanceandoptimization/optimizingperformance"
    }, // Avoiding re-renders, using FlatList
    {
      name: "Handling Large Lists",
      path: "/react/native/performanceandoptimization/largelists"
    }, // Virtualization & infinite scrolling
    {
      name: "Animations & Gestures",
      path: "/react/native/performanceandoptimization/animationsandgestures"
    }, // React Native Reanimated, Gesture Handler
  ],
};

export default RNPerformanceNavigation;
