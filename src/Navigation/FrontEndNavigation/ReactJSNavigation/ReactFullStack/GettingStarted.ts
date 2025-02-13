import { Subpage } from "@/Navigation/NavigationTypes";

const FSGettingStartedNavigation: Subpage = {
  name: "Getting Started",
  subpages: [
    {
      name: "What is Full Stack?",
      path: "/react/fullstack/overview"
    }, // Overview of full-stack development with React
    {
      name: "Project Structure",
      path: "/react/fullstack/project-structure"
    }, // Organizing frontend & backend codebases
    {
      name: "Environment Variables",
      path: "/react/fullstack/env-variables"
    }, // Managing .env files securely
  ],
};

export default FSGettingStartedNavigation;
