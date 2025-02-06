import { Subpage } from "@/Navigation/NavigationTypes";

const PrettierNavigation: Subpage = {
  name: "Prettier",
  subpages: [
    // ---------- Prettier Fundamentals Navigation Start ----------
    {
      name: "Prettier Fundamentals",
      subpages: [
        { name: "Introduction to Prettier", path: "/tools/codequality/prettier/intro" },
        { name: "Installing & Setting Up Prettier", path: "/tools/codequality/prettier/setup" },
        { name: "Prettier Configuration Basics", path: "/tools/codequality/prettier/configuration" },
        { name: "Understanding Prettier Rules", path: "/tools/codequality/prettier/rules" },
      ],
    },
    // ---------- Prettier Fundamentals Navigation End ----------

    // ---------- Prettier Configuration Navigation Start ----------
    {
      name: "Prettier Configuration",
      subpages: [
        { name: "Using Prettier with JSON/YAML", path: "/tools/codequality/prettier/config-formats" },
        { name: "Extending & Customizing Prettier", path: "/tools/codequality/prettier/customization" },
        { name: "Configuring Prettier for TypeScript", path: "/tools/codequality/prettier/typescript" },
        { name: "Configuring Prettier for React", path: "/tools/codequality/prettier/react" },
      ],
    },
    // ---------- Prettier Configuration Navigation End ----------

    // ---------- Prettier Plugins & Extensions Navigation Start ----------
    {
      name: "Plugins & Extensions",
      subpages: [
        { name: "Using Prettier Plugins", path: "/tools/codequality/prettier/plugins" },
        { name: "ESLint & Prettier Integration", path: "/tools/codequality/prettier/eslint-integration" },
        { name: "Prettier in VS Code & Editors", path: "/tools/codequality/prettier/editors" },
        { name: "Prettier with Husky & Git Hooks", path: "/tools/codequality/prettier/husky" },
      ],
    },
    // ---------- Prettier Plugins & Extensions Navigation End ----------

    // ---------- Advanced Prettier Topics Navigation Start ----------
    {
      name: "Advanced Prettier Topics",
      subpages: [
        { name: "Linting & Formatting in CI/CD", path: "/tools/codequality/prettier/cicd" },
        { name: "Performance Optimization with Prettier", path: "/tools/codequality/prettier/performance" },
        { name: "Handling Formatting Conflicts", path: "/tools/codequality/prettier/conflicts" },
        { name: "Prettier Security Considerations", path: "/tools/codequality/prettier/security" },
      ],
    },
    // ---------- Advanced Prettier Topics Navigation End ----------
  ],
};

export default PrettierNavigation;
