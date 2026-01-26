import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Introduction to Jenkins",
          path: "/ci-cd/jenkins/basics/fundamentals/intro"
        },
        {
          name: "Key Concepts",
          path: "/ci-cd/jenkins/basics/fundamentals/concepts"
        }
      ]
    },
    {
      name: "Setup",
      subpages: [
        {
          name: "Installing & Setting Up Jenkins",
          path: "/ci-cd/jenkins/basics/setup/install"
        },
        {
          name: "Initial Configuration",
          path: "/ci-cd/jenkins/basics/setup/config"
        }
      ]
    },
    {
      name: "Pipelines",
      subpages: [
        {
          name: "Understanding Pipelines",
          path: "/ci-cd/jenkins/basics/pipelines/overview"
        },
        {
          name: "Jenkinsfile Basics",
          path: "/ci-cd/jenkins/basics/pipelines/jenkinsfile"
        },
        {
          name: "Creating Pipelines",
          path: "/ci-cd/jenkins/basics/pipelines/create"
        },
        {
          name: "Running Tests in Jenkins",
          path: "/ci-cd/jenkins/basics/pipelines/testing"
        },
        {
          name: "Deploying Applications",
          path: "/ci-cd/jenkins/basics/pipelines/deployment"
        },
        {
          name: "Automating Builds & Releases",
          path: "/ci-cd/jenkins/basics/pipelines/automation"
        }
      ]
    }
  ]
};

export default Basics;