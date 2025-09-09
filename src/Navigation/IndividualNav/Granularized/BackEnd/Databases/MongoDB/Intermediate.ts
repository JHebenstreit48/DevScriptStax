import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Indexes from '@/Navigation/IndividualNav/Granularized/BackEnd/Databases/MongoDB/Intermediate/Indexes';
import Aggregation from '@/Navigation/IndividualNav/Granularized/BackEnd/Databases/MongoDB/Intermediate/Aggregation';

const Intermediate: Subpage = {
  name: 'Intermediate',
  subpages: [
    Indexes,
    Aggregation
  ]
};

export default Intermediate;