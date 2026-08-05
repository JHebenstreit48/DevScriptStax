import { RouteObject } from "react-router-dom";

import Insomnia from '@/routes/individual/modularized/toolsAndTesting/Tools/API/Insomnia';
import Postman from '@/routes/individual/modularized/toolsAndTesting/Tools/API/Postman';

const API: RouteObject[] = [
  ...Insomnia,
  ...Postman,
];
export default API;