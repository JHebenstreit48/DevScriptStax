import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const FSProductionReadinessNavigation: Subpage = {
  name: "Production Readiness",
  subpages: [
    {
      name: "Logging & Monitoring",
      path: "/react/fullstack/logging-monitoring"
    }, // Tracking errors & performance
    {
      name: "Security Best Practices",
      path: "/react/fullstack/security"
    }, // Preventing XSS, CORS, API protection
    {
      name: "Testing Full-Stack Applications",
      path: "/react/fullstack/testing"
    }, // Integration & end-to-end testing
  ],
};

export default FSProductionReadinessNavigation;
