import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/Tools/Containerization/Docker/Basics';
import Advanced from '@/navigation/individual/modularized/Tools/Containerization/Docker/Advanced';

const Docker: Subpage = {
  name: 'Docker',
  subpages: [
    Basics,
    Advanced
  ]
};

export default Docker;