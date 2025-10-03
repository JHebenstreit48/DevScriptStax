import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

import Basics from '@/Navigation/Individual/Granularized/Tools/Containerization/Git/Basics';
import Advanced from '@/Navigation/Individual/Granularized/Tools/Containerization/Git/Advanced';

const Git: Subpage = {
  name: 'Git',
  subpages: [
    Basics,
    Advanced
  ]
};

export default Git;