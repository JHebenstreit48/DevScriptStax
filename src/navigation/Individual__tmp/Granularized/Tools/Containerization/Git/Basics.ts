import type { Subpage } from '@/types/navigation';

import Fundamentals from '@/Navigation/Individual/Granularized/Tools/Containerization/Git/Basics/Fundamentals';
import InstallAndConfig from '@/Navigation/Individual/Granularized/Tools/Containerization/Git/Basics/InstallAndConfig';
import Workflow from '@/Navigation/Individual/Granularized/Tools/Containerization/Git/Basics/Workflow';
import Commands from '@/Navigation/Individual/Granularized/Tools/Containerization/Git/Basics/Commands';

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