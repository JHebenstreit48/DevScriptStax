import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Introduction to Jenkins",
          path: "/tools/cicd/jenkins/basics/fundamentals/intro"
        },
        {
          name: "Key Concepts",
          path: "/tools/cicd/jenkins/basics/fundamentals/concepts"
        }
      ]
    },
    {
      name: "Setup",
      subpages: [
        {
          name: "Installing & Setting Up Jenkins",
          path: "/tools/cicd/jenkins/basics/setup/install"
        },
        {
          name: "Initial Configuration",
          path: "/tools/cicd/jenkins/basics/setup/config"
        }
      ]
    },
    {
      name: "Pipelines",
      subpages: [
        {
          name: "Understanding Pipelines",
          path: "/tools/cicd/jenkins/basics/pipelines/overview"
        },
        {
          name: "Jenkinsfile Basics",
          path: "/tools/cicd/jenkins/basics/pipelines/jenkinsfile"
        },
        {
          name: "Creating Pipelines",
          path: "/tools/cicd/jenkins/basics/pipelines/create"
        },
        {
          name: "Running Tests in Jenkins",
          path: "/tools/cicd/jenkins/basics/pipelines/testing"
        },
        {
          name: "Deploying Applications",
          path: "/tools/cicd/jenkins/basics/pipelines/deployment"
        },
        {
          name: "Automating Builds & Releases",
          path: "/tools/cicd/jenkins/basics/pipelines/automation"
        }
      ]
    }
  ]
};

export default Basics;