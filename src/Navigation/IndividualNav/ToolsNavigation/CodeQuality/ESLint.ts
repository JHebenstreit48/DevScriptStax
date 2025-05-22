import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const ESLintNavigation: Subpage = {
  name: "ESLint",
  subpages: [
    // ---------- ESLint Fundamentals Navigation Start ----------
    {
      name: "ESLint Fundamentals",
      subpages: [
        { name: "Introduction to ESLint", path: "/tools/codequality/eslint/intro" },
        { name: "Installing & Setting Up ESLint", path: "/tools/codequality/eslint/setup" },
        { name: "ESLint Configuration Basics", path: "/tools/codequality/eslint/configuration" },
        { name: "Understanding ESLint Rules", path: "/tools/codequality/eslint/rules" },
      ],
    },
    // ---------- ESLint Fundamentals Navigation End ----------

    // ---------- ESLint Configuration Navigation Start ----------
    {
      name: "ESLint Configuration",
      subpages: [
        { name: "Using ESLint with JSON/YAML", path: "/tools/codequality/eslint/config-formats" },
        { name: "Extending & Overriding Rules", path: "/tools/codequality/eslint/extending-rules" },
        { name: "Configuring ESLint for TypeScript", path: "/tools/codequality/eslint/typescript" },
        { name: "Configuring ESLint for React", path: "/tools/codequality/eslint/react" },
      ],
    },
    // ---------- ESLint Configuration Navigation End ----------

    // ---------- ESLint Plugins & Extensions Navigation Start ----------
    {
      name: "Plugins & Extensions",
      subpages: [
        { name: "Using ESLint Plugins", path: "/tools/codequality/eslint/plugins" },
        { name: "Prettier & ESLint Integration", path: "/tools/codequality/eslint/prettier" },
        { name: "Custom ESLint Rules", path: "/tools/codequality/eslint/custom-rules" },
        { name: "ESLint in VS Code & Editors", path: "/tools/codequality/eslint/editors" },
      ],
    },
    // ---------- ESLint Plugins & Extensions Navigation End ----------

    // ---------- Advanced ESLint Topics Navigation Start ----------
    {
      name: "Advanced ESLint Topics",
      subpages: [
        { name: "Linting CI/CD Pipelines", path: "/tools/codequality/eslint/cicd" },
        { name: "Performance Optimization in ESLint", path: "/tools/codequality/eslint/performance" },
        { name: "Handling ESLint Warnings & Errors", path: "/tools/codequality/eslint/errors" },
        { name: "Security Best Practices with ESLint", path: "/tools/codequality/eslint/security" },
      ],
    },
    // ---------- Advanced ESLint Topics Navigation End ----------
  ],
};

export default ESLintNavigation;
