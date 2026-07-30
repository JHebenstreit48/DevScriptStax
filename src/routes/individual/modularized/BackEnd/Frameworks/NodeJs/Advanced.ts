import { RouteObject } from "react-router-dom";

import ConcurrencyAndProcesses from '@/routes/individual/modularized/BackEnd/Frameworks/NodeJs/Advanced/ConcurrencyAndProcesses';
import Performance from '@/routes/individual/modularized/BackEnd/Frameworks/NodeJs/Advanced/Performance';
import Observability from '@/routes/individual/modularized/BackEnd/Frameworks/NodeJs/Advanced/Observability';
import Production from '@/routes/individual/modularized/BackEnd/Frameworks/NodeJs/Advanced/Production';
import Security from '@/routes/individual/modularized/BackEnd/Frameworks/NodeJs/Advanced/Security';

const Advanced: RouteObject[] = [
  ...ConcurrencyAndProcesses,
  ...Performance,
  ...Observability,
  ...Production,
  ...Security,
];

export default Advanced;
