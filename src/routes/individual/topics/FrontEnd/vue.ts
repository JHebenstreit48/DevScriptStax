import { RouteObject } from "react-router-dom";

import Basics from '@/routes/individual/modularized/FrontEnd/Vue/Basics';
import Advanced from '@/routes/individual/modularized/FrontEnd/Vue/Advanced';

const Vue: RouteObject[] = [
  ...Basics,
  ...Advanced,
];
export default Vue;