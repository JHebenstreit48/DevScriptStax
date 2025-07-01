import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const AngularBasics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Introduction",
          path: "/angular/basics/fundamentals/intro",
        },
        {
          name: "Creating/Running",
          path: "/angular/basics/fundamentals/creatingrunning",
        },
        {
          name: "CLI",
          path: "/angular/basics/fundamentals/cli",
        },
      ],
    },
    {
      name: "Structure",
      subpages: [
        {
          name: "Project Structure",
          path: "/angular/basics/structure/structure",
        },
        {
          name: "Configuration Files",
          path: "/angular/basics/structure/configfiles",
        },
        {
          name: "Naming Conventions",
          path: "/angular/basics/structure/namingconventions",
        },
      ],
    },
  ],
};

export default AngularBasics;
