import type { Subpage } from '@/types/navigation';

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