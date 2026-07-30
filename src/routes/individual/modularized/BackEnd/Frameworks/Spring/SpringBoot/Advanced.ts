import { RouteObject } from "react-router-dom";

import API from '@/routes/individual/modularized/BackEnd/Frameworks/Spring/SpringBoot/Advanced/API';
import Security from '@/routes/individual/modularized/BackEnd/Frameworks/Spring/SpringBoot/Advanced/Security';
import Data from '@/routes/individual/modularized/BackEnd/Frameworks/Spring/SpringBoot/Advanced/Data';
import Observability from '@/routes/individual/modularized/BackEnd/Frameworks/Spring/SpringBoot/Advanced/Observability';
import Production from '@/routes/individual/modularized/BackEnd/Frameworks/Spring/SpringBoot/Advanced/Production';
import AsyncAndScheduling from '@/routes/individual/modularized/BackEnd/Frameworks/Spring/SpringBoot/Advanced/AsyncAndScheduling';

const Advanced: RouteObject[] = [
  ...API,
  ...Security,
  ...Data,
  ...Observability,
  ...Production,
  ...AsyncAndScheduling,
];

export default Advanced;
