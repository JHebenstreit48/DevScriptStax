import { RouteObject } from "react-router-dom";

import Basics from '@/routes/individual/modularized/Languages/Ruby/Basics';
import Advanced from '@/routes/individual/modularized/Languages/Ruby/Advanced';

const Ruby: RouteObject[] = [
  ...Basics,
  ...Advanced,
];
export default Ruby;
