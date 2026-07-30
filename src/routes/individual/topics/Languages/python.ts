import { RouteObject } from "react-router-dom";

import Basics from '@/routes/individual/modularized/Languages/Python/Basics';
import Intermediate from '@/routes/individual/modularized/Languages/Python/Intermediate';
import Advanced from '@/routes/individual/modularized/Languages/Python/Advanced';

const Python: RouteObject[] = [
  ...Basics,
  ...Intermediate,
  ...Advanced,
];
export default Python;