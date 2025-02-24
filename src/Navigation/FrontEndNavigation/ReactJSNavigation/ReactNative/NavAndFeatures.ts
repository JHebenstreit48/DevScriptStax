import { Subpage } from "@/Navigation/NavigationTypes";

const RNNavAndFeaturesNavigation: Subpage = {
  name: "Navigation & Features",
  subpages: [
    {
      name: "Navigation",
      subpages: [
        {
          name: "Basics",
          subpages: [
            { name: "Stack Navigation", path: "/react/native/navandrouting/basics/stack" },
            { name: "Tab Navigation", path: "/react/native/navandrouting/basics/tab" },
            { name: "Drawer Navigation", path: "/react/native/navandrouting/basics/drawer" }
          ],
        },
        {
          name: "Advanced Concepts",
          subpages: [
            { name: "Dynamic Navigation & Conditional Routes", path: "/react/native/navandrouting/advanced/dynamicroutes" },
            { name: "Advanced Linking Strategies", path: "/react/native/navandrouting/advanced/linkingstrategies" },
            { name: "Optimizing Navigation Performance", path: "/react/native/navandrouting/advanced/performance" }
          ],
        },
        {
          name: "Best Practices",
          subpages: [
            { name: "Best Practices for Routing in Large Apps", path: "/react/native/navandrouting/best-practices/largeapps" },
            { name: "Avoiding Navigation Bugs & Pitfalls", path: "/react/native/navandrouting/best-practices/navigationbugs" },
            { name: "Consistent Navigation UX Patterns", path: "/react/native/navandrouting/best-practices/navigationux" }
          ],
        }
      ],
    },
    {
      name: "Native Features",
      subpages: [
        {
          name: "Basics",
          subpages: [
            { name: "Accessing Device APIs", path: "/react/native/features/deviceapis" },
            { name: "Handling Permissions", path: "/react/native/features/permissions" },
            { name: "Using Native Modules", path: "/react/native/features/nativemodules" }
          ],
        },
        {
          name: "Advanced Concepts",
          subpages: [
            { name: "Deep Integration with Native Code", path: "/react/native/features/advanced/nativeintegration" },
            { name: "Bridging Custom Native Modules", path: "/react/native/features/advanced/custommodules" }
          ],
        },
        {
          name: "Best Practices",
          subpages: [
            { name: "Best Practices for Handling Native Features", path: "/react/native/features/best-practices" },
            { name: "Avoiding Common Native Feature Issues", path: "/react/native/features/best-practices/issues" }
          ],
        }
      ],
    }
  ],
};

export default RNNavAndFeaturesNavigation;
