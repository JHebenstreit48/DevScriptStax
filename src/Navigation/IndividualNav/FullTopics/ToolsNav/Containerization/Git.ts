import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import GitAdvanced from '@/Navigation/IndividualNav/Granularized/ToolsNav/Containerization/GitNavigation/Advanced';

import GitBasics from '@/Navigation/IndividualNav/Granularized/ToolsNav/Containerization/GitNavigation/Basics';

const GitNav: Subpage = {
  name: 'Git',
  subpages: [
    GitBasics,
    GitAdvanced
  ]
};

export default GitNav;