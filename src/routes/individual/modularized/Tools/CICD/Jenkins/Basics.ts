import { RouteObject } from "react-router-dom";

import Fundamentals from '@/routes/individual/modularized/Tools/CICD/Jenkins/Basics/Fundamentals';
import Setup from '@/routes/individual/modularized/Tools/CICD/Jenkins/Basics/Setup';
import Pipelines from '@/routes/individual/modularized/Tools/CICD/Jenkins/Basics/Pipelines';

const Basics: RouteObject[] = [
  ...Fundamentals,
  ...Setup,
  ...Pipelines,
];

export default Basics;