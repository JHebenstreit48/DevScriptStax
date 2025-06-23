import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import ReactBasics from '@/Navigation/IndividualNav/Granularized/FrontEndNav/React/Basics';
import ReactAdvanced from '@/Navigation/IndividualNav/Granularized/FrontEndNav/React/Advanced';
import ReactFullStack from '@/Navigation/IndividualNav/Granularized/FrontEndNav/React/FullStack';
import ReactTools from '@/Navigation/IndividualNav/Granularized/FrontEndNav/React/Tools';

const ReactNav: Subpage = {
  name: 'React',
  subpages: [
    ReactBasics,
    ReactAdvanced,
    ReactFullStack,
    ReactTools
  ]
};

export default ReactNav;