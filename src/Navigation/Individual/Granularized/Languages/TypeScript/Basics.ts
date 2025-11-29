import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

import Fundamentals from '@/Navigation/Individual/Granularized/Languages/TypeScript/Basics/Fundamentals';
import Types from '@/Navigation/Individual/Granularized/Languages/TypeScript/Basics/Types';

const Basics: Subpage = {
  name: 'Basics',
  subpages: [
    Fundamentals,
    Types
  ]
};

export default Basics;