import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

import Basics from '@/Navigation/Individual/Granularized/Languages/Python/Basics';
import Intermediate from '@/Navigation/Individual/Granularized/Languages/Python/Intermediate';
import Advanced from '@/Navigation/Individual/Granularized/Languages/Python/Advanced';

const Python: Subpage = {
  name: 'Python',
  subpages: [
    Basics,
    Intermediate,
    Advanced
  ]
};

export default Python;