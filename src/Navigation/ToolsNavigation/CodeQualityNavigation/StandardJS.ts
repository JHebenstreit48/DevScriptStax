import { Subpage } from "@/Navigation/NavigationTypes";

const StandardJSNavigation: Subpage = {
  name: "StandardJS",
  subpages: [
    // ---------- StandardJS Fundamentals Navigation Start ----------
    {
      name: "StandardJS Fundamentals",
      subpages: [
        { name: "Introduction to StandardJS", path: "/tools/codequality/standardjs/intro" },
        { name: "Installing & Setting Up StandardJS", path: "/tools/codequality/standardjs/setup" },
        { name: "StandardJS Rules & Conventions", path: "/tools/codequality/standardjs/rules" },
        { name: "Differences Between StandardJS & ESLint", path: "/tools/codequality/standardjs/standard-vs-eslint" },
      ],
    },
    // ---------- StandardJS Fundamentals Navigation End ----------

    // ---------- StandardJS Configuration Navigation Start ----------
    {
      name: "StandardJS Configuration",
      subpages: [
        { name: "Configuring StandardJS in Projects", path: "/tools/codequality/standardjs/configuration" },
        { name: "Using StandardJS with TypeScript", path: "/tools/codequality/standardjs/typescript" },
        { name: "Customizing StandardJS Rules", path: "/tools/codequality/standardjs/custom-rules" },
        { name: "Ignoring Files & Directories", path: "/tools/codequality/standardjs/ignoring" },
      ],
    },
    // ---------- StandardJS Configuration Navigation End ----------

    // ---------- StandardJS Integration Navigation Start ----------
    {
      name: "StandardJS Integration",
      subpages: [
        { name: "Integrating StandardJS with VS Code", path: "/tools/codequality/standardjs/vscode" },
        { name: "Using StandardJS with Prettier", path: "/tools/codequality/standardjs/prettier" },
        { name: "StandardJS in CI/CD Pipelines", path: "/tools/codequality/standardjs/cicd" },
        { name: "StandardJS with Git Hooks (Husky)", path: "/tools/codequality/standardjs/husky" },
      ],
    },
    // ---------- StandardJS Integration Navigation End ----------

    // ---------- Advanced StandardJS Topics Navigation Start ----------
    {
      name: "Advanced StandardJS Topics",
      subpages: [
        { name: "Debugging StandardJS Errors", path: "/tools/codequality/standardjs/debugging" },
        { name: "Performance Optimization with StandardJS", path: "/tools/codequality/standardjs/performance" },
        { name: "Best Practices for Using StandardJS", path: "/tools/codequality/standardjs/best-practices" },
        { name: "Common StandardJS Issues & Fixes", path: "/tools/codequality/standardjs/issues" },
      ],
    },
    // ---------- Advanced StandardJS Topics Navigation End ----------
  ],
};

export default StandardJSNavigation;
