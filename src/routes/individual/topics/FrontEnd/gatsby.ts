import { RouteObject } from "react-router-dom";

import Basics from '@/routes/individual/modularized/FrontEnd/Gatsby/Basics';
import Advanced from '@/routes/individual/modularized/FrontEnd/Gatsby/Advanced';

const Gatsby: RouteObject[] = [
  ...Basics,
  ...Advanced,
];
export default Gatsby;
