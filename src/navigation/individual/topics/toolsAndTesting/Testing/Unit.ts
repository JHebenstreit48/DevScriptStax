import type { Subpage } from '@/types/navigation';

import Pytest from '@/navigation/individual/topics/toolsAndTesting/Testing/Unit/Pytest';
import RSpec from '@/navigation/individual/topics/toolsAndTesting/Testing/Unit/RSpec';
import PHPUnit from '@/navigation/individual/topics/toolsAndTesting/Testing/Unit/PHPUnit';

const Unit: Subpage = {
  name: 'Unit',
  subpages: [
    Pytest,
    RSpec,
    PHPUnit
  ]
};

export default Unit;