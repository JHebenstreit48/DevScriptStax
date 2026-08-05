import type { Subpage } from '@/types/navigation';

import Fundamentals from '@/navigation/individual/modularized/toolsAndTesting/Tools/Containerization/Docker/Basics/Fundamentals';
import CLIAndWorkflow from '@/navigation/individual/modularized/toolsAndTesting/Tools/Containerization/Docker/Basics/CLIAndWorkflow';
import Dockerfiles from '@/navigation/individual/modularized/toolsAndTesting/Tools/Containerization/Docker/Basics/Dockerfiles';
import Compose from '@/navigation/individual/modularized/toolsAndTesting/Tools/Containerization/Docker/Basics/Compose';
import BuildAndRegistry from '@/navigation/individual/modularized/toolsAndTesting/Tools/Containerization/Docker/Basics/BuildAndRegistry';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    Fundamentals,
    CLIAndWorkflow,
    Dockerfiles,
    Compose,
    BuildAndRegistry
  ]
};

export default Basics;