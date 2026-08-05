import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Introduction",
          path: "/tools/vscode/basics/fundamentals/introduction"
        },
        {
          name: "Install & Setup",
          path: "/tools/vscode/basics/fundamentals/install-setup"
        },
        {
          name: "UI Tour",
          path: "/tools/vscode/basics/fundamentals/ui-tour"
        }
      ]
    },
    {
      name: "Editing",
      subpages: [
        {
          name: "Command Palette",
          path: "/tools/vscode/basics/editing/command-palette"
        },
        {
          name: "Search & Replace",
          path: "/tools/vscode/basics/editing/search-replace"
        },
        {
          name: "Multi-cursor",
          path: "/tools/vscode/basics/editing/multi-cursor"
        }
      ]
    },
    {
      name: "Files & Workspace",
      subpages: [
        {
          name: "Files & Folders",
          path: "/tools/vscode/basics/workspace/files-folders"
        },
        {
          name: "Workspace vs User",
          path: "/tools/vscode/basics/workspace/workspace-vs-user"
        },
        {
          name: "Settings Basics",
          path: "/tools/vscode/basics/workspace/settings-basics"
        }
      ]
    },
    {
      name: "Extensions",
      subpages: [
        {
          name: "Installing Extensions",
          path: "/tools/vscode/basics/extensions/installing"
        },
        {
          name: "Recommended Extensions",
          path: "/tools/vscode/basics/extensions/recommended"
        }
      ]
    },
    {
      name: "Built-in Tools",
      subpages: [
        {
          name: "Integrated Terminal",
          path: "/tools/vscode/basics/built-in/terminal"
        },
        {
          name: "Source Control View",
          path: "/tools/vscode/basics/built-in/source-control"
        },
        {
          name: "Problems Panel",
          path: "/tools/vscode/basics/built-in/problems"
        }
      ]
    }
  ]
};

export default Basics;