import { RouteObject } from "react-router-dom";

import Basics from '@/routes/individual/modularized/BackEnd/Frameworks/ExpressJs/Basics';
import Advanced from '@/routes/individual/modularized/BackEnd/Frameworks/ExpressJs/Advanced';

const ExpressJs: RouteObject[] = [
  ...Basics,
  ...Advanced,
];

export default ExpressJs;
