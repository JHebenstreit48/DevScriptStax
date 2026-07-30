import { RouteObject } from "react-router-dom";

import Basics from '@/routes/individual/modularized/FrontEnd/HTML/Basics';
import Intermediate from '@/routes/individual/modularized/FrontEnd/HTML/Intermediate';
import Advanced from '@/routes/individual/modularized/FrontEnd/HTML/Advanced';

const HTML: RouteObject[] = [
  ...Basics,
  ...Intermediate,
  ...Advanced,
];
export default HTML;
