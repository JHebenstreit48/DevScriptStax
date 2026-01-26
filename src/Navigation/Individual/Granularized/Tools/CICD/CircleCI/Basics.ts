import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Introduction to CircleCI",
          path: "/ci-cd/circle-ci/basics/fundamentals/introduction"
        },
        {
          name: "Key Concepts",
          path: "/ci-cd/circle-ci/basics/fundamentals/concepts"
        }
      ]
    },
    {
      name: "CircleCI Setup",
      subpages: [
        {
          name: "Installing & Setting Up CircleCI",
          path: "/ci-cd/circle-ci/basics/circle-ci-setup/setup"
        },
        {
          name: "Configuring a .circleci/config.yml",
          path: "/ci-cd/circle-ci/basics/circle-ci-setup/config"
        }
      ]
    },
    {
      name: "Jobs & Workflows",
      subpages: [
        {
          name: "Jobs & Steps",
          path: "/ci-cd/circle-ci/basics/jobs-and-workflows/jobs-steps"
        },
        {
          name: "Understanding CircleCI Workflows",
          path: "/ci-cd/circle-ci/basics/jobs-and-workflows/workflows"
        }
      ]
    },
    {
      name: "Pipelines",
      subpages: [
        {
          name: "Creating CI/CD Pipelines",
          path: "/ci-cd/circle-ci/basics/pipelines/pipelines"
        },
        {
          name: "Running Tests in CircleCI",
          path: "/ci-cd/circle-ci/basics/pipelines/testing"
        },
        {
          name: "Building & Deploying Applications",
          path: "/ci-cd/circle-ci/basics/pipelines/deployment"
        }
      ]
    }
  ]
};

export default Basics;