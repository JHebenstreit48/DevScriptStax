import type { Subpage } from '@/types/navigation';

import Pytest from '@/Navigation/Individual/Topics/Testing/Unit/Pytest';
import RSpec from '@/Navigation/Individual/Topics/Testing/Unit/RSpec';
import PHPUnit from '@/Navigation/Individual/Topics/Testing/Unit/PHPUnit';

const Unit: Subpage = {
  name: 'Unit',
  subpages: [
    Pytest,
    RSpec,
    PHPUnit
  ]
};

export default Unit;