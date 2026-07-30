import { RouteObject } from "react-router-dom";

import ContextAndProfiles from '@/routes/individual/modularized/BackEnd/Frameworks/Spring/SpringMain/Advanced/ContextAndProfiles';
import AOPAdvanced from '@/routes/individual/modularized/BackEnd/Frameworks/Spring/SpringMain/Advanced/AOPAdvanced';
import ResourcesAndSpEL from '@/routes/individual/modularized/BackEnd/Frameworks/Spring/SpringMain/Advanced/ResourcesAndSpEL';
import Events from '@/routes/individual/modularized/BackEnd/Frameworks/Spring/SpringMain/Advanced/Events';

const Advanced: RouteObject[] = [
  ...ContextAndProfiles,
  ...AOPAdvanced,
  ...ResourcesAndSpEL,
  ...Events,
];

export default Advanced;
