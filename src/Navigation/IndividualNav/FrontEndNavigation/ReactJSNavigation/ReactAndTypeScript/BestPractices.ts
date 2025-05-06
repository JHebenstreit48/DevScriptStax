import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const ReactAndTypeScriptNavigation: Subpage = {
  name: "React and TypeScript",
  subpages: [
    {
      name: "Getting Started",
      subpages: [
        { name: "Why TypeScript?", path: "/react/typescript/why-typescript" }, // Benefits & comparisons with JS
        { name: "Setup & Configuration", path: "/react/typescript/setup" }, // Installing TypeScript, tsconfig.json
        { name: "Basic Types", path: "/react/typescript/basic-types" }, // Strings, numbers, arrays, objects
      ],
    },
    {
      name: "TypeScript in React",
      subpages: [
        { name: "Typing Props", path: "/react/typescript/props" }, // Defining interfaces, optional props
        { name: "Typing State", path: "/react/typescript/state" }, // useState, type inference, unions
        { name: "Typing Events", path: "/react/typescript/event-handling" }, // Form events, keyboard/mouse events
        { name: "Typing Components", path: "/react/typescript/components" }, // Function vs. class components
      ],
    },
    {
      name: "Advanced TypeScript Concepts",
      subpages: [
        { name: "Generics in React", path: "/react/typescript/generics" }, // Making components reusable
        { name: "Intersection & Union Types", path: "/react/typescript/intersection-union" }, // Combining types
        { name: "Type Guards & Assertions", path: "/react/typescript/type-guards" }, // Narrowing types dynamically
        { name: "Using Enums", path: "/react/typescript/enums" }, // Enum use cases in React
      ],
    },
    {
      name: "State Management with TypeScript",
      subpages: [
        { name: "Context API", path: "/react/typescript/context" }, // Using createContext & useContext
        { name: "React Reducers", path: "/react/typescript/reducers" }, // useReducer & typing actions
        { name: "Zustand & Redux", path: "/react/typescript/state-libraries" }, // Comparing state management options
      ],
    },
    {
      name: "Best Practices",
      subpages: [
        { name: "Code Organization", path: "/react/typescript/code-organization" }, // Structuring TypeScript projects
        { name: "Strict Mode & Linting", path: "/react/typescript/strict-mode" }, // Enforcing type safety
        { name: "Common Pitfalls", path: "/react/typescript/common-pitfalls" }, // Avoiding common TypeScript mistakes
      ],
    },
  ],
};

export default ReactAndTypeScriptNavigation;
