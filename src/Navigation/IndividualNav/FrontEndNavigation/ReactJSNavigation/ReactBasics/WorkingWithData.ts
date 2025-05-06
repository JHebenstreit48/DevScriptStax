import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const ReactBasicsNavigation: Subpage = {
  name: "Working With Data",
  subpages: [
    {
      name: "Fetching Data",
      path: "/react/basics/data/fetching-data"
    }, // Using fetch & axios
    {
      name: "Forms & Inputs",
      path: "/react/basics/data/forms"
    }, // Controlled vs uncontrolled inputs
    {
      name: "Context API",
      path: "/react/basics/data/context-api"
    }, // Managing global state
  ],
};

export default ReactBasicsNavigation;
