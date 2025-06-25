import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import GitBasics from '@/Navigation/IndividualNav/Granularized/ToolsNav/Containerization/GitNav/Basics';
import GitAdvanced from '@/Navigation/IndividualNav/Granularized/ToolsNav/Containerization/GitNav/Advanced';

const GitNav: Subpage = {
  name: 'Git',
  subpages: [
    GitBasics,
    GitAdvanced
  ]
};

export default GitNav;