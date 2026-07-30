import { RouteObject } from "react-router-dom";

import FileAndData from '@/routes/individual/modularized/Languages/Python/Intermediate/FileAndData';
import Async from '@/routes/individual/modularized/Languages/Python/Intermediate/Async';

const Intermediate: RouteObject[] = [
  ...FileAndData,
  ...Async,
];

export default Intermediate;