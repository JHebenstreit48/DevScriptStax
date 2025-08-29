import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const Types: Subpage = {
  name: "Types of APIs",
  subpages: [
    {
      name: "Public vs Private APIs",
      path: "/apis/intro/types/public-vs-private"
    },
    {
      name: "REST vs GraphQL vs SOAP",
      path: "/apis/intro/types/comparison"
    },
    {
      name: "Microservices & API-based Architectures",
      path: "/apis/intro/types/microservices"
    },
    {
      name: "Third-Party API Integrations",
      path: "/apis/intro/types/third-party"
    },
  ],
};

export default Types;