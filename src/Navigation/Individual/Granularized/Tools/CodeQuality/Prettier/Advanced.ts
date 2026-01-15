import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Integrations",
      subpages: [
        {
          name: "ESLint Integration",
          path: "/prettier/advanced/integrations/eslint-integration"
        },
        {
          name: "Husky & Lint-Staged",
          path: "/prettier/advanced/integrations/husky-lint-staged"
        }
      ]
    },
    {
      name: "Performance",
      subpages: [
        {
          name: "Large Repos",
          path: "/prettier/advanced/performance/large-repos"
        },
        {
          name: "CI Formatting",
          path: "/prettier/advanced/performance/ci-formatting"
        }
      ]
    },
    {
      name: "Plugins & Ext",
      subpages: [
        {
          name: "Prettier Plugins",
          path: "/prettier/advanced/plugins-ext/prettier-plugins"
        },
        {
          name: "Embedded Languages",
          path: "/prettier/advanced/plugins-ext/embedded-languages"
        }
      ]
    },
    {
      name: "Monorepos",
      subpages: [
        {
          name: "Root Config",
          path: "/prettier/advanced/monorepos/root-config"
        },
        {
          name: "Project Overrides",
          path: "/prettier/advanced/monorepos/project-overrides"
        }
      ]
    },
    {
      name: "Security & Policy",
      subpages: [
        {
          name: "Security Considerations",
          path: "/prettier/advanced/security-policy/security-considerations"
        },
        {
          name: "Org Standards",
          path: "/prettier/advanced/security-policy/org-standards"
        }
      ]
    }
  ]
};

export default Advanced;