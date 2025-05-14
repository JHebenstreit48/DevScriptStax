import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const HTMLNavigation: Subpage = {
  name: "HTML",
  subpages: [
    {
      name: "Introduction",
      path: "/html/basics/introduction", // Overview of HTML, history, and purpose
    },
    {
      name: "Elements & Tags",
      path: "/html/basics/elements", // Explains basic HTML elements and structure
    },
    {
      name: "Attributes",
      path: "/html/basics/attributes", // How to use and customize attributes
    },
    {
      name: "Forms",
      path: "/html/basics/forms", // Basics of form creation and input types
    },
    {
      name: "Semantic HTML",
      path: "/html/basics/semantic", // Using semantic elements like <header>, <footer>
    },
  ],
};

export default HTMLNavigation;
