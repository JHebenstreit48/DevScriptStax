import { RouteObject } from "react-router-dom";

import Basics from '@/routes/individual/modularized/FrontEnd/Redux/Basics';
import Intermediate from '@/routes/individual/modularized/FrontEnd/Redux/Intermediate';
import Advanced from '@/routes/individual/modularized/FrontEnd/Redux/Advanced';

const Redux: RouteObject[] = [
  ...Basics,
  ...Intermediate,
  ...Advanced,
];
export default Redux;