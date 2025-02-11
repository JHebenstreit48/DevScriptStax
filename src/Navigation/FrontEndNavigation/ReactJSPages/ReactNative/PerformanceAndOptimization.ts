import { Subpage } from "@/Navigation/NavigationTypes";

const RNPerformanceNavigation: Subpage = {
  name: "Performance & Optimization",
  subpages: [
    {
      name: "Optimizing Performance",
      path: "/react/native/performance"
    }, // Avoiding re-renders, using FlatList
    {
      name: "Handling Large Lists",
      path: "/react/native/large-lists"
    }, // Virtualization & infinite scrolling
    {
      name: "Animations & Gestures",
      path: "/react/native/animations-gestures"
    }, // React Native Reanimated, Gesture Handler
  ],
};

export default RNPerformanceNavigation;
