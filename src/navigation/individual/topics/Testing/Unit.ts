import type { Subpage } from '@/types/navigation';

import Pytest from '@/navigation/individual/topics/Testing/Unit/Pytest';
import RSpec from '@/navigation/individual/topics/Testing/Unit/RSpec';
import PHPUnit from '@/navigation/individual/topics/Testing/Unit/PHPUnit';

const Unit: Subpage = {
  name: 'Unit',
  subpages: [
    Pytest,
    RSpec,
    PHPUnit
  ]
};

export default Unit;