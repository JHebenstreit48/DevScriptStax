import { RouteObject } from "react-router-dom";

import Topics from '@/routes/individual/modularized/FrontEnd/HTML/Advanced/Topics';
import BestPractices from '@/routes/individual/modularized/FrontEnd/HTML/Advanced/BestPractices';

const Advanced: RouteObject[] = [
  ...Topics,
  ...BestPractices,
];

export default Advanced;