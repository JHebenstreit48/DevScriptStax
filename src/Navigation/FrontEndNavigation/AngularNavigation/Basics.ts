import { Subpage } from "@/Navigation/NavigationTypes";

const AngularBasicsNavigation: Subpage = {
  name: "Angular Basics",
  subpages: [
        {
          name: "Getting Started",
          path: "/angular/basics/gettingstarted", // Combines Overview, Creating an Angular App, and Angular CLI
        },
        {
          name: "Project Structure",
          path: "/angular/basics/projectstructure", // Shortened
        },
      ],
};

export default AngularBasicsNavigation;
