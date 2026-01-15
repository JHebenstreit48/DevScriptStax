import type { Subpage } from '@/types/navigation';

import Fundamentals from '@/Navigation/Individual/Granularized/Tools/Containerization/Docker/Basics/Fundamentals';
import CLIAndWorkflow from '@/Navigation/Individual/Granularized/Tools/Containerization/Docker/Basics/CLIAndWorkflow';
import Dockerfiles from '@/Navigation/Individual/Granularized/Tools/Containerization/Docker/Basics/Dockerfiles';
import Compose from '@/Navigation/Individual/Granularized/Tools/Containerization/Docker/Basics/Compose';
import BuildAndRegistry from '@/Navigation/Individual/Granularized/Tools/Containerization/Docker/Basics/BuildAndRegistry';

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