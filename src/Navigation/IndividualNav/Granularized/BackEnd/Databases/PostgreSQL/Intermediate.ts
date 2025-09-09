import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

import IndexesAndPerformance from "@/Navigation/IndividualNav/Granularized/BackEnd/Databases/PostgreSQL/Intermediate/IndexesAndPerformance";
import TransactionsAndLocking from "@/Navigation/IndividualNav/Granularized/BackEnd/Databases/PostgreSQL/Intermediate/TransactionAndLocking";

const Intermediate: Subpage = {
  name: "Intermediate",
  subpages: [
    IndexesAndPerformance,
    TransactionsAndLocking
  ]
};

export default Intermediate;