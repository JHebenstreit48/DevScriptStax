import type { Subpage } from '@/types/navigation';

import NodeJS from '@/navigation/individual/modularized/glossaryAndResources/BackEnd/Frameworks/NodeJS';
import ExpressJS from '@/navigation/individual/modularized/glossaryAndResources/BackEnd/Frameworks/ExpressJS';

const Frameworks: Subpage = {
  name: 'Frameworks',
  subpages: [
    NodeJS,
    ExpressJS,
  ],
};

export default Frameworks;