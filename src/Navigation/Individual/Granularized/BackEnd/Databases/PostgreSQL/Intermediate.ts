import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

import IndexesAndPerformance from "@/Navigation/Individual/Granularized/BackEnd/Databases/PostgreSQL/Intermediate/IndexesAndPerformance";
import TransactionsAndLocking from "@/Navigation/Individual/Granularized/BackEnd/Databases/PostgreSQL/Intermediate/TransactionAndLocking";

const Intermediate: Subpage = {
  name: "Intermediate",
  subpages: [
    IndexesAndPerformance,
    TransactionsAndLocking
  ]
};

export default Intermediate;