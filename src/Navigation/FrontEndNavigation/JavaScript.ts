import { Subpage } from "@/Navigation/NavigationTypes";

const JavaScriptNavigation: Subpage = {
  name: "JavaScript",
  subpages: [
    {
      name: "Basics",
      subpages: [
        { name: "Overview", path: "/javascript/basics/overview" }, // Introduction and history
        { name: "Syntax", path: "/javascript/basics/syntax" }, // Basic structure
        { name: "Data Types", path: "/javascript/basics/datatypes" }, // Strings, numbers, objects, etc.
        { name: "Variables", path: "/javascript/basics/variables" }, // let, const, var
        { name: "Functions", path: "/javascript/basics/functions" }, // Function declarations and expressions
      ],
    },
    {
      name: "Intermediate",
      subpages: [
        { name: "DOM Manipulation", path: "/javascript/intermediate/dom" }, // Document Object Model
        { name: "Events", path: "/javascript/intermediate/events" }, // Event handling
        { name: "ES6 Features", path: "/javascript/intermediate/es6" }, // Arrow functions, classes, etc.
        { name: "Promises & Async", path: "/javascript/intermediate/promises" }, // Promises and async/await
        { name: "Error Handling", path: "/javascript/intermediate/errors" }, // Try-catch, error types
      ],
    },
    {
      name: "Advanced",
      subpages: [
        { name: "Closures", path: "/javascript/advanced/closures" },
        { name: "Prototype & Inheritance", path: "/javascript/advanced/prototype" },
        { name: "Modules", path: "/javascript/advanced/modules" }, // Import/export
        { name: "Performance Optimization", path: "/javascript/advanced/performance" },
        { name: "Memory Management", path: "/javascript/advanced/memory" },
      ],
    },
    {
      name: "Best Practices",
      subpages: [
        { name: "Coding Standards", path: "/javascript/best-practices/standards" },
        { name: "Debugging", path: "/javascript/best-practices/debugging" }, // Debugging tips
        { name: "Security", path: "/javascript/best-practices/security" }, // Preventing XSS, CSRF, etc.
        { name: "Scalability", path: "/javascript/best-practices/scalability" }, // Writing scalable JS
      ],
    },
  ],
};

export default JavaScriptNavigation;
