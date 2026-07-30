import type { Subpage } from '@/types/navigation';

import Basics from '@/Navigation/Individual/Granularized/Testing/Unit/RSpec/Basics';
import Advanced from '@/Navigation/Individual/Granularized/Testing/Unit/RSpec/Advanced';


const RSpec: Subpage = {
  name: 'RSpec',
  subpages: [
    Basics,
    Advanced
  ]
};

export default RSpec;