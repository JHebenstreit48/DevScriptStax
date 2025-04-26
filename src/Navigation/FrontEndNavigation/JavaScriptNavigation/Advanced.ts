import { Subpage } from "@/Navigation/NavigationTypes";

const JavaScriptAdvancedNavigation: Subpage = {
  name: "JavaScript Advanced",
  subpages: [
    {
      name: "Advanced Functions",
      subpages: [
        {
          name: "Closures",
          path: "/javascript/advanced/functions/closures"
        },
        {
          name: "Callbacks",
          path: "/javascript/advanced/functions/callbacks"
        }
      ]
    },
    {
      name: "Object-Oriented JavaScript",
      subpages: [
        {
          name: "Prototype and Inheritance",
          path: "/javascript/advanced/oop/prototypeinheritance"
        },
        {
          name: "Classes (ES6+)",
          path: "/javascript/advanced/oop/classes"
        }
      ]
    },
    {
      name: "Modules",
      subpages: [
        {
          name: "Import and Export",
          path: "/javascript/advanced/modules/importexport"
        },
        {
          name: "Dynamic Imports",
          path: "/javascript/advanced/modules/dynamicimports"
        }
      ]
    },
    {
      name: "Performance and Memory",
      subpages: [
        {
          name: "Performance Optimization",
          path: "/javascript/advanced/performance/optimization"
        },
        {
          name: "Memory Management",
          path: "/javascript/advanced/performance/memory"
        }
      ]
    }
  ]
};

export default JavaScriptAdvancedNavigation;
