import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Introduction",
          path: "/eslint/basics/fundamentals/introduction"
        },
        {
          name: "Install & Setup",
          path: "/eslint/basics/fundamentals/install-setup"
        }
      ]
    },
    {
      name: "Config Basics",
      subpages: [
        {
          name: "Config Formats",
          path: "/eslint/basics/config-basics/config-formats"
        },
        {
          name: "Understanding Rules",
          path: "/eslint/basics/config-basics/understanding-rules"
        }
      ]
    },
    {
      name: "Frameworks",
      subpages: [
        {
          name: "TypeScript Config",
          path: "/eslint/basics/frameworks/typescript-config"
        },
        {
          name: "React Config",
          path: "/eslint/basics/frameworks/react-config"
        }
      ]
    },
    {
      name: "Plugins & Editors",
      subpages: [
        {
          name: "Using Plugins",
          path: "/eslint/basics/plugins-editors/using-plugins"
        },
        {
          name: "VS Code & Editors",
          path: "/eslint/basics/plugins-editors/editors"
        }
      ]
    },
    {
      name: "Workflow",
      subpages: [
        {
          name: "Fix & Ignore",
          path: "/eslint/basics/workflow/fix-ignore"
        },
        {
          name: "ESLint + Prettier",
          path: "/eslint/basics/workflow/eslint-prettier"
        }
      ]
    }
  ]
};

export default Basics;