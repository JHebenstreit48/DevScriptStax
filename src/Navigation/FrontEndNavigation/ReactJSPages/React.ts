import { Subpage } from "@/Navigation/NavigationTypes";

const ReactNavigation: Subpage = {
  name: "React",
  subpages: [
    {
      name: "Basics",
      subpages: [
        { name: "Intro & Setup", path: "/react/basics/introandsetup" }, // Combined
        { name: "JSX", path: "/react/basics/jsx" },
        { name: "Components", path: "/react/basics/components" },
        { name: "Props", path: "/react/basics/props" },
        { name: "State", path: "/react/basics/state" },
        { name: "Lifecycle Methods", path: "/react/basics/lifecyclemethods" },
      ],
    },
    {
      name: "React + TypeScript",
      subpages: [
        { name: "Intro & Basics", path: "/react/typescript/intro" }, // Combined
        { name: "Props", path: "/react/typescript/props" },
        { name: "State Management", path: "/react/typescript/state" },
        { name: "Context API", path: "/react/typescript/context" },
      ],
    },
    {
      name: "Full Stack React",
      subpages: [
        { name: "Express Integration", path: "/react/fullstack/express" }, // Simplified path
        { name: "MongoDB Integration", path: "/react/fullstack/mongodb" },
        { name: "Deployment", path: "/react/fullstack/deployment" }, // Shortened name
      ],
    },
    {
      name: "React Native",
      subpages: [
        { name: "Intro & Setup", path: "/react/native/introandsetup" }, // Combined
        { name: "Components", path: "/react/native/components" },
        { name: "Navigation", path: "/react/native/navigation" },
      ],
    },
  ],
};

export default ReactNavigation;
