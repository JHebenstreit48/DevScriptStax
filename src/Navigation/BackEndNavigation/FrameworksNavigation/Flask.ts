import { Subpage } from "@/Navigation/NavigationTypes";

const FlaskNavigation: Subpage = {
  name: "Flask",
  subpages: [
    {
      name: "Flask Fundamentals",
      subpages: [
        { name: "Overview & Features", path: "/frameworks/flask/fundamentals/overview" },
        { name: "Setting Up Flask", path: "/frameworks/flask/fundamentals/setup" },
        { name: "Flask App Structure", path: "/frameworks/flask/fundamentals/app-structure" },
      ],
    },
    {
      name: "Routing & Middleware",
      subpages: [
        { name: "Flask Routing Basics", path: "/frameworks/flask/routing/basics" },
        { name: "Dynamic Routes & URL Variables", path: "/frameworks/flask/routing/dynamic-routes" },
        { name: "Middleware & Request Hooks", path: "/frameworks/flask/routing/middleware-hooks" },
        { name: "Handling Errors in Flask", path: "/frameworks/flask/routing/error-handling" },
      ],
    },
    {
      name: "Working with APIs",
      subpages: [
        { name: "Building REST APIs with Flask", path: "/frameworks/flask/apis/rest-api" },
        { name: "Handling JSON & Form Data", path: "/frameworks/flask/apis/json-form-data" },
        { name: "CORS & Security", path: "/frameworks/flask/apis/cors-security" },
        { name: "Using Flask with GraphQL", path: "/frameworks/flask/apis/graphql" },
      ],
    },
    {
      name: "Templating & Static Files",
      subpages: [
        { name: "Jinja2 Templating in Flask", path: "/frameworks/flask/templates/jinja2" },
        { name: "Serving Static Files", path: "/frameworks/flask/templates/static-files" },
        { name: "Using Flask with Frontend Frameworks", path: "/frameworks/flask/templates/frontend-integration" },
      ],
    },
    {
      name: "Authentication & Sessions",
      subpages: [
        { name: "User Authentication with Flask-Login", path: "/frameworks/flask/auth/flask-login" },
        { name: "JWT Authentication", path: "/frameworks/flask/auth/jwt" },
        { name: "Session Management", path: "/frameworks/flask/auth/sessions" },
      ],
    },
    {
      name: "Deployment & Performance Optimization",
      subpages: [
        { name: "Deploying Flask on Heroku", path: "/frameworks/flask/deployment/heroku" },
        { name: "Deploying Flask on AWS Lambda", path: "/frameworks/flask/deployment/aws-lambda" },
        { name: "Optimizing Flask Performance", path: "/frameworks/flask/deployment/performance" },
      ],
    },
  ],
};

export default FlaskNavigation;
