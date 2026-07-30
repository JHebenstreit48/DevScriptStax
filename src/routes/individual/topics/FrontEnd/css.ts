import { RouteObject } from "react-router-dom";

import Basics from '@/routes/individual/modularized/FrontEnd/CSS/Basics';
import Advanced from '@/routes/individual/modularized/FrontEnd/CSS/Advanced';
import Tools from '@/routes/individual/modularized/FrontEnd/CSS/Tools';

const CSS: RouteObject[] = [
  ...Basics,
  ...Advanced,
  ...Tools,
];
export default CSS;