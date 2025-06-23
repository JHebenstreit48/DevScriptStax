import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import ReactBasics from '@/Navigation/IndividualNav/FrontEndNav/Granularized/ReactNav/Basics';
import ReactAdvanced from '@/Navigation/IndividualNav/FrontEndNav/Granularized/ReactNav/Advanced';
import ReactFullStack from '@/Navigation/IndividualNav/FrontEndNav/Granularized/ReactNav/FullStack';
import ReactTools from '@/Navigation/IndividualNav/FrontEndNav/Granularized/ReactNav/Tools';

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