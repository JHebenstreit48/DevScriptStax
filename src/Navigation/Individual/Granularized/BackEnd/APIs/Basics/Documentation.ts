import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const Documentation: Subpage = {
  name: "Documentation",
  subpages: [
    {
      name: "Tools",
      path: "/apis/intro/documentation/tools",
    },
    {
      name: "Best Practices",
      path: "/apis/intro/documentation/best-practices",
    }, // Merged multiple doc-related topics
    {
      name: "Examples",
      path: "/apis/intro/documentation/examples",
    },
  ],
};

export default Documentation;