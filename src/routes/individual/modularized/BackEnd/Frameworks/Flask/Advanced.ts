import { RouteObject } from "react-router-dom";

import APIPatterns from '@/routes/individual/modularized/BackEnd/Frameworks/Flask/Advanced/APIPatterns';
import Auth from '@/routes/individual/modularized/BackEnd/Frameworks/Flask/Advanced/Auth';
import Security from '@/routes/individual/modularized/BackEnd/Frameworks/Flask/Advanced/Security';
import Performance from '@/routes/individual/modularized/BackEnd/Frameworks/Flask/Advanced/Performance';
import Production from '@/routes/individual/modularized/BackEnd/Frameworks/Flask/Advanced/Production';
import Observability from '@/routes/individual/modularized/BackEnd/Frameworks/Flask/Advanced/Observability';

const Advanced: RouteObject[] = [
  ...APIPatterns,
  ...Auth,
  ...Security,
  ...Performance,
  ...Production,
  ...Observability,
];

export default Advanced;
