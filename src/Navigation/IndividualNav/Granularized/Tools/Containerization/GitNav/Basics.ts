import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Fundamentals from '@/Navigation/IndividualNav/Granularized/ToolsNav/Containerization/GitNav/Basics/Fundamentals';
import InstallAndConfig from '@/Navigation/IndividualNav/Granularized/ToolsNav/Containerization/GitNav/Basics/InstallAndConfig';
import Workflow from '@/Navigation/IndividualNav/Granularized/ToolsNav/Containerization/GitNav/Basics/Workflow';
import Commands from '@/Navigation/IndividualNav/Granularized/ToolsNav/Containerization/GitNav/Basics/Commands';

const Basics: Subpage = {
  name: 'Basics',
  subpages: [
    Fundamentals,
    InstallAndConfig,
    Workflow,
    Commands
  ],
};

export default Basics;