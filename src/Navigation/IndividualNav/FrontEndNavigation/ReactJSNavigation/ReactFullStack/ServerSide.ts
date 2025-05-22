import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const FSServerSideNavigation: Subpage = {
  name: "Server-Side Considerations",
  subpages: [
    {
      name: "Server-Side Rendering (SSR)",
      path: "/react/fullstack/ssr"
    }, // Next.js, benefits of SSR
    {
      name: "Static Site Generation (SSG)",
      path: "/react/fullstack/ssg"
    }, // Pre-rendering static pages for performance
    {
      name: "Hybrid Rendering",
      path: "/react/fullstack/hybrid-rendering"
    }, // Combining SSR & SSG
  ],
};

export default FSServerSideNavigation;
