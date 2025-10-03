import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

import Basics from '@/Navigation/Individual/Granularized/Tools/Containerization/Docker/Basics';
import Advanced from '@/Navigation/Individual/Granularized/Tools/Containerization/Docker/Advanced';

const Docker: Subpage = {
  name: 'Docker',
  subpages: [
    Basics,
    Advanced
  ]
};

export default Docker;