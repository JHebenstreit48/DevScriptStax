import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Introduction",
          path: "/standardjs/basics/fundamentals/introduction"
        },
        {
          name: "Rules & Philosophy",
          path: "/standardjs/basics/fundamentals/rules-philosophy"
        }
      ]
    },
    {
      name: "Setup",
      subpages: [
        {
          name: "Install & Scripts",
          path: "/standardjs/basics/setup/install-scripts"
        },
        {
          name: "Ignore & Overrides",
          path: "/standardjs/basics/setup/ignore-overrides"
        }
      ]
    },
    {
      name: "Editors & CLI",
      subpages: [
        {
          name: "VS Code & Editors",
          path: "/standardjs/basics/editors-cli/vscode-editors"
        },
        {
          name: "CLI Usage",
          path: "/standardjs/basics/editors-cli/cli-usage"
        }
      ]
    },
    {
      name: "Types & TS",
      subpages: [
        {
          name: "ts-standard",
          path: "/standardjs/basics/types-ts/ts-standard"
        },
        {
          name: "TypeScript Projects",
          path: "/standardjs/basics/types-ts/typescript-projects"
        }
      ]
    },
    {
      name: "Workflow",
      subpages: [
        {
          name: "Fix & CI",
          path: "/standardjs/basics/workflow/fix-and-ci"
        },
        {
          name: "Monorepos",
          path: "/standardjs/basics/workflow/monorepos"
        }
      ]
    }
  ]
};

export default Basics;