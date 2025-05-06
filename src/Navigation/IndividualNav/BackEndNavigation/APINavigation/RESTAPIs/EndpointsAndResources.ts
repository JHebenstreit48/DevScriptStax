import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const EndpointsAndResourcesNavigation: Subpage = {
  name: "Endpoints and Resources",
  subpages: [
    { name: "Understanding API Endpoints", path: "/apis/rest/endpoints/overview" },
    { name: "URL Structure & Parameters", path: "/apis/rest/endpoints/url-structure" },
    { name: "Query vs Path Parameters", path: "/apis/rest/endpoints/query-vs-path" },
    { name: "Pagination in APIs", path: "/apis/rest/endpoints/pagination" },
  ],
};

export default EndpointsAndResourcesNavigation;
