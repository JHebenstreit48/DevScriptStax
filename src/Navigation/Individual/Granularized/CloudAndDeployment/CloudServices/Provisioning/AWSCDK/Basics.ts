import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Introduction",
          path: "/aws-cdk/basics/fundamentals/introduction"
        },
        {
          name: "Stacks & Constructs",
          path: "/aws-cdk/basics/fundamentals/stacks-constructs"
        }
      ]
    },
    {
      name: "Setup",
      subpages: [
        {
          name: "Install & Bootstrap",
          path: "/aws-cdk/basics/setup/install-bootstrap"
        },
        {
          name: "Project Init",
          path: "/aws-cdk/basics/setup/project-init"
        }
      ]
    },
    {
      name: "Authoring",
      subpages: [
        {
          name: "Props & Patterns",
          path: "/aws-cdk/basics/authoring/props-patterns"
        },
        {
          name: "Envs & Context",
          path: "/aws-cdk/basics/authoring/envs-context"
        }
      ]
    },
    {
      name: "Deploys",
      subpages: [
        {
          name: "Synthesize & Diff",
          path: "/aws-cdk/basics/deploys/synthesize-diff"
        },
        {
          name: "Deploy & Destroy",
          path: "/aws-cdk/basics/deploys/deploy-destroy"
        }
      ]
    },
    {
      name: "Assets & Pipelines",
      subpages: [
        {
          name: "Assets & Bundling",
          path: "/aws-cdk/basics/assets-pipelines/assets-bundling"
        },
        {
          name: "CI/CD Pipelines",
          path: "/aws-cdk/basics/assets-pipelines/ci-cd-pipelines"
        }
      ]
    }
  ]
};

export default Basics;