import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

import Basics from '@/Navigation/Individual/Granularized/Stacks/MERN/Basics';
import Advanced from '@/Navigation/Individual/Granularized/Stacks/MERN/Advanced';

const MERN: Subpage = {
  name: 'MERN',
  subpages: [
    Basics,
    Advanced,
  ],
};

export default MERN;