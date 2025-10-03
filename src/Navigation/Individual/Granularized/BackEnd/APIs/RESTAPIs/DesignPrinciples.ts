import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const DesignPrinciples: Subpage = {
  name: "RESTful Design Principles",
  subpages: [
    {
      name: "Resource Naming Conventions",
      path: "/apis/rest/design/resource-naming"
    },
    {
      name: "Versioning",
      path: "/apis/rest/design/versioning"
    },
    {
      name: "HATEOAS & Hypermedia", 
      path: "/apis/rest/design/hateoas" 
    },
    { 
      name: "Security Best Practices", 
      path: "/apis/rest/design/security" 
    },
  ],
};

export default DesignPrinciples;