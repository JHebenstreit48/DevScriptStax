import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Introduction",
          path: "/serverless-framework/basics/fundamentals/introduction"
        },
        {
          name: "Concepts",
          path: "/serverless-framework/basics/fundamentals/concepts"
        }
      ]
    },
    {
      name: "Setup",
      subpages: [
        {
          name: "Install CLI",
          path: "/serverless-framework/basics/setup/install-cli"
        },
        {
          name: "Credentials",
          path: "/serverless-framework/basics/setup/credentials"
        }
      ]
    },
    {
      name: "Projects",
      subpages: [
        {
          name: "serverless.yml",
          path: "/serverless-framework/basics/projects/serverless-yml"
        },
        {
          name: "Stages & Params",
          path: "/serverless-framework/basics/projects/stages-params"
        }
      ]
    },
    {
      name: "Functions",
      subpages: [
        {
          name: "Handlers",
          path: "/serverless-framework/basics/functions/handlers"
        },
        {
          name: "Events",
          path: "/serverless-framework/basics/functions/events"
        }
      ]
    },
    {
      name: "Deploys",
      subpages: [
        {
          name: "Package & Deploy",
          path: "/serverless-framework/basics/deploys/package-deploy"
        },
        {
          name: "Remove & Rollback",
          path: "/serverless-framework/basics/deploys/remove-rollback"
        }
      ]
    }
  ]
};

export default Basics;