import { Subpage } from "@/Navigation/NavigationTypes";

const HTMLNavigation: Subpage = {
  name: "HTML",
  subpages: [
    {
      name: "Basics",
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
    },
    {
      name: "Intermediate",
      subpages: [
        {
          name: "Media",
          path: "/html/intermediate/media", // Embedding images, videos, and audio
        },
        {
          name: "Tables",
          path: "/html/intermediate/tables", // Creating and styling tables
        },
      ],
    },
    {
      name: "Advanced",
      subpages: [
        {
          name: "HTML5 Features",
          path: "/html/advanced/html5", // New features introduced in HTML5
        },
        {
          name: "Web Accessibility",
          path: "/html/advanced/accessibility", // Making HTML accessible for all users
        },
        {
          name: "SEO Best Practices",
          path: "/html/advanced/seo", // Techniques to improve search engine rankings
        },
      ],
    },
    {
      name: "Best Practices",
      subpages: [
        {
          name: "Code Standards",
          path: "/html/best-practices/standards", // Clean and maintainable HTML
        },
        {
          name: "Performance Optimization",
          path: "/html/best-practices/performance", // Techniques to enhance performance
        },
      ],
    },
  ],
};

export default HTMLNavigation;
