import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import ReactContextAndHooks from '@/Navigation/IndividualNav/Granularized/FrontEndNav/React/Intermediate/ContextAndHooks';
import ReactRouting from '@/Navigation/IndividualNav/Granularized/FrontEndNav/React/Intermediate/Routing';
import ReactSetupEnhancements from '@/Navigation/IndividualNav/Granularized/FrontEndNav/React/Intermediate/Enhancements';
import ReactRefs from '@/Navigation/IndividualNav/Granularized/FrontEndNav/React/Intermediate/Refs';

const ReactIntermediate: Subpage = {
  name: 'Intermediate',
  subpages: [
    ReactContextAndHooks,
    ReactRouting,
    ReactSetupEnhancements,
    ReactRefs
  ]
};

export default ReactIntermediate;
