import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";


import Core from '@/Navigation/IndividualNav/Granularized/BackEndNav/DatabaseNav/PostgreSQL/Basics/Core';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "What is PostgreSQL?",
          path: "/databases/postgresql/basics/fundamentals/overview"
        },
        {
          name: "Features & Use Cases",
          path: "/databases/postgresql/basics/fundamentals/features-usecases"
        }
      ]
    },
    {
      name: "Setup & Configuration",
      subpages: [
        {
          name: "Installing PostgreSQL",
          path: "/databases/postgresql/basics/setup/installing"
        },
        {
          name: "Basic Configuration",
          path: "/databases/postgresql/basics/setup/basic-configuration"
        },
        {
          name: "Starter Optimization",
          path: "/databases/postgresql/basics/setup/starter-optimization"
        }
      ]
    },
    Core
      
  ]
};

export default Basics;