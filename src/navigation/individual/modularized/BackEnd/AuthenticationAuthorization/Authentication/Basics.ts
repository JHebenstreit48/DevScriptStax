import type { Subpage } from '@/types/navigation';

import Fundamentals from '@/navigation/individual/modularized/BackEnd/AuthenticationAuthorization/Authentication/Basics/Fundamentals'
import Methods from '@/navigation/individual/modularized/BackEnd/AuthenticationAuthorization/Authentication/Basics/Methods'

const Basics: Subpage = {
  name: 'Basics',
  subpages: [
    Fundamentals,
    Methods
  ],
};

export default Basics;