import { Subpage } from "@/Navigation/NavigationTypes";

const ReactBasicsNavigation: Subpage = {
  name: "React Basics",
  subpages: [
    {
      name: "Getting Started",
      subpages: [
        { name: "Introduction", path: "/react/basics/introduction" }, // What is React? Why use it?
        { name: "Setup & Installation", path: "/react/basics/setup" }, // Installing Node.js, Create React App, Vite
        { name: "Project Structure", path: "/react/basics/projectstructure" }, // Files & folders in a React project
      ],
    },
    {
      name: "Fundamentals",
      subpages: [
        { name: "JSX & Rendering", path: "/react/basics/jsx" }, // JSX syntax, expressions, rendering elements
        { name: "Components", path: "/react/basics/components" }, // Function vs. class components
        { name: "Props & State", path: "/react/basics/props-state" }, // Data flow & state management basics
        { name: "Event Handling", path: "/react/basics/event-handling" }, // Handling user interactions
      ],
    },
    {
      name: "Component Behavior",
      subpages: [
        { name: "Lifecycle Methods", path: "/react/basics/lifecyclemethods" }, // Mounting, updating, unmounting
        { name: "Hooks Overview", path: "/react/basics/hooks-overview" }, // Intro to hooks & replacing class methods
        { name: "useState & useEffect", path: "/react/basics/hooks-usestate-useeffect" }, // State & side effects
        { name: "Custom Hooks", path: "/react/basics/hooks-custom" }, // Creating reusable logic
      ],
    },
    {
      name: "Working with Data",
      subpages: [
        { name: "Fetching Data", path: "/react/basics/fetching-data" }, // Using fetch & axios
        { name: "Forms & Inputs", path: "/react/basics/forms" }, // Controlled vs uncontrolled inputs
        { name: "Context API", path: "/react/basics/context-api" }, // Managing global state
      ],
    },
    {
      name: "Advanced Topics",
      subpages: [
        { name: "React Router", path: "/react/basics/react-router" }, // Client-side navigation
        { name: "Performance Optimization", path: "/react/basics/performance" }, // Memoization, lazy loading
        { name: "Error Handling", path: "/react/basics/error-handling" }, // Error boundaries & fallback UI
      ],
    },
  ],
};

export default ReactBasicsNavigation;
