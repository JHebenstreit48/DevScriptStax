import { Subpage } from "@/Navigation/NavigationTypes";

const FSFrontAndBackEndNavigation: Subpage = {
  name: "Frontend-to-Backend Communication",
  subpages: [
    {
      name: "Fetching Data from APIs",
      path: "/react/fullstack/fetching-data"
    }, // Axios, Fetch API, SWR
    {
      name: "Handling API Errors",
      path: "/react/fullstack/error-handling"
    }, // Error boundaries, handling API failures
    {
      name: "State Management for Full Stack",
      path: "/react/fullstack/state-management"
    }, // Using global state effectively
  ],
};

export default FSFrontAndBackEndNavigation;
