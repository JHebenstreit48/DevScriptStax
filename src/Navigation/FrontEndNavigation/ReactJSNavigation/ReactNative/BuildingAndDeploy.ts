import { Subpage } from "@/Navigation/NavigationTypes";

const RNBuildingNavigation: Subpage = {
  name: "Building & Deployment",
  subpages: [
    {
      name: "Debugging & Testing",
      path: "/react/native/debugging-testing"
    }, // Debugging tools & Jest testing
    {
      name: "Building for iOS & Android",
      path: "/react/native/building-ios-android"
    }, // Generating APKs & iOS builds
    {
      name: "Publishing Apps",
      path: "/react/native/publishing"
    }, // Play Store, App Store submission process
  ],
};

export default RNBuildingNavigation;
