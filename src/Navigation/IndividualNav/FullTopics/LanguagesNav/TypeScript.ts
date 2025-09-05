import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import TSBasics from '@/Navigation/IndividualNav/Granularized/LanguagesNav/TypeScriptNav/Basics';
import TSIntermediate from '@/Navigation/IndividualNav/Granularized/LanguagesNav/TypeScriptNav/Intermediate';
import TSAdvanced from '@/Navigation/IndividualNav/Granularized/LanguagesNav/TypeScriptNav/Advanced';

const TSNav: Subpage = {
  name: 'TypeScript',
  subpages: [
    TSBasics,
    TSIntermediate,
    TSAdvanced,
  ]
};

export default TSNav;
