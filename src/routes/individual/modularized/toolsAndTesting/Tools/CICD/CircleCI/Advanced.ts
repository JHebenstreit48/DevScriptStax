import { RouteObject } from "react-router-dom";

import OrbsAndReuse from '@/routes/individual/modularized/toolsAndTesting/Tools/CICD/CircleCI/Advanced/OrbsAndReuse';
import RunnersAndExecutors from '@/routes/individual/modularized/toolsAndTesting/Tools/CICD/CircleCI/Advanced/RunnersAndExecutors';
import PerformanceAndScale from '@/routes/individual/modularized/toolsAndTesting/Tools/CICD/CircleCI/Advanced/PerformanceAndScale';
import Security from '@/routes/individual/modularized/toolsAndTesting/Tools/CICD/CircleCI/Advanced/Security';

const Advanced: RouteObject[] = [
  ...OrbsAndReuse,
  ...RunnersAndExecutors,
  ...PerformanceAndScale,
  ...Security,
];

export default Advanced;