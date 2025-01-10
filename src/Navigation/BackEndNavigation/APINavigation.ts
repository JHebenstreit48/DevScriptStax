import { Subpage } from "@/Navigation/NavigationTypes";

const APINavigation: Subpage = {
  name: "API",
  subpages: [
    {
      name: "Introduction to APIs",
      subpages: [
        { name: "What is an API?", path: "/apis/intro/whatis" },
        { name: "Types of APIs", path: "/apis/intro/types" },
        { name: "API Authentication", path: "/apis/intro/authentication" },
        { name: "API Documentation", path: "/apis/intro/documentation" },
      ],
    },
    {
      name: "REST APIs",
      subpages: [
        { name: "What is REST?", path: "/apis/rest/intro" },
        { name: "HTTP Methods", path: "/apis/rest/httpmethods" },
        { name: "Endpoints and Resources", path: "/apis/rest/endpoints" },
        { name: "RESTful Design Principles", path: "/apis/rest/design" },
        { name: "Error Handling in REST", path: "/apis/rest/errorhandling" },
      ],
    },
    {
      name: "Advanced API Concepts",
      subpages: [
        { name: "Rate Limiting", path: "/apis/advanced/ratelimiting" },
        { name: "API Versioning", path: "/apis/advanced/versioning" },
        { name: "Caching APIs", path: "/apis/advanced/caching" },
        { name: "API Gateways", path: "/apis/advanced/gateways" },
        { name: "Webhooks", path: "/apis/advanced/webhooks" },
      ],
    },
  ],
};

export default APINavigation;
