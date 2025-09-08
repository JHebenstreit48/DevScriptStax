import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Basics from '@/Navigation/IndividualNav/Granularized/FrontEnd/React/Basics';
import Advanced from '@/Navigation/IndividualNav/Granularized/FrontEnd/React/Advanced';
import ToolsAndTesting from '@/Navigation/IndividualNav/Granularized/FrontEnd/React/ToolsAndTesting';
import Intermediate from '@/Navigation/IndividualNav/Granularized/FrontEnd/React/Intermediate';

const React: Subpage = {
  name: 'React',
  subpages: [
    Basics,
    Intermediate,
    Advanced,
    ToolsAndTesting
  ]
};

export default React;
