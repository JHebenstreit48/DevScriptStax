import { RouteObject } from "react-router-dom";

import Basics from '@/routes/individual/modularized/FrontEnd/React/Basics';
import Intermediate from '@/routes/individual/modularized/FrontEnd/React/Intermediate';
import Advanced from '@/routes/individual/modularized/FrontEnd/React/Advanced';

const React: RouteObject[] = [
   ...Basics, 
   ...Intermediate,
   ...Advanced
];

export default React;