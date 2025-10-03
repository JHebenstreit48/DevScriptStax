import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const ErrorHandling: Subpage = {
  name: "Error Handling",
  subpages: [
    {
      name: "HTTP Status Codes",
      path: "/apis/rest/error-handling/status-codes"
    },
    {
      name: "Error Response Structure",
      path: "/apis/rest/error-handling/error-structure"
    },
    {
      name: "Best Practices",
      path: "/apis/rest/error-handling/best-practices"
    },
    {
      name: "Logging & Monitoring Errors",
      path: "/apis/rest/error-handling/logging-monitoring"
    },
  ],
};

export default ErrorHandling;