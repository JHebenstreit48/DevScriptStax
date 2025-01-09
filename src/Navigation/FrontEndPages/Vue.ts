import { Subpage } from "@/Navigation/FrontEndPages/NavigationTypes";

const VueNavigation: Subpage = {
  name: "Markdown",
  subpages: [
    { name: "Vue Notes", path: "/vue" },
    { name: "Vue Code Notes", path: "/vue/vuecode" },
  ],
};

export default VueNavigation;
