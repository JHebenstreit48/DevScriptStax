import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Introduction",
          path: "/aws-sam/basics/fundamentals/introduction"
        },
        {
          name: "Templates",
          path: "/aws-sam/basics/fundamentals/templates"
        }
      ]
    },
    {
      name: "Setup",
      subpages: [
        {
          name: "Install & Init",
          path: "/aws-sam/basics/setup/install-init"
        },
        {
          name: "Credentials",
          path: "/aws-sam/basics/setup/credentials"
        }
      ]
    },
    {
      name: "Authoring",
      subpages: [
        {
          name: "Functions & Events",
          path: "/aws-sam/basics/authoring/functions-events"
        },
        {
          name: "Policies & Roles",
          path: "/aws-sam/basics/authoring/policies-roles"
        }
      ]
    },
    {
      name: "Build & Deploy",
      subpages: [
        {
          name: "Build & Package",
          path: "/aws-sam/basics/build-deploy/build-package"
        },
        {
          name: "Deploy & Stacks",
          path: "/aws-sam/basics/build-deploy/deploy-stacks"
        }
      ]
    },
    {
      name: "Local Dev",
      subpages: [
        {
          name: "sam local",
          path: "/aws-sam/basics/local-dev/sam-local"
        },
        {
          name: "Testing Locally",
          path: "/aws-sam/basics/local-dev/testing-locally"
        }
      ]
    }
  ]
};

export default Basics;