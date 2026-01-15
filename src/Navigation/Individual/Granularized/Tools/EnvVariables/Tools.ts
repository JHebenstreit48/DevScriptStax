import type { Subpage } from '@/types/navigation';

const Tools: Subpage = {
  name: "Tools",
  subpages: [
    {
      name: "File Loaders",
      subpages: [
        {
          name: "dotenv",
          path: "/environment/tools/file-loaders/dotenv"
        },
        {
          name: "dotenv-expand",
          path: "/environment/tools/file-loaders/dotenv-expand"
        }
      ]
    },
    {
      name: "CLI Helpers",
      subpages: [
        {
          name: "cross-env",
          path: "/environment/tools/cli-helpers/cross-env"
        },
        {
          name: "env-cmd & direnv",
          path: "/environment/tools/cli-helpers/env-cmd-and-direnv"
        }
      ]
    },
    {
      name: "Workflow",
      subpages: [
        {
          name: ".env.example",
          path: "/environment/tools/workflow/dotenv-example"
        },
        {
          name: "Local Overrides",
          path: "/environment/tools/workflow/local-overrides"
        }
      ]
    }
  ]
};

export default Tools;