import { RouteObject } from "react-router-dom";

import Basics from '@/routes/individual/modularized/BackEnd/Frameworks/Spring/SpringMain/Basics';
import Advanced from '@/routes/individual/modularized/BackEnd/Frameworks/Spring/SpringMain/Advanced';

const SpringMain: RouteObject[] = [
  ...Basics,
  ...Advanced,
];

export default SpringMain;
