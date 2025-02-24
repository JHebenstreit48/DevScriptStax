import { Subpage } from "@/Navigation/NavigationTypes";

const RNCoreConceptsNavigation: Subpage = {
  name: "Core Concepts",
  subpages: [
    {
      name: "Core Components & Styling",
      path: "/react/native/coreconcepts/componentsandstyling"
    }, // Core components & StyleSheet API
    {
      name: "Managing State & Props",
      path: "/react/native/coreconcepts/propsandstate"
    }, // Managing component state & passing props
    {
      name: "Event Handling",
      path: "/react/native/coreconcepts/eventhandling"
    }, // Handling touch gestures & user input
  ],
};

export default RNCoreConceptsNavigation;
