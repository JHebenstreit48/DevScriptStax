import { Subpage } from "@/Navigation/NavigationTypes";

const AngularBasicsNavigation: Subpage = {
  name: "Angular Basics",
  subpages: [
    {
      name: "Angular Fundamentals",
      subpages: [
        { name: "Introduction to Angular", path: "/angular/basics/gettingstarted/intro" },
        { name: "Creating & Running an Angular Application", path: "/angular/basics/gettingstarted/creatingrunning" },
        { name: "Understanding Angular CLI", path: "/angular/basics/gettingstarted/angularcli" },
      ],
    },
    {
      name: "Project Structure",
      subpages: [
        { name: "Understanding Angular Project Structure", path: "/angular/basics/projectstructure/folderfilestructure" },
        { name: "Angular Configuration Files", path: "/angular/basics/projectstructure/configfiles" },
      ],
    },
  ],
};

export default AngularBasicsNavigation;
