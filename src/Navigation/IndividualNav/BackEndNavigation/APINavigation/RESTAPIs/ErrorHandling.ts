import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const RESTfulDesignPrinciplesNavigation: Subpage = {
  name: "RESTful Design Principles",
  subpages: [
    { name: "HTTP Status Codes", path: "/apis/rest/errorhandling/status-codes" },
    { name: "Error Response Structure", path: "/apis/rest/errorhandling/error-structure" },
    { name: "Best Practices for Error Handling", path: "/apis/rest/errorhandling/best-practices" },
    { name: "Logging & Monitoring API Errors", path: "/apis/rest/errorhandling/logging-monitoring" },
  ],
};

export default RESTfulDesignPrinciplesNavigation;
