import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const ApolloClientBasics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Introduction",
      path: "/apolloclient/basics/introduction"
    },
    {
      name: "Fetching Data",
      path: "/apolloclient/basics/fetching"
    },
    {
      name: "State Management",
      path: "/apolloclient/basics/statemanagement"
    }
  ]
};

export default ApolloClientBasics;
