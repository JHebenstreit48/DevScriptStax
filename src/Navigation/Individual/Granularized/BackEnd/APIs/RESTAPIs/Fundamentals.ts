import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const Fundamentals: Subpage = {
  name: "Fundamentals",
  subpages: [
    {
      name: "Core PrincipleS",
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
      name: "Common API Mistakes",
      path: "/apis/rest/mistakes"
    },
  ],
};

export default Fundamentals;