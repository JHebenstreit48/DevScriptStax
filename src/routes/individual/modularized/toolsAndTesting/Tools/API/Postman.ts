import { RouteObject } from "react-router-dom";

import Basics from '@/routes/individual/modularized/toolsAndTesting/Tools/API/Postman/Basics';
import Advanced from '@/routes/individual/modularized/toolsAndTesting/Tools/API/Postman/Advanced';

const Postman: RouteObject[] = [
  ...Basics,
  ...Advanced,
];

export default Postman;