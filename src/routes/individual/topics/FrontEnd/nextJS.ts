import { RouteObject } from "react-router-dom";

import Basics from '@/routes/individual/modularized/FrontEnd/NextJs/Basics';
import Advanced from '@/routes/individual/modularized/FrontEnd/NextJs/Advanced';

const NextJs: RouteObject[] = [
  ...Basics,
  ...Advanced,
];
export default NextJs;