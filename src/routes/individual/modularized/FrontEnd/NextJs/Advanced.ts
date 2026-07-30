import { RouteObject } from "react-router-dom";

import AdvancedFeatures from '@/routes/individual/modularized/FrontEnd/NextJs/Advanced/AdvancedFeatures';
import Deployment from '@/routes/individual/modularized/FrontEnd/NextJs/Advanced/Deployment';

const Advanced: RouteObject[] = [
  ...AdvancedFeatures,
  ...Deployment,
];

export default Advanced;