import { RouteObject } from "react-router-dom";

import Errors from '@/routes/individual/modularized/Languages/Go/Advanced/Errors';
import Modules from '@/routes/individual/modularized/Languages/Go/Advanced/Modules';
import Concurrency from '@/routes/individual/modularized/Languages/Go/Advanced/Concurrency';
import PerformanceAndMemory from '@/routes/individual/modularized/Languages/Go/Advanced/PerformanceAndMemory';

const Advanced: RouteObject[] = [
  ...Errors,
  ...Modules,
  ...Concurrency,
  ...PerformanceAndMemory,
];

export default Advanced;
