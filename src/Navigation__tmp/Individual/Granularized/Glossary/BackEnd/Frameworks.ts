import type { Subpage } from '@/types/navigation';

import NodeJS from '@/Navigation/Individual/Granularized/Glossary/BackEnd/Frameworks/NodeJS';
import ExpressJS from '@/Navigation/Individual/Granularized/Glossary/BackEnd/Frameworks/ExpressJS';

const Frameworks: Subpage = {
  name: 'Frameworks',
  subpages: [
    NodeJS,
    ExpressJS,
  ],
};

export default Frameworks;