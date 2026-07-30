import { RouteObject } from "react-router-dom";

import Language from '@/routes/individual/modularized/Languages/Ruby/Advanced/Language';
import Concurrency from '@/routes/individual/modularized/Languages/Ruby/Advanced/Concurrency';
import PerfAndTooling from '@/routes/individual/modularized/Languages/Ruby/Advanced/PerfAndTooling';

const Advanced: RouteObject[] = [
  ...Language,
  ...Concurrency,
  ...PerfAndTooling,
];

export default Advanced;
