import type { Subpage } from '@/types/navigation';

import Strategies from '@/Navigation/Individual/Granularized/BackEnd/Databases/MongoDB/Testing/Strategies';
import Environments from '@/Navigation/Individual/Granularized/BackEnd/Databases/MongoDB/Testing/Environments';
import DataAndWorkflow from '@/Navigation/Individual/Granularized/BackEnd/Databases/MongoDB/Testing/DataAndWorkflow';

const Testing: Subpage = {
  name: 'Testing',
  subpages: [
    Strategies,
    Environments,
    DataAndWorkflow
  ],
};

export default Testing;
