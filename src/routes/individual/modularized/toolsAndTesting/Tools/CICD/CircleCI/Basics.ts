import { RouteObject } from "react-router-dom";

import Fundamentals from '@/routes/individual/modularized/toolsAndTesting/Tools/CICD/CircleCI/Basics/Fundamentals';
import CircleCISetup from '@/routes/individual/modularized/toolsAndTesting/Tools/CICD/CircleCI/Basics/Setup';
import JobsAndWorkflows from '@/routes/individual/modularized/toolsAndTesting/Tools/CICD/CircleCI/Basics/JobsAndWorkflows';
import Pipelines from '@/routes/individual/modularized/toolsAndTesting/Tools/CICD/CircleCI/Basics/Pipelines';

const Basics: RouteObject[] = [
  ...Fundamentals,
  ...CircleCISetup,
  ...JobsAndWorkflows,
  ...Pipelines,
];

export default Basics;
