import type { Subpage } from '@/types/navigation';

import IndexesAndPerformance from '@/navigation/individual/modularized/BackEnd/Databases/PostgreSQL/Intermediate/IndexesAndPerformance';
import TransactionsAndLocking from '@/navigation/individual/modularized/BackEnd/Databases/PostgreSQL/Intermediate/TransactionAndLocking';

const Intermediate: Subpage = {
  name: "Intermediate",
  subpages: [
    IndexesAndPerformance,
    TransactionsAndLocking
  ]
};

export default Intermediate;