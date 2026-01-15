import type { Subpage } from '@/types/navigation';

const Documentation: Subpage = {
  name: "Documentation",
  subpages: [
    {
      name: "Tools",
      path: "/apis/basics/documentation/tools",
    },
    {
      name: "Best Practices",
      path: "/apis/basics/documentation/best-practices",
    },
    {
      name: "Examples",
      path: "/apis/basics/documentation/examples",
    },
  ],
};

export default Documentation;