import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const RESTfulDesignPrinciplesNavigation: Subpage = {
  name: "RESTful Design Principles",
  subpages: [
    { name: "Resource Naming Conventions", path: "/apis/rest/design/resource-naming" },
    { name: "Versioning REST APIs", path: "/apis/rest/design/versioning" },
    { name: "HATEOAS & Hypermedia", path: "/apis/rest/design/hateoas" },
    { name: "REST API Security Best Practices", path: "/apis/rest/design/security" },
  ],
};

export default RESTfulDesignPrinciplesNavigation;
