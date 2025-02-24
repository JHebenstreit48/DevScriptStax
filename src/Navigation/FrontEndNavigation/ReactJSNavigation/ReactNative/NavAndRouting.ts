import { Subpage } from "@/Navigation/NavigationTypes";

const RNNavigationAndRoutingNavigation: Subpage = {
  name: "Navigation & Routing",
  subpages: [
    {
      name: "Basics",
      subpages: [
        {
          name: "Stack Navigation",
          path: "/react/native/navandrouting/basics/stack"
        },
        {
          name: "Tab Navigation",
          path: "/react/native/navandrouting/basics/tab"
        },
        {
          name: "Drawer Navigation",
          path: "/react/native/navandrouting/basics/drawer"
        }
      ]
    },
    {
      name: "Advanced Concepts",
      subpages: [
        {
          name: "Dynamic Navigation & Conditional Routes",
          path: "/react/native/navandrouting/advanced/dynamicroutes"
        },
        {
          name: "Advanced Linking Strategies",
          path: "/react/native/navandrouting/advanced/linkingstrategies"
        },
        {
          name: "Optimizing Navigation Performance",
          path: "/react/native/navandrouting/advanced/performance"
        }
      ]
    },
    {
      name: "Best Practices",
      subpages: [
        {
          name: "Best Practices for Routing in Large Apps",
          path: "/react/native/navandrouting/best-practices/largeapps"
        },
        {
          name: "Avoiding Navigation Bugs & Pitfalls",
          path: "/react/native/navandrouting/best-practices/navigationbugs"
        },
        {
          name: "Consistent Navigation UX Patterns",
          path: "/react/native/navandrouting/best-practices/navigationux"
        }
      ]
    }
  ],
};

export default RNNavigationAndRoutingNavigation;
