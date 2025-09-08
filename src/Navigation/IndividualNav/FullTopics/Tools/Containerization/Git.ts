import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Basics from '@/Navigation/IndividualNav/Granularized/ToolsNav/Containerization/GitNav/Basics';
import Advanced from '@/Navigation/IndividualNav/Granularized/ToolsNav/Containerization/GitNav/Advanced';

const Git: Subpage = {
  name: 'Git',
  subpages: [
    Basics,
    Advanced
  ]
};

export default Git;