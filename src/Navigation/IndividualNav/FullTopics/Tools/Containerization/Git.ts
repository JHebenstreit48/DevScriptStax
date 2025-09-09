import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Basics from '@/Navigation/IndividualNav/Granularized/Tools/Containerization/Git/Basics';
import Advanced from '@/Navigation/IndividualNav/Granularized/Tools/Containerization/Git/Advanced';

const Git: Subpage = {
  name: 'Git',
  subpages: [
    Basics,
    Advanced
  ]
};

export default Git;