import { Subpage } from "@/Navigation/NavigationTypes";

const RNGettingStartedNavigation: Subpage = {
  name: "Getting Started",
  subpages: [
    {
      name: "Introduction",
      path: "/react/native/introduction"
    }, // What is React Native? Use cases & benefits
    {
      name: "Setup & Installation",
      path: "/react/native/setup"
    }, // Installing React Native CLI & Expo
    {
      name: "Project Structure",
      path: "/react/native/project-structure"
    }, // Organizing files & folders
  ],
};

export default RNGettingStartedNavigation;
