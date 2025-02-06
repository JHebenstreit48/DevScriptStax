import { Subpage } from "@/Navigation/NavigationTypes";

const TSLintNavigation: Subpage = {
  name: "TSLint",
  subpages: [
    // ---------- TSLint Fundamentals Navigation Start ----------
    {
      name: "TSLint Fundamentals",
      subpages: [
        { name: "Introduction to TSLint", path: "/tools/codequality/tslint/intro" },
        { name: "Installing & Setting Up TSLint", path: "/tools/codequality/tslint/setup" },
        { name: "TSLint Rules & Best Practices", path: "/tools/codequality/tslint/rules" },
        { name: "TSLint vs ESLint: Key Differences", path: "/tools/codequality/tslint/tslint-vs-eslint" },
      ],
    },
    // ---------- TSLint Fundamentals Navigation End ----------

    // ---------- TSLint Configuration Navigation Start ----------
    {
      name: "TSLint Configuration",
      subpages: [
        { name: "Configuring TSLint in TypeScript Projects", path: "/tools/codequality/tslint/configuration" },
        { name: "Customizing TSLint Rules", path: "/tools/codequality/tslint/custom-rules" },
        { name: "Ignoring Files & Directories in TSLint", path: "/tools/codequality/tslint/ignoring" },
        { name: "Using TSLint with Prettier", path: "/tools/codequality/tslint/prettier" },
      ],
    },
    // ---------- TSLint Configuration Navigation End ----------

    // ---------- Migration from TSLint to ESLint Navigation Start ----------
    {
      name: "Migration from TSLint to ESLint",
      subpages: [
        { name: "Why Migrate from TSLint to ESLint?", path: "/tools/codequality/tslint/migration/why-migrate" },
        { name: "Step-by-Step Migration Guide", path: "/tools/codequality/tslint/migration/step-by-step" },
        { name: "Automating Migration with tslint-to-eslint-config", path: "/tools/codequality/tslint/migration/tslint-to-eslint-config" },
        { name: "Common Migration Issues & Fixes", path: "/tools/codequality/tslint/migration/issues" },
      ],
    },
    // ---------- Migration from TSLint to ESLint Navigation End ----------

    // ---------- Advanced TSLint Topics Navigation Start ----------
    {
      name: "Advanced TSLint Topics",
      subpages: [
        { name: "Debugging TSLint Errors", path: "/tools/codequality/tslint/debugging" },
        { name: "TSLint Performance Optimization", path: "/tools/codequality/tslint/performance" },
        { name: "TSLint Best Practices for Legacy Projects", path: "/tools/codequality/tslint/best-practices" },
        { name: "Common TSLint Issues & Fixes", path: "/tools/codequality/tslint/issues" },
      ],
    },
    // ---------- Advanced TSLint Topics Navigation End ----------
  ],
};

export default TSLintNavigation;
