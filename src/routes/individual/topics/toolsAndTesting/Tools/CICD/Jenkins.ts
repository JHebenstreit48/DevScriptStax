import { RouteObject } from "react-router-dom";

import Basics from '@/routes/individual/modularized/toolsAndTesting/Tools/CICD/Jenkins/Basics';
import Advanced from '@/routes/individual/modularized/toolsAndTesting/Tools/CICD/Jenkins/Advanced';

const Jenkins: RouteObject[] = [
  ...Basics,
  ...Advanced,
];

export default Jenkins;
