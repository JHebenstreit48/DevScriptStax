import { RouteObject } from "react-router-dom";

import Fundamentals from '@/routes/individual/modularized/Languages/JavaScript/Testing/Basics/Fundamentals';
import Authoring from '@/routes/individual/modularized/Languages/JavaScript/Testing/Basics/Authoring';
import DoublesAndIsolation from '@/routes/individual/modularized/Languages/JavaScript/Testing/Basics/DoublesAndIsolation';
import AsyncAndTimers from '@/routes/individual/modularized/Languages/JavaScript/Testing/Basics/AsyncAndTimers';
import ModulesAndState from '@/routes/individual/modularized/Languages/JavaScript/Testing/Basics/ModulesAndState';

const Basics: RouteObject[] = [
  ...Fundamentals,
  ...Authoring,
  ...DoublesAndIsolation,
  ...AsyncAndTimers,
  ...ModulesAndState,
];

export default Basics;
