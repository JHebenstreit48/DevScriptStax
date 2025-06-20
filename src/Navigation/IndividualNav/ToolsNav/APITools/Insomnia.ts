import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const InsomniaNavigation: Subpage = {
  name: "Insomnia",
  subpages: [
    // ---------- Insomnia Fundamentals Navigation Start ----------
    {
      name: "Insomnia Fundamentals",
      subpages: [
        { name: "Introduction to Insomnia", path: "/tools/api/insomnia/intro" },
        { name: "Installing & Setting Up Insomnia", path: "/tools/api/insomnia/setup" },
        { name: "Understanding the Insomnia UI", path: "/tools/api/insomnia/ui-overview" },
        { name: "Making API Requests", path: "/tools/api/insomnia/making-requests" },
      ],
    },
    // ---------- Insomnia Fundamentals Navigation End ----------

    // ---------- API Testing & Debugging Navigation Start ----------
    {
      name: "API Testing & Debugging",
      subpages: [
        { name: "Testing REST APIs in Insomnia", path: "/tools/api/insomnia/testing-rest" },
        { name: "Testing GraphQL APIs", path: "/tools/api/insomnia/testing-graphql" },
        { name: "Handling Authentication in Requests", path: "/tools/api/insomnia/authentication" },
        { name: "Using Environment Variables", path: "/tools/api/insomnia/environment-variables" },
        { name: "Debugging API Requests", path: "/tools/api/insomnia/debugging" },
      ],
    },
    // ---------- API Testing & Debugging Navigation End ----------

    // ---------- Advanced Insomnia Features Navigation Start ----------
    {
      name: "Advanced Insomnia Features",
      subpages: [
        { name: "Using Collections & Workspaces", path: "/tools/api/insomnia/workspaces" },
        { name: "Automating API Tests", path: "/tools/api/insomnia/automation" },
        { name: "Exporting & Importing API Requests", path: "/tools/api/insomnia/import-export" },
        { name: "Working with Plugins & Extensions", path: "/tools/api/insomnia/plugins" },
      ],
    },
    // ---------- Advanced Insomnia Features Navigation End ----------
  ],
};

export default InsomniaNavigation;
