import { Subpage } from "@/Navigation/NavigationTypes";

const RNWorkingWithNativeFeaturesNavigation: Subpage = {
  name: "Working with Native Features",
  subpages: [
    {
      name: "Accessing Device APIs",
      path: "/react/native/device-apis"
    }, // Camera, GPS, Sensors, etc.
    {
      name: "Handling Permissions",
      path: "/react/native/permissions"
    }, // Managing iOS & Android permissions
    {
      name: "Using Native Modules",
      path: "/react/native/native-modules"
    }, // Writing custom modules in Swift/Kotlin
  ],
};

export default RNWorkingWithNativeFeaturesNavigation;
