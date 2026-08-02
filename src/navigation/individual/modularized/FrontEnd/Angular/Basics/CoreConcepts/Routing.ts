import type { Subpage } from '@/types/navigation';

const Routing: Subpage = {
  name: "Routing",
  subpages: [
    {
      name: "Basics",
      path: "/front-end/angular/basics/core-concepts/routing/basics",
    },
    {
      name: "Guards/Resolvers",
      path: "/front-end/angular/basics/core-concepts/routing/guards-and-resolvers",
    },
    {
      name: "Lazy Loading",
      path: "/front-end/angular/basics/core-concepts/routing/lazy-loading",
    },
  ],
};

export default Routing;