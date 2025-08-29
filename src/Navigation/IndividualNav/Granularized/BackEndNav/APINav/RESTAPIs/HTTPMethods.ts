import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const HTTPMethods: Subpage = {
  name: "HTTP Methods",
  subpages: [
    {
      name: "Overview of HTTP Methods",
      path: "/apis/rest/httpmethods/overview"
    },
    {
      name: "Detailed Guide to HTTP Methods",
      path: "/apis/rest/httpmethods/detailed-guide"
    },
    {
      name: "Best Practices for HTTP Methods",
      path: "/apis/rest/httpmethods/best-practices"
    },
    {
      name: "Idempotency & Safe Methods",
      path: "/apis/rest/httpmethods/idempotency-safe"
    },
  ],
};

export default HTTPMethods;