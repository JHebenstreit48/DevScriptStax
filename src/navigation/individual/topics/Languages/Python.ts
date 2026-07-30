import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/Languages/Python/Basics';
import Intermediate from '@/navigation/individual/modularized/Languages/Python/Intermediate';
import Advanced from '@/navigation/individual/modularized/Languages/Python/Advanced';

const Python: Subpage = {
  name: 'Python',
  subpages: [
    Basics,
    Intermediate,
    Advanced
  ]
};

export default Python;