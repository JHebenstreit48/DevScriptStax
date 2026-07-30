import type { Subpage } from '@/types/navigation';

import FileAndData from '@/Navigation/Individual/Granularized/Languages/Python/Intermediate/FileAndData';
import Async from '@/Navigation/Individual/Granularized/Languages/Python/Intermediate/Async';

const Intermediate: Subpage = {
  name: 'Intermediate',
  subpages: [
    FileAndData,
    Async
  ]
};

export default Intermediate;