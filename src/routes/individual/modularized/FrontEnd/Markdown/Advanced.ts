import { RouteObject } from "react-router-dom";

import Extending from '@/routes/individual/modularized/FrontEnd/Markdown/Advanced/Extending';
import BestPractices from '@/routes/individual/modularized/FrontEnd/Markdown/Advanced/BestPractices';

const Advanced: RouteObject[] = [
  ...Extending,
  ...BestPractices,
];

export default Advanced;