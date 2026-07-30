import { RouteObject } from "react-router-dom";

import Basics from '@/routes/individual/modularized/BackEnd/Frameworks/Django/Basics';
import Advanced from '@/routes/individual/modularized/BackEnd/Frameworks/Django/Advanced';

const Django: RouteObject[] = [
  ...Basics,
  ...Advanced,
];

export default Django;
