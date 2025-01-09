import { Subpage } from "@/Navigation/FrontEndPages/NavigationTypes";

const MarkdownNavigation: Subpage = {
  name: "Markdown",
  subpages: [
    { name: "Markdown Notes", path: "/markdown" },
    { name: "Markdown Code Notes", path: "/markdown/markdowncode" },
  ],
};

export default MarkdownNavigation;
