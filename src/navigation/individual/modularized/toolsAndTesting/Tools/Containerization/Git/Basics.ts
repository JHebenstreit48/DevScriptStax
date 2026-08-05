import type { Subpage } from '@/types/navigation';

import Fundamentals from '@/navigation/individual/modularized/toolsAndTesting/Tools/Containerization/Git/Basics/Fundamentals';
import InstallAndConfig from '@/navigation/individual/modularized/toolsAndTesting/Tools/Containerization/Git/Basics/InstallAndConfig';
import Workflow from '@/navigation/individual/modularized/toolsAndTesting/Tools/Containerization/Git/Basics/Workflow';
import Commands from '@/navigation/individual/modularized/toolsAndTesting/Tools/Containerization/Git/Basics/Commands';

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