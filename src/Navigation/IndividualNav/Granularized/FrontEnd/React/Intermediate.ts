import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import ContextAndHooks from '@/Navigation/IndividualNav/Granularized/FrontEnd/React/Intermediate/ContextAndHooks';
import Routing from '@/Navigation/IndividualNav/Granularized/FrontEnd/React/Intermediate/Routing';
import SetupEnhancements from '@/Navigation/IndividualNav/Granularized/FrontEnd/React/Intermediate/Enhancements';
import Refs from '@/Navigation/IndividualNav/Granularized/FrontEnd/React/Intermediate/Refs';

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
