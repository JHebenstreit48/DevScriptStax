import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const ApolloClientAdvanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Error Handling",
      path: "/apolloclient/advanced/errorhandling"
    },
    {
      name: "Caching",
      path: "/apolloclient/advanced/caching"
    }
    // Future: Apollo Link, pagination, fetch policies, etc.
  ]
};

export default ApolloClientAdvanced;
