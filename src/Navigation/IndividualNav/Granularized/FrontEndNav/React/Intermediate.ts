import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import ReactContextAndHooks from '@/Navigation/IndividualNav/Granularized/FrontEndNav/React/Intermediate/ContextAndHooks';
import ReactRouting from '@/Navigation/IndividualNav/Granularized/FrontEndNav/React/Intermediate/Routing';
import ReactFormsAndInput from '@/Navigation/IndividualNav/Granularized/FrontEndNav/React/Intermediate/FormsAndInput';
import ReactSetupEnhancements from '@/Navigation/IndividualNav/Granularized/FrontEndNav/React/Intermediate/Enhancements';
import ReactRefs from '@/Navigation/IndividualNav/Granularized/FrontEndNav/React/Intermediate/RefsAndUtils';

const ReactIntermediate: Subpage = {
  name: 'Intermediate',
  subpages: [
    ReactContextAndHooks,
    ReactRouting,
    ReactFormsAndInput,
    ReactSetupEnhancements,
    ReactRefs
  ]
};

export default ReactIntermediate;
