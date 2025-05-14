import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const ReduxNavigation: Subpage = {
  name: "Redux",
  subpages: [
    {
      name: "Basics",
      subpages: [
        { name: "Overview", path: "/redux/basics/overview" }, // Introduction and what Redux is
        { name: "Core Concepts", path: "/redux/basics/coreconcepts" }, // Actions, Reducers, Store
        { name: "Setup", path: "/redux/basics/setup" }, // Setting up Redux in a project
      ],
    },
    {
      name: "Intermediate",
      subpages: [
        { name: "Middleware", path: "/redux/intermediate/middleware" }, // Redux Thunk, Saga, etc.
        { name: "Asynchronous Actions", path: "/redux/intermediate/async" },
        { name: "DevTools", path: "/redux/intermediate/devtools" }, // Using Redux DevTools
      ],
    },
    {
      name: "Advanced",
      subpages: [
        { name: "Performance Optimization", path: "/redux/advanced/performance" },
        { name: "Code Splitting", path: "/redux/advanced/codesplitting" }, // Dynamically load reducers
        { name: "Custom Middleware", path: "/redux/advanced/custommiddleware" },
      ],
    },
    {
      name: "Best Practices",
      subpages: [
        { name: "Folder Structure", path: "/redux/bestpractices/folderstructure" },
        { name: "Scalability", path: "/redux/bestpractices/scalability" },
      ],
    },
  ],
};

export default ReduxNavigation;
