import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

import Indexes from '@/Navigation/Individual/Granularized/BackEnd/Databases/MongoDB/Intermediate/Indexes';
import Aggregation from '@/Navigation/Individual/Granularized/BackEnd/Databases/MongoDB/Intermediate/Aggregation';

const Intermediate: Subpage = {
  name: 'Intermediate',
  subpages: [
    Indexes,
    Aggregation
  ]
};

export default Intermediate;