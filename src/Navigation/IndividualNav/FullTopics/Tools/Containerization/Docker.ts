import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Basics from '@/Navigation/IndividualNav/Granularized/Tools/Containerization/Docker/Basics';
import Advanced from '@/Navigation/IndividualNav/Granularized/Tools/Containerization/Docker/Advanced';

const Docker: Subpage = {
  name: 'Docker',
  subpages: [
    Basics,
    Advanced
  ]
};

export default Docker;