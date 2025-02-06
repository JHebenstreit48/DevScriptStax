import { Subpage } from "@/Navigation/NavigationTypes";

const NodeJSNavigation: Subpage = {
  name: "Node.js",
  subpages: [
    {
      name: "Node.js Fundamentals",
      subpages: [
        { name: "Introduction to Node.js", path: "/frameworks/nodejs/fundamentals/overview" },
        { name: "Node.js Event Loop & Async I/O", path: "/frameworks/nodejs/fundamentals/event-loop" },
        { name: "Modules & NPM Packages", path: "/frameworks/nodejs/fundamentals/modules-npm" },
        { name: "CommonJS vs ES Modules", path: "/frameworks/nodejs/fundamentals/commonjs-esm" },
      ],
    },
    {
      name: "Building APIs with Node.js",
      subpages: [
        { name: "Creating a REST API with Express", path: "/frameworks/nodejs/apis/rest-api" },
        { name: "Building a GraphQL API", path: "/frameworks/nodejs/apis/graphql-api" },
        { name: "Handling Authentication (JWT & OAuth)", path: "/frameworks/nodejs/apis/authentication" },
        { name: "Middleware & Security", path: "/frameworks/nodejs/apis/middleware-security" },
      ],
    },
    {
      name: "Working with File Systems & Streams",
      subpages: [
        { name: "Reading & Writing Files", path: "/frameworks/nodejs/filesystem/read-write" },
        { name: "Working with Streams", path: "/frameworks/nodejs/filesystem/streams" },
        { name: "Processing Large Files", path: "/frameworks/nodejs/filesystem/large-files" },
      ],
    },
    {
      name: "Real-Time Applications with Node.js",
      subpages: [
        { name: "WebSockets & Socket.io", path: "/frameworks/nodejs/realtime/websockets" },
        { name: "Building a Real-Time Chat App", path: "/frameworks/nodejs/realtime/chat-app" },
        { name: "Using Event Emitters", path: "/frameworks/nodejs/realtime/event-emitters" },
      ],
    },
    {
      name: "State Management & Caching",
      subpages: [
        { name: "Using Redis with Node.js", path: "/frameworks/nodejs/state/redis" },
        { name: "Session Management", path: "/frameworks/nodejs/state/sessions" },
        { name: "Implementing Caching Strategies", path: "/frameworks/nodejs/state/caching" },
      ],
    },
    {
      name: "Deployment & Optimization",
      subpages: [
        { name: "Deploying Node.js on Vercel & Render", path: "/frameworks/nodejs/deployment/vercel-render" },
        { name: "Deploying Node.js on DigitalOcean & AWS", path: "/frameworks/nodejs/deployment/digitalocean-aws" },
        { name: "Optimizing Performance", path: "/frameworks/nodejs/deployment/performance" },
        { name: "Logging & Debugging", path: "/frameworks/nodejs/deployment/logging-debugging" },
      ],
    },
  ],
};

export default NodeJSNavigation;
