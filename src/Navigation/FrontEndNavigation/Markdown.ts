import { Subpage } from "@/Navigation/NavigationTypes";

const MarkdownNavigation: Subpage = {
  name: "Markdown",
  subpages: [
    {
      name: "Basics",
      subpages: [
        { name: "Overview", path: "/markdown/basics/overview" }, // Introduction and history
        { name: "Syntax", path: "/markdown/basics/syntax" }, // Headers, lists, links, etc.
        { name: "Formatting", path: "/markdown/basics/formatting" }, // Bold, italic, code blocks
        { name: "Tables", path: "/markdown/basics/tables" }, // Creating tables
        { name: "Images & Links", path: "/markdown/basics/images-links" }, // Embedding media
      ],
    },
    {
      name: "Intermediate",
      subpages: [
        { name: "Extensions", path: "/markdown/intermediate/extensions" }, // CommonMark, GFM
        { name: "Code Blocks", path: "/markdown/intermediate/code-blocks" }, // Syntax highlighting
        { name: "Task Lists", path: "/markdown/intermediate/task-lists" }, // Checkboxes
        { name: "Footnotes", path: "/markdown/intermediate/footnotes" }, // Annotations
      ],
    },
    {
      name: "Advanced",
      subpages: [
        { name: "Custom Rendering", path: "/markdown/advanced/custom-rendering" }, // Using Markdown with JS libraries
        { name: "Markdown with Frontmatter", path: "/markdown/advanced/frontmatter" }, // For static site generators
        { name: "Using Plugins", path: "/markdown/advanced/plugins" }, // Markdown-it, remark, etc.
      ],
    },
    {
      name: "Best Practices",
      subpages: [
        { name: "Consistency", path: "/markdown/best-practices/consistency" }, // Writing consistent Markdown
        { name: "Readability", path: "/markdown/best-practices/readability" }, // Enhancing content readability
        { name: "Version Control", path: "/markdown/best-practices/version-control" }, // Working with Git and Markdown
      ],
    },
  ],
};

export default MarkdownNavigation;
