import { RouteObject } from "react-router-dom";

import Basics from '@/routes/individual/modularized/Languages/JavaScript/Basics';
import Advanced from '@/routes/individual/modularized/Languages/JavaScript/Advanced';
import Testing from '@/routes/individual/modularized/Languages/JavaScript/Testing';

const JavaScript: RouteObject[] = [
  ...Basics,
  ...Advanced,
  ...Testing
];
export default JavaScript;