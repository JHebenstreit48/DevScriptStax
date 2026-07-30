import { RouteObject } from "react-router-dom";

import Basics from '@/routes/individual/modularized/FrontEnd/CSS/Tools/Frameworks/Bootstrap/Basics';
import Advanced from '@/routes/individual/modularized/FrontEnd/CSS/Tools/Frameworks/Bootstrap/Advanced';

const Bootstrap: RouteObject[] = [
  ...Basics,
  ...Advanced,
];

export default Bootstrap;
