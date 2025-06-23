import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import GoBasics from '@/Navigation/IndividualNav/Granularized/LanguagesNav/Go/Basics';
import GoIntermediate from '@/Navigation/IndividualNav/Granularized/LanguagesNav/Go/Intermediate';
import GoAdvanced from '@/Navigation/IndividualNav/Granularized/LanguagesNav/Go/Advanced';

const GoNav: Subpage = {
  name: 'Go',
  subpages: [
    GoBasics,
    GoIntermediate,
    GoAdvanced
  ]
};

export default GoNav;
