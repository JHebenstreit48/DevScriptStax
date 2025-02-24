import { Subpage } from "@/Navigation/NavigationTypes";

const RNGettingStartedNavigation: Subpage = {
  name: "Getting Started",
  subpages: [
    {
      name: "Introduction",
      path: "/react/native/gettingstarted/intro"
    }, // What is React Native? Use cases & benefits
    {
      name: "Setup & Installation",
      path: "/react/native/gettingstarted/setup"
    }, // Installing React Native CLI & Expo
    {
      name: "Folder Structure & Best Practices",
      path: "/react/native/gettingstarted/project-structure"
    }, // Organizing files & folders in React Native projects
  ],
};

export default RNGettingStartedNavigation;
