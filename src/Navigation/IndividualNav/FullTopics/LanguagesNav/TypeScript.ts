import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Basics from '@/Navigation/IndividualNav/Granularized/LanguagesNav/TypeScriptNav/Basics';
import Intermediate from '@/Navigation/IndividualNav/Granularized/LanguagesNav/TypeScriptNav/Intermediate';
import Advanced from '@/Navigation/IndividualNav/Granularized/LanguagesNav/TypeScriptNav/Advanced';

const TypeScript: Subpage = {
  name: 'TypeScript',
  subpages: [
    Basics,
    Intermediate,
    Advanced,
  ]
};

export default TypeScript;
