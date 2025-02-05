import { Subpage } from "@/Navigation/NavigationTypes";

const APICachingNavigation: Subpage = {
  name: "API Caching",
  subpages: [
    { name: "What is API Caching?", path: "/apis/advanced/caching/what-is-caching" },
    { name: "Cache Control & Expiry", path: "/apis/advanced/caching/cache-control" },
    { name: "Best Practices for API Caching", path: "/apis/advanced/caching/best-practices" },
  ],
};

export default APICachingNavigation;
