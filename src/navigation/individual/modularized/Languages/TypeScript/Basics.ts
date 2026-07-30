import type { Subpage } from '@/types/navigation';

import Fundamentals from '@/navigation/individual/modularized/Languages/TypeScript/Basics/Fundamentals';
import Types from '@/navigation/individual/modularized/Languages/TypeScript/Basics/Types';

const Basics: Subpage = {
  name: 'Basics',
  subpages: [
    Fundamentals,
    Types
  ]
};

export default Basics;