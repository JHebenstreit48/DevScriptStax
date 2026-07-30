import type { Subpage } from '@/types/navigation';

import Strategies from '@/navigation/individual/modularized/BackEnd/Databases/MongoDB/Testing/Strategies';
import Environments from '@/navigation/individual/modularized/BackEnd/Databases/MongoDB/Testing/Environments';
import DataAndWorkflow from '@/navigation/individual/modularized/BackEnd/Databases/MongoDB/Testing/DataAndWorkflow';

const Testing: Subpage = {
  name: 'Testing',
  subpages: [
    Strategies,
    Environments,
    DataAndWorkflow
  ],
};

export default Testing;
