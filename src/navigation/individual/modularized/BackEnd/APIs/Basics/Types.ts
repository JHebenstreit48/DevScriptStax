import type { Subpage } from '@/types/navigation';

const Types: Subpage = {
  name: "Types of APIs",
  subpages: [
    {
      name: "Public vs Private APIs",
      path: "/apis/basics/types/public-vs-private"
    },
    {
      name: "REST vs GraphQL vs SOAP",
      path: "/apis/basics/types/rest-vs-graphql-vs-soap"
    },
    {
      name: "Microservices & API-based Architectures",
      path: "/apis/basics/types/microservices"
    },
    {
      name: "Third-Party API Integrations",
      path: "/apis/basics/types/third-party"
    },
  ],
};

export default Types;