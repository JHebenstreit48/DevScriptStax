import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Basics from '@/Navigation/IndividualNav/Granularized/Languages/Python/Basics';
import Intermediate from '@/Navigation/IndividualNav/Granularized/Languages/Python/Intermediate';
import Advanced from '@/Navigation/IndividualNav/Granularized/Languages/Python/Advanced';

const Python: Subpage = {
  name: 'Python',
  subpages: [
    Basics,
    Intermediate,
    Advanced
  ]
};

export default Python;