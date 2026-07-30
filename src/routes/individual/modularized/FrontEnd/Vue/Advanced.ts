import { RouteObject } from "react-router-dom";

import FrameworkFeatures from '@/routes/individual/modularized/FrontEnd/Vue/Advanced/FrameworkFeatures';
import BestPractices from '@/routes/individual/modularized/FrontEnd/Vue/Advanced/BestPractices';

const Advanced: RouteObject[] = [
  ...FrameworkFeatures,
  ...BestPractices,
];

export default Advanced;
