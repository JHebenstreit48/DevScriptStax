import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const GitAdvanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Merging & History",
      subpages: [
        { name: "Merging & Conflict Resolution", path: "/tools/containerization/git/advanced/merging/conflicts" },
        { name: "Rebase vs Merge", path: "/tools/containerization/git/advanced/merging/rebase-vs-merge" },
        { name: "Cherry-Pick and Revert", path: "/tools/containerization/git/advanced/history/cherry-revert" }
      ]
    },
    {
      name: "Advanced Tools",
      subpages: [
        { name: "Git Stash", path: "/tools/containerization/git/advanced/tools/stash" },
        { name: "Git Hooks", path: "/tools/containerization/git/advanced/tools/hooks" },
        { name: "Git Submodules", path: "/tools/containerization/git/advanced/tools/submodules" }
      ]
    },
    {
      name: "Performance & Security",
      subpages: [
        { name: "Optimizing Repositories", path: "/tools/containerization/git/advanced/performance/optimizing" },
        { name: "Security Best Practices", path: "/tools/containerization/git/advanced/security/best-practices" }
      ]
    },
    {
      name: "Remote Platforms",
      subpages: [
        { name: "Working with GitHub", path: "/tools/containerization/git/advanced/remotes/github" },
        { name: "Working with GitLab", path: "/tools/containerization/git/advanced/remotes/gitlab" },
        { name: "CI/CD with GitHub & GitLab", path: "/tools/containerization/git/advanced/remotes/cicd" }
      ]
    }
  ]
};

export default GitAdvanced;
