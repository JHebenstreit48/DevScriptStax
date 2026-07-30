import { RouteObject } from "react-router-dom";

import Insomnia from '@/routes/individual/modularized/Tools/API/Insomnia';
import Postman from '@/routes/individual/modularized/Tools/API/Postman';

const API: RouteObject[] = [
  ...Insomnia,
  ...Postman,
];
export default API;