import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/Tools/Containerization/Git/Basics';
import Advanced from '@/navigation/individual/modularized/Tools/Containerization/Git/Advanced';

const Git: Subpage = {
  name: 'Git',
  subpages: [
    Basics,
    Advanced
  ]
};

export default Git;