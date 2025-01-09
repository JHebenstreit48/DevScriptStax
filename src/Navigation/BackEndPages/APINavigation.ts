import { Subpage } from "@/Navigation/FrontEndPages/NavigationTypes";

const APINavigation: Subpage = {
  name: "API",
  subpages: [
    { name: "APIs Notes", path: "/apis" },
    { name: "APIs Code Notes", path: "/apis/apicode" },
  ],
};

export default APINavigation;
