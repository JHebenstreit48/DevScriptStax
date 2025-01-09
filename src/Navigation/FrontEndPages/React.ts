import { Subpage } from "@/Navigation/FrontEndPages/NavigationTypes";

const ReactNavigation: Subpage = {
  name: "React",
  subpages: [
    {
      name: "React Basics",
      subpages: [
        { name: "Intro and Setup", path: "/react/basics/introandinstall" },
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
        { name: "Introduction", path: "/react/typescript/intro" },
        { name: "Props", path: "/react/typescript/props" },
        { name: "State Management", path: "/react/typescript/state" },
        { name: "Context API", path: "/react/typescript/context" },
      ],
    },
    {
      name: "React Full Stack",
      subpages: [
        {
          name: "Express Integration",
          path: "/react/fullstack/expressintegration",
        },
        { name: "MongoDB Integration", path: "/react/fullstack/mongodb" },
        { name: "Deployment Tips", path: "/react/fullstack/deployment" },
      ],
    },
    {
      name: "React Native",
      subpages: [
        { name: "Intro and Setup", path: "/react/native/introandsetup" },
        { name: "Components", path: "/react/native/components" },
        { name: "Navigation", path: "/react/native/navigation" },
      ],
    },
  ],
};

export default ReactNavigation;
