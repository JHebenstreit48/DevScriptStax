import type { Subpage } from '@/types/navigation';

import ContextAndHooks from '@/navigation/individual/modularized/FrontEnd/React/Intermediate/ContextAndHooks';
import Routing from '@/navigation/individual/modularized/FrontEnd/React/Intermediate/Routing';
import SetupEnhancements from '@/navigation/individual/modularized/FrontEnd/React/Intermediate/Enhancements';
import Refs from '@/navigation/individual/modularized/FrontEnd/React/Intermediate/Refs';

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
