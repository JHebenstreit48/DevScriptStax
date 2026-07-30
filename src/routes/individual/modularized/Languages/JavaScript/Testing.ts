import { RouteObject } from "react-router-dom";

import Basics from '@/routes/individual/modularized/Languages/JavaScript/Testing/Basics';
import Advanced from '@/routes/individual/modularized/Languages/JavaScript/Testing/Advanced';

const Testing: RouteObject[] = [
  ...Basics,
  ...Advanced,
];

export default Testing;