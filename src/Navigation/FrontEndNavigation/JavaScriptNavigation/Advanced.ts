import { Subpage } from "@/Navigation/NavigationTypes";

const JavaScriptAdvancedNavigation: Subpage = {
  name: "JavaScript Advanced",
  subpages: [
    { name: "Closures", path: "/javascript/advanced/closures" },
    { name: "Prototype & Inheritance", path: "/javascript/advanced/prototype" },
    { name: "Modules", path: "/javascript/advanced/modules" }, // Import/export
    {
      name: "Performance Optimization",
      path: "/javascript/advanced/performance",
    },
    { name: "Memory Management", path: "/javascript/advanced/memory" },
  ],
};

export default JavaScriptAdvancedNavigation;
