import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const HTMLNavigation: Subpage = {
  name: "HTML Advanced",
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
};

export default HTMLNavigation;
