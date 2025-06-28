import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import ReactBasics from '@/Navigation/IndividualNav/Granularized/FrontEndNav/React/Basics';
import ReactAdvanced from '@/Navigation/IndividualNav/Granularized/FrontEndNav/React/Advanced';
import ReactToolsAndTesting from '@/Navigation/IndividualNav/Granularized/FrontEndNav/React/ToolsAndTesting';
import ReactIntermediate from '@/Navigation/IndividualNav/Granularized/FrontEndNav/React/Intermediate';

const ReactNav: Subpage = {
  name: 'React',
  subpages: [
    ReactBasics,
    ReactIntermediate,
    ReactAdvanced,
    ReactToolsAndTesting
  ]
};

export default ReactNav;
