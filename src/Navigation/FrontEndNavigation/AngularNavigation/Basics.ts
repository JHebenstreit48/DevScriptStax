import { Subpage } from "@/Navigation/NavigationTypes";

const AngularBasicsNavigation: Subpage = {
  name: "Angular Basics",
  subpages: [
    {
      name: "Getting Started",
      subpages: [
        { name: "Introduction to Angular", path: "/angular/basics/intro" }, // What is Angular, why use it?
        { name: "Scaffolding a Project", path: "/angular/basics/scaffolding-project" }, // Using CLI, directory structure, base files
        { name: "Running & Serving an App", path: "/angular/basics/running-serving" }, // ng serve, live reloading, debugging basics
        { name: "Understanding Angular CLI", path: "/angular/basics/angular-cli" }, // CLI commands and best practices
      ],
    },
    {
      name: "Project Structure",
      subpages: [
        { name: "Folder & File Structure", path: "/angular/basics/projectstructure" }, // Organizing Angular projects
        { name: "Angular Configuration Files", path: "/angular/basics/config-files" }, // angular.json, tsconfig.json
      ],
    },
  ],
};

export default AngularBasicsNavigation;
