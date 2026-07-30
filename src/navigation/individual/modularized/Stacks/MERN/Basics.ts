import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Introduction",
          path: "/mern/basics/fundamentals/introduction"
        },
        {
          name: "Architecture & Folders",
          path: "/mern/basics/fundamentals/architecture-and-folders"
        }
      ]
    },
    {
      name: "Project Setup",
      subpages: [
        {
          name: "Init FE & BE",
          path: "/mern/basics/project-setup/init-fe-and-be"
        },
        {
          name: "Env & CORS Basics",
          path: "/mern/basics/project-setup/env-and-cors-basics"
        }
      ]
    },
    {
      name: "API & Data Flow",
      subpages: [
        {
          name: "REST Conventions & DTOs",
          path: "/mern/basics/api-and-data-flow/rest-conventions-and-dtos"
        },
        {
          name: "Client Integration",
          path: "/mern/basics/api-and-data-flow/client-integration"
        }
      ]
    },
    {
      name: "Auth (Basics)",
      subpages: [
        {
          name: "JWT Flow Overview",
          path: "/mern/basics/auth-basics/jwt-flow-overview"
        },
        {
          name: "Protected Routes & Guards",
          path: "/mern/basics/auth-basics/protected-routes-and-guards"
        }
      ]
    },
    {
      name: "Deployment",
      subpages: [
        {
          name: "Single vs Split Origin",
          path: "/mern/basics/deployment/single-vs-split-origin"
        },
        {
          name: "Prod Env & Secrets",
          path: "/mern/basics/deployment/prod-env-and-secrets"
        }
      ]
    }
  ]
};

export default Basics;