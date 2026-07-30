import { RouteObject } from "react-router-dom";

import Basics from '@/routes/individual/modularized/Languages/Go/Basics';
import Intermediate from '@/routes/individual/modularized/Languages/Go/Intermediate';
import Advanced from '@/routes/individual/modularized/Languages/Go/Advanced';

const Go: RouteObject[] = [
  ...Basics,
  ...Intermediate,
  ...Advanced,
];
export default Go;