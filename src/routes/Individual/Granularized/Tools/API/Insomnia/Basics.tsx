import { RouteObject } from "react-router-dom";

import Fundamentals from "@/routes/Individual/Granularized/Tools/API/Insomnia/Basics/Fundamentals";
import Requests from "@/routes/Individual/Granularized/Tools/API/Insomnia/Basics/Requests";
import Workspaces from "@/routes/Individual/Granularized/Tools/API/Insomnia/Basics/Workspaces";
import Debugging from "@/routes/Individual/Granularized/Tools/API/Insomnia/Basics/Debugging";

const Basics: RouteObject[] = [
  ...Fundamentals,
  ...Requests,
  ...Workspaces,
  ...Debugging,
];

export default Basics;
