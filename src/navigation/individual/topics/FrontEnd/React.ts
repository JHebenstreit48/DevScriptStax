import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/FrontEnd/React/Basics';
import Advanced from '@/navigation/individual/modularized/FrontEnd/React/Advanced';
import ToolsAndTesting from '@/navigation/individual/modularized/FrontEnd/React/ToolsAndTesting';
import Intermediate from '@/navigation/individual/modularized/FrontEnd/React/Intermediate';

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
