import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const Routing: Subpage = {
  name: "Routing",
  subpages: [
    {
      name: "Basics",
      path: "/angular/coreconcepts/routing/basics",
    },
    {
      name: "Guards/Resolvers",
      path: "/angular/coreconcepts/routing/guards",
    },
    {
      name: "Lazy Loading",
      path: "/angular/coreconcepts/routing/lazyroutes",
    },
  ],
};

export default Routing;