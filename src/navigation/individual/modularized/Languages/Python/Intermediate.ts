import type { Subpage } from '@/types/navigation';

import FileAndData from '@/navigation/individual/modularized/Languages/Python/Intermediate/FileAndData';
import Async from '@/navigation/individual/modularized/Languages/Python/Intermediate/Async';

const Intermediate: Subpage = {
  name: 'Intermediate',
  subpages: [
    FileAndData,
    Async
  ]
};

export default Intermediate;