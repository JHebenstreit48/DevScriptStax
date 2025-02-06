import { Subpage } from "@/Navigation/NavigationTypes";

const PostmanNavigation: Subpage = {
  name: "Postman",
  subpages: [
    // ---------- Postman Fundamentals Navigation Start ----------
    {
      name: "Postman Fundamentals",
      subpages: [
        { name: "Introduction to Postman", path: "/tools/api/postman/intro" },
        { name: "Installing & Setting Up Postman", path: "/tools/api/postman/setup" },
        { name: "Understanding the Postman UI", path: "/tools/api/postman/ui-overview" },
        { name: "Making API Requests", path: "/tools/api/postman/making-requests" },
      ],
    },
    // ---------- Postman Fundamentals Navigation End ----------

    // ---------- API Testing & Debugging Navigation Start ----------
    {
      name: "API Testing & Debugging",
      subpages: [
        { name: "Testing REST APIs in Postman", path: "/tools/api/postman/testing-rest" },
        { name: "Testing GraphQL APIs", path: "/tools/api/postman/testing-graphql" },
        { name: "Handling Authentication in Requests", path: "/tools/api/postman/authentication" },
        { name: "Using Environment Variables", path: "/tools/api/postman/environment-variables" },
        { name: "Debugging API Requests", path: "/tools/api/postman/debugging" },
      ],
    },
    // ---------- API Testing & Debugging Navigation End ----------

    // ---------- Advanced Postman Features Navigation Start ----------
    {
      name: "Advanced Postman Features",
      subpages: [
        { name: "Using Collections & Workspaces", path: "/tools/api/postman/workspaces" },
        { name: "Automating API Tests", path: "/tools/api/postman/automation" },
        { name: "Mock Servers & Simulating APIs", path: "/tools/api/postman/mock-servers" },
        { name: "Exporting & Importing API Requests", path: "/tools/api/postman/import-export" },
        { name: "Working with Postman Scripts", path: "/tools/api/postman/scripts" },
      ],
    },
    // ---------- Advanced Postman Features Navigation End ----------
  ],
};

export default PostmanNavigation;
