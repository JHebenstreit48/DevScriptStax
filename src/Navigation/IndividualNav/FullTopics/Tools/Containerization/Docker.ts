import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Basics from '@/Navigation/IndividualNav/Granularized/ToolsNav/Containerization/DockerNav/Basics';
import Advanced from '@/Navigation/IndividualNav/Granularized/ToolsNav/Containerization/DockerNav/Advanced';

const Docker: Subpage = {
  name: 'Docker',
  subpages: [
    Basics,
    Advanced
  ]
};

export default Docker;