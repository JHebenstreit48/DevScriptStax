import { RouteObject } from "react-router-dom";

import Extending from "@/routes/Individual/Granularized/FrontEnd/Markdown/Advanced/Extending";
import BestPractices from "@/routes/Individual/Granularized/FrontEnd/Markdown/Advanced/BestPractices";

const Advanced: RouteObject[] = [
  ...Extending,
  ...BestPractices,
];

export default Advanced;