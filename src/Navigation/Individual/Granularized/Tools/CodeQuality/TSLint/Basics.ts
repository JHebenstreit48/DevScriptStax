import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Introduction",
          path: "/tslint/basics/fundamentals/introduction"
        },
        {
          name: "Status & Deprecation",
          path: "/tslint/basics/fundamentals/status-deprecation"
        }
      ]
    },
    {
      name: "Setup",
      subpages: [
        {
          name: "Install & Init",
          path: "/tslint/basics/setup/install-init"
        },
        {
          name: "tslint.json",
          path: "/tslint/basics/setup/tslint-json"
        }
      ]
    },
    {
      name: "Rules",
      subpages: [
        {
          name: "Core Rules",
          path: "/tslint/basics/rules/core-rules"
        },
        {
          name: "Severity & Options",
          path: "/tslint/basics/rules/severity-options"
        }
      ]
    },
    {
      name: "Type-Aware",
      subpages: [
        {
          name: "Project & tsconfig",
          path: "/tslint/basics/type-aware/project-tsconfig"
        },
        {
          name: "Type-Checked Rules",
          path: "/tslint/basics/type-aware/type-checked-rules"
        }
      ]
    },
    {
      name: "Workflow",
      subpages: [
        {
          name: "CLI Usage",
          path: "/tslint/basics/workflow/cli-usage"
        },
        {
          name: "Editor Integration",
          path: "/tslint/basics/workflow/editor-integration"
        }
      ]
    }
  ]
};

export default Basics;