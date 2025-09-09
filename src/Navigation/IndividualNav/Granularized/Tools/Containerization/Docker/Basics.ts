import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Introduction",
          path: "/tools/containerization/docker/intro"
        },
        {
          name: "Installing Docker",
          path: "/tools/containerization/docker/install"
        }
      ]
    },
    {
      name: "CLI & Workflow",
      subpages: [
        {
          name: "CLI Basics",
          path: "/tools/containerization/docker/cli"
        },
        {
          name: "Containers / Images",
          path: "/tools/containerization/docker/containers-images"
        }
      ]
    },
    {
      name: "Dockerfiles",
      subpages: [
        {
          name: "Dockerfile Basics",
          path: "/tools/containerization/docker/dockerfile/basics"
        },
        {
          name: ".dockerignore",
          path: "/tools/containerization/docker/dockerfile/dockerignore"
        }
      ]
    },
    {
      name: "Compose",
      subpages: [
        {
          name: "Overview",
          path: "/tools/containerization/docker/compose-intro"
        },
        {
          name: "Syntax",
          path: "/tools/containerization/docker/compose-syntax"
        },
        {
          name: "Multi-Container Apps",
          path: "/tools/containerization/docker/multi-container"
        },
        {
          name: "Scaling / Load Balancing",
          path: "/tools/containerization/docker/scaling"
        }
      ]
    },
    {
      name: "Build & Registry",
      subpages: [
        {
          name: "Build Images",
          path: "/tools/containerization/docker/build/build"
        },
        {
          name: "Push / Pull & Registry",
          path: "/tools/containerization/docker/build/registry"
        }
      ]
    }
  ]
};

export default Basics;