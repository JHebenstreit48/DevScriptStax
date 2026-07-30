import type { Subpage } from '@/types/navigation';

import Fundamentals from '@/Navigation/Individual/Granularized/BackEnd/AuthenticationAuthorization/Authentication/Basics/Fundamentals'
import Methods from '@/Navigation/Individual/Granularized/BackEnd/AuthenticationAuthorization/Authentication/Basics/Methods'

const Basics: Subpage = {
  name: 'Basics',
  subpages: [
    Fundamentals,
    Methods
  ],
};

export default Basics;