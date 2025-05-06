import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const JenkinsNavigation: Subpage = {
  name: "Jenkins",
  subpages: [
    // ---------- Jenkins Fundamentals Navigation Start ----------
    {
      name: "Jenkins Fundamentals",
      subpages: [
        { name: "Introduction to Jenkins", path: "/tools/cicd/jenkins/intro" },
        { name: "Installing & Setting Up Jenkins", path: "/tools/cicd/jenkins/setup" },
        { name: "Understanding Jenkins Pipelines", path: "/tools/cicd/jenkins/pipelines" },
        { name: "Jenkinsfile Configuration", path: "/tools/cicd/jenkins/jenkinsfile" },
      ],
    },
    // ---------- Jenkins Fundamentals Navigation End ----------

    // ---------- CI/CD Pipelines in Jenkins Navigation Start ----------
    {
      name: "CI/CD Pipelines in Jenkins",
      subpages: [
        { name: "Creating Jenkins Pipelines", path: "/tools/cicd/jenkins/create-pipelines" },
        { name: "Running Tests in Jenkins", path: "/tools/cicd/jenkins/testing" },
        { name: "Deploying Applications with Jenkins", path: "/tools/cicd/jenkins/deployment" },
        { name: "Automating Builds & Releases", path: "/tools/cicd/jenkins/automation" },
      ],
    },
    // ---------- CI/CD Pipelines in Jenkins Navigation End ----------

    // ---------- Advanced Jenkins Features Navigation Start ----------
    {
      name: "Advanced Jenkins Features",
      subpages: [
        { name: "Using Plugins in Jenkins", path: "/tools/cicd/jenkins/plugins" },
        { name: "Jenkins Distributed Builds", path: "/tools/cicd/jenkins/distributed-builds" },
        { name: "Security & Authentication", path: "/tools/cicd/jenkins/security" },
        { name: "Performance Optimization", path: "/tools/cicd/jenkins/performance" },
      ],
    },
    // ---------- Advanced Jenkins Features Navigation End ----------
  ],
};

export default JenkinsNavigation;
