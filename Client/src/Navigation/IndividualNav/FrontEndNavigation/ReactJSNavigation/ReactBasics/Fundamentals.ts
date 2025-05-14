import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const FundamentalsNavigation: Subpage = {
  name: "React Fundamentals",
  subpages: [
    {
      name: "JSX & Rendering",
      path: "/react/basics/fundamentals/jsx"
    }, // JSX syntax, expressions, rendering elements
    {
      name: "Components",
      path: "/react/basics/fundamentals/components"
    }, // Function vs. class components
    {
      name: "Props & State",
      path: "/react/basics/fundamentals/props-state"
    }, // Data flow & state management basics
    {
      name: "Event Handling",
      path: "/react/basics/fundamentals/event-handling"
    }, // Handling user interactions
  ],
};

export default FundamentalsNavigation;
