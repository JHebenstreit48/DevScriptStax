import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const EndpointsResources: Subpage = {
  name: "Endpoints and Resources",
  subpages: [
    {
      name: "Understanding Endpoints",
      path: "/apis/rest/endpoints/overview"
    },
    {
      name: "URL Structure & Parameters",
      path: "/apis/rest/endpoints/url-structure"
    },
    {
      name: "Query vs Path Parameters",
      path: "/apis/rest/endpoints/query-vs-path"
    },
    {
      name: "Pagination",
      path: "/apis/rest/endpoints/pagination"
    },
  ],
};

export default EndpointsResources;