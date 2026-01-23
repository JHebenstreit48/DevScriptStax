import { RouteObject } from "react-router-dom";

import Basics from "@/routes/Individual/Granularized/Languages/Python/Basics";
import Intermediate from "@/routes/Individual/Granularized/Languages/Python/Intermediate";
import Advanced from "@/routes/Individual/Granularized/Languages/Python/Advanced";

const Python: RouteObject[] = [
  ...Basics,
  ...Intermediate,
  ...Advanced,
];
export default Python;