import { RouteObject } from "react-router-dom";

import Basics from '@/routes/individual/modularized/FrontEnd/HTML/Basics';
import Advanced from '@/routes/individual/modularized/FrontEnd/HTML/Advanced';

const HTML: RouteObject[] = [
  ...Basics,
  ...Advanced,
];
export default HTML;
