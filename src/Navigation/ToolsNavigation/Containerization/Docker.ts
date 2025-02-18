import { Subpage } from "@/Navigation/NavigationTypes";

const DockerNavigation: Subpage = {
  name: "Docker",
  subpages: [
    // ---------- Docker Fundamentals Navigation Start ----------
    {
      name: "Docker Fundamentals",
      subpages: [
        { name: "Introduction to Docker", path: "/tools/containerization/docker/intro" },
        { name: "Installing Docker", path: "/tools/containerization/docker/install" },
        { name: "Docker CLI Basics", path: "/tools/containerization/docker/cli" },
        { name: "Understanding Containers & Images", path: "/tools/containerization/docker/containers-images" },
      ],
    },
    // ---------- Docker Fundamentals Navigation End ----------

    // ---------- Docker Compose & Orchestration Navigation Start ----------
    {
      name: "Docker Compose & Orchestration",
      subpages: [
        { name: "Introduction to Docker Compose", path: "/tools/containerization/docker/compose-intro" },
        { name: "Docker Compose Syntax", path: "/tools/containerization/docker/compose-syntax" },
        { name: "Running Multi-Container Apps", path: "/tools/containerization/docker/multi-container" },
        { name: "Scaling & Load Balancing", path: "/tools/containerization/docker/scaling" },
      ],
    },
    // ---------- Docker Compose & Orchestration Navigation End ----------

    // ---------- Advanced Docker Topics Navigation Start ----------
    {
      name: "Advanced Docker Topics",
      subpages: [
        { name: "Docker Networking", path: "/tools/containerization/docker/networking" },
        { name: "Docker Volumes & Data Persistence", path: "/tools/containerization/docker/volumes" },
        { name: "Docker Security Best Practices", path: "/tools/containerization/docker/security" },
        { name: "Optimizing Docker Images", path: "/tools/containerization/docker/image-optimization" },
      ],
    },
    // ---------- Advanced Docker Topics Navigation End ----------
  ],
};

export default DockerNavigation;
