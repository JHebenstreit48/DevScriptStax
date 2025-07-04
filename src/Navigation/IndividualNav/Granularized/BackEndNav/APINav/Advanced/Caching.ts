import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const Caching: Subpage = {
  name: "Caching",
  subpages: [
    { name: "Basics", path: "/apis/advanced/caching/basics" },
    {
      name: "Cache Control & Expiry",
      path: "/apis/advanced/caching/cache-control",
    },
    {
      name: "Best Practices for API Caching",
      path: "/apis/advanced/caching/best-practices",
    },
  ],
};

export default Caching;
