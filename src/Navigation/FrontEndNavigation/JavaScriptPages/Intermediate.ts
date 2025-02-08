import { Subpage } from "@/Navigation/NavigationTypes";

const JavaScriptIntermediateNavigation: Subpage = {
  name: "JavaScript Intermediate",
  subpages: [
    { name: "DOM Manipulation", path: "/javascript/intermediate/dom" }, // Document Object Model
    { name: "Events", path: "/javascript/intermediate/events" }, // Event handling
    { name: "ES6 Features", path: "/javascript/intermediate/es6" }, // Arrow functions, classes, etc.
    { name: "Promises & Async", path: "/javascript/intermediate/promises" }, // Promises and async/await
    { name: "Error Handling", path: "/javascript/intermediate/errors" }, // Try-catch, error types
  ],
};

export default JavaScriptIntermediateNavigation;
