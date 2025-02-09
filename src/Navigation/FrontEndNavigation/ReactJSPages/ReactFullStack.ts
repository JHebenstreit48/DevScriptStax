import { Subpage } from "@/Navigation/NavigationTypes";

const ReactFullStackNavigation: Subpage = {
  name: "React Full Stack",
  subpages: [
    {
      name: "Getting Started",
      subpages: [
        { name: "What is Full Stack?", path: "/react/fullstack/overview" }, // Overview of full-stack development with React
        { name: "Project Structure", path: "/react/fullstack/project-structure" }, // Organizing frontend & backend codebases
        { name: "Environment Variables", path: "/react/fullstack/env-variables" }, // Managing .env files securely
      ],
    },
    {
      name: "Frontend-to-Backend Communication",
      subpages: [
        { name: "Fetching Data from APIs", path: "/react/fullstack/fetching-data" }, // Axios, Fetch API, SWR
        { name: "Handling API Errors", path: "/react/fullstack/error-handling" }, // Error boundaries, handling API failures
        { name: "State Management for Full Stack", path: "/react/fullstack/state-management" }, // Using global state effectively
      ],
    },
    {
      name: "Handling Large-Scale Applications",
      subpages: [
        { name: "Optimizing Large Data Sets", path: "/react/fullstack/large-data" }, // Virtualization, pagination, infinite scrolling
        { name: "WebSockets & Real-Time Updates", path: "/react/fullstack/websockets" }, // Real-time data handling
        { name: "Lazy Loading & Code Splitting", path: "/react/fullstack/lazy-loading" }, // Performance optimizations
      ],
    },
    {
      name: "Server-Side Considerations",
      subpages: [
        { name: "Server-Side Rendering (SSR)", path: "/react/fullstack/ssr" }, // Next.js, benefits of SSR
        { name: "Static Site Generation (SSG)", path: "/react/fullstack/ssg" }, // Pre-rendering static pages for performance
        { name: "Hybrid Rendering", path: "/react/fullstack/hybrid-rendering" }, // Combining SSR & SSG
      ],
    },
    {
      name: "Production Readiness",
      subpages: [
        { name: "Logging & Monitoring", path: "/react/fullstack/logging-monitoring" }, // Tracking errors & performance
        { name: "Security Best Practices", path: "/react/fullstack/security" }, // Preventing XSS, CORS, API protection
        { name: "Testing Full-Stack Applications", path: "/react/fullstack/testing" }, // Integration & end-to-end testing
      ],
    },
  ],
};

export default ReactFullStackNavigation;
