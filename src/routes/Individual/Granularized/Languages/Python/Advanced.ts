import { RouteObject } from "react-router-dom";

import DataModel from "@/routes/Individual/Granularized/Languages/Python/Advanced/DataModel";
import Typing from "@/routes/Individual/Granularized/Languages/Python/Advanced/Typing";
import Concurrency from "@/routes/Individual/Granularized/Languages/Python/Advanced/Concurrency";
import Performance from "@/routes/Individual/Granularized/Languages/Python/Advanced/Performance";
import Metaprogramming from "@/routes/Individual/Granularized/Languages/Python/Advanced/Metaprogramming";
import Packaging from "@/routes/Individual/Granularized/Languages/Python/Advanced/Packaging";

const Advanced: RouteObject[] = [
  ...DataModel,
  ...Typing,
  ...Concurrency,
  ...Performance,
  ...Metaprogramming,
  ...Packaging,
];

export default Advanced;