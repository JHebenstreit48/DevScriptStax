import { Subpage } from "@/Navigation/NavigationTypes";

const ReactNavigation: Subpage = {
  name: "React Full Stack",
  subpages: [
    { name: "Express Integration", path: "/react/fullstack/express" }, // Simplified path
    { name: "MongoDB Integration", path: "/react/fullstack/mongodb" },
    { name: "Deployment", path: "/react/fullstack/deployment" },
  ],
};

export default ReactNavigation;
