import { RouteObject } from "react-router-dom";

import Basics from '@/routes/individual/modularized/FrontEnd/Angular/Basics';
import Advanced from '@/routes/individual/modularized/FrontEnd/Angular/Advanced';
import Testing from '@/routes/individual/modularized/FrontEnd/Angular/Testing';

const Angular: RouteObject[] = [
    ...Basics,
    ...Advanced,
    ...Testing
];
export default Angular;