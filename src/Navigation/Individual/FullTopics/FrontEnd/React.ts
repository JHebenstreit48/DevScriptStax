import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

import Basics from '@/Navigation/Individual/Granularized/FrontEnd/React/Basics';
import Advanced from '@/Navigation/Individual/Granularized/FrontEnd/React/Advanced';
import ToolsAndTesting from '@/Navigation/Individual/Granularized/FrontEnd/React/ToolsAndTesting';
import Intermediate from '@/Navigation/Individual/Granularized/FrontEnd/React/Intermediate';

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
