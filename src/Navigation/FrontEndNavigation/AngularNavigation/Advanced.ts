import { Subpage } from "@/Navigation/NavigationTypes";

const AngularAdvancedNavigation: Subpage = {
  name: "Angular Advanced",
  subpages: [
        {
          name: "Change Detection",
          path: "/angular/change-detection",
        },
        {
          name: "RxJS",
          path: "/angular/rxjs",
        },
        {
          name: "Animations", // Shortened
          path: "/angular/animations",
        },
        {
          name: "Path Aliases",
          path: "/angular/path-aliases",
        },
      ],
};

export default AngularAdvancedNavigation;
