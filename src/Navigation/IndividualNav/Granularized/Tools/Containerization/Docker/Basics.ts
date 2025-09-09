import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

import Fundamentals from '@/Navigation/IndividualNav/Granularized/Tools/Containerization/Docker/Basics/Fundamentals';
import CLIAndWorkflow from '@/Navigation/IndividualNav/Granularized/Tools/Containerization/Docker/Basics/CLIAndWorkflow';
import Dockerfiles from '@/Navigation/IndividualNav/Granularized/Tools/Containerization/Docker/Basics/Dockerfiles';
import Compose from '@/Navigation/IndividualNav/Granularized/Tools/Containerization/Docker/Basics/Compose';
import BuildAndRegistry from '@/Navigation/IndividualNav/Granularized/Tools/Containerization/Docker/Basics/BuildAndRegistry';

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