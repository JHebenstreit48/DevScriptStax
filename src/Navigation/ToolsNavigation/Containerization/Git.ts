import { Subpage } from "@/Navigation/NavigationTypes";

const GitNavigation: Subpage = {
  name: "Git & Version Control",
  subpages: [
    // ---------- Git Fundamentals Navigation Start ----------
    {
      name: "Git Fundamentals",
      subpages: [
        { name: "Introduction to Git", path: "/tools/containerization/git/intro" },
        { name: "Installing & Configuring Git", path: "/tools/containerization/git/install-config" },
        { name: "Understanding Git Workflow", path: "/tools/containerization/git/workflow" },
        { name: "Common Git Commands", path: "/tools/containerization/git/commands" },
      ],
    },
    // ---------- Git Fundamentals Navigation End ----------

    // ---------- Git Branching & Merging Navigation Start ----------
    {
      name: "Branching & Merging",
      subpages: [
        { name: "Git Branching Strategies", path: "/tools/containerization/git/branching" },
        { name: "Merging & Resolving Conflicts", path: "/tools/containerization/git/merging-conflicts" },
        { name: "Rebasing vs Merging", path: "/tools/containerization/git/rebasing-vs-merging" },
        { name: "Cherry-Picking & Stashing", path: "/tools/containerization/git/cherry-picking-stashing" },
      ],
    },
    // ---------- Git Branching & Merging Navigation End ----------

    // ---------- GitHub & GitLab Navigation Start ----------
    {
      name: "GitHub & GitLab",
      subpages: [
        { name: "GitHub Basics", path: "/tools/containerization/git/github" },
        { name: "GitLab Basics", path: "/tools/containerization/git/gitlab" },
        { name: "Working with Remote Repositories", path: "/tools/containerization/git/remotes" },
        { name: "CI/CD with GitHub Actions & GitLab CI", path: "/tools/containerization/git/cicd" },
      ],
    },
    // ---------- GitHub & GitLab Navigation End ----------

    // ---------- Advanced Git Topics Navigation Start ----------
    {
      name: "Advanced Git Topics",
      subpages: [
        { name: "Git Hooks & Automation", path: "/tools/containerization/git/hooks" },
        { name: "Git Submodules", path: "/tools/containerization/git/submodules" },
        { name: "Optimizing & Cleaning Repositories", path: "/tools/containerization/git/optimizing" },
        { name: "Security Best Practices for Git", path: "/tools/containerization/git/security" },
      ],
    },
    // ---------- Advanced Git Topics Navigation End ----------
  ],
};

export default GitNavigation;
