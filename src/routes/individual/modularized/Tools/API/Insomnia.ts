import { RouteObject } from "react-router-dom";

import Basics from '@/routes/individual/modularized/Tools/API/Insomnia/Basics';
import Advanced from '@/routes/individual/modularized/Tools/API/Insomnia/Advanced';

const Insomnia: RouteObject[] = [
  ...Basics,
  ...Advanced,
];

export default Insomnia;