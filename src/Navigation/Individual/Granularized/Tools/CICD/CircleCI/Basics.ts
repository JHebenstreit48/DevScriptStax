import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Introduction to CircleCI",
          path: "/tools/cicd/circleci/basics/fundamentals/intro"
        },
        {
          name: "Key Concepts",
          path: "/tools/cicd/circleci/basics/fundamentals/concepts"
        }
      ]
    },
    {
      name: "CircleCI Setup",
      subpages: [
        {
          name: "Installing & Setting Up CircleCI",
          path: "/tools/cicd/circleci/basics/circleci-setup/setup"
        },
        {
          name: "Configuring a .circleci/config.yml",
          path: "/tools/cicd/circleci/basics/circleci-setup/config"
        }
      ]
    },
    {
      name: "Jobs & Workflows",
      subpages: [
        {
          name: "Jobs & Steps",
          path: "/tools/cicd/circleci/basics/jobs-and-workflows/jobs-steps"
        },
        {
          name: "Understanding CircleCI Workflows",
          path: "/tools/cicd/circleci/basics/jobs-and-workflows/workflows"
        }
      ]
    },
    {
      name: "Pipelines",
      subpages: [
        {
          name: "Creating CI/CD Pipelines",
          path: "/tools/cicd/circleci/basic/pipelines/pipelines"
        },
        {
          name: "Running Tests in CircleCI",
          path: "/tools/cicd/circleci/basics/pipelines/testing"
        },
        {
          name: "Building & Deploying Applications",
          path: "/tools/cicd/circleci/basics/pipelines/deployment"
        }
      ]
    }
  ]
};

export default Basics;