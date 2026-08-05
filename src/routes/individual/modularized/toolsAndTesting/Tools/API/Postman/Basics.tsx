import { RouteObject } from "react-router-dom";

import Fundamentals from '@/routes/individual/modularized/toolsAndTesting/Tools/API/Postman/Basics/Fundamentals';
import Requests from '@/routes/individual/modularized/toolsAndTesting/Tools/API/Postman/Basics/Requests';
import Workspaces from '@/routes/individual/modularized/toolsAndTesting/Tools/API/Postman/Basics/Workspaces';
import Debugging from '@/routes/individual/modularized/toolsAndTesting/Tools/API/Postman/Basics/Debugging';

const Basics: RouteObject[] = [
  ...Fundamentals,
  ...Requests,
  ...Workspaces,
  ...Debugging,
];

export default Basics;
