import type { Subpage } from '@/types/navigation';

import Basics from '@/Navigation/Individual/Granularized/Tools/Containerization/Docker/Basics';
import Advanced from '@/Navigation/Individual/Granularized/Tools/Containerization/Docker/Advanced';

const Docker: Subpage = {
  name: 'Docker',
  subpages: [
    Basics,
    Advanced
  ]
};

export default Docker;