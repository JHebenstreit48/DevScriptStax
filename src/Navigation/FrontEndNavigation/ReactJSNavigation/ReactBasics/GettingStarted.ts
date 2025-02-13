import { Subpage } from "@/Navigation/NavigationTypes";

const GettingStartedNavigation: Subpage = {
  name: "Gettting Started",
  subpages: [
    {
      name: "Introduction",
      path: "/react/basics/gettingstarted/introduction"
    }, // What is React? Why use it?
    {
      name: "Setup & Installation",
      path: "/react/basics/gettingstarted/setup"
    }, // Installing Node.js, Create React App, Vite
    {
      name: "Project Structure",
      path: "/react/basics/gettingstarted/projectstructure"
    }, // Files & folders in a React project
  ],
};

export default GettingStartedNavigation;
