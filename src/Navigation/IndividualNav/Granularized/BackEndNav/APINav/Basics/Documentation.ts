import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const Documentation: Subpage = {
  name: "Documentation",
  subpages: [
    {
      name: "Tools for API Documentation",
      path: "/apis/intro/documentation/tools",
    },
    {
      name: "Best Practices for API Documentation",
      path: "/apis/intro/documentation/best-practices",
    }, // Merged multiple doc-related topics
    {
      name: "Examples of Good API Docs",
      path: "/apis/intro/documentation/examples",
    },
  ],
};

export default Documentation;