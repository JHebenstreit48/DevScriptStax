import { RouteObject } from "react-router-dom";

import Basics from '@/routes/individual/modularized/Tools/CICD/CircleCI/Basics';
import Advanced from '@/routes/individual/modularized/Tools/CICD/CircleCI/Advanced';

const CircleCI: RouteObject[] = [
  ...Basics,
  ...Advanced,
];

export default CircleCI;