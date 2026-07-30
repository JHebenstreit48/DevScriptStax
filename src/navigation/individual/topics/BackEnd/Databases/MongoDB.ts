import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/BackEnd/Databases/MongoDB/Basics';
import Intermediate from '@/navigation/individual/modularized/BackEnd/Databases/MongoDB/Intermediate';
import Advanced from '@/navigation/individual/modularized/BackEnd/Databases/MongoDB/Advanced';
import Tools from '@/navigation/individual/modularized/BackEnd/Databases/MongoDB/Tools';
import Testing from '@/navigation/individual/modularized/BackEnd/Databases/MongoDB/Testing';

const MongoDB: Subpage = {
  name: 'MongoDB',
  subpages: [
    Basics,
    Intermediate,
    Advanced,
    Tools,
    Testing
  ]
};

export default MongoDB;