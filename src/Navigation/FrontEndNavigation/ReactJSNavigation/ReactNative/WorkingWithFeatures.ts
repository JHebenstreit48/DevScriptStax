import { Subpage } from "@/Navigation/NavigationTypes";

const RNWorkingWithNativeFeaturesNavigation: Subpage = {
  name: "Working with Native Features",
  subpages: [
    {
      name: "Basics",
      subpages: [
        {
          name: "Accessing Device APIs",
          path: "/react/native/features/deviceapis"
        },
        {
          name: "Handling Permissions",
          path: "/react/native/features/permissions"
        },
        {
          name: "Using Native Modules",
          path: "/react/native/features/nativemodules"
        }
      ]
    },
    {
      name: "Advanced Concepts",
      subpages: [
        {
          name: "Deep Integration with Native Code",
          path: "/react/native/features/advanced/nativeintegration"
        }
      ]
    },
    {
      name: "Best Practices",
      subpages: [
        {
          name: "Best Practices for Handling Native Features",
          path: "/react/native/features/best-practices"
        }
      ]
    }
  ],
};

export default RNWorkingWithNativeFeaturesNavigation;
