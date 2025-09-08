import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const Routing: Subpage = {
  name: "Routing",
  subpages: [
    {
      name: "Basics",
      path: "/angular/core-concepts/routing/basics",
    },
    {
      name: "Guards/Resolvers",
      path: "/angular/core-concepts/routing/guards-and-resolvers",
    },
    {
      name: "Lazy Loading",
      path: "/angular/core-concepts/routing/lazy-loading",
    },
  ],
};

export default Routing;