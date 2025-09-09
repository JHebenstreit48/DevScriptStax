import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Basics from '@/Navigation/IndividualNav/Granularized/Languages/TypeScript/Basics';
import Intermediate from '@/Navigation/IndividualNav/Granularized/Languages/TypeScript/Intermediate';
import Advanced from '@/Navigation/IndividualNav/Granularized/Languages/TypeScript/Advanced';

const TypeScript: Subpage = {
  name: 'TypeScript',
  subpages: [
    Basics,
    Intermediate,
    Advanced,
  ]
};

export default TypeScript;