import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const Fundamentals: Subpage = {
  name: "Fundamentals",
  subpages: [
    {
      name: "Core Principles of REST",
      path: "/apis/rest/core-principles"
    },
    {
      name: "Statelessness & Client-Server Model",
      path: "/apis/rest/stateless-client-server"
    },
    {
      name: "REST vs SOAP vs GraphQL",
      path: "/apis/rest/comparison"
    },
    {
      name: "Common REST API Mistakes",
      path: "/apis/rest/mistakes"
    },
  ],
};

export default Fundamentals;