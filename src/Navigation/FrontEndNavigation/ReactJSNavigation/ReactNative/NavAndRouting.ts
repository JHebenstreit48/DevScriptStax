import { Subpage } from "@/Navigation/NavigationTypes";

const RNNavigationAndRoutingNavigation: Subpage = {
  name: "Navigation & Routing",
  subpages: [
    {
      name: "React Navigation Basics",
      path: "/react/native/navandrouting/navigationbasics"
    }, // Stack, Tab, Drawer navigation
    {
      name: "Navigation Params",
      path: "/react/native/navandrouting/navigationparams"
    }, // Passing data between screens
    {
      name: "Deep Linking",
      path: "/react/native/navandrouting/deeplinking"
    }, // Handling deep links & universal links
  ],
};

export default RNNavigationAndRoutingNavigation;
