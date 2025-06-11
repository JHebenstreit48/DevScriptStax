import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const GitBasicsNavigation: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Introduction",
      subpages: [
        { name: "What is Git?", path: "/tools/containerization/git/basics/intro/what-is-git" },
        { name: "Why Version Control?", path: "/tools/containerization/git/basics/intro/why-version-control" }
      ]
    },
    {
      name: "Getting Started",
      subpages: [
        { name: "Installing Git", path: "/tools/containerization/git/basics/installing" },
        { name: "Initial Configuration", path: "/tools/containerization/git/basics/config" }
      ]
    },
    {
      name: "Basic Workflow",
      subpages: [
        { name: "Workflow Basics", path: "/tools/containerization/git/basics/basics" },
        { name: "Workflow Process", path: "/tools/containerization/git/basics/workflowprocess" },
        { name: "Branching", path: "/tools/containerization/git/basics/branching" },
        { name: "Push/Pull", path: "/tools/containerization/git/basics/push-pull" },
        { name: "Pull Request Workflow", path: "/tools/containerization/git/basics/pullrequest" }
      ]
    },
    {
      name: "Essential Commands",
      subpages: [
        { name: "Common Git Commands", path: "/tools/containerization/git/basics/commands" },
        { name: "Status, Diff, and Log", path: "/tools/containerization/git/basics/status-diff-log" }
      ]
    }
  ]
};

export default GitBasicsNavigation;
