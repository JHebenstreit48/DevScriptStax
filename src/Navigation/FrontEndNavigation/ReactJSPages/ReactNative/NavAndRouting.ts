import { Subpage } from "@/Navigation/NavigationTypes";

const RNNavigationAndRoutingNavigation: Subpage = {
  name: "Navigation & Routing",
  subpages: [
    {
      name: "React Navigation Basics",
      path: "/react/native/navigation-basics"
    }, // Stack, Tab, Drawer navigation
    {
      name: "Navigation Params",
      path: "/react/native/navigation-params"
    }, // Passing data between screens
    {
      name: "Deep Linking",
      path: "/react/native/deep-linking"
    }, // Handling deep links & universal links
  ],
};

export default RNNavigationAndRoutingNavigation;
