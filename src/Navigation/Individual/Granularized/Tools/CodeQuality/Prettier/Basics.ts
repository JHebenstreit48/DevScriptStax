import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Introduction",
          path: "/prettier/basics/fundamentals/introduction"
        },
        {
          name: "Options & Defaults",
          path: "/prettier/basics/fundamentals/options-defaults"
        }
      ]
    },
    {
      name: "Setup",
      subpages: [
        {
          name: "Install & Init",
          path: "/prettier/basics/setup/install-init"
        },
        {
          name: "Config Files",
          path: "/prettier/basics/setup/config-files"
        }
      ]
    },
    {
      name: "Editors & CLI",
      subpages: [
        {
          name: "VS Code & Editors",
          path: "/prettier/basics/editors-cli/vscode-editors"
        },
        {
          name: "CLI Usage",
          path: "/prettier/basics/editors-cli/cli-usage"
        }
      ]
    },
    {
      name: "Languages",
      subpages: [
        {
          name: "TypeScript",
          path: "/prettier/basics/languages/typescript"
        },
        {
          name: "React & JSX",
          path: "/prettier/basics/languages/react-jsx"
        }
      ]
    },
    {
      name: "Workflow",
      subpages: [
        {
          name: "Fix on Save",
          path: "/prettier/basics/workflow/fix-on-save"
        },
        {
          name: "Ignore & Overrides",
          path: "/prettier/basics/workflow/ignore-overrides"
        }
      ]
    }
  ]
};

export default Basics;