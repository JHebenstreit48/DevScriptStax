import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/toolsAndTesting/Testing/Unit/RSpec/Basics';
import Advanced from '@/navigation/individual/modularized/toolsAndTesting/Testing/Unit/RSpec/Advanced';


const RSpec: Subpage = {
  name: 'RSpec',
  subpages: [
    Basics,
    Advanced
  ]
};

export default RSpec;