import { Subpage } from "@/Navigation/NavigationTypes";

const RNBuildingNavigation: Subpage = {
  name: "Building & Deployment",
  subpages: [
    {
      name: "Basics",
      subpages: [
        {
          name: "Debugging & Testing",
          path: "/react/native/buildinganddeploy/debuggingtesting"
        },
        {
          name: "Building for iOS & Android",
          path: "/react/native/buildinganddeploy/buildingiosandroid"
        },
        {
          name: "Publishing Apps",
          path: "/react/native/buildinganddeploy/publishingapps"
        }
      ]
    },
    {
      name: "Best Practices",
      subpages: [
        {
          name: "Build & Deployment Best Practices",
          path: "/react/native/buildinganddeploy/best-practices"
        }
      ]
    }
  ],
};

export default RNBuildingNavigation;
