import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const JSTools: Subpage = {
  name: "Tools",
  subpages: [
    {
      name: "Dev Tools",
      subpages: [
        {
          name: "Chrome DevTools Tips",
          path: "/javascript/tools/devtools/chrome",
        },
        {
          name: "Debugging with Source Maps",
          path: "/javascript/tools/devtools/sourcemaps",
        },
      ],
    },
    {
      name: "Build Tools",
      subpages: [
        {
          name: "Intro to Webpack",
          path: "/javascript/tools/buildtools/webpack",
        },
        {
          name: "ESBuild vs Vite",
          path: "/javascript/tools/buildtools/esbuildvite",
        },
      ],
    },
    {
      name: "Linting & Formatting",
      subpages: [
        {
          name: "ESLint Setup",
          path: "/javascript/tools/linting/eslint",
        },
        {
          name: "Prettier Setup",
          path: "/javascript/tools/linting/prettier",
        },
      ],
    },
  ],
};

export default JSTools;