import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Customization",
      subpages: [
        {
          name: "Keybindings",
          path: "/tools/vscode/advanced/customization/keybindings"
        },
        {
          name: "settings.json",
          path: "/tools/vscode/advanced/customization/settings-json"
        },
        {
          name: "Snippets",
          path: "/tools/vscode/advanced/customization/snippets"
        }
      ]
    },
    {
      name: "Workspaces",
      subpages: [
        {
          name: "Multi-root",
          path: "/tools/vscode/advanced/workspaces/multi-root"
        },
        {
          name: "Profiles",
          path: "/tools/vscode/advanced/workspaces/profiles"
        },
        {
          name: "Settings Sync",
          path: "/tools/vscode/advanced/workspaces/settings-sync"
        }
      ]
    },
    {
      name: "Tasks & Debugging",
      subpages: [
        {
          name: "Tasks",
          path: "/tools/vscode/advanced/tasks-debug/tasks"
        },
        {
          name: "launch.json",
          path: "/tools/vscode/advanced/tasks-debug/launch-json"
        },
        {
          name: "Debugging Tips",
          path: "/tools/vscode/advanced/tasks-debug/debugging-tips"
        }
      ]
    },
    {
      name: "Remote & Containers",
      subpages: [
        {
          name: "Remote SSH",
          path: "/tools/vscode/advanced/remote/remote-ssh"
        },
        {
          name: "Dev Containers",
          path: "/tools/vscode/advanced/remote/dev-containers"
        },
        {
          name: "WSL",
          path: "/tools/vscode/advanced/remote/wsl"
        }
      ]
    },
    {
      name: "Performance",
      subpages: [
        {
          name: "Performance Tips",
          path: "/tools/vscode/advanced/perf/performance-tips"
        },
        {
          name: "Extension Profiling",
          path: "/tools/vscode/advanced/perf/extension-profiling"
        }
      ]
    }
  ]
};

export default Advanced;