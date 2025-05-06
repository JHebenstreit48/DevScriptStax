import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const RESTFundamentalsNavigation: Subpage = {
  name: "REST Fundamentals",
  subpages: [
    { name: "Core Principles of REST", path: "/apis/rest/intro/core-principles" }, // RENAMED FOR CLARITY
    { name: "Statelessness & Client-Server Model", path: "/apis/rest/intro/stateless-client-server" },
    { name: "REST vs SOAP vs GraphQL", path: "/apis/rest/intro/comparison" },
    { name: "Common REST API Mistakes", path: "/apis/rest/intro/mistakes" },
  ],
};

export default RESTFundamentalsNavigation;
