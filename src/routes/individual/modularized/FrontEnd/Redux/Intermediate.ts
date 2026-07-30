import { RouteObject } from "react-router-dom";

import MiddlewareAndAsync from '@/routes/individual/modularized/FrontEnd/Redux/Intermediate/MiddlewareAndAsync';
import RTKQuery from '@/routes/individual/modularized/FrontEnd/Redux/Intermediate/RTKQuery';
import Selectors from '@/routes/individual/modularized/FrontEnd/Redux/Intermediate/Selectors';
import TypeScript from '@/routes/individual/modularized/FrontEnd/Redux/Intermediate/TypeScript';

const Intermediate: RouteObject[] = [
  ...MiddlewareAndAsync,
  ...RTKQuery,
  ...Selectors,
  ...TypeScript,
];

export default Intermediate;
