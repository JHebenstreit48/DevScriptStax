import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Fundamentals from '@/Navigation/IndividualNav/Granularized/Tools/Containerization/Git/Basics/Fundamentals';
import InstallAndConfig from '@/Navigation/IndividualNav/Granularized/Tools/Containerization/Git/Basics/InstallAndConfig';
import Workflow from '@/Navigation/IndividualNav/Granularized/Tools/Containerization/Git/Basics/Workflow';
import Commands from '@/Navigation/IndividualNav/Granularized/Tools/Containerization/Git/Basics/Commands';

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