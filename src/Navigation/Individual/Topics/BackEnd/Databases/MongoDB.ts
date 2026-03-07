import type { Subpage } from '@/types/navigation';

import Basics from '@/Navigation/Individual/Granularized/BackEnd/Databases/MongoDB/Basics';
import Intermediate from '@/Navigation/Individual/Granularized/BackEnd/Databases/MongoDB/Intermediate';
import Advanced from '@/Navigation/Individual/Granularized/BackEnd/Databases/MongoDB/Advanced';
import Tools from '@/Navigation/Individual/Granularized/BackEnd/Databases/MongoDB/Tools';

const MongoDB: Subpage = {
  name: 'MongoDB',
  subpages: [
    Basics,
    Intermediate,
    Advanced,
    Tools
  ]
};

export default MongoDB;