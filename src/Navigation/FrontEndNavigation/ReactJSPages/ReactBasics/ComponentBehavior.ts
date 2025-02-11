import { Subpage } from "@/Navigation/NavigationTypes";

const ComponentBehaviorNavigation: Subpage = {
  name: "Component Behavior",
  subpages: [
    {
      name: "Lifecycle Methods",
      path: "/react/basics/componentbehavior/lifecyclemethods"
    }, // Mounting, updating, unmounting
    {
      name: "Hooks Overview",
      path: "/react/basics/componentbehavior/hooks-overview"
    }, // Intro to hooks & replacing class methods
    {
      name: "useState & useEffect",
      path: "/react/basics/componentbehavior/hooks-usestate-useeffect"
    }, // State & side effects
    {
      name: "Custom Hooks",
      path: "/react/basics/componentbehavior/hooks-custom"
    }, // Creating reusable logic
  ],
};

export default ComponentBehaviorNavigation;
