import { Subpage } from "@/Navigation/NavigationTypes";

const MERNNavigation: Subpage = {
  name: "MERN",
  subpages: [
    {
      name: "MERN Fundamentals",
      subpages: [
        { name: "Introduction to the MERN Stack", path: "/frameworks/mern/fundamentals/overview" },
        { name: "MERN Stack Architecture", path: "/frameworks/mern/fundamentals/architecture" },
        { name: "MERN vs MEAN vs MEVN", path: "/frameworks/mern/fundamentals/comparison" },
      ],
    },
    {
      name: "Setting Up a MERN Project",
      subpages: [
        { name: "Project Structure & Dependencies", path: "/frameworks/mern/setup/project-structure" },
        { name: "Setting Up Express & Node.js", path: "/frameworks/mern/setup/express-node" },
        { name: "Configuring MongoDB with Mongoose", path: "/frameworks/mern/setup/mongodb-mongoose" },
        { name: "Integrating React with Express Backend", path: "/frameworks/mern/setup/react-integration" },
      ],
    },
    {
      name: "Building APIs in MERN",
      subpages: [
        { name: "RESTful API Design in MERN", path: "/frameworks/mern/apis/rest-api" },
        { name: "Handling Authentication (JWT & OAuth)", path: "/frameworks/mern/apis/authentication" },
        { name: "Middleware & API Security", path: "/frameworks/mern/apis/middleware-security" },
      ],
    },
    {
      name: "Frontend Development with React",
      subpages: [
        { name: "React Components & State Management", path: "/frameworks/mern/react/components-state" },
        { name: "React Hooks & Context API", path: "/frameworks/mern/react/hooks-context" },
        { name: "Connecting React with Express API", path: "/frameworks/mern/react/api-integration" },
      ],
    },
    {
      name: "State Management in MERN",
      subpages: [
        { name: "Using Redux with MERN", path: "/frameworks/mern/state-management/redux" },
        { name: "Using React Context API", path: "/frameworks/mern/state-management/context-api" },
      ],
    },
    {
      name: "Deployment & Optimization",
      subpages: [
        { name: "Deploying MERN on Vercel & Render", path: "/frameworks/mern/deployment/vercel-render" },
        { name: "Deploying MERN on DigitalOcean & AWS", path: "/frameworks/mern/deployment/digitalocean-aws" },
        { name: "Optimizing MERN Performance", path: "/frameworks/mern/deployment/performance" },
      ],
    },
  ],
};

export default MERNNavigation;
