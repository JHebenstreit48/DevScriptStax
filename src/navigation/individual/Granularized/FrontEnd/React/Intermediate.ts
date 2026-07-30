import type { Subpage } from '@/types/navigation';

import ContextAndHooks from '@/Navigation/Individual/Granularized/FrontEnd/React/Intermediate/ContextAndHooks';
import Routing from '@/Navigation/Individual/Granularized/FrontEnd/React/Intermediate/Routing';
import SetupEnhancements from '@/Navigation/Individual/Granularized/FrontEnd/React/Intermediate/Enhancements';
import Refs from '@/Navigation/Individual/Granularized/FrontEnd/React/Intermediate/Refs';

const Intermediate: Subpage = {
  name: 'Intermediate',
  subpages: [
    ContextAndHooks,
    Routing,
    SetupEnhancements,
    Refs
  ]
};

export default Intermediate;
