import type { Subpage } from '@/types/navigation';

import Indexes from '@/navigation/individual/modularized/BackEnd/Databases/MongoDB/Intermediate/Indexes';
import Aggregation from '@/navigation/individual/modularized/BackEnd/Databases/MongoDB/Intermediate/Aggregation';

const Intermediate: Subpage = {
  name: 'Intermediate',
  subpages: [
    Indexes,
    Aggregation
  ]
};

export default Intermediate;