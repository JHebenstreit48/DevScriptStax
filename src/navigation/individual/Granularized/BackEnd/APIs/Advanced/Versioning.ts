import type { Subpage } from '@/types/navigation';

const Versioning: Subpage = {
  name: "Versioning",
  subpages: [
    {
      name: "API Versioning Strategies",
      path: "/apis/advanced/versioning/strategies",
    }, // Merged when to version & approaches
    {
      name: "Versioning in REST vs GraphQL",
      path: "/apis/advanced/versioning/rest-vs-graphql",
    },
    {
      name: "Deprecating Old API Versions",
      path: "/apis/advanced/versioning/deprecating",
    },
  ],
};

export default Versioning;