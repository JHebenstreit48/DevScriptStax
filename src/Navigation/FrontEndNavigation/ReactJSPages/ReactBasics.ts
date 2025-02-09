import { Subpage } from "@/Navigation/NavigationTypes";

const ReactNavigation: Subpage = {
  name: "React Basics",
  subpages: [
    { name: "Intro & Setup", path: "/react/basics/introandsetup" }, // Combined
    { name: "JSX", path: "/react/basics/jsx" },
    { name: "Components", path: "/react/basics/components" },
    { name: "Props", path: "/react/basics/props" },
    { name: "State", path: "/react/basics/state" },
    { name: "Lifecycle Methods", path: "/react/basics/lifecyclemethods" },
  ],
};

export default ReactNavigation;
