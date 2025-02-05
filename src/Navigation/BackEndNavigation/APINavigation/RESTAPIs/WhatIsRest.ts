import { Subpage } from "@/Navigation/NavigationTypes";

const APINavigation: Subpage = {
  name: "What is REST",
  subpages: [
    {
      name: "What is REST?",
      subpages: [
        { name: "Understanding REST APIs", path: "/apis/rest/intro/overview" },
        {
          name: "Statelessness & Client-Server Model",
          path: "/apis/rest/intro/stateless-client-server",
        },
        {
          name: "REST vs SOAP vs GraphQL",
          path: "/apis/rest/intro/comparison",
        },
        { name: "Common REST API Mistakes", path: "/apis/rest/intro/mistakes" },
      ],
    },
  ],
};

export default APINavigation;
