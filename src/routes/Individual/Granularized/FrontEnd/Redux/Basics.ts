import { RouteObject } from "react-router-dom";

import Fundamentals from "@/routes/Individual/Granularized/FrontEnd/Redux/Basics/Fundamentals";
import ReactIntegration from "@/routes/Individual/Granularized/FrontEnd/Redux/Basics/ReactIntegration";
import StateAndReducers from "@/routes/Individual/Granularized/FrontEnd/Redux/Basics/StateAndReducers";
import StoreSetup from "@/routes/Individual/Granularized/FrontEnd/Redux/Basics/StoreSetup";

const Basics: RouteObject[] = [
  ...Fundamentals,
  ...ReactIntegration,
  ...StateAndReducers,
  ...StoreSetup,
];

export default Basics;
