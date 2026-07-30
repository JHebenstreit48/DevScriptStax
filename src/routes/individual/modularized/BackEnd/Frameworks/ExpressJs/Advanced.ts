import { RouteObject } from "react-router-dom";

import APIPatterns from '@/routes/individual/modularized/BackEnd/Frameworks/ExpressJs/Advanced/APIPatterns';
import Auth from '@/routes/individual/modularized/BackEnd/Frameworks/ExpressJs/Advanced/Auth';
import Security from '@/routes/individual/modularized/BackEnd/Frameworks/ExpressJs/Advanced/Security';
import Performance from '@/routes/individual/modularized/BackEnd/Frameworks/ExpressJs/Advanced/Performance';
import Production from '@/routes/individual/modularized/BackEnd/Frameworks/ExpressJs/Advanced/Production';
import Observability from '@/routes/individual/modularized/BackEnd/Frameworks/ExpressJs/Advanced/Observability';

const Advanced: RouteObject[] = [
  ...APIPatterns,
  ...Auth,
  ...Security,
  ...Performance,
  ...Production,
  ...Observability,
];

export default Advanced;
