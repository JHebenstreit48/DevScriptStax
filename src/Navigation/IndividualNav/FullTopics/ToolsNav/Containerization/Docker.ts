import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import DockerBasics from '@/Navigation/IndividualNav/Granularized/ToolsNav/Containerization/DockerNav/Basics';
import DockerAdvanced from '@/Navigation/IndividualNav/Granularized/ToolsNav/Containerization/DockerNav/Advanced';

const DockerNav: Subpage = {
  name: 'Docker',
  subpages: [
    DockerBasics,
    DockerAdvanced
  ]
};

export default DockerNav;