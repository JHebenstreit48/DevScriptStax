import { Subpage } from "@/Navigation/NavigationTypes";

const CircleCINavigation: Subpage = {
  name: "CircleCI",
  subpages: [
    // ---------- CircleCI Fundamentals Navigation Start ----------
    {
      name: "CircleCI Fundamentals",
      subpages: [
        { name: "Introduction to CircleCI", path: "/tools/cicd/circleci/intro" },
        { name: "Installing & Setting Up CircleCI", path: "/tools/cicd/circleci/setup" },
        { name: "Understanding CircleCI Workflows", path: "/tools/cicd/circleci/workflows" },
        { name: "Configuring a `.circleci/config.yml` File", path: "/tools/cicd/circleci/config" },
      ],
    },
    // ---------- CircleCI Fundamentals Navigation End ----------

    // ---------- CI/CD Pipelines in CircleCI Navigation Start ----------
    {
      name: "CI/CD Pipelines in CircleCI",
      subpages: [
        { name: "Creating CI/CD Pipelines", path: "/tools/cicd/circleci/pipelines" },
        { name: "Running Tests in CircleCI", path: "/tools/cicd/circleci/testing" },
        { name: "Building & Deploying Applications", path: "/tools/cicd/circleci/deployment" },
        { name: "Optimizing CI/CD Workflows", path: "/tools/cicd/circleci/optimization" },
      ],
    },
    // ---------- CI/CD Pipelines in CircleCI Navigation End ----------

    // ---------- Advanced CircleCI Features Navigation Start ----------
    {
      name: "Advanced CircleCI Features",
      subpages: [
        { name: "Using Orbs for Reusability", path: "/tools/cicd/circleci/orbs" },
        { name: "Caching & Performance Tuning", path: "/tools/cicd/circleci/caching" },
        { name: "Parallelism & Test Splitting", path: "/tools/cicd/circleci/parallelism" },
        { name: "Security & Compliance in CircleCI", path: "/tools/cicd/circleci/security" },
      ],
    },
    // ---------- Advanced CircleCI Features Navigation End ----------
  ],
};

export default CircleCINavigation;
