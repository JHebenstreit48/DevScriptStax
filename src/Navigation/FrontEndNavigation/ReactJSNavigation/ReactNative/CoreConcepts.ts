import { Subpage } from "@/Navigation/NavigationTypes";

const RNCoreConceptsNavigation: Subpage = {
  name: "Core Concepts",
  subpages: [
    {
      name: "Components & Styling",
      path: "/react/native/components-styling"
    }, // Core components & StyleSheet API
    {
      name: "Props & State",
      path: "/react/native/props-state"
    }, // Managing component state & passing props
    {
      name: "Event Handling",
      path: "/react/native/event-handling"
    }, // Handling touch gestures & user input
  ],
};

export default RNCoreConceptsNavigation;
