import { RouteObject } from "react-router-dom";

import Basics from '@/routes/individual/modularized/BackEnd/Frameworks/Flask/Basics';
import Advanced from '@/routes/individual/modularized/BackEnd/Frameworks/Flask/Advanced';

const Flask: RouteObject[] = [
  ...Basics,
  ...Advanced,
];

export default Flask;
