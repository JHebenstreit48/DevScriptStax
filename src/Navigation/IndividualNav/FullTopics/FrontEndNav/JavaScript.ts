import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Basics from '@/Navigation/IndividualNav/Granularized/FrontEndNav/JavaScriptNav/Basics';
import Intermediate from '@/Navigation/IndividualNav/Granularized/FrontEndNav/JavaScriptNav/Intermediate';
import Advanced from '@/Navigation/IndividualNav/Granularized/FrontEndNav/JavaScriptNav/Advanced';

const JavaScript: Subpage = {
  name: 'JavaScript',
  subpages: [
    Basics,
    Intermediate,
    Advanced,
  ]
};

export default JavaScript;