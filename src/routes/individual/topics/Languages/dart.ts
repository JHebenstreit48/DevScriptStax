import { RouteObject } from "react-router-dom";

import Basics from '@/routes/individual/modularized/Languages/Dart/Basics';
import Advanced from '@/routes/individual/modularized/Languages/Dart/Advanced';
import Testing from '@/routes/individual/modularized/Languages/Dart/Testing';
import Tools from '@/routes/individual/modularized/Languages/Dart/Tools';

const Dart: RouteObject[] = [
  ...Basics,
  ...Advanced,
  ...Testing,
  ...Tools,
];
export default Dart;