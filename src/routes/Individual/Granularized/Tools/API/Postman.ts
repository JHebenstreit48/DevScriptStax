import { RouteObject } from "react-router-dom";

import Basics from "@/routes/Individual/Granularized/Tools/API/Postman/Basics";
import Advanced from "@/routes/Individual/Granularized/Tools/API/Postman/Advanced";

const Postman: RouteObject[] = [
  ...Basics,
  ...Advanced,
];

export default Postman;