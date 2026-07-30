import { RouteObject } from "react-router-dom";

import Fundamentals from '@/routes/individual/modularized/Languages/Ruby/Basics/Fundamentals';
import DataAndErrors from '@/routes/individual/modularized/Languages/Ruby/Basics/DataAndErrors';
import ProjectSetup from '@/routes/individual/modularized/Languages/Ruby/Basics/ProjectSetup';
import IOAndUtils from '@/routes/individual/modularized/Languages/Ruby/Basics/IOAndUtils';

const Basics: RouteObject[] = [
  ...Fundamentals,
  ...DataAndErrors,
  ...ProjectSetup,
  ...IOAndUtils,
];

export default Basics;
