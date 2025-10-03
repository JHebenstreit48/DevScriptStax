import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const Caching: Subpage = {
  name: "Caching",
  subpages: [
    {
      name: "Basics",
      path: "/apis/advanced/caching/basics"
    },
    {
      name: "Control & Expiry",
      path: "/apis/advanced/caching/control-and-expiry",
    },
    {
      name: "Best Practices",
      path: "/apis/advanced/caching/best-practices",
    },
  ],
};

export default Caching;