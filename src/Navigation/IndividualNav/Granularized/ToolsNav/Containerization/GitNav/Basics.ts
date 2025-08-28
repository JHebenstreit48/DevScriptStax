import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        { name: "Introduction", path: "/tools/containerization/git/basics/intro/introduction" },
        { name: "Version Control", path: "/tools/containerization/git/basics/intro/versioncontrol" }
      ]
    },
    {
      name: "Install/Config",
      subpages: [
        { name: "Installing Git", path: "/tools/containerization/git/basics/installconfig/installing" },
        { name: "Initial Configuration", path: "/tools/containerization/git/basics/installconfig/config" }
      ]
    },
    {
      name: "Workflow",
      subpages: [
        { name: "Full Workflow", path: "/tools/containerization/git/basics/workflow/fullworkflow" },
        { name: "Nuances", path: "/tools/containerization/git/basics/workflow/nuances" },
      ]
    },
    {
      name: "Commands",
      subpages: [
        { name: "Common", path: "/tools/containerization/git/basics/commands" },
        { name: "Status/Diff/Log", path: "/tools/containerization/git/basics/statusdifflog" }
      ]
    }
  ]
};

export default Basics;