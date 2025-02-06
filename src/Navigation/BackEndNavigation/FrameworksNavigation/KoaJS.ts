import { Subpage } from "@/Navigation/NavigationTypes";

const KoaJSNavigation: Subpage = {
  name: "Koa.js",
  subpages: [
    {
      name: "Koa.js Fundamentals",
      subpages: [
        { name: "Introduction to Koa.js", path: "/frameworks/koa/fundamentals/overview" },
        { name: "Setting Up Koa.js", path: "/frameworks/koa/fundamentals/setup" },
        { name: "Koa.js vs Express.js", path: "/frameworks/koa/fundamentals/comparison" },
      ],
    },
    {
      name: "Middleware & Routing",
      subpages: [
        { name: "Understanding Middleware in Koa", path: "/frameworks/koa/middleware/understanding" },
        { name: "Writing Custom Middleware", path: "/frameworks/koa/middleware/custom" },
        { name: "Error Handling in Koa", path: "/frameworks/koa/middleware/error-handling" },
        { name: "Routing with Koa Router", path: "/frameworks/koa/routing/router" },
      ],
    },
    {
      name: "Building APIs with Koa",
      subpages: [
        { name: "Creating a REST API", path: "/frameworks/koa/apis/rest-api" },
        { name: "Handling JSON & Form Data", path: "/frameworks/koa/apis/json-form" },
        { name: "Authentication in Koa APIs", path: "/frameworks/koa/apis/authentication" },
        { name: "Using Koa with GraphQL", path: "/frameworks/koa/apis/graphql" },
      ],
    },
    {
      name: "Templating & Static Files",
      subpages: [
        { name: "Serving Static Files", path: "/frameworks/koa/templates/static-files" },
        { name: "Using Koa with Frontend Frameworks", path: "/frameworks/koa/templates/frontend-integration" },
      ],
    },
    {
      name: "Security & Performance",
      subpages: [
        { name: "CORS & Security Best Practices", path: "/frameworks/koa/security/cors-security" },
        { name: "Rate Limiting & Throttling", path: "/frameworks/koa/security/rate-limiting" },
        { name: "Optimizing Koa.js Performance", path: "/frameworks/koa/performance/optimization" },
      ],
    },
    {
      name: "Deployment",
      subpages: [
        { name: "Deploying Koa on Heroku", path: "/frameworks/koa/deployment/heroku" },
        { name: "Deploying Koa on AWS Lambda", path: "/frameworks/koa/deployment/aws-lambda" },
      ],
    },
  ],
};

export default KoaJSNavigation;
