import { RouteObject } from "react-router-dom";

import Basics from '@/routes/Individual/Granularized/FrontEnd/React/Basics';
import Intermediate from '@/routes/Individual/Granularized/FrontEnd/React/Intermediate';
import Advanced from '@/routes/Individual/Granularized/FrontEnd/React/Advanced';

const React: RouteObject[] = [
   ...Basics, 
   ...Intermediate,
   ...Advanced
];

export default React;