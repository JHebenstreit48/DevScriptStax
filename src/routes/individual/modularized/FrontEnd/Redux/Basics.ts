import { RouteObject } from "react-router-dom";

import Fundamentals from '@/routes/individual/modularized/FrontEnd/Redux/Basics/Fundamentals';
import ReactIntegration from '@/routes/individual/modularized/FrontEnd/Redux/Basics/ReactIntegration';
import StateAndReducers from '@/routes/individual/modularized/FrontEnd/Redux/Basics/StateAndReducers';
import StoreSetup from '@/routes/individual/modularized/FrontEnd/Redux/Basics/StoreSetup';

const Basics: RouteObject[] = [
  ...Fundamentals,
  ...ReactIntegration,
  ...StateAndReducers,
  ...StoreSetup,
];

export default Basics;
