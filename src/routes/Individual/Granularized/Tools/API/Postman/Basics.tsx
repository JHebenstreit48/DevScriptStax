import { RouteObject } from "react-router-dom";

import Fundamentals from "@/routes/Individual/Granularized/Tools/API/Postman/Basics/Fundamentals";
import Requests from "@/routes/Individual/Granularized/Tools/API/Postman/Basics/Requests";
import Workspaces from "@/routes/Individual/Granularized/Tools/API/Postman/Basics/Workspaces";
import Debugging from "@/routes/Individual/Granularized/Tools/API/Postman/Basics/Debugging";

const Basics: RouteObject[] = [
  ...Fundamentals,
  ...Requests,
  ...Workspaces,
  ...Debugging,
];

export default Basics;
