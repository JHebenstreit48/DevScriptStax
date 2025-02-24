import { Subpage } from "@/Navigation/NavigationTypes";

const RNBuildingNavigation: Subpage = {
  name: "Building & Deployment",
  subpages: [
    {
      name: "Debugging & Testing",
      path: "/react/native/buildinganddeploy/debuggingtesting"
    }, // Debugging tools & Jest testing
    {
      name: "Building for iOS & Android",
      path: "/react/native/buildinganddeploy/buildingiosandroid"
    }, // Generating APKs & iOS builds
    {
      name: "Publishing Apps",
      path: "/react/native/buildinganddeploy/publishingapps"
    }, // Play Store, App Store submission process
  ],
};

export default RNBuildingNavigation;
