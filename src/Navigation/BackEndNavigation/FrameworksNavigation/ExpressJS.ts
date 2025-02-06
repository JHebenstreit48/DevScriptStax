import { Subpage } from "@/Navigation/NavigationTypes";

const ExpressJSNavigation: Subpage = {
  name: "Express.js",
  subpages: [
    {
      name: "Express.js Fundamentals",
      subpages: [
        { name: "Overview & Features", path: "/frameworks/express/fundamentals/overview" },
        { name: "Setting Up Express.js", path: "/frameworks/express/fundamentals/setup" },
        { name: "Project Structure Best Practices", path: "/frameworks/express/fundamentals/project-structure" },
      ],
    },
    {
      name: "Routing & Middleware",
      subpages: [
        { name: "Defining Routes", path: "/frameworks/express/routing/defining-routes" },
        { name: "Route Parameters & Query Strings", path: "/frameworks/express/routing/parameters-query" },
        { name: "Middleware in Express", path: "/frameworks/express/routing/middleware" },
        { name: "Error Handling Middleware", path: "/frameworks/express/routing/error-handling" },
      ],
    },
    {
      name: "Working with APIs",
      subpages: [
        { name: "Building REST APIs", path: "/frameworks/express/apis/rest-api" },
        { name: "Handling JSON & URL Encoded Data", path: "/frameworks/express/apis/json-urlencoded" },
        { name: "CORS & Security", path: "/frameworks/express/apis/cors-security" },
        { name: "Using Express with GraphQL", path: "/frameworks/express/apis/graphql" },
      ],
    },
    {
      name: "Templating Engines & Static Files",
      subpages: [
        { name: "Serving Static Files", path: "/frameworks/express/templates/static-files" },
        { name: "Using EJS with Express", path: "/frameworks/express/templates/ejs" },
        { name: "Using Handlebars with Express", path: "/frameworks/express/templates/handlebars" },
      ],
    },
    {
      name: "Database Integration",
      subpages: [
        { name: "Using Express with MongoDB & Mongoose", path: "/frameworks/express/databases/mongodb" },
        { name: "Using Express with MySQL & Sequelize", path: "/frameworks/express/databases/mysql" },
        { name: "Using Express with PostgreSQL & Knex.js", path: "/frameworks/express/databases/postgresql" },
      ],
    },
    {
      name: "Authentication & Sessions",
      subpages: [
        { name: "User Authentication with Passport.js", path: "/frameworks/express/auth/passport" },
        { name: "JWT Authentication", path: "/frameworks/express/auth/jwt" },
        { name: "Session Management", path: "/frameworks/express/auth/sessions" },
      ],
    },
    {
      name: "Deployment & Performance Optimization",
      subpages: [
        { name: "Deploying Express on Heroku", path: "/frameworks/express/deployment/heroku" },
        { name: "Deploying Express on Vercel", path: "/frameworks/express/deployment/vercel" },
        { name: "Optimizing Express Performance", path: "/frameworks/express/deployment/performance" },
      ],
    },
  ],
};

export default ExpressJSNavigation;
